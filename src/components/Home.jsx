import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { getComic } from '../Api/api'

const comic = async () => {
  try {
    const response = await getComic()
    console.log('response', response)
  } catch (err) {
    console.log('error', err)
  }
}
comic();


function Home() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center">
        <Box component="h1">
          Titulo
        </Box>
        <Box 
          component="img" 
          src={process.env.PUBLIC_URL + "/img/masiv-logo.png"}
          alt="comicimg"/>
        <StarBorderIcon/>
        <StarIcon style={{ color: "yellow" }}/>
      </Box>
    </Container>
  )
}

export default Home