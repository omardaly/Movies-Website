const mongoose = require('mongoose')



const MovieSchema = new mongoose.Schema({
    
        
    adult:{type: Boolean,
        require:true

    },

    backdrop_path:{type:String,
        require:true

    } ,
        

    original_language:{
        type : String,
        require:true
    },
    original_title:{
        type : String,
        require:true
    },
    overview:{
        type : String,
        require:true
    },
    popularity:{
        type: Number,
        require:true
    },
    poster_path:{
        type: String,
        require:true

    },
    release_date: {
        type:Date,
        require:true

    },
    title:{
        type: String,
        require:true
    },
    vote_average:{
        type: String,
        require:true
    }
    
  
},{id:false})


const movies = fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDA0ZjIwMGE5NmVhNDllNzVlMzVlZmYxYjYwYzRlNCIsInN1YiI6IjY2NTg0ZmRmNWU4NmFiYzQyNTJkMjcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fKY11EInZXjZqzVy2ITwd6WkqHZ0uErFwzJFylfDgYU'
    }
})
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.results.length; i++) {
       const movie = new Movie({
            adult: data.results[i]['adult'],
            backdrop_path: data.results[i]['backdrop_path'],
            // id: data.results[i]['_id'],
            original_language: data.results[i]['original_language'],
            original_title: data.results[i]['original_title'],
            overview: data.results[i]['overview'],
            popularity: data.results[i]['popularity'],
            poster_path: data.results[i]['poster_path'],
            release_date: data.results[i]['release_date'],
            title: data.results[i]['title'],
            vote_average: data.results[i]['vote_average']
       })
    //    movie.save()
       .then(savedMovie => console.log("Movie saved:", savedMovie))
    }
})
.catch(error => console.log(error));

module.exports = movies; //

const Movie = mongoose.model('Movie',MovieSchema)
module.exports=Movie