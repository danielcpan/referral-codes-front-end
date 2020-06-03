import React, { useContext, memo } from 'react';
import { Avatar, Hidden, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { AppLayoutContext } from '../AppLayout.context';
import { useStyles } from './AppToolbar.styles';

const DefaultMobileToolbar: React.FC = () => {
  const classes = useStyles();
  const { handleMobileDrawerToggle } = useContext(AppLayoutContext);

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" onClick={handleMobileDrawerToggle} className={classes.iconButton}>
          <MenuIcon />
        </IconButton>

        <IconButton color="inherit">
          <Avatar src="https://miro.medium.com/fit/c/256/256/2*UDW41nU3KR_Q6YtFg5yVig.jpeg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const DefaultDesktopToolbar: React.FC = () => {
  const classes = useStyles();
  const { title, handleLogoClick } = useContext(AppLayoutContext);

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar} style={{ backgroundColor: '##fafbfb' }}>
        <IconButton edge="start" onClick={handleLogoClick} className={classes.iconButton}>
          {/* <LogoIcon /> */}
        </IconButton>

        <Typography color="inherit" noWrap className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const AppToolbar: React.FC = memo(() => (
  <>
    <Hidden smUp>
      <DefaultMobileToolbar />
    </Hidden>

    <Hidden xsDown>
      <DefaultDesktopToolbar />
    </Hidden>
  </>
));

export default AppToolbar;
