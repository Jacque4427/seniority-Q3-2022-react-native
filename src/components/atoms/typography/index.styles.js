import styled from 'styled-components/native';
import {COLORS} from '../../../helpers/constants';

export const StyledText = styled.Text`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  color: ${props => (props.color ? props.color : COLORS.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`;
