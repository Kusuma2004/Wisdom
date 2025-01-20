import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button, Card, CardContent, Grid, CircularProgress, IconButton } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

const Home = ({ toggleTheme, darkMode }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error loading users.</Typography>;

  return (
    <motion.div
      style={{
        padding: '20px',
        minHeight: '100vh',
        background: darkMode
          ? '#000000' // Black background for dark mode
          : 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)', // Light mode gradient background
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h4"
          style={{
            color: darkMode ? '#fff' : '#000',
            textAlign: 'center', // Centered title
            flex: 1,
          }}
        >
          User Directory
        </Typography>

        <IconButton onClick={toggleTheme} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>

      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        sx={{
          backgroundColor: darkMode ? '#424242' : '#fff',
          color: darkMode ? '#fff' : '#000',
        }}
      />

      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card
                sx={{
                  background: darkMode
                    ? 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                  color: darkMode ? '#fff' : '#000',
                  padding: '20px',
                  fontWeight: 'bold',
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>{user.name}</Typography>
                  <Typography variant="body1" >
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body1">
                    City: {user.address.city}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/user/${user.id}`}
                    variant="contained"
                    color={darkMode ? 'primary' : 'secondary'}
                    startIcon={<SortIcon />}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Home;
