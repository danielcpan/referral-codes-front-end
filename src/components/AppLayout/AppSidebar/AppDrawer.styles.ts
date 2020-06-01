import { Tabs as MuiTabs, Tab as MuiTab } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../constants';

export const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: theme.palette.common.white,
    borderRight: 'none'
  },
  drawerPaperClose: {
    position: 'relative',
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}));

export const Tabs = withStyles({
  indicator: {
    left: 0,
    width: 3
  }
})(MuiTabs);

export const Tab = withStyles(theme => ({
  root: {
    minWidth: 0,
    padding: '6px 12px 6px 24px',
    '&:hover': {
      backgroundColor: '#F8FCFC'
    }
  },
  labelIcon: {
    minHeight: 52
  },
  selected: {
    color: theme.palette.primary.main,
    backgroundColor: '#F8FCFC'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}))(MuiTab);
