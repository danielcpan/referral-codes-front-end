import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Tabs, Tab } from './AppDrawer.styles';
// import { navLinks } from '../constants';

interface INavLinks {
  isOpen: boolean;
  navTabIdx: number;
  handleChange: () => void;
  handleDrawerToggle?: () => void;
}

const NavLinks: React.FC<INavLinks> = ({ isOpen, navTabIdx, handleChange, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <div style={{ height: '100vh', paddingTop: 52 }}>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={navTabIdx}
        onChange={handleChange}
      >
        {/* {navLinks.map(el => (
          <Tab
            key={el.name}
            icon={<div style={{ display: 'flex', margin: 0 }}>{el.icon}</div>}
            label={
              <div style={{ textTransform: 'none', marginLeft: theme.spacing(2) }}>
                {isOpen && el.name}
              </div>
            }
            onClick={() => {
              handleDrawerToggle?.();
            }}
          />
        ))} */}
      </Tabs>
    </div>
  );
};

export default NavLinks;
