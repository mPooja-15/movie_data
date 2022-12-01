import "./card.css";
import ReactStars from 'react-stars'
import moment from 'moment'

function Card({ movieData }) {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    return (
        <div className="App">
            <div className="row">
                {movieData?.map((data) => {
                    return (
                        <div className="card card">
                            <img src="https://picsum.photos/200" className="card-img-top" />
                            <div className="card-body">
                                <div className="card-title h5">{data.name}</div>
                                <p className="card-text">{data.description}</p>
                                <p className="card-text">{moment(data?.releaseData).format('MMMM Do YYYY')}</p>
                                {data.movieType&&<a href=""><button>{data.movieType}</button></a>}

                            </div>
                            <div className="rate"><ReactStars
                                count={5}
                                onChange={() => ratingChanged(data?.rating)}
                                size={24}
                                value={data.rating}
                                color2={'#ffd700'} /></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Card;
