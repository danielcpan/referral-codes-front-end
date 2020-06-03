import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Avatar, Typography, Button } from '@material-ui/core';
import { Tabs, Tab } from './AppDrawer.styles';
import { navLinks } from '../constants';

interface INavLinks {
  isOpen?: boolean;
  navTabIdx: number;
  handleChange: (e: React.ChangeEvent<{}>, idx: number) => void;
  handleDrawerToggle?: () => void;
}

const NavLinks: React.FC<INavLinks> = ({ isOpen, navTabIdx, handleChange, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={navTabIdx}
        onChange={handleChange}
      >
        {navLinks.map(el => (
          <Tab
            key={el.name}
            icon={<div style={{ display: 'flex', margin: 0 }}>{el.icon}</div>}
            label={
              <Typography style={{ textTransform: 'none', marginLeft: theme.spacing(2) }}>
                {isOpen && el.name}
              </Typography>
            }
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              handleDrawerToggle?.();
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default NavLinks;
