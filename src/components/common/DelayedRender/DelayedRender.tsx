import { useDelayedRender } from 'hooks';

type IDelayedRender = {
  delay?: number;
  children: React.ReactNode;
};

const DelayedRender: React.FC<IDelayedRender> = ({ delay = 200, children }) => {
  return useDelayedRender(delay)(() => children);
};

export default DelayedRender;
