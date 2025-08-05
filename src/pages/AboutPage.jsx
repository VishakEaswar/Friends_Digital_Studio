import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const AboutPage = () => {
  return (
    <Box
  sx={{
    background: "#e5f2f5ff",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    mt: 4,
    // px: { xs: 2, sm: 4, md: 8 }, // horizontal padding
    py: 6,
    width: "100%",
  }}
>
  <Typography
    variant="h3"
    textAlign="center"
    color="#0f5611ff"
    sx={{ mb: 6, fontWeight: "bold" }}
  >
    About Us
  </Typography>

  <Grid
    container
    spacing={4}
    justifyContent="space-evenly"
    sx={{ textAlign: { xs: "center", md: "center" } }}
  >
    {/* Services */}
    <Grid item xs={12} sm={3} md={3}>
      <Typography variant="h6" color="gray" gutterBottom>
        Services
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button startIcon={<CameraAltIcon />} sx={buttonStyle}>Wedding Shoots</Button>
        <Button startIcon={<CameraAltIcon />} sx={buttonStyle}>Maternity</Button>
        <Button startIcon={<CameraAltIcon />} sx={buttonStyle}>Puberty Functions</Button>
        <Button startIcon={<CameraAltIcon />} sx={buttonStyle}>Housewarmings</Button>
      </Box>
    </Grid>

    {/* Products */}
    <Grid item xs={12} sm={3} md={3}>
      <Typography variant="h6" color="gray" gutterBottom>
        Products
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button startIcon={<PhotoAlbumIcon />} sx={buttonStyle}>Photo Albums</Button>
        <Button startIcon={<PhotoAlbumIcon />} sx={buttonStyle}>Framed Prints</Button>
        <Button startIcon={<PhotoAlbumIcon />} sx={buttonStyle}>Digital Packages</Button>
        <Button startIcon={<PhotoAlbumIcon />} sx={buttonStyle}>Event Highlights</Button>
      </Box>
    </Grid>

    {/* Contact */}
    <Grid item xs={12} sm={3} md={3}>
      <Typography variant="h6" color="gray" gutterBottom>
        Contact
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button startIcon={<CallIcon />} sx={buttonStyle}>+91 98765 43210</Button>
        <Button startIcon={<EmailIcon />} sx={buttonStyle}>Friendsstudio@Email.Com</Button>
        <Button startIcon={<LocationOnIcon />} sx={buttonStyle}>Nagercoil, TN - 629001</Button>
      </Box>
    </Grid>

    {/* Social Media */}
    <Grid item xs={12} sm={3} md={3}>
      <Typography variant="h6" color="gray" gutterBottom>
        Social Media
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button startIcon={<InstagramIcon />} sx={buttonStyle}>Instagram</Button>
        <Button startIcon={<FacebookIcon />} sx={buttonStyle}>Facebook</Button>
        <Button startIcon={<WhatsAppIcon />} sx={buttonStyle}>WhatsApp</Button>
      </Box>
    </Grid>
  </Grid>

  <Typography
    sx={{
      color: "#6b4c35",
      textAlign: "center",
      mt: 6,
      fontSize: "1rem",
      lineHeight: 1.7,
      maxWidth: "900px",
      mx: "auto",
    }}
  >
    Friends Digital Studio is a creative hub that captures life’s most precious
    milestones — from weddings to birthdays, from maternity to memorable family
    portraits. With over a decade of experience and 1500+ successful events covered,
    our goal is to preserve your story in a frame. Visit us in Nagercoil and
    experience photography that speaks beyond pixels.
  </Typography>
</Box>

  );
};

// Button Style
const buttonStyle = {
  color: "#555",
  mt: "6px",
  fontSize: "0.85rem",
  textTransform: "capitalize",
  justifyContent: "flex-start",
};

export default AboutPage;


// import React from 'react';
// import { Box, Typography, Grid, Paper } from '@mui/material';

// const AboutPage = () => {
//   return (
//     <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f7f7f7' }}>
//       {/* Studio Intro */}
//       <Box sx={{ mb: 4, textAlign: 'center' }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
//           Friends Digital Studio
//         </Typography>
//         <Typography variant="body1" color="text.secondary" maxWidth="700px" mx="auto">
//           We specialize in capturing timeless moments with creativity and precision. From birthday bashes to elegant maternity shoots and cultural functions like puberty or housewarming, we deliver beautiful memories.
//         </Typography>
//       </Box>

