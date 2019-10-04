import React from 'react';
import Moment from 'react-moment';
import { Divider, Segment, Grid, Icon, Image, Label, Card, Button } from 'semantic-ui-react'


const MyList = (props) => {   
    console.log(props.favorites)
    const favoriteList = props.favorites.map((fav, i) => {
   
        return (
            <div>
            <Grid>
             <Grid.Column width={8}>
            <Image className="my-list-poster"  src={"https://image.tmdb.org/t/p/w300" + fav.data.poster_path} alt="Movie Poster" />
            <Button className="hover my-list-btn" size="mini" circular icon='minus' onClick={props.removeFavorites.bind(null, fav)}/>

            </Grid.Column>
            <Grid.Column className="align-left" width={8}>
            <h5 className="my-list-title">{fav.data.title}</h5>
             <p><Moment format="YYYY">{fav.data.release_date}</Moment></p>
             <p>Rating: <b>{fav.data.vote_average}</b></p>
    
            </Grid.Column>
            </Grid>
            <Divider />
            </div>
       
        )
    })
 
    

             



 
    return (
        <div>
        {favoriteList}
        </div>
         
         

    )
}

export default MyList;