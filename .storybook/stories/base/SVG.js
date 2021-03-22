import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import {
  /* PLOP_INJECT_IMPORT */
  Medium,
  Github,
  Logo,
  Close,
  Location,
  Heart,
  Check,
  Search,
  EyeOff,
  Eye,
} from '../../../src/components/base/SVG';
import Container from '../../components/Container';

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100vw',
      }}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children, label }) => {
  return (
    <div
      style={{
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
      <div style={{ marginTop: '8px', marginBottom: 16 }}>{label}</div>
    </div>
  );
};

storiesOf('base/SVG', module).add('Summary', () => {
  const [text, setText] = useState('');
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children, label }) => {
    return (
      <div
        style={{
          marginLeft: 16,
          marginTop: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {children}
        <div style={{ marginTop: '8px' }}>{label}</div>
      </div>
    );
  };

  return (
    <Container background="white">
      <Content>
        {/* PLOP_INJECT_INSTANCE*/}
        <Wrapper label="Medium">
          <Medium width={30} height={30} />
        </Wrapper>
        <Wrapper label="Github">
          <Github width={30} height={30} />
        </Wrapper>
        <Wrapper label="Logo">
          <Logo width={30} height={30} />
        </Wrapper>
        <Wrapper label="Close">
          <Close width={30} height={30} />
        </Wrapper>
        <Wrapper label="Location">
          <Location width={30} height={30} />
        </Wrapper>
        <Wrapper label="Heart">
          <Heart width={30} height={30} />
        </Wrapper>
        <Wrapper label="Check">
          <Check width={30} height={30} />
        </Wrapper>
        <Wrapper label="Search">
          <Search width={30} height={30} />
        </Wrapper>
        <Wrapper label="EyeOff">
          <EyeOff width={30} height={30} />
        </Wrapper>
        <Wrapper label="Eye">
          <Eye width={30} height={30} />
        </Wrapper>
      </Content>
    </Container>
  );
});