//       {/* Services */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
//           Our Services
//         </Typography>
//         <Grid container spacing={2}>
//           {['Birthday Shoots', 'Maternity Photography', 'Puberty Functions', 'Housewarming Events', 'Wedding Photography'].map(service => (
//             <Grid item xs={12} sm={6} md={4} key={service}>
//               <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
//                 <Typography variant="subtitle1" fontWeight="bold">{service}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Professional, creative and timely coverage for your most special events.
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Products */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
//           Our Products
//         </Typography>
//         <Grid container spacing={2}>
//           {['Photo Albums', 'Video Edits', 'Digital Frames', 'Customized Invitations'].map(product => (
//             <Grid item xs={12} sm={6} md={3} key={product}>
//               <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
//                 <Typography fontWeight="bold">{product}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Location & Contact */}
//       <Box sx={{ mb: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
//           Location & Contact
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={1} sx={{ p: 2 }}>
//               <Typography variant="subtitle1" fontWeight="bold">Address</Typography>
//               <Typography variant="body2">
//                 Friends Digital Studio,<br />
//                 123 Studio Lane, Near Bus Stand,<br />
//                 Nagercoil, Tamil Nadu – 629001
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={1} sx={{ p: 2 }}>
//               <Typography variant="subtitle1" fontWeight="bold">Contact Us</Typography>
//               <Typography variant="body2">
//                 📞 +91 98765 43210<br />
//                 📧 contact@friendsstudio.in<br />
//                 📍 [Google Maps Link]
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, Container, Button } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';

// const AboutPage = () => {
//   return (
//     <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           bgcolor: '#1e1e2f',
//           color: '#fff',
//           py: { xs: 6, md: 8 },
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h3" fontWeight="bold">Friends Digital Studio</Typography>
//         <Typography variant="subtitle1" mt={2}>Capturing moments, creating memories</Typography>
//       </Box>

//       {/* Content Section */}
//       <Container sx={{ py: 6 }}>
//         <Grid container spacing={4}>
//           {/* About */}
//           <Grid item xs={12}>
//             <Typography variant="h5" fontWeight="bold" gutterBottom>About Us</Typography>
//             <Typography variant="body1" color="text.secondary">
//               Friends Digital Studio is a professional photography studio located in Nagercoil,
//               Tamil Nadu. With years of experience, we specialize in capturing timeless memories
//               through maternity shoots, weddings, puberty functions, housewarmings, and more.
//               We believe every photo should tell a story.
//             </Typography>
//           </Grid>

//           {/* Services */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" gutterBottom>Our Services</Typography>
//                 <ul>
//                   <li>Maternity Photography</li>
//                   <li>Wedding Photography</li>
//                   <li>Puberty Function Coverage</li>
//                   <li>House Warming Ceremonies</li>
//                   <li>Portraits & Family Shoots</li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Products */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" gutterBottom>Our Products</Typography>
//                 <ul>
//                   <li>Custom Photo Albums</li>
//                   <li>Wall Portraits & Frames</li>
//                   <li>HD Videos & Highlights</li>
//                   <li>Digital Copies (Pen Drive/Cloud)</li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Location */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" gutterBottom>Location</Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <LocationOnIcon sx={{ verticalAlign: 'middle' }} /> Near Anna Bus Stand,
//                   Nagercoil, Tamil Nadu - 629001
//                 </Typography>
//                 <Button
//                   href="https://maps.google.com"
//                   target="_blank"
//                   variant="outlined"
//                   size="small"
//                   sx={{ mt: 1 }}
//                 >
//                   View on Google Maps
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Contact */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" gutterBottom>Contact Us</Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <CallIcon sx={{ verticalAlign: 'middle' }} /> +91 98765 43210
//                 </Typography>
//                 <Typography variant="body1">
//                   <EmailIcon sx={{ verticalAlign: 'middle' }} /> friendsdigitalstudio@email.com
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutPage;


// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";

// const AboutPage = () => {
//   return (
//     <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         About Friends Digital Studio
//       </Typography>

//       <Typography variant="body1" color="text.secondary" gutterBottom>
//         Friends Digital Studio is your trusted partner for capturing life’s most precious moments. 
//         With a passion for photography and a commitment to quality, we offer creative and professional 
//         services for all occasions — from weddings and birthdays to maternity and housewarming events.
//       </Typography>

//       <Grid container spacing={3} mt={2}>
//         {/* Services */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               📷 Our Services
//             </Typography>
//             <ul style={{ paddingLeft: 20 }}>
//               <li>Wedding Photography & Videography</li>
//               <li>Birthday Party Shoots</li>
//               <li>Maternity & Baby Shoots</li>
//               <li>Puberty & Traditional Functions</li>
//               <li>Housewarming & Family Events</li>
//               <li>Drone Coverage & Same-Day Edits</li>
//             </ul>
//           </Paper>
//         </Grid>

