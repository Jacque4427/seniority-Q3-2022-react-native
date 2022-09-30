import React from 'react';
import {StyledButton, Title} from './index.styles';

export function CustomButton({
  testID,
  title,
  colorText,
  onPress,
  disabled,
  backgroundColor,
  height,
  width,
  styles,
}) {
  console.log('siiii');
  return (
    <StyledButton
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      backgroundColor={backgroundColor}
      height={height}
      style={{width: width, ...styles}}>
      <Title color={colorText}>{title}</Title>
    </StyledButton>
  );
}
