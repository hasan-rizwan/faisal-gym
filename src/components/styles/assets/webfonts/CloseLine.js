import * as React from "react";
const SvgCloseLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    role="img"
    className="close"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
      fill="rgba(255,255,255,1)"
    />
  </svg>
);
export default SvgCloseLine;
