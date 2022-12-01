const db = require("../models")
const Movies = db.movies;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Movie name can not be empty" })
    }
    const movie = new Movies({
        name: req.body.name,
        rating: req.body.rating,
        description: req.body.description,
        releaseData: req.body.releaseData,
        movieType: req.body.movieType,
    })
    movie.save(movie).then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
}

exports.get = (req, res) => {
    Movies.find().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send({
            message: "some error occured"
        })
    })
}