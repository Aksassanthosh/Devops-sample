import { Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cardo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then((res) => {
                setData(res.data.users);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch users:', err);
                setLoading(false);
            });
    }, []);

    const getCardStyle = (gender) => ({
        backgroundColor: gender === 'male' ? '#cce5ff' : '#f8d7da',
        color: gender === 'male' ? '#004085' : '#721c24',
    });

    return (
        <div style={{ padding: '20px' }}>
            <h1>AXIOS CARD LIST</h1>
            {loading ? (
                <Typography variant="h6" align="center">Loading...</Typography>
            ) : (
                <Grid container spacing={3}>
                    {data.map((user) => (
                        <Grid item xs={12} sm={6} md={4} key={user.id}>
                            <Card style={getCardStyle(user.gender)}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {user.firstName} {user.lastName}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Email:</strong> {user.email}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Gender:</strong> {user.gender}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Phone:</strong> {user.phone}
                                    </Typography>
                                    <Typography variant="body2">
                                        <strong>Address:</strong> {user.address.address}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default Cardo;