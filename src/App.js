import React, { Component } from 'react';
import './App.css';
import MovieRow from './Components/MovieRow'
import TopMovieData from './Components/TopMovieData'
import TopMovieCards from './Components/TopMovieCards'
import MyList from './Components/MyList'
import Welcome from './Components/Welcome'
import MoviePlaceholder from './Components/MoviePlaceholder'
import Axios from 'axios';
import { Grid, Segment, Input, Label,Placeholder } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      toppMovieDataLoading: true,
      movieData: [],
      topMovieData: [],
      favorites: [],
      MyListMovieLoading: true,
      searchFired: false
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
          loading: false,
          searchFired: true
        })    
  })
    .catch (error => {
        console.log(error);
    });
  }

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

  addMovieToFavorites = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
        await Axios.get(`https://api.themoviedb.org/3/movie/${e.currentTarget.value}?api_key=5e9bd2fa585826bdfc4233fb6424f425&language=en-US`)
      .then(response3 => {
          const results3 = response3;
          console.log(response3.data)
            this.setState({
              favorites: [...this.state.favorites, response3],
              MyListMovieLoading: false
            })
      })
  }

  removeMovieFromFavorites = async (fav, e) => {
    console.log("delete", fav)
    this.setState({
      favorites: this.state.favorites.filter((movie) => movie !== fav)
    })
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
   
       

        <div className="App">
        {/* <Welcome /> */}
       
    
        <Segment className="segment-main">
          <Input icon='search' className="searchinput align-left " placeholder='Search...' onChange={this.searchChangeHandeler}/>
            
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column width={3}>
                <div className="label"> 
                    <Label size="large label" color='orange' className="hover label mylist-trending">MY LIST</Label>
                    </div>
                    {this.state.loading ? null : <MyList favorites={this.state.favorites} removeFavorites={this.removeMovieFromFavorites}/>}

                </Grid.Column>
                <Grid.Column width={10}>
                  {this.state.loading === true ? <MoviePlaceholder/> : <MovieRow movie={this.state.movieData} addMovieToFavorites={this.addMovieToFavorites}/>}
                </Grid.Column>
                <Grid.Column width={3}>

                <div className="label"> 
                 <Label size="large" color='orange'  className="hover label mylist-trending">TRENDING</Label>
                 </div>
                    {this.state.loading ? null : <TopMovieCards topMovie={this.state.topMovieData} addMovieToFavorites={this.addMovieToFavorites}/>}

                  

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
