/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#fafbfb',
    height: '100vh',
    fontSize: '15px'
  },
  appBarSpacer: { minHeight: 52 },
  content: {
    flexGrow: 1,
    // overflow: 'auto',
    marginTop: 52
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: -52,
    height: '100%'
  }
}));
