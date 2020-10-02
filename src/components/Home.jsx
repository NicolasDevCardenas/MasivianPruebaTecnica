import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx';

const useStyles = makeStyles({
  yellowStar: {
    color: '#ffdd35',
  },
  cursor: {
    cursor: 'pointer',
  },
  gray:{
    color:'#a9a9a9',
    '&:hover': {
      color: "#ffdd35",
    }
  },
  bgBasic:{
    backgroundColor:'#1b99f3 !important'
  }
})
function Home() {
  const classes= useStyles()
  const [comic, setComic] = useState({})
  const [point, setPoint] = useState(0)
  const [disabled, setdisabled] = useState(false)
  const stars = [1,2,3,4,5]

  const getComic = ( options = {}) =>{
    const proxyUrl = 'https://cors-anywhere.herokuapp.com'
    const random = Math.floor(Math.random() * 614);
    const url = `http://xkcd.com/${random}/info.0.json`
    setdisabled(true);

    fetch(`${proxyUrl}/${url}`, {
      ...options,
      headers: {
        ...options.headers,
        'X-Requested-With': 'wololo',
      },
    })
    .then(resp => resp.json())
    .then(res =>{ 
      setdisabled(false);
      setComic(res)
    })
    .catch(error => {
      setdisabled(false);
      alert(`oh no --> `, error)
    })
  }


  const calification = (number)=>{
    setPoint(number);
  }

  useEffect(() => {
    getComic();
  }, [])  
  

  return (
    <Container maxWidth="sm">
      <Box component="h1" textAlign="center">
        Comics aleatorios
      </Box>
      <Grid container justify="center">
        <Grid item md={6} xs={12} >
          <Box 
            component="img" 
            src={comic.img}
            alt="comicimg"
            width="100%"
            mt="2em"/>
        </Grid>
        <Grid item md={6} xs={12} >
          <Box ml="1em">
            <Box component="h1">
              {comic.title}
            </Box>
            <Box component="p" fontSize="12px" textAlign="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius at 
              repellendus nihil non ex quisquam quas ut impedit asperiores, possimus 
              eveniet quo perferendis, voluptatem dolorum enim temporibus molestiae? Laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, odio tempore. 
            </Box>
            <Box component="p" fontStyle="italic" textAlign="center">
              ¿Cómo te pareció esté comic?
            </Box>
            <Box mb="1em">
            {stars.map((number) =>
              (<StarIcon 
                key={number} 
                onClick={()=> calification(number)} className={clsx(number <= point ? classes.yellowStar: classes.gray,  classes.cursor)}/>)
            )}
            </Box>
            <Button 
              disabled={disabled}
              className={classes.bgBasic}
              fullWidth 
              variant="contained" 
              color="primary" 
              onClick={()=>getComic()}>
              Siguiente
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home