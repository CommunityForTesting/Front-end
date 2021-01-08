import React from "react";

function NotFound() {
  const style_404 = {
    fontSize: "5rem"
  };
  const style_nf = {
    fontSize: "3rem"
  };
  const style_text = {
    fontSize: "1rem"
  };

  return (
    <div className="not-found">
      <div style={style_404}>404</div>
      <div style={style_nf}>Not Found</div>
      <div style={style_text}>
        The resource requested could not be found on this server
      </div>
    </div>
  );
}

export default NotFound;
