require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require("path");

const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }


//import routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag');
const adsRoutes = require('./routes/ads');


//app
const app = express();

//db
mongoose
.connect(process.env.DATABASE)
.then(() => console.log('database connected'));

//middlwares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if(process.env.NODE_ENV === 'production'){
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}
app.use(cors(corsOptions));

//routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);
app.use('/api', adsRoutes);



// if (process.env.NODE_ENV === "production"){
//     app.use(express.static("frontend/build"));
// }


//port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

