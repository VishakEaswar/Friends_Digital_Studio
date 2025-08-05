import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';

// import { fetchProducts } from '../services/productApi';
import axios from 'axios';

const ProductSlider = ({ products }) => {
  const theme = useTheme();

  // Responsive breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));      // <600px
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600–900
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900–1200
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));        // >1200px

  const [start, setStart] = useState(0);
  const total = products.length;

  // Dynamically adjust visible product count
  let visibleCount = 1;
  if (isSm) visibleCount = 2;
  else if (isMd) visibleCount = 2;
  else if (isLg) visibleCount = 6;
  else visibleCount = 1;

  const handlePrev = () => setStart((prev) => (prev - 1 + total) % total);
  const handleNext = () => setStart((prev) => (prev + 1) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  if (!products.length) return null;

  const visibleProducts = Array.from({ length: visibleCount }, (_, i) => products[(start + i) % total]);

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        overflowX: 'auto',
        px: { xs: 1, sm: 2, md: 4 },
        py: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: { xs: 'flex-start', md: 'center' },
          flexWrap: { xs: 'nowrap', md: 'wrap' },
        }}
      >
        {visibleProducts.map((product, idx) => (
<Card
  key={product.id + '-' + idx}
  sx={{
    display: 'flex',                 // Enable column layout
    flexDirection: 'column',
    minWidth: { xs: 260, sm: 280, md: 300 },
    flexShrink: 0,
    boxShadow: 4,
    borderRadius: 2,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 8,
    },
    height: '100%',                 // Ensure full height on wrapping containers
  }}
>
  <CardMedia
    component="img"
    height="180"
    image={product.image}
    alt={product.name}
  sx={{objectFit:'contain'}}
  />

  <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      {product.name}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
      {product.description}
    </Typography>

    {/* Price Info Wrapper */}
    <Box sx={{ mb: 2 }}>
      {(() => {
        const price = parseFloat((product.price || '').replace('₹', ''));
        const discount = product.discountPercent || 0;
        const gst = product.gstPercent || 0;
        const discountedPrice = price - (price * discount / 100);
        const gstAmount = discountedPrice * gst / 100;
        const finalPrice = discountedPrice + gstAmount;

        return (
          <>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: discount > 0 ? 'line-through' : 'none' }}
            >
              Original: ₹{price.toFixed(2)}
            </Typography>
            {discount > 0 && (
              <Typography variant="body2" color="#c62828">
                Discount: {discount}% (-₹{(price * discount / 100).toFixed(2)})
              </Typography>
            )}
            <Typography variant="body2" color="#388e3c">
              Price after discount: ₹{discountedPrice.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              GST: {gst}% (+₹{gstAmount.toFixed(2)})
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#388e3c' }}>
              Final Price: ₹{finalPrice.toFixed(2)}
            </Typography>
          </>
        );
      })()}
    </Box>

    <Box sx={{ mt: 'auto' }}>
      <Button variant="contained" color="primary" fullWidth>
        Buy Now
      </Button>
    </Box>
  </CardContent>
</Card>

        ))}
      </Box>
    </Box>
  );
};

const ContentPage = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
    axios.get("http://localhost:3001/ourproduct")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: '#f5f5f5', minHeight: '60vh' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
        Our Products
      </Typography>
      <Box sx={{display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',}}>
      <ProductSlider products={products} />
      </Box>

    </Box>
  );
};

export default ContentPage;



// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';

// import { fetchProducts } from '../services/productApi';

// const ProductSlider = ({ products }) => {
//   const theme = useTheme();

//   // Responsive breakpoints
//   const isXs = useMediaQuery(theme.breakpoints.down('sm'));      // <600px
//   const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600–900
//   const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900–1200
//   const isLg = useMediaQuery(theme.breakpoints.up('lg'));        // >1200px

//   const [start, setStart] = useState(0);
//   const total = products.length;

//   // Dynamically adjust visible product count
//   let visibleCount = 1;
//   if (isSm) visibleCount = 2;
//   else if (isMd) visibleCount = 2;
//   else if (isLg) visibleCount = 6;
//   else visibleCount = 1;

//   const handlePrev = () => setStart((prev) => (prev - 1 + total) % total);
//   const handleNext = () => setStart((prev) => (prev + 1) % total);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStart((prev) => (prev + 1) % total);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [total]);

//   if (!products.length) return null;

//   const visibleProducts = Array.from({ length: visibleCount }, (_, i) => products[(start + i) % total]);

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         maxWidth: '100%',
//         overflowX: 'auto',
//         px: { xs: 1, sm: 2, md: 4 },
//         py: 2
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           gap: 2,
//           justifyContent: { xs: 'flex-start', md: 'center' },
//           flexWrap: { xs: 'nowrap', md: 'wrap' },
//         }}
//       >
//         {visibleProducts.map((product, idx) => (
// <Card
//   key={product.id + '-' + idx}
//   sx={{
//     display: 'flex',                 // Enable column layout
//     flexDirection: 'column',
//     minWidth: { xs: 260, sm: 280, md: 300 },
//     flexShrink: 0,
//     boxShadow: 4,
//     borderRadius: 2,
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     '&:hover': {
//       transform: 'scale(1.05)',
//       boxShadow: 8,
//     },
//     height: '100%',                 // Ensure full height on wrapping containers
//   }}
// >
//   <CardMedia
//     component="img"
//     height="180"
//     image={product.image}
//     alt={product.name}
//   sx={{objectFit:'contain'}}
//   />

//   <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//     <Typography variant="h6" sx={{ fontWeight: 600 }}>
//       {product.name}
//     </Typography>
//     <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//       {product.description}
//     </Typography>

//     {/* Price Info Wrapper */}
//     <Box sx={{ mb: 2 }}>
//       {(() => {
//         const price = parseFloat((product.price || '').replace('₹', ''));
//         const discount = product.discountPercent || 0;
//         const gst = product.gstPercent || 0;
//         const discountedPrice = price - (price * discount / 100);
//         const gstAmount = discountedPrice * gst / 100;
//         const finalPrice = discountedPrice + gstAmount;

//         return (
//           <>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{ textDecoration: discount > 0 ? 'line-through' : 'none' }}
//             >
//               Original: ₹{price.toFixed(2)}
//             </Typography>
//             {discount > 0 && (
//               <Typography variant="body2" color="#c62828">
//                 Discount: {discount}% (-₹{(price * discount / 100).toFixed(2)})
//               </Typography>
//             )}
//             <Typography variant="body2" color="#388e3c">
//               Price after discount: ₹{discountedPrice.toFixed(2)}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               GST: {gst}% (+₹{gstAmount.toFixed(2)})
//             </Typography>
//             <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#388e3c' }}>
//               Final Price: ₹{finalPrice.toFixed(2)}
//             </Typography>
//           </>
//         );
//       })()}
//     </Box>

//     <Box sx={{ mt: 'auto' }}>
//       <Button variant="contained" color="primary" fullWidth>
//         Buy Now
//       </Button>
//     </Box>
//   </CardContent>
// </Card>

//         ))}
//       </Box>
//     </Box>
//   );
// };

// const ContentPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts().then(setProducts);
//   }, []);

//   return (
//     <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: '#f5f5f5', minHeight: '60vh' }}>
//       <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
//         Our Products
//       </Typography>
//       <Box sx={{display:'flex',
//               flexDirection:'column',
//               justifyContent:'center',
//               alignItems:'center',}}>
//       <ProductSlider products={products} />
//       </Box>

//     </Box>
//   );
// };

// export default ContentPage;
