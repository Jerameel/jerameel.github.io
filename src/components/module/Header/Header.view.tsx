import React from 'react';

import { Logo } from 'components/base/SVG';
import Text from 'components/base/Text';
import { useTheme } from 'utils/Theme';

import { HeaderProps } from './Header.props';
import { Container, Content } from './Header.style';

const Header = (props: HeaderProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <Logo width={'auto'} height={30} fill={theme.neutral.shade1} />
      </Content>
    </Container>
  );
};

export default React.memo(Header);
