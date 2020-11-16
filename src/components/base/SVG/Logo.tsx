import React from 'react';

// import { useTheme } from 'utils/Theme';

import { SVGProps } from './SVG.props';

const Logo = (props: SVGProps): JSX.Element => {
  // const theme = useTheme();
  const { width, height } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 512}
      height={height || 512}
      viewBox="0 0 135.467 135.467"
      shapeRendering="crispEdges"
      {...props}
    >
      <path fill="#1a1a1a" d="M0 0h135.467v135.467H0z" />
      <path d="M127 127h8.467v8.467H127zM0 8.467h8.467V0H0z" fill="#fff" />
      <path d="M0 0l8.467 8.467H127V127l8.467 8.467V0z" fill="#fff" />
      <path d="M0 0l8.467 8.467V127H127l8.467 8.467H0z" fill="#ececec" />
      <g fill="#fff">
        <path d="M76.2 33.867v8.466h16.933v50.8h8.467V33.867zM16.933 84.667v8.466h25.4V33.867h-8.466v50.8zM50.8 33.867v8.466L71.967 63.5 50.8 84.667v8.466L80.433 63.5z" />
      </g>
      <g fill="#f2f2f2">
        <path d="M93.133 42.333l8.467-8.466v59.266h-8.467zM76.2 59.267l-25.4 25.4v8.466L80.433 63.5z" />
      </g>
    </svg>
  );
};

export default Logo;
