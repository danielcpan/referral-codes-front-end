import React from 'react';
// import { HomeIcon, TriageIcon, ProjectsIcon, MyRequestsIcon } from '../icons';
import {
  Explore as ExploreIcon,
  CalendarToday as CalendarTodayIcon,
  Event as EventIcon
} from '@material-ui/icons';
// import { user } from '../../services/auth.service';

export const drawerWidth = 240;

export const navLinks = [
  { name: 'Explore', icon: <ExploreIcon />, url: '/' },
  { name: 'New', icon: <EventIcon />, url: '/' }
  // { name: 'Triage', icon: <TriageIcon />, url: `/triage` },
  // // { name: 'Projects', icon: <ProjectsIcon />, url: '/projects/explore' },
  // { name: 'Projects', icon: <ProjectsIcon />, url: `/task-dashboard/${user.TeamId}` },
  // { name: 'My Projects', icon: <MyRequestsIcon />, url: '/requests/create' },
  // { name: 'Edit Environment', icon: <EditIcon />, url: '/edit-env' }
];
