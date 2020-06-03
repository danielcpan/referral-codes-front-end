import React, { useContext, memo } from 'react';
import {
  Avatar,
  Button,
  Drawer,
  Grid,
  Hidden,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
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

const todos = [
  {
    id: 1,
    name: 'Robinhood',
    offer: 'Free stock worth $2.50–$200',
    logo: 'https://refercodes-media.s3.amazonaws.com/media/services/robinhood/picture.png'
  },
  {
    id: 2,
    name: 'Uber',
    offer: '$5 off first 2–4 rides',
    logo: 'https://refercodes-media.s3.amazonaws.com/media/services/uber/picture_OtmBdJQ.png'
  },
  {
    id: 3,
    name: 'Lime',
    offer: 'One free unlock',
    logo: 'https://refercodes-media.s3.amazonaws.com/media/services/lime/picture_FcTkTiT.png'
  },
  {
    id: 4,
    name: 'Cash App',
    offer: '$5 bonus',
    logo: 'https://refercodes-media.s3.amazonaws.com/media/services/cash-app/picture.png'
  },
  {
    id: 5,
    name: 'Airbnb',
    offer: 'Up to $55 off first trip',
    logo: 'https://refercodes-media.s3.amazonaws.com/media/services/airbnb/picture.png'
  },
  {
    id: 6,
    name: 'Coinbase',
    offer: '$10 of free Bitcoin',
    logo: 'https://refercodes-media.s3.amazonaws.com/media/services/coinbase/picture_xlk3wUM.png'
  }
];

function generate(element: React.ReactElement) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

const DefaultDesktopDrawer: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { navTabIdx, handleNavChange } = useContext(AppLayoutContext);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      open
    >
      <Grid
        container
        alignItems="center"
        spacing={2}
        style={{ height: 104, padding: theme.spacing(2) }}
      >
        <Grid item>
          <Avatar
            src="https://miro.medium.com/fit/c/256/256/2*UDW41nU3KR_Q6YtFg5yVig.jpeg"
            style={{ height: theme.spacing(6), width: theme.spacing(6) }}
          />
        </Grid>

        <Grid item>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            Daniel Pan
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ height: theme.spacing(2.5), textTransform: 'none' }}
          >
            Premium
          </Button>
        </Grid>
      </Grid>
      <div style={{ height: 300 }}>
        <NavLinks isOpen navTabIdx={navTabIdx} handleChange={handleNavChange} />
      </div>
      <Divider />
      <div style={{ overflow: 'auto' }}>
        <List
          dense
          style={{ overflow: 'auto' }}
          subheader={
            // <ListSubheader>
            //   <Typography style={{ fontWeight: 'bold' }}>Todo</Typography>
            // </ListSubheader>
            <ListSubheader style={{ fontWeight: 'bold', fontSize: '1rem' }}>Todo</ListSubheader>
          }
        >
          {[...todos, ...todos, ...todos, ...todos].map(el => (
            <TodoItem data={el} />
          ))}
        </List>
      </div>
    </Drawer>
  );
};

interface ITodoItem {
  data: any;
}

const TodoItem: React.FC<ITodoItem> = ({ data }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar src={data.logo} variant="rounded" />
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={data.offer}
          secondaryTypographyProps={{ noWrap: true }}
        />
        {isHover && (
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </div>
  );
};

const AppDrawer: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <DefaultMobileDrawer />
      </Hidden>

      <Hidden xsDown>
        <DefaultDesktopDrawer />
      </Hidden>
    </nav>
  );
});

export default AppDrawer;
