import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', mt: 10 }}>
      
      {/* TOP FOOTER */}
      <Grid
        container
        spacing={27}
        sx={{ px: 10, py: 6 }}
      >
        {/* COMPANY */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Button variant="text" color="inherit">About</Button><br />
          <Button variant="text" color="inherit">Blog</Button><br />
          <Button variant="text" color="inherit">Press</Button><br />
          <Button variant="text" color="inherit">Jobs</Button><br />
          <Button variant="text" color="inherit">Partners</Button>
        </Grid>

        {/* SOLUTIONS */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Solutions
          </Typography>
          <Button variant="text" color="inherit">Marketing</Button><br />
          <Button variant="text" color="inherit">Analytics</Button><br />
          <Button variant="text" color="inherit">Commerce</Button><br />
          <Button variant="text" color="inherit">Insights</Button><br />
          <Button variant="text" color="inherit">Support</Button>
        </Grid>

        {/* DOCUMENTATION */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Documentation
          </Typography>
          <Button variant="text" color="inherit">Guides</Button><br />
          <Button variant="text" color="inherit">API Status</Button>
        </Grid>

        {/* LEGAL */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Button variant="text" color="inherit">Claim</Button><br />
          <Button variant="text" color="inherit">Privacy</Button><br />
          <Button variant="text" color="inherit">Terms</Button>
        </Grid>
      </Grid>

      {/* BOTTOM FOOTER */}
      <Box
        sx={{
          borderTop: '1px solid #333',
          textAlign: 'center',
          py: 3,
          fontSize: '14px',
          color: 'gray'
        }}
      >
        <Typography variant="body2">
          © 2025 My Company. All rights reserved.
        </Typography>

        <Typography variant="body2">
          Made with ❤️ by Me.
        </Typography>

        <Typography variant="body2">
          Icons made by Freepik from{' '}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4da6ff', textDecoration: 'none' }}
          >
            www.freepik.com
          </a>
        </Typography>
      </Box>

    </Box>
  );
};
