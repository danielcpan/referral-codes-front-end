import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ToastProvider, DefaultToastContainer } from 'react-toast-notifications';
import { AppLayout } from 'components';
import { ExplorePage } from 'pages';

const ToastContainer = (props: any) => (
  <DefaultToastContainer className="toast-container" style={{ zIndex: 100 }} {...props} />
);

const App = () => (
  <AppLayout>
    {() => (
      <ToastProvider
        autoDismissTimeout={10000}
        placement="bottom-right"
        components={{ ToastContainer }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ExplorePage} />
          </Switch>
        </BrowserRouter>
      </ToastProvider>
    )}
  </AppLayout>
);

export default App;
