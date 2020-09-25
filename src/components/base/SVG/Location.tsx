import React from 'react';

// import { useTheme } from 'utils/Theme';

import { SVGProps } from './SVG.props';

const Location = (props: SVGProps): JSX.Element => {
  // const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      aria-hidden="true"
      width={width || 12}
      height={height || 12}
      style={{
        msTransform: 'rotate(360deg)',
        WebkitTransform: 'rotate(360deg)',
      }}
      viewBox="0 0 512 512"
      transform="rotate(360)"
      {...props}
    >
      <path
        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
        fill="none"
        stroke={fill || '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <circle
        cx={256}
        cy={192}
        r={48}
        fill="none"
        stroke={fill || '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  );
};

export default Location;
