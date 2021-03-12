import { Platform } from "react-native";
import { TextInput, Text } from "react-native-paper";
import styled from "styled-components/native";
import { getTheme, conditionalStyle } from "styled-toolset";

const defaultBehavior = Platform ? "padding" : undefined;

const background = getTheme("colors.background");
const errorColor = getTheme("colors.errorTextColor");
const hasError = conditionalStyle("hasError");

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${background};
`;

export const Error = styled(Text)`
  color: ${errorColor};
`;

export const ContentWrapper = styled.KeyboardAvoidingView.attrs({
  behavior: defaultBehavior,
  keyboardVerticalOffset: 20,
  enabled: true,
})`
  flex: 1;
  padding: 40px;
`;

export const InputWrapper = styled.View`
  margin: 10px 0px;
`;

export const CustomInput = styled(TextInput).attrs({
  mode: "outlined",
})``;
