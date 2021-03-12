import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { getTheme } from "styled-toolset";

const background = getTheme("colors.background");

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${background};
`;

export const ContentWrapper = styled.View`
  padding: 40px;
`;

export const AvatarWrapper = styled.View`
  margin: 20px 0px;
`;

export const CustomButton = styled(Button)`
  max-width: 200px;
  margin: 20px 0px;
`;
