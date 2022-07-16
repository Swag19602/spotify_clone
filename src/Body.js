import { FavoriteBorderOutlined,  MoreHorizRounded, PlayCircleFilled } from '@mui/icons-material';
import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow';
function Body({spotify}) {
  const[{discover_weekly}]=useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>
      <div className='body_info'>
        <img src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==' alt=''/>
        <img src={discover_weekly?.images[0].url} alt=''/>
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
      <PlayCircleFilled className='body_shuffle'/>
      <FavoriteBorderOutlined fontSize='large'/>
      <MoreHorizRounded />
      </div>


        <div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) =>(
            <SongRow track={item.track}/>
        ))}

        </div>
      </div>


    </div>
  )
}

export default Body

