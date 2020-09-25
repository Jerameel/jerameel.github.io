import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '../../../src/components/module/Header';
import Container from '../../components/Container';

storiesOf('module/Header', module).add('Summary', () => (
  <Container>
    <Header />
  </Container>
));
