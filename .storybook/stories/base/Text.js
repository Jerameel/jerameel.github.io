import React from 'react';

import { storiesOf } from '@storybook/react';

import Text from '../../../src/components/base/Text';
import Container from '../../components/Container';

storiesOf('base/Text', module).add('Summary', () => (
  <Container>
    <Text variant="title">Title</Text>
    <Text variant="subtitle">Subtitle</Text>
    <Text variant="body">Body</Text>
    <Text variant="label">Label</Text>
    <Text variant="caption">Caption</Text>
  </Container>
));
