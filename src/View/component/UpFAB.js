import React from "react";
import { Fab } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function UpFAB() {
  return (
    <Fab
      className="up-fab"
      variant="extended"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <ExpandLessIcon />
    </Fab>
  );
}

export default UpFAB;
