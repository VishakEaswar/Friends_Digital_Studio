import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

const ProductLeads = () => {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
    discountPercent: '',
    gstPercent: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: Date.now(), // or let backend assign
      name: form.name,
      image: form.image,
      price: `$${parseFloat(form.price).toFixed(2)}`,
      discountPercent: parseInt(form.discountPercent) || 0,
      gstPercent: parseInt(form.gstPercent) || 0,
      description: form.description
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("✅ Product added successfully!");
        setForm({
          name: '',
          image: '',
          price: '',
          discountPercent: '',
          gstPercent: '',
          description: ''
        });
      } else {
        const error = await res.text();
        setMessage(`❌ Failed to add product: ${error}`);
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <Box>

    <Box sx={{height:'150'}}>

    </Box>
    <Box maxWidth={500} mx="auto" mt={5} p={3} boxShadow={2} borderRadius={2}>
      <Typography variant="h5" mb={2}>Add New Product</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
        <TextField label="Image URL" name="image" value={form.image} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
        <TextField label="Price ($)" name="price" value={form.price} onChange={handleChange} fullWidth sx={{ mb: 2 }} type="number" required />
        <TextField label="Discount (%)" name="discountPercent" value={form.discountPercent} onChange={handleChange} fullWidth sx={{ mb: 2 }} type="number" inputProps={{ min: 0, max: 100 }} />
        <TextField label="GST (%)" name="gstPercent" value={form.gstPercent} onChange={handleChange} fullWidth sx={{ mb: 2 }} type="number" inputProps={{ min: 0, max: 100 }} />
        <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth sx={{ mb: 2 }} multiline rows={4} required />
        <Button type="submit" variant="contained" fullWidth>Add Product</Button>
      </form>
      {message && <Alert sx={{ mt: 2 }}>{message}</Alert>}
    </Box>
        </Box>

  );
};

export default ProductLeads;
