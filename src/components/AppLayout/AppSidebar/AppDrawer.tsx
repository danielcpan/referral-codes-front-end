import React, { useContext, memo } from 'react';
import { Avatar, Button, Drawer, Grid, Hidden, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import NavLinks from './NavLinks';
import { AppLayoutContext } from '../AppLayout.context';
import { useStyles } from './AppDrawer.styles';

const DefaultMobileDrawer: React.FC = () => {
  const classes = useStyles();
  const { isMobileDrawerOpen, navTabIdx, handleNavChange, handleMobileDrawerToggle } = useContext(
    AppLayoutContext
  );

  return (
    <Drawer
      variant="temporary"
      open={isMobileDrawerOpen}
      onClose={handleMobileDrawerToggle}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
    >
      <NavLinks
        isOpen={isMobileDrawerOpen}
        navTabIdx={navTabIdx}
        handleChange={handleNavChange}
        handleDrawerToggle={handleMobileDrawerToggle}
      />
    </Drawer>
  );
};

const DefaultDesktopDrawer: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { navTabIdx, handleNavChange } = useContext(AppLayoutContext);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      open
    >
      <Grid
        container
        alignItems="center"
        spacing={2}
        style={{ height: 104, padding: theme.spacing(2) }}
      >
        <Grid item>
          <Avatar
            src="https://miro.medium.com/fit/c/256/256/2*UDW41nU3KR_Q6YtFg5yVig.jpeg"
            style={{ height: theme.spacing(6), width: theme.spacing(6) }}
          />
        </Grid>

        <Grid item>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            Daniel Pan
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ height: theme.spacing(2.5), textTransform: 'none' }}
          >
            Premium
          </Button>
        </Grid>
      </Grid>
      <NavLinks isOpen navTabIdx={navTabIdx} handleChange={handleNavChange} />
    </Drawer>
  );
};

const AppDrawer: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <DefaultMobileDrawer />
      </Hidden>

      <Hidden xsDown>
        <DefaultDesktopDrawer />
      </Hidden>
    </nav>
  );
});

export default AppDrawer;
