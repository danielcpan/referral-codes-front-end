import React from 'react';
import {
  Explore as ExploreIcon,
  Event as EventIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Whatshot as WhatshotIcon
} from '@material-ui/icons';

export const drawerWidth = 240;

export const navLinks = [
  { name: 'Explore', icon: <ExploreIcon />, url: '/' },
  { name: 'New', icon: <EventIcon />, url: '/new' },
  { name: 'Trending', icon: <WhatshotIcon />, url: '/trending' },
  { name: 'Bookmarks', icon: <BookmarkBorderIcon />, url: '/bookmarks' }
];
