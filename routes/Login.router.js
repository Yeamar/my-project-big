const express = require('express');
const router = express.Router();
const Userapi = require('../api/User.api');


const path = require('path');
const viewsPath = path.join(__dirname + '/../views');

router.use("/", express.static(viewsPath + "/login"));

router.get("/", (req, res) => {
        res.sendFile((viewsPath + "/login/login.html"));
    }
);
router.post("/",async (req, res)  => {
    const data = req.body;
    

    const passwordLogin = data.password
    const emailLogin = data.email



    const dataSingin = await Userapi.ReadUsers()

    for(let obj of dataSingin) {
        const emailSingin = obj.email
        console.log("you",emailSingin);



    const hashing = await Userapi.comparePassword(passwordLogin, emailLogin)

        Userapi.Login(hashing)



    


    if(hashing){
        console.log("you login lalallal");

        
        const token =  Userapi.newJwt({email: emailLogin})
        res.cookie("my token" , token)
        res.end(JSON.stringify({ msg : "Welcome to token"}))
    }

    


    // console.log(emailLogin);

}
    
}
);



module.exports = router;