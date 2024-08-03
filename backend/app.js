const express = require("express")
const app = express()



app.get("/shuktara" ,(req,res)=>{
    res.json({
        "shamim" : "shuktara"
    })
})

module.exports = app