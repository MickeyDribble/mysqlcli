const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
      await Movie.create(movieObj);  
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async () => {
    try {
       return await Movie.findAll();
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
       await Movie.update({ actor: movieObj.actor },{
           where: {
               title: movieObj.title,
           }
       });
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
       await Movie.destroy({
           where: {
               title: movieObj.title
           }
       });
    } catch (error) {
        console.log(error)
    }
}