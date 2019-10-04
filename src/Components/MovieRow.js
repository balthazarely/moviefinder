import React from 'react';
import { Divider, Segment, Grid, Icon, Image, Label, Button } from 'semantic-ui-react'
import Moment from 'react-moment';

const MovieRow = (props) => {   
    const movies = props.movie.map((pickedMovie, i) => {
        console.log(props.movie)

        const genres = pickedMovie.genre_ids.slice(0, 2).map((genre, i) => {
            if(genre === 28) {
                return  "Action  "
            } else if(genre === 12) {
                return "Adventure  "
            } else if(genre === 16) {
                return "Animation  "
            } else if(genre === 35) {
                return "Comedy  "
            } else if(genre === 80) {
                return "Crime  "
            } else if(genre === 99) {
                return "Documentary  "
            } else if(genre === 18) {
                return "Drama  "
            } else if(genre === 10751) {
                return "Family  "
            } else if(genre === 14) {
                return "Fantasy  "
            } else if(genre === 36) {
                return "History  "
            } else if(genre === 27) {
                return "Horror  "
            } else if(genre === 10402) {
                return "Music  "
            } else if(genre === 9648) {
                return "Mystery  "
            } else if(genre === 10749) {
                return "Romance  "
            } else if(genre === 878) {
                return "Science Fiction  "
            } else if(genre === 10770) {
                return "TV Movie  "
            } else if(genre === 53) {
                return "Thriller  "
            } else if(genre === 10752) {
                return "War  "
            } else if(genre === 37) {
                return "Western  "
            } 
           
            return (
            {genre}
                
            )
        })


        return( 
            <Segment >
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image className="poster"  src={"https://image.tmdb.org/t/p/w400/" + pickedMovie.poster_path} alt="Movie Poster" />
                            <p>Rating: {pickedMovie.vote_average} </p>
                        </Grid.Column>
                        <Grid.Column width={11} className="align-left">
                            <div className="float-right">
                                <h4 className="dateFloat"><Moment format="YYYY">{pickedMovie.release_date}</Moment></h4>
                            </div>
                            <div>
                            <h2 className="movie-title">{pickedMovie.title}</h2>
                            <p className="overview-text">{pickedMovie.overview}</p>
                            <Label>{genres}</Label>
                            <Button className="add-btn" circular icon='add' />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
       
        )
    })
 
    return (
        <table>
            <tbody>
                {movies}
            </tbody>
        </table>
    )
}

export default MovieRow

