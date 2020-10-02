import React  from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  bgBlue: {
    backgroundColor: '#1b99f3',
  },
})
function Header() {
  const classes= useStyles()
  return (
    <AppBar position="static" className={classes.bgBlue}>
      <Toolbar>
        <Box 
          component="img" 
          src={process.env.PUBLIC_URL + "/img/masiv-logo.png"}
          alt="logo"/>
      </Toolbar>
    </AppBar>
  )
}

export default Header
