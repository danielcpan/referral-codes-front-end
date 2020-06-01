import React, { useContext, memo } from 'react';
import { Hidden, AppBar, Toolbar, IconButton, Avatar, Typography, Badge } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
// import { LogoIcon, NotificationsIcon } from '../../icons';
import { AppLayoutContext } from '../AppLayout.context';
// import { user } from '../../../services/auth.service';
import { useStyles } from './AppToolbar.styles';
// import { AVATAR_URL } from '../constants';

const DefaultMobileToolbar: React.FC = () => {
  const classes = useStyles();
  const { handleMobileDrawerToggle } = useContext(AppLayoutContext);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" onClick={handleMobileDrawerToggle} className={classes.iconButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const DefaultDesktopToolbar: React.FC = () => {
  const classes = useStyles();
  const { title, handleLogoClick } = useContext(AppLayoutContext);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" onClick={handleLogoClick} className={classes.iconButton}>
          {/* <LogoIcon /> */}
        </IconButton>

        <Typography color="inherit" noWrap className={classes.title}>
          {title}
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={5} max={99} color="secondary">
            {/* <NotificationsIcon fontSize="small" /> */}
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          {/* <Avatar src={`${AVATAR_URL}/${user.TeamId}.jpg`} className={classes.avatar} /> */}
        </IconButton>
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
