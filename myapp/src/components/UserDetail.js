import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardContent, CircularProgress, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';

const UserDetail = ({ darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" variant="h6" style={{ marginTop: '20px' }}>
        Error loading user details.
      </Typography>
    );
  }

  const iconColor = darkMode ? '#fff' : '#1976d2'; // Set icon color based on dark mode
  const cardBackgroundColor = darkMode ? '#424242' : '#fff'; // Set card background color based on dark mode

  return (
    <motion.div
      style={{
        padding: '20px',
        minHeight: '100vh',
        background: darkMode ? '#303030' : 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        style={{ marginBottom: '20px' }}
      >
        Go Back
      </Button>

      {user && (
        <Card
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '15px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            backgroundColor: cardBackgroundColor, // Apply card background color based on dark mode
          }}
        >
          <CardContent>
            <Typography variant="h4" align="center" display="flex" alignItems="center" gutterBottom>
              <PersonIcon fontSize="large" style={{ marginRight: '8px', color: iconColor }} />
              {user.name}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <EmailIcon fontSize="small" style={{ marginRight: '8px', color: iconColor }} />
              {user.email}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <PhoneIcon fontSize="small" style={{ marginRight: '8px', color: iconColor }} />
              {user.phone}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <BusinessIcon fontSize="small" style={{ marginRight: '8px', color: iconColor }} />
              {user.company.name}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <LanguageIcon fontSize="small" style={{ marginRight: '8px', color: iconColor }} />
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: iconColor, textDecoration: 'none' }}
              >
                {user.website}
              </a>
            </Typography>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

export default UserDetail;
