import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { navLinks } from './constants';

interface IAppLayoutContext {
  title?: string;
  navTabIdx: number;
  isDesktopDrawerOpen: boolean;
  isMobileDrawerOpen: boolean;
  handleDesktopDrawerOpen: () => void;
  handleDesktopDrawerClose: () => void;
  handleMobileDrawerToggle: () => void;
  handleNavChange: () => void;
  handleLogoClick: () => void;
}

export const AppLayoutContext = createContext({} as IAppLayoutContext);

const getNavIdx = (history: any) => {
  const currentPath = history.location.pathname;
  // if (currentPath === navLinks[0].url) return 0;
  // return navLinks.slice(1).findIndex(el => currentPath.includes(el.url)) + 1;
  return 0;
};

interface IAppLayoutProvider {
  children: React.ReactNode;
}

export const AppLayoutProvider: React.FC<IAppLayoutProvider> = ({ children, ...restProps }) => {
  const history = useHistory();
  const [navTabIdx, setNavTabIdx] = useState(getNavIdx(history));
  const [isDesktopDrawerOpen, setIsDesktopDrawerOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleDesktopDrawerOpen = () => {
    setIsDesktopDrawerOpen(true);
  };

  const handleDesktopDrawerClose = () => {
    setIsDesktopDrawerOpen(false);
  };

  const handleMobileDrawerToggle = () => {
    setIsMobileDrawerOpen(prevState => !prevState);
  };

  const handleNavChange = (e: React.ChangeEvent<{}>, idx: number) => {
    setNavTabIdx(idx);
    // history.push(navLinks[idx].url);
  };

  const handleLogoClick = () => {
    setNavTabIdx(0);
    history.push('/');
  };

  const value = {
    navTabIdx,
    isDesktopDrawerOpen,
    isMobileDrawerOpen,
    handleDesktopDrawerOpen,
    handleDesktopDrawerClose,
    handleMobileDrawerToggle,
    handleNavChange,
    handleLogoClick,
    ...restProps
  };

  return <AppLayoutContext.Provider value={value}>{children}</AppLayoutContext.Provider>;
};

export default AppLayoutContext;
