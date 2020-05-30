import { useDelayedRender } from "hooks";

type DelayedRenderProps = {
  delay?: number;
  children: React.ReactNode;
};

const DelayedRender: React.FC<DelayedRenderProps> = ({
  delay = 200,
  children,
}) => {
  return useDelayedRender(delay)(() => children);
};

export default DelayedRender;
