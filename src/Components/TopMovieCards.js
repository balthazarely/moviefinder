import React from 'react';
import { Divider, Segment, Grid, Icon, Image, Label, Card, Button } from 'semantic-ui-react'


const TopMovieCards = (props) => {   
    // console.log(props.topMovie, "< TOP MOVEI CARDS")
    const topMovie = props.topMovie.slice(0, 10).map((pickedMovie, i) => {
        return( 
           <div className='container'>
               <Image className="top-movie-cards" src={"https://image.tmdb.org/t/p/w200/" + pickedMovie.poster_path}/>
               <h3 className="top-movie-text">{pickedMovie.title}</h3>
               <div>
               <Button className="add-btn-card hover" size="large" value={pickedMovie.id} circular icon='add' onClick={props.addMovieToFavorites}/>

               </div>
           </div>
        )
    })

 
    return (
        // <div>
        //     {topMovie}
        // </div>
        <Image.Group size='small'>
            
              {topMovie}
            
        </Image.Group>
    )
}

export default TopMovieCards