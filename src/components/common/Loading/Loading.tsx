import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { DelayedRender } from "components/common";
import { useInterval } from "hooks";

type LoadingProps = {
  center?: boolean;
  hasCustomMessages?: boolean;
  message?: string;
  delay?: number;
};

const Loading: React.FC<LoadingProps> = ({
  center = false,
  message = "",
  delay,
}) => {
  const [timer, setTimer] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(message);

  useInterval(
    () => {
      setTimer((prevState) => prevState + 1);
      if (timer === 15) {
        setDisplayMessage("Hmmm, something isn't right...");
      } else if (timer === 30) {
        setDisplayMessage("Sorry for taking so long. Try refreshing the page!");
      }
    },
    timer < 30 ? 1000 : null
  );

  return (
    <div style={{ height: "100%", minHeight: message ? 70 : 50 }}>
      <DelayedRender delay={delay}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: center ? "100%" : 0, marginTop: center ? -64 : 0 }}
        >
          <Grid item>
            <CircularProgress />
          </Grid>

          {displayMessage && <Grid item>{displayMessage}</Grid>}
        </Grid>
      </DelayedRender>
    </div>
  );
};

export default Loading;
