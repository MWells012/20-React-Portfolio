import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from '@mui/material';


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

function NavTabs() {
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
        variant="fullWidth"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
>
        
        <LinkTab label="Home" component={Link} to="/" underline="hover" />
        <LinkTab label="Github" component= {Link} underline="hover" />
        <LinkTab label="About the Dev" component={Link} to="/aboutMe" underline="hover" />
        <LinkTab label="Portfolio" component={Link} to="/portfolio" underline="hover" />
        <LinkTab label="Contact" component={Link} to="/contact" underline="hover" />
        <LinkTab label="Resume" component={"https://github.com/MWells012/20-React-Portfolio/blob/main/src/components/body/downloads/Michaela%20Wells%20-%20Resume.pdf"} underline="hover" />
      </Tabs>
    </Box>
  );
}

export default function NavTabs() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/GitHub" component={ "https://github.com/MWells012" } />
          <Route exact path="/aboutMe" component={ About the Dev } />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  )
}
