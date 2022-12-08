import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Navbar } from 'react-bootstrap';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} style={{ backgroundColor: '#e7eeda' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
>
        
        <LinkTab label="Home" href="/" underline="hover" />
        <LinkTab label="About the Dev" href="/aboutMe" underline="hover" />
        <LinkTab label="Portfolio" href="/portfolio" underline="hover" />
        <LinkTab label="Contact" href="/contact" underline="hover" />
        <LinkTab label="Resume" href="/resume" underline="hover" />
      </Tabs>
    </Box>
  );
}

