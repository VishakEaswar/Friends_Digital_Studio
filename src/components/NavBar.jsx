import React, { useState } from 'react';
import {
  Box, Stack, Typography, Button, Menu, MenuItem, IconButton,
  Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{
      width: '95%',
      bgcolor: '#f3c809ff',
      borderRadius: 4,
      boxShadow: 6,
      position: 'fixed',
      top: { xs: 10, sm: 16, md: 24 },
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1200,
    }}>
      <Stack direction="row" alignItems="center" sx={{ minHeight: { xs: '60px', sm: '80px', md: '100px', lg: '120px' }, position: 'relative' }}>

        {/* Hamburger for mobile */}
        <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'whitesmoke' }}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Left spacer for desktop */}
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />

        {/* Brand */}
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography
            className="brandname"
            variant='overline'
            sx={{
              fontSize: { xs: '0.7rem', sm: '1rem', md: '1.5rem', lg: '2rem' },
              fontWeight: 800,
              textAlign: 'center',
              letterSpacing: 3,
              fontFamily: `'Futura', 'Montserrat', 'Segoe UI', sans-serif`,
              color: '#244b09ff',
              textTransform: 'uppercase',
              textShadow: '0 2px 12px #fff8, 0 1px 0 #f3c809',
              userSelect: 'none',
            }}
          >
            Friends Digital Studio
          </Typography>
        </Box>

        {/* Desktop Buttons */}
        <Box sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 2,
          pr: 4,
        }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontWeight: 700,
              borderColor: '#388e3c',
              color: '#388e3c',
              '&:hover': { bgcolor: '#e8f5e9', borderColor: '#2e7031', color: '#2e7031' }
            }}
            onClick={() => window.location.href = '/'}
          >
            Home
          </Button>
          <IconButton onClick={handleMenuOpen} sx={{ color: 'whitesmoke' }}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Your Order</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          </Menu>
        </Box>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240 } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, fontWeight: 600 }}>
            Menu
          </Typography>
          <Divider />
          <List>
            <ListItem button onClick={() => { setDrawerOpen(false); }}>
              <ListItemText primary="Your Profile" />
            </ListItem>
            <ListItem button onClick={() => { setDrawerOpen(false); }}>
              <ListItemText primary="Your Order" />
            </ListItem>
            <ListItem button onClick={() => { setDrawerOpen(false); }}>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};



// import React, { useState, useEffect } from 'react';
// import { Box, Stack, Typography, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// export const NavBar = () => {
//   // Persistent login state using localStorage (login only)
//   const [loggedIn, setLoggedIn] = useState(() => {
//     return localStorage.getItem('userActuallyLoggedIn') === 'true';
//   });
//   const [isAdmin, setIsAdmin] = useState(() => {
//     const user = JSON.parse(localStorage.getItem('userInfo') || '{}');
//     return user && user.email === 'admin@gmail.com';
//   });
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Navigation handlers (replace with your router logic)
//   const handleLogin = () => {
//     window.location.href = '/login';
//   };
//   const handleSignIn = () => {
//     window.location.href = '/signin';
//   };

//   // Listen for login state changes from other tabs/pages
//   useEffect(() => {
//     const updateAuth = () => {
//       setLoggedIn(localStorage.getItem('userActuallyLoggedIn') === 'true');
//       const user = JSON.parse(localStorage.getItem('userInfo') || '{}');
//       setIsAdmin(user && user.email === 'admin@gmail.com');
//     };
//     window.addEventListener('storage', updateAuth);
//     window.addEventListener('user-login', updateAuth);
//     return () => {
//       window.removeEventListener('storage', updateAuth);
//       window.removeEventListener('user-login', updateAuth);
//     };
//   }, []);
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };
//   const handleLogout = () => {
//     setLoggedIn(false);
//     localStorage.removeItem('userActuallyLoggedIn');
//     localStorage.removeItem('userInfo');
//     handleMenuClose();
//     window.location.href = '/';
//   };

