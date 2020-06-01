import React, { useContext, memo } from 'react';
import clsx from 'clsx';
import { Drawer, Hidden } from '@material-ui/core';
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
  const classes = useStyles();
  const {
    isDesktopDrawerOpen,
    navTabIdx,
    handleDesktopDrawerOpen,
    handleDesktopDrawerClose,
    handleNavChange
  } = useContext(AppLayoutContext);

  return (
    <div style={{ width: 72 }}>
      {isDesktopDrawerOpen && <div style={{ width: 72, height: '100vh' }}></div>}
      <Drawer
        open={isDesktopDrawerOpen}
        onMouseEnter={handleDesktopDrawerOpen}
        onMouseLeave={handleDesktopDrawerClose}
        classes={{
          paper: clsx(classes.drawerPaper, !isDesktopDrawerOpen && classes.drawerPaperClose)
        }}
        variant="permanent"
      >
        <NavLinks
          isOpen={isDesktopDrawerOpen}
          navTabIdx={navTabIdx}
          handleChange={handleNavChange}
        />
      </Drawer>
    </div>
  );
};

const AppDrawer: React.FC = memo(() => (
  <>
    <Hidden smUp>
      <DefaultMobileDrawer />
    </Hidden>

    <Hidden xsDown>
      <DefaultDesktopDrawer />
    </Hidden>
  </>
));

export default AppDrawer;
