import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { useStyles } from './AppLayout.styles';
import AppToolbar from './AppToolbar/AppToolbar';
import AppDrawer from './AppSidebar/AppDrawer';
import { AppLayoutProvider } from './AppLayout.context';

interface IAppContainer {
  title?: string;
  children: React.ReactNode;
}

const AppContainer: React.FC<IAppContainer> = ({ user, title, children, ...rest }) => {
  const classes = useStyles();
  console.log('container user:', user);

  return (
    <AppLayoutProvider title={title} user={user}>
      <div className={classes.root}>
        <CssBaseline />
        <AppToolbar />
        <AppDrawer />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth={false} className={classes.container}>
            {children({ ...rest })}
          </Container>
        </main>
      </div>
    </AppLayoutProvider>
  );
};

export default AppContainer;
