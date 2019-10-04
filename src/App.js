import React, { Component } from 'react';
import './App.css';
import MovieRow from './Components/MovieRow'
import TopMovieData from './Components/TopMovieData'
import TopMovieCards from './Components/TopMovieCards'
import Axios from 'axios';
import { Grid, Segment } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      toppMovieDataLoading: true,
      movieData: [],
      topMovieData: [],
      favorites: []
    }

    this.performSearch = this.performSearch.bind(this)

    this.findTopMovies();
    this.performSearch();
  }

  searchChangeHandeler = (e) => {
    const searchTerm = e.target.value
    this.performSearch(searchTerm)
  }

  
  performSearch(searchTerm) {
    Axios.get('https://api.themoviedb.org/3/search/movie?api_key=5e9bd2fa585826bdfc4233fb6424f425&language=en-US&page=1&include_adult=false&query=' + searchTerm)
    .then(response => {
        const results = response;
        this.setState({
          movieData: results.data.results,
          loading: false
        })    
  })
    .catch (error => {
        console.log(error);
    });
  }



  // whatGenre() {
  //   Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5e9bd2fa585826bdfc4233fb6424f425&language=en-US')
  //   .then(response4 => {
  //       const results4 = response4;
  //       console.log(results4, " < what GRENE")
  // })
  //   .catch (error => {
  //       console.log(error);
  //   });
  // }


  findTopMovies() {
    Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=5e9bd2fa585826bdfc4233fb6424f425')
    .then(response2 => {
        const results2 = response2;
        this.setState({
          topMovieData: results2.data.results,
          toppMovieDataLoading: false
        })    
  })
    .catch (error => {
        console.log(error);
    });
  }


  render() {
    return (
      <div>
        
        <table className="title-bar">
          <tbody>
            <tr>
              <td>
                <img className="logo" alt="yourmom" src="logo.png"/>
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
          <input style={{
            fontSize: "18px",
            display: "block",
            width: "100%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            marginBottom: 20,
          }} onChange={this.searchChangeHandeler}
          placeholder="Enter search term" />


        <div className="App">

    
          <Segment className="segment-main">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column width={3}>
                <h3>MY LIST</h3>
                </Grid.Column>
                <Grid.Column width={10}>
                  {this.state.loading ? null : <MovieRow movie={this.state.movieData}/>}
                </Grid.Column>
                <Grid.Column width={3}>
                <h3>TRENDING</h3>
                {this.state.loading ? null : <TopMovieCards topMovie={this.state.topMovieData}/>}
                </Grid.Column>
              </Grid.Row>
            </Grid> 
            </Segment>
            
        </div>



      </div>


    );
  }
}

export default App;
