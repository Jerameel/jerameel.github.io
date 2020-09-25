import React from 'react';

// import { useTheme } from 'utils/Theme';

import { SVGProps } from './SVG.props';

const Logo = (props: SVGProps): JSX.Element => {
  // const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || 320}
      height={height || 224}
      viewBox="0 0 84.667 59.267"
      {...props}
    >
      <path
        d="M59.267 0v8.467H76.2v50.8h8.467V0zM0 50.8v8.467h25.4V0h-8.467v50.8z"
        fill={fill || '#000'}
      />
      <path
        d="M33.867 0v8.467L57.15 29.633 33.867 50.8v8.467l33.866-29.634z"
        fill={fill || '#000'}
      />
    </svg>
  );
};

export default Logo;
