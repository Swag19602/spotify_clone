import {  Search} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useDataLayerValue } from './DataLayer'
import "./Header.css"
function Header() {
    const[{user}]=useDataLayerValue();
  return (
    <div className='header'>
        <div className='header_left'>
        <Search/>
        <input placeholder='Search for Artists, Songs, album' type="text"/>
        </div>
        <div className='header_right'>
            <Avatar src={user?.images[0]?.url} alt=''/>
        <h4>{user?.display_name}</h4>

        </div>

    </div>
  )
}

export default Header