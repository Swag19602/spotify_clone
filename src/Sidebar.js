import { Home, LibraryMusic, Search } from '@mui/icons-material';
import React from 'react'
import { useDataLayerValue } from './DataLayer';
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
function Sidebar() {
  const[{playlists}]=useDataLayerValue();
  return (
    <div className='sidebar'>
        <img className='sidebar_logo'
         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
         alt=''/>
         <SidebarOption Icon={Home} title="Home"/>
         <SidebarOption Icon={Search} title="Search"/>
         <SidebarOption Icon={LibraryMusic} title="Your Library"/>
         <br/>
         <strong className='sidebar_title'>PLAYLISTS</strong>
         <hr/>
        {playlists?.items?.map(playlist => (
          <SidebarOption title={playlist.name}/>
          ))}
         
    </div>
  )
}
export default Sidebar