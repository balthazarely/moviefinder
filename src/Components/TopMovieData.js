import React from 'react';
import { Divider, Segment, Grid, Icon, Image, Label, Button } from 'semantic-ui-react'


const TopMovieRow = (props) => {   
    console.log(props.topMovie, "< this is the props in the TOPMOVIEDATA")
    const topMovie = props.topMovie.map((pickedMovie, i) => {
        return( 
           <div>
                {pickedMovie.title}
           </div>
        )
    })

 
    return (
        <Segment >
             <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column className="align-left" width={16}>
                            <p>{topMovie}</p>

                            {/* <Image className="poster"  src={"https://image.tmdb.org/t/p/w400/" + pickedMovie.poster_path} alt="Movie Poster" /> */}
                        </Grid.Column>
                        <Grid.Column width={0} className="align-left">
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment >
    )
}

export default TopMovieRow

