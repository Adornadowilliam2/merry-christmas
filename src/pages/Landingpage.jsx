import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import mockup from "../assets/bg-mockup.jpg"

export default function Landingpage() {
  return (
      <Container className='flex-container'>
          <Box className='image-container'>
              <img src={mockup} alt="mockup-bg-image" />
          </Box>
          <Box>
              <Typography variant='h1'>Happy to be here </Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque.</Typography>
          </Box>
    </Container>
  )
}
