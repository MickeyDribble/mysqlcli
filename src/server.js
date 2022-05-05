const yargs = require("yargs");
const { sequelize } = require("./db/connection");
// imports for CRUD functions
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods")

const app = async (yargsObj) => {
  try {
      await sequelize.sync();
    if (yargsObj.add) {
      //add function
      await addMovie({title: yargsObj.title, actor: yargsObj.actor})

    } else if (yargsObj.list) {
      //list function
      console.log(await listMovies());
      
    } else if (yargsObj.update) {
      //update function
      await updateMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.delete) {
      // delete function
      await deleteMovie({title: yargsObj.title})

    } else {
      console.log("Incorrect Command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
