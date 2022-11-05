import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require("express");
const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 2000;

//enabling cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add router in express
app.use("/", router);

//POST route
router.post("/post", async (req, res) => {
//Destructuring response token from request body
    const {token} = req.body;

//sends secret key and response token to google
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
      );

//check response status and send back to the client-side
      if (res.status(200)) {
        res.send("Human 👨 👩");
    }else{
      res.send("Robot 🤖");
    }
});

app.listen(port, () =>{
    console.log(`server is running on ${port}`);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
