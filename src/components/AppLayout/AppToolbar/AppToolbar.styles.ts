import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: 52,
    backgroundColor: theme.palette.toolbar.main,
    color: theme.palette.common.white,
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none'
  },
  iconButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1
  },
  avatar: {
    width: 29,
    height: 29
  }
}));
