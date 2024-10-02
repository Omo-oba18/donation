import React from 'react';
import { Box } from '@mui/material';

// Reusable Icon Wrapper component
const IconWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#f0f0f0', // Adjust background color as needed
        borderRadius: '50%',
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default IconWrapper;
