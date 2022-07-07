import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      pages: [1],
      currPage: 1,
      movies: [],
      favourites: []
    };
  }

  async componentDidMount() {
    // console.log("MountingDone");
      let favouritesData = JSON.parse(localStorage.getItem('movies-app') || "[]");
      let temp = favouritesData.map((movie)=>movie.id);
      this.setState({
        favourites: [...temp]
      })
    let res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1313167d4a5a1188a75a9b15e1fcb13c&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1313167d4a5a1188a75a9b15e1fcb13c&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    console.log(data);
    this.setState({
      movies: [...data.results],
    });
  };

  handleRight = () => {
    let temparr = [];
    if (this.state.currPage == this.state.pages.length) {
      for (let i = 1; i <= this.state.pages.length + 1; i++) {
        temparr.push(i);
      }
    }

    if (temparr.length != 0) {
      this.setState({
        pages: [...temparr],
      });
    }
    this.setState(
      {
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
    // this.state.pages.push(++numberOfPages);
  };

  handleLeft = () => {
    if (this.state.currPage != 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
      // this.state.pages.pop(this.state.currPage);
    }
  };

  handlePageNumber = (currPageNumber) => {
    if (this.state.currPage != currPageNumber) {
      this.setState(
        {
          currPage: currPageNumber,
        },
        this.changeMovies
      );
    }
  };

  handleFavourites = (movie) => {
     let savedData = JSON.parse(localStorage.getItem('movies-app') || "[]")
     if(this.state.favourites.includes(movie.id)){
        // If we are performing pop opertaion it is not working properly and not showing responsive behaviour
        savedData = savedData.filter((M)=>M.id!=movie.id);
     }else{
        savedData.push(movie);
     }
     localStorage.setItem('movies-app',JSON.stringify(savedData));

     let temp = savedData.map((movie)=>movie.id);
     this.setState({
        favourites: [...temp]
     })
  };

  render() {
    console.log(this.state.favourites);
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div style={{borderStyle: 'solid',borderWidth:'thin',backgroundColor:'#34282C'}}>
            <h3 className="text-center">
              <strong style={{color:'#FFFF00'}}>Trending</strong>
            </h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
                movieObj.hasOwnProperty("original_title")?
                <div
                  className="card movies-card"
                  onMouseEnter={() => this.setState({ hover: movieObj.id })}
                  onMouseLeave={() => this.setState({ hover: "" })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    alt={movieObj.title}
                    className="card-img-top movies-img"
                  />
                  {/* <div className="card-body"> */}
                  <h3 className="card-title movies-title">
                    {movieObj.original_title}
                  </h3>
                  <div
                    className="button-wrapper"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {this.state.hover == movieObj.id && (
                      <a className="btn btn-primary movies-btn" onClick={()=>this.handleFavourites(movieObj)}>
                        {this.state.favourites.includes(movieObj.id)?"Remove from Favourites":"Add to Favourites"}
                      </a>
                    )}
                    {/* <a className="btn btn-primary movies-btn">Add to Favourites</a> */}
                  </div>
                  {/* </div> */}
                </div>:
                <div
                className="card movies-card"
                onMouseEnter={() => this.setState({ hover: movieObj.id })}
                onMouseLeave={() => this.setState({ hover: "" })}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                  alt={movieObj.title}
                  className="card-img-top movies-img"
                />
                {/* <div className="card-body"> */}
                <h3 className="card-title movies-title">
                  {movieObj.name}
                </h3>
                <div
                  className="button-wrapper"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {this.state.hover == movieObj.id && (
                    <a className="btn btn-primary movies-btn" onClick={()=>this.handleFavourites(movieObj)}>
                      {this.state.favourites.includes(movieObj.id)?"Remove from Favourites":"Add to Favourites"}
                    </a>
                  )}
                  {/* <a className="btn btn-primary movies-btn">Add to Favourites</a> */}
                </div>
                {/* </div> */}
              </div>
              ))}
           </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    {
                    this.state.pages.length!=1?  
                    <a className="page-link" onClick={this.handleLeft}>
                      Previous
                    </a>:<a></a>
                    }
                  </li>
                  {this.state.pages.map((pageNumber) => (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={() => this.handlePageNumber(pageNumber)}
                      >
                        {pageNumber}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" onClick={this.handleRight}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
