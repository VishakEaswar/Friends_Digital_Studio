import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';

const ImageSlider = ({ images, children }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: {
          xs: '100vh',
          sm: '90vh',
          md: '90vh',
          lg: '100vh',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        boxShadow: 3,
        bgcolor: '#f5f5f5',
      }}
    >
      <Box
        component="img"
        src={images[current]}
        alt={`slide-${current}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: { xs: 2, sm: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export const AdvsPage = () => {
  const [images, setImages] = useState([]);
useEffect(() => {
  axios.get('http://localhost:3001/images')
    .then((res) => {
      setImages(res.data.map(img => img.url));
    })
    .catch((err) => console.error('Error loading images:', err));
}, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <ImageSlider images={images}>
        <Box sx={{ px: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h1"
            sx={{
              mt: 4,
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '5rem', md: '8rem' },
              color: "#ffff",
              fontStyle: "italic",
            }}
          >
            Welcome!
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 400,
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '2rem' },
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            Discover the special moments we help capture...
          </Typography>
          <Box>
            <Button size='large' variant='contained' sx={{ height: '60px', width: '30%', bgcolor: 'yellowgreen' }}>
              Book Now
            </Button>
          </Box>
        </Box>
      </ImageSlider>
    </Box>
  );
};



// import React, { useEffect, useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';

// const ImageSlider = ({ images, children }) => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   if (!images.length) return null;

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: {
//           xs: '100vh',
//           sm: '90vh',
//           md: '90vh',
//           lg: '100vh',
//         },
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden',
//         boxShadow: 3,
//         bgcolor: '#f5f5f5',
//       }}
//     >
//       <Box
//         component="img"
//         src={images[current]}
//         alt={`slide-${current}`}
//         sx={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           zIndex: 1,
//           transition: 'opacity 0.5s ease-in-out',
//         }}
//       />

//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           bgcolor: 'rgba(0, 0, 0, 0.4)',
//           zIndex: 2,
//         }}
//       />

//       <Box
//         sx={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           zIndex: 3,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           p: { xs: 2, sm: 4 },
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export const AdvsPage = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch('/advs-images.json')
//       .then((res) => res.json())
//       .then((data) => setImages(data.images || []));
//   }, []);

//   useEffect(() => {
//     document.body.style.overflowX = 'hidden';
//     return () => {
//       document.body.style.overflowX = '';
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         overflow: 'hidden',
//         boxSizing: 'border-box',
//       }}
//     >
//       <ImageSlider images={images}>
//         <Box sx={{ px: { xs: 2, sm: 4 } }}>
//           <Typography
//             variant="h1"
//             sx={{
//               mt: 4,
//               fontWeight: 600,
//               fontSize: { xs: '1rem', sm: '5rem', md: '8rem' },
//               color: "#ffff",
//               fontStyle: "italic",
//             }}
//           >
//             Welcome! 
//           </Typography>
//           <Typography
//             // variant="h3"
//             sx={{
//               color: 'white',
//               fontWeight: 400,
//               textShadow: '0 1px 4px rgba(0,0,0,0.4)',
//               fontSize: { xs: '1rem', sm: '1.25rem', md: '2rem' },
//               maxWidth: '900px',
//               margin: '0 auto',
//             }}
//           >
//             Discover the special moments we help capture...
//           </Typography>
//           <Box>
//             <Button size='large' variant='contained' sx={{height:'60px',width:'30%',bgcolor:'yellowgreen'}}>Book Now</Button>
//           </Box>
//         </Box>
//       </ImageSlider>
//     </Box>
//   );
// };
