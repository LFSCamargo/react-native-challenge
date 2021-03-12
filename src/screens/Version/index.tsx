import React from "react";
import { Appbar, Title } from "react-native-paper";
import { Wrapper, ContentWrapper } from "./styles";

function Version() {
  return (
    <Wrapper>
      <Appbar.Header>
        <Appbar.Content title="Version" />
      </Appbar.Header>
      <ContentWrapper>
        <Title>Version 1.0.0</Title>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Version;
