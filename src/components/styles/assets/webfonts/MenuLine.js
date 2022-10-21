import * as React from "react";
const SvgMenuLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    role="img"
    className="show"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
      fill="rgba(255,255,255,1)"
    />
  </svg>
);
export default SvgMenuLine;
