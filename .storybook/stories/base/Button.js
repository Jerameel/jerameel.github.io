import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../../src/components/base/Button';
import { Check, Heart } from '../../../src/components/base/SVG';
import Container from '../../components/Container';

storiesOf('base/Button', module).add('Summary', () => (
  <Container background="white">
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ marginRight: '20px', marginBottom: '30px' }}>
        <Button text="Primary Button" style={{ marginBottom: '5px' }} />
        <Button
          text="Primary Button with Icon"
          icon={<Heart fill="#fff" height={15} width={20} />}
          style={{ marginBottom: '5px' }}
        />
        <Button
          text="Primary Button with Icon"
          icon={<Heart fill="#fff" height={15} width={20} />}
          iconPosition="before"
          style={{ marginBottom: '5px' }}
        />
        <Button
          icon={<Heart fill="#fff" height={15} width={20} />}
          style={{ marginBottom: '5px' }}
        />
        <Button
          text="Primary Button Loading"
          style={{ marginBottom: '5px' }}
          loading
        />
      </div>

      <div style={{ marginRight: '20px', marginBottom: '30px' }}>
        <Button
          text="Disabled Button"
          variant="disabled"
          style={{ marginBottom: '5px' }}
        />
        <Button
          text="Disabled Button with Icon"
          variant="disabled"
          icon={<Heart fill="#000" height={15} width={20} />}
          style={{ marginBottom: '5px' }}
        />
        <Button
          text="Disabled Button with Icon"
          variant="disabled"
          icon={<Heart fill="#000" height={15} width={20} />}
          iconPosition="before"
          style={{ marginBottom: '5px' }}
        />
        <Button
          variant="disabled"
          icon={<Heart fill="#000" height={15} width={20} />}
          style={{ marginBottom: '5px' }}
        />
      </div>
      <div style={{ marginRight: '20px' }}>
        <Button
          text="Success Button"
          style={{ marginBottom: '5px' }}
          variant="success"
          icon={<Check fill="#000" />}
        />
      </div>
    </div>
  </Container>
));
