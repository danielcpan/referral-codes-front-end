/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../constants';

export const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: 52,
    color: theme.palette.common.white,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
    // backgroundColor: '#fafbfb'
  },
  iconButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1
  }
}));