//         {/* Products */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               🎁 Our Products
//             </Typography>
//             <ul style={{ paddingLeft: 20 }}>
//               <li>High-Resolution Photo Albums</li>
//               <li>Framed Portraits</li>
//               <li>Customized Digital Invitations</li>
//               <li>Softcopy on USB Drive / Cloud</li>
//             </ul>
//           </Paper>
//         </Grid>

//         {/* Address */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               🏠 Our Address
//             </Typography>
//             <Typography variant="body2">
//               Friends Digital Studio, <br />
//               123 Main Street, Anna Nagar, <br />
//               Nagercoil, Tamil Nadu - 629001
//             </Typography>
//           </Paper>
//         </Grid>

//         {/* Contact */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               📞 Contact Us
//             </Typography>
//             <Typography variant="body2">
//               Phone: +91 98765 43210 <br />
//               Email: friendsstudio@example.com <br />
//               Instagram: @friendsdigitalstudio
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import {
//   Box,
//   Typography,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Link,
//   Grid,
//   Container,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';

// const AboutPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6 } }}>
//       {/* Header */}
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         textAlign="center"
//         sx={{ color: '#2e7031' }}
//       >
//         About Friends Digital Studio
//       </Typography>

//       {/* Intro Text */}
//       <Typography variant="body1" paragraph textAlign="justify">
//         Friends Digital Studio is your trusted destination for professional photography and videography services. With a
//         passion for capturing life’s most cherished moments, we offer a wide range of creative solutions tailored to your
//         personal and event needs. From weddings and birthdays to maternity and traditional ceremonies, we ensure every detail
//         is captured with clarity, emotion, and style.
//       </Typography>

//       <Divider sx={{ my: 4 }} />

//       {/* Services and Products */}
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" fontWeight="medium" gutterBottom>
//             📸 Services We Offer:
//           </Typography>
//           <List dense>
//             {[
//               'Wedding Photography & Videography',
//               'Birthday & Puberty Function Shoots',
//               'Maternity & Baby Shower Photography',
//               'Housewarming & Religious Events',
//               'Outdoor & Studio Portrait Sessions',
//               'Photo Album Designing & Printing',
//               'Event Highlight Videos & Teasers',
//             ].map((service, idx) => (
//               <ListItem key={idx} disableGutters>
//                 <ListItemText primary={service} />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" fontWeight="medium" gutterBottom>
//             🖨️ Products Available:
//           </Typography>
//           <List dense>
//             {[
//               'Custom Photo Albums (Matt / Glossy / Velvet Finish)',
//               'Framed Enlargements & Wall Portraits',
//               'Digital Copies & Cloud Backup of Events',
//               'Invitation Video & E-cards',
//             ].map((product, idx) => (
//               <ListItem key={idx} disableGutters>
//                 <ListItemText primary={product} />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 4 }} />

//       {/* Studio Address */}
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="h6" fontWeight="medium" gutterBottom>
//           📍 Studio Address:
//         </Typography>
//         <Typography variant="body1">
//           Friends Digital Studio, <br />
//           No. 123, Main Street, <br />
//           Nagercoil – 629001, <br />
//           Tamil Nadu, India
//         </Typography>
//       </Box>

//       {/* Google Maps */}
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="h6" fontWeight="medium" gutterBottom>
//           🗺️ Location:
//         </Typography>
//         <Link
//           href="https://www.google.com/maps?q=Friends+Digital+Studio+Nagercoil"
//           target="_blank"
//           rel="noopener noreferrer"
//           underline="hover"
//         >
//           View on Google Maps
//         </Link>
//       </Box>

//       <Divider sx={{ my: 4 }} />

//       {/* Contact Section */}
//       <Box>
//         <Typography variant="h6" fontWeight="medium" gutterBottom>
//           📞 Contact Us:
//         </Typography>
//         <Typography variant="body1">
//           Phone:{' '}
//           <Link href="tel:+919876543210" underline="hover">
//             +91 98765 43210
//           </Link>
//           <br />
//           Email:{' '}
//           <Link href="mailto:friendsstudio@example.com" underline="hover">
//             friendsstudio@example.com
//           </Link>
//           <br />
//           Instagram:{' '}
//           <Link
//             href="https://instagram.com/friendsdigitalstudio"
//             target="_blank"
//             rel="noopener"
//             underline="hover"
//           >
//             @friendsdigitalstudio
//           </Link>
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default AboutPage;
