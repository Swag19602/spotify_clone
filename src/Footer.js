import { PlayCircleOutline, PlaylistPlay, Repeat, ShuffleOnOutlined, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'
import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
      <img className="footer_albumlogo" src='https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png' alt=''/>
      <div className='footer_songInfo'>
        <h4>Heatwaves!</h4>
        <p>Glass Animals</p>
      </div>
      </div>

      <div className='footer_center'> 
        <ShuffleOnOutlined className="footer_green"/>
        <SkipPrevious className='footer_icon'/>
        <PlayCircleOutline fontSize="large" className='footer_icon'/>
        <SkipNext className="footer_icon"/>
        <Repeat className='footer_green'/>
      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay/>
          </Grid>
          <Grid item>
            <VolumeDown/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
     
    </div>
  )
}

export default Footer