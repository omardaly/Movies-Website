const {response}= require('express');
const Movie = require('../models/movie.model')

module.exports={
    findAll: (req, res)=>{
        Movie.find()
        .then(response=>{
             console.log(response,"DataBase Response To FinAll");
             res.status(200).json(response)
        })
            
    
        .catch(error=>{
            console.log(error,"DataBase Error");
            res.status(400).json(error)
        })
    },

    findOne: (req,res)=>{
        Movie.findById(req.params.id)
        .then(response=>{
            console.log("DB Response",response);
            res.status(200).json(response)
        })
        .catch(error=>{
            console.log("DB Error",error);
            res.status(400).json(error)

        })
    },
    create:(req,res)=>{
        Movie.create(req.body)
        .then(response=>{
            console.log("DB Response",response);
            res.status(200).json(response)
        })
        .catch(error=>{
            console.log("DB Error ",error.errors);
            res.status(400).json(error.errors)
        })
    },}
 