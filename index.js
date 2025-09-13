const express = require('express');
const app = express();
const port = 8080;


// for unique id
const { v4: uuidv4 } = require('uuid');
// something of image upload
const multer = require('multer');
// Setup storage location
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Files saved to 'uploads/' folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });


// using views directory
const path = require('path');
app.set("views", path.join(__dirname, "views") );
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));


// mongoose
const mongoose = require('mongoose');

// // User description
// const Desc = require('./models/munci.js');

// Agent data
const Agent = require('./models/agent');
// Worker data
const Worker = require('./models/worker');
// Munci data
const Munci = require('./models/munci');


main()
.then( () => {console.log("Connection Successful")} )
.catch( err => console.log(err) );
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Mapster');
    console.log("Connected to MongoDB");
}



// Index Route
app.get("/Dash" , async ( req , res ) => {
    // let Dash = await Desc.find();
    // console.log(Dash);
    res.render( "DashB.ejs" , { Dash } );
});



// // User Post
// app.get("/desc/form" , ( req , res ) => {
//     res.render("new.ejs");
// });



// // Post Route
// app.post("/post" , upload.array('form_files', 3), async ( req , res ) => {
//     let { desc , date } = req.body;
//     const img = req.files.map(file => file.path);
//     let newDesc = new Desc({
//         img: img,
//         desc: desc,
//         created_at: date
//     });
//     newDesc.save()
//     .then( () => { console.log("Saved Successfully"); } )
//     .catch( (err) => { console.log(err); } );
//     let Dash = await Desc.find();
//     res.render("DashB.ejs" , { Dash });
// });



app.get('/home', (req, res) => {
    res.render('Home.ejs');
});



// Agent Route
app.get('/agent', async (req, res) => {
    try {
        const agents = await Agent.find();
        res.render('Agent', { Agents: agents });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Worker Route
app.get('/worker', async (req, res) => {
    try {
        const workers = await Worker.find();
        res.render('Worker', { Workers: workers });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Munci Route
app.get('/munci', async (req, res) => {
    try {
        const muncis = await Munci.find();
        res.render('Munci', { Muncis: muncis });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// Home Route
app.get('/home', async (req, res) => {
    try {
        const agents = await Agent.find();
        const workers = await Worker.find();
        const muncis = await Munci.find();
        const issues = [];    // Just pass empty array for now

        res.render('Home.ejs', {
            Agents: agents,    // Pass Agents here
            Workers: workers,
            Muncis: muncis,
            Issues: issues
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});






app.listen( port , () => {
    console.log("Server is working on " + port);
});





