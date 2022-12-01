module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        rating: Number,
        description: String,
        movieType:String,
        releaseData: Date
    });

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id
        return object
    })
    const Movie = mongoose.model('movie', schema);
    return Movie
}