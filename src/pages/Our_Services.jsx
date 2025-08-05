import { Box, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper'
export const Our_Services = () => {
  return (
   <Box  sx={{ p: { xs: 2, sm: 4 }, bgcolor: '#f5f5f5', minHeight: '60vh' }}>
     <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
            Our Services
          </Typography>
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "50%",
          height: "80vh",
        },
      }}
    >
        
      <Paper elevation={5} />
    </Box>

   </Box>
  )
}
