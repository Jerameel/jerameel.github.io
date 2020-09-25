import React from 'react';

import { TextProps } from './Text.props';
import { P } from './Text.style';

const Text = ({ component, ...props }: TextProps): JSX.Element => {
  //@ts-ignore
  const Component = component ? P.withComponent(component) : P;

  return <Component {...props} />;
};

export default React.memo(Text);
