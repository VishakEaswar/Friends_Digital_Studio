import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [ads, setAds] = useState([
    { id: 1, image: 'https://via.placeholder.com/400x150?text=Ad+1' },
    { id: 2, image: 'https://via.placeholder.com/400x150?text=Ad+2' },
  ]);
  const [orders, setOrders] = useState([
    { id: 1, product: 'Product 1', user: 'user1@gmail.com', status: 'Pending' },
    { id: 2, product: 'Product 2', user: 'user2@gmail.com', status: 'Completed' },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (

<Box>
<Box sx={{height:'150px',width:"100%"}}>

</Box>
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 2, sm: 4 }, mt: { xs: 8, sm: 10 }, width: '100%', maxWidth: 1200, mx: 'auto' }}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 2, sm: 3 },
          fontWeight: 700,
          fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
        }}
      >
        Admin Dashboard
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/productlead')}
          sx={{ maxWidth: 250 }}
        >
          Go to Product Leads
        </Button>
      </Box>

      <Grid container spacing={3} alignItems="stretch">
        {/* Ads Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Ad Images
            </Typography>
            <List>
              {ads.map(ad => (
                <ListItem key={ad.id} disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src={ad.image}
                    alt={`Ad ${ad.id}`}
                    sx={{
                      width: 150,
                      height: 75,
                      objectFit: 'cover',
                      mr: 2,
                      borderRadius: 1,
                    }}
                  />
                  <ListItemText primary={`Ad ${ad.id}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Products Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Products
            </Typography>
            <List dense>
              {products.map(product => (
                <ListItem key={product.id} sx={{ py: 1 }}>
                  <ListItemText
                    primary={product.name}
                    secondary={`Price: ₹${product.price} | Discount: ${product.discountPercent || 0}%`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Orders Section - Full width */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Orders
            </Typography>
            <List dense>
              {orders.map(order => (
                <ListItem key={order.id} sx={{ py: 1 }}>
                  <ListItemText
                    primary={`Order #${order.id} - ${order.product}`}
                    secondary={`User: ${order.user} | Status: ${order.status}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
        </Box>

  );
};

export default DashboardPage;
