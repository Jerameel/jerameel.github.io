import React from 'react';

import { Logo } from 'components/base/SVG';
import { useTheme } from 'utils/Theme';

import { HeaderProps } from './Header.props';
import { Container, Content } from './Header.style';

const Header = (props: HeaderProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <div className="logo-container">
          <Logo width={48} height={48} fill={theme.neutral.shade1} />
        </div>
      </Content>
    </Container>
  );
};

export default React.memo(Header);
