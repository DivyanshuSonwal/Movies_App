import { movies } from './getMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let movie1 = movies.results[0];
        let movie2 = movies.results[1];
        let movie3 = movies.results[2];
        return (
            <>
            {
            movie1 === '' ? <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> :
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 card-img-top banner-img" src={`https://image.tmdb.org/t/p/original${movie1.backdrop_path}`} alt={movie1.title}/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 card-img-top banner-img" src={`https://image.tmdb.org/t/p/original${movie2.backdrop_path}`} alt={movie2.title}/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
                /* <div className="card banner-card" style={{marginTop:'0'}}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="card-img-top banner-img"/>
                    <div className="card-body" style={{backgroundColor:'#dff9fb'}}>
                        <h1 className="card-title banner-title">{movie.original_title}</h1>
                        <p className="card-text banner-text">{movie.overview}</p>
                    </div>
                </div> */
            }
            </>
        )
    }
}
