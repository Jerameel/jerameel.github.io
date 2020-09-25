import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import Text from '../../../src/components/base/Text';
import TextField from '../../../src/components/base/TextField';
import Container from '../../components/Container';
// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  const [email, setEmail] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        marginTop: 16,
        flexDirection: 'column',
        width: 300,
      }}
    >
      {children}
    </div>
  );
};

storiesOf('base/TextField', module).add('Summary', () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Container background="white">
      <Wrapper>
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="user@nomail.com"
          error="Please enter your email"
        />
      </Wrapper>

      <Wrapper>
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secured
          placeholder="******"
        />
      </Wrapper>

      <Wrapper>
        <TextField
          label="Mobile"
          value={mobile}
          onChangeText={setMobile}
          placeholder="9xxxxxx"
          prefix="+63"
        />
      </Wrapper>

      <Wrapper>
        <TextField
          label="Price"
          value={price}
          onChangeText={setPrice}
          placeholder="0"
          LeftComponent={
            <Text variant="label" color="shade7">
              $
            </Text>
          }
        />
      </Wrapper>
    </Container>
  );
});
