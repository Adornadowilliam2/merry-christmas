import { Box, Container, ImageListItemBar, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react';
import mockup from "../assets/bg-mockup.jpg"

export default function Landingpage() {
  return (
      <Container className='flex-container'>
        <Container>
        <Box sx={{display:"flex",justifyContent:'start',textAlign:"left", border:"1px solid black"}}>
              <img src={"https://www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-1.png"} alt="mfi 50 anniversary logo"  style={{width:"100px"}}/> 
            </Box>
            <Typography sx={{textAlign:"center"}}>ON THE JOB TRAINING</Typography>
          <Box sx={{display:"flex", justifyContent:"center"}}>
          <Box sx={{display:"flex",alignItems:"center"}}>
             <Box sx={{display:"flex",alignItems:"center"}}>
            <InputLabel>Name:</InputLabel>
            <input type="text" style={{borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:"1px solid black"}} />
            </Box>
             <Box sx={{display:"flex",alignItems:"center"}}>
            <InputLabel>Name:</InputLabel>
            <input type="text" style={{borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:"1px solid black"}} />
            </Box>
          </Box>
          <Box sx={{display:"flex",alignItems:"center"}}>
             <Box sx={{display:"flex",alignItems:"center"}}>
            <InputLabel>Name:</InputLabel>
            <input type="text" style={{borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:"1px solid black"}} />
            </Box>
             <Box sx={{display:"flex",alignItems:"center"}}>
            <InputLabel>Name:</InputLabel>
            <input type="text" style={{borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:"1px solid black"}} />
            </Box>
          </Box>
          </Box>
        </Container>
    </Container>
  )
}
