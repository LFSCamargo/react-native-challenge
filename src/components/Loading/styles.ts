import styled from "styled-components/native";
import { getTheme } from "styled-toolset";

const background = getTheme("colors.background");

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${background};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: "large",
  animating: true,
})``;
