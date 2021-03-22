import React from 'react';

import Button from 'components/base/Button';
import { Logo, Github, Medium } from 'components/base/SVG';
import Text from 'components/base/Text';
import Header from 'components/module/Header';
import { useTheme } from 'utils/Theme';

import { LandingGeneratedProps } from './Landing.props';
import { Container, Content, Banner } from './Landing.style';

const LandingView = (props: LandingGeneratedProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Header />
      <Content>
        <Banner>
          <Logo width="auto" height={100} fill={theme.neutral.shade13} />
          <div className="title-container">
            <Text variant="title">Jerameel Delos&nbsp;Reyes</Text>
          </div>
          <div className="description-container">
            <Text variant="body">
              An Electronics&nbsp;Engineer and Software&nbsp;Developer
            </Text>
          </div>
          <div className="buttons">
            <div className="button-container">
              <Button
                text="Github"
                icon={<Github fill="#fff" height={32} width={32} />}
                onClick={() =>
                  window.open('https://github.com/jerameel', '_self')
                }
              />
            </div>
            <div className="other-button-container">
              <Button
                text="Medium"
                icon={<Medium fill="#fff" height={32} width={32} />}
                onClick={() =>
                  window.open('https://jerameel.medium.com', '_self')
                }
              />
            </div>
          </div>
        </Banner>
      </Content>
    </Container>
  );
};

export default LandingView;
