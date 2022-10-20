import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import RenderGrid from './Components/RenderGrid';
import RenderList from './Components/RenderList';


const App = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box sx={{ flexGrow: 1 }}>
        <RenderGrid />
        <RenderList />
      </Box>
    </Container>
  )
}

export default App
