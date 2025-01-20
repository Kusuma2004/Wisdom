import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDetail from './components/UserDetail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />}
          />
          <Route path="/user/:id" element={<UserDetail darkMode={darkMode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
