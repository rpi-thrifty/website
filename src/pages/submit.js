import React from 'react';
import { Box } from "@mui/material"
import { Header } from "../components/header/header"
import { useState } from 'react';

export const SubmitPage = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        title: '',
        price: '',
        quantity: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div style={{ paddingBottom: '20px', marginTop: '20px' }}>
            <Header />
            <div style={{ background: '#f0ad4e', color: 'white', padding: '20px' }}>
                <h1 style={{ textAlign: 'center', margin: 0 }}>Selling an Item</h1>
            </div>
            <Box sx={{ marginLeft: '2.5%' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="full_name">Full Name:</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            </Box>
        </div>
    );
};
