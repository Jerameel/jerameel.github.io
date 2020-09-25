import React, { useState } from 'react';

import { Eye, EyeOff, Search } from 'components/base/SVG';
import Text from 'components/base/Text';
import { useTheme } from 'utils/Theme';

import { TextFieldProps } from './TextField.props';
import {
  Container,
  LeftComponentContainer,
  FieldContainer,
  Field,
  VisibilityContainer,
  Error,
  Prefix,
} from './TextField.style';

const TextField = (props: TextFieldProps): JSX.Element => {
  const theme = useTheme();
  const {
    id,
    type,
    label,
    value = '',
    onChangeText = () => null,
    placeholder,
    secured,
    error = '',
    prefix,
    LeftComponent = null,
    className = undefined,
    onBlur = () => null,
    style,
    InputProps,
  } = props;

  const [showSecuredText, setShowSecuredText] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(event.target.value);
  };

  const VisibilityIcon = showSecuredText ? EyeOff : Eye;
  const defaultInputType = type || 'text';

  return (
    <Container className={className} style={style}>
      <Text variant="label" color={'shade8'}>
        {label}
      </Text>
      <FieldContainer error={(error || '').length > 0}>
        {LeftComponent && (
          <LeftComponentContainer>{LeftComponent}</LeftComponentContainer>
        )}
        {prefix && <Prefix>{prefix}</Prefix>}
        <Field
          id={id}
          type={secured && !showSecuredText ? 'password' : defaultInputType}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          {...InputProps}
        />
      </FieldContainer>
      {(error || '').length > 0 && (
        <Error variant="caption" color="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default TextField;
