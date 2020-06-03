import React from 'react';
import ReactDOM from 'react-dom';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import { App } from 'components';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7c83ff'
    }
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);
