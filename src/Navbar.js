import React from 'react'
import './Navbar.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export default function Navbar() {
  return (
    <div className='Navbar'>
        <h2>Alexander Persson</h2>
        <div className='nav-icons'>
            <PersonOutlineOutlinedIcon sx={{ fontSize: 40 }} stroke={"rgba(10,3,15,1)"} stroke-width={0.75} />
            <WorkspacePremiumOutlinedIcon sx={{ fontSize: 40 }} stroke={"rgba(10,3,15,1)"} stroke-width={0.75} />
            <CodeOutlinedIcon sx={{ fontSize: 40 }} stroke={"rgba(10,3,15,1)"} stroke-width={0.75} />
            <div className='nav-labels'>
              <h3>About me</h3>
              <h3>Skills</h3>
              <h3>Projects</h3>
            </div>
        </div>
        <div className='social-icons'>
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" 
            borderStyle="solid" icon="linkedin" iconColor="rgba(10,3,15,1)" 
            backgroundColor="rgba(158,1,247,1)" iconSize="7" roundness="6%" 
            url="https://www.linkedin.com/in/alexander-persson-147345231/" size="30" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" 
            borderStyle="solid" icon="github" iconColor="rgba(158,1,247,1)" 
            backgroundColor="rgba(10,3,15,1)" iconSize="10" roundness="50%" 
            url="https://github.com/aalexpersson" size="30" />
        </div>
    </div>
  )
}
