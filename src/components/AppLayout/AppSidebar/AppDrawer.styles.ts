import { Tabs as MuiTabs, Tab as MuiTab } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../constants';

export const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#e9eff3',
    overflow: 'hidden'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
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
    padding: '6px 12px 6px 24px'
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
