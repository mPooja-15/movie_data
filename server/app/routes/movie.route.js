module.exports = app => {
    const movies = require("../controller/movie.controller")
    var router = require("express").Router()
    router.post("/", movies.create);
    router.get("/", movies.get);
    app.use("/api/movies", router)
}