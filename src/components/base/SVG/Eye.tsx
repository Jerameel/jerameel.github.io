import React from 'react';

// import { useTheme } from 'utils/Theme';

import { SVGProps } from './SVG.props';

const Eye = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 1024 1024"
      transform="rotate(360)"
      {...props}
    >
      <path
        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
        fill={fill || '#000'}
      />
    </svg>
  );
};

export default Eye;
