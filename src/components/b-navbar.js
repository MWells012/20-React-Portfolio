import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


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
        <LinkTab label="Github" href="https://github.com/MWells012" underline="hover" />
        <LinkTab label="About the Dev" href="/aboutMe" underline="hover" />
        <LinkTab label="Portfolio" href="/portfolio" underline="hover" />
        <LinkTab label="Contact" href="/contact" underline="hover" />
        <LinkTab label="Resume" href="https://github.com/MWells012/20-React-Portfolio/blob/main/src/components/body/downloads/Michaela%20Wells%20-%20Resume.pdf" underline="hover" />
      </Tabs>
    </Box>
  );
}

