import React from 'react';
import { Grid, Avatar, Paper, Button, Hidden, Typography } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

const data = [
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
  },
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
  },
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

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 300
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

function MainFeaturedPost(props: any) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper elevation={0} className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      {/* <img style={{ display: 'none' }} alt={post?.imageText} /> */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              When You Share
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              You Win
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const PopularList = () => {
  const theme = useTheme();

  return (
    <>
      {data.map((el, idx) => (
        <Grid
          key={el.id + idx}
          container
          direction="column"
          // justify="center"
          // alignItems="center"
          style={{ margin: theme.spacing(2) }}
        >
          <Avatar
            src={el.logo}
            variant="rounded"
            style={{ height: theme.spacing(12), width: theme.spacing(12) }}
          />
          <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
            {el.name}
          </Typography>
          <Typography variant="subtitle2">{el.offer}</Typography>
        </Grid>
      ))}
    </>
  );
};

function ExplorePage() {
  return (
    <>
      <Hidden smUp>
        <MainFeaturedPost />
        <div style={{ display: 'flex', width: 'calc(100vw - 32px)', overflow: 'auto' }}>
          <PopularList />
        </div>
      </Hidden>

      <Hidden xsDown>
        <MainFeaturedPost />
        <div style={{ display: 'flex', width: 'calc(100vw - 288px)', overflow: 'auto' }}>
          <PopularList />
        </div>
      </Hidden>
    </>
  );
}

export default ExplorePage;