//   return (
//     <Box sx={{
//       width: { xs: '95%', sm: '95%', md: '95%', lg: '95%',xl:'95%' },
//       // maxWidth: 1200,
//       bgcolor: '#f3c809ff',
//       borderRadius: 4,
//       boxShadow: 6,
//       position: 'fixed',
//       top: { xs: 10, sm: 16, md: 24 },
//       left: '50%',
//       transform: 'translateX(-50%)',
//       zIndex: 1200,
//       p: 0,
//       m: 0,
//     }}>
//       <Stack
//         direction="row"
//         alignItems="center"
//         sx={{ minHeight: { xs: '60px', sm: '80px', md: '100px', lg: '120px' }, position: 'relative' }}
//       >
//         {/* Hamburger for mobile */}
//         <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
//           <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'whitesmoke' }}>
//             <MenuIcon fontSize="large" />
//           </IconButton>
//         </Box>
//         {/* Left spacer for desktop */}
//         <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
//         {/* Centered brand name */}
//         <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
//           <Typography
//             className="brandname"
//             variant='overline'
//             sx={{
//               fontSize: { xs: '0.6rem', sm: '1rem', md: '1.5rem', lg: '2rem' },
//               fontWeight: 800,
//               textAlign: 'center',
//               letterSpacing: 3,
//               width: '100%',
//               fontFamily: `'Futura', 'Montserrat', 'Segoe UI', 'Arial', 'Helvetica Neue', Arial, sans-serif`,
//               color: '#244b09ff', // deep green for contrast
//               textTransform: 'uppercase',
//               textShadow: '0 2px 12px #fff8, 0 1px 0 #f3c809',
//               userSelect: 'none',
//             }}
//           >
//             Friends Digital Studio
//           </Typography>
//         </Box>
//         {/* Right: buttons or account (desktop only) */}
//         <Box sx={{
//           flex: 1,
//           display: { xs: 'none', md: 'flex' },
//           justifyContent: 'flex-end',
//           alignItems: 'center',
//           gap: { xs: 1, sm: 2 },
//           pr: { xs: 2, sm: 3, md: 4 },
//         }}>
//           <Button
//             variant="outlined"
//             color="primary"
//             sx={{ fontWeight: 700, mr: 2, borderColor: '#388e3c', color: '#388e3c', '&:hover': { bgcolor: '#e8f5e9', borderColor: '#2e7031', color: '#2e7031' } }}
//             onClick={() => window.location.href = '/'}
//           >
//             Home
//           </Button>
//           {isAdmin && loggedIn && (
//             <Button
//               variant="contained"
//               color="secondary"
//               sx={{ fontWeight: 700, ml: 2, bgcolor: '#c62828', '&:hover': { bgcolor: '#ad1720' } }}
//               onClick={() => window.location.href = '/dashboard'}
//             >
//               Admin
//             </Button>
//           )}
//           {!loggedIn ? (
//             <>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   borderRadius: 2,
//                   fontWeight: 600,
//                   textTransform: 'none',
//                   fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' },
//                   bgcolor: '#388e3c',
//                   color: '#fff',
//                   boxShadow: 1,
//                 //   border: '2px solid #388e3c',
//                   '&:hover': {
//                     bgcolor: '#2e7031',
//                     color: '#fff',
//                   },
//                   px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
//                   py: { xs: 0.5, sm: 1 },
//                   minWidth: { xs: 70, sm: 90, md: 110 },
//                   ml: 0,
//                 }}
//                 onClick={handleLogin}
//               >
//                 Login
//               </Button>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   borderRadius: 2,
//                   fontWeight: 600,
//                   textTransform: 'none',
//                   fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' },
//                   bgcolor: '#388e3c',
//                   color: '#fff',
//                   boxShadow: 1,
//                 //   border: '2px solid #388e3c',
//                   '&:hover': {
//                     bgcolor: '#2e7031',
//                     color: '#fff',
//                   },
//                   px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
//                   py: { xs: 0.5, sm: 1 },
//                   minWidth: { xs: 70, sm: 90, md: 110 },
//                   ml: { xs: 1, sm: 2 },
//                 }}
//                 onClick={handleSignIn}
//               >
//                 Sign In
//               </Button>
//             </>
//           ) : (
//             <>
//               <IconButton onClick={handleMenuOpen} sx={{ color: 'whitesmoke' }}>
//                 <AccountCircleIcon fontSize="large" />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//               >
//                 <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>Your Order</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
//                 <MenuItem onClick={handleLogout} sx={{ color: 'red' }}>Logout</MenuItem>
//               </Menu>
//             </>
//           )}
//         </Box>
//       </Stack>
//       {/* Drawer for mobile actions */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         PaperProps={{ sx: { width: 240 } }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, fontWeight: 600 }}>
//             Menu
//           </Typography>
//           <Divider />
//           <List>
//             {!loggedIn ? (
//               <>
//                 <ListItem button onClick={() => { setDrawerOpen(false); handleLogin(); }}>
//                   <ListItemText primary="Login" />
//                 </ListItem>
//                 <ListItem button onClick={() => { setDrawerOpen(false); handleSignIn(); }}>
//                   <ListItemText primary="Sign In" />
//                 </ListItem>
//               </>
//             ) : (
//               <>
//                 <ListItem button onClick={() => { setDrawerOpen(false); }}>
//                   <ListItemText primary="Your Profile" />
//                 </ListItem>
//                 <ListItem button onClick={() => { setDrawerOpen(false); }}>
//                   <ListItemText primary="Your Order" />
//                 </ListItem>
//                 <ListItem button onClick={() => { setDrawerOpen(false); }}>
//                   <ListItemText primary="Settings" />
//                 </ListItem>
//                 <ListItem button onClick={() => { setDrawerOpen(false); handleLogout(); }}>
//                   <ListItemText primary="Logout" sx={{ color: 'red' }} />
//                 </ListItem>
//               </>
//             )}
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }
