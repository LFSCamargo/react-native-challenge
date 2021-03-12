import React, { useEffect, useCallback } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observer } from "mobx-react-lite";
import { Title, Appbar, Subheading, Avatar, Button } from "react-native-paper";
import { AvatarWrapper, ContentWrapper, CustomButton, Wrapper } from "./styles";
import { useUser } from "../../store";
import { useLoading } from "../../hooks";
import { CommonActions, useNavigation } from "@react-navigation/core";
import { Stacks } from "../../router";
import { Loading } from "../../components";
import { Alert } from "react-native";

function Home() {
  const { getUser, user } = useUser();
  const { dispatch } = useNavigation();
  const { triggerLoading, loading } = useLoading();

  const getData = useCallback(async () => {
    try {
      triggerLoading(true);
      await getUser();
    } catch (error) {
      Alert.alert("Error", "Check your internet connection and try again");
    } finally {
      triggerLoading(false);
    }
  }, [getUser]);

  const logout = useCallback(async () => {
    await AsyncStorage.clear();
    dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: Stacks.Public,
          },
        ],
      })
    );
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      {loading ? (
        <Loading />
      ) : (
        <ContentWrapper>
          <AvatarWrapper>
            {user && user.picture ? (
              <Avatar.Image size={100} source={{ uri: user && user.picture }} />
            ) : (
              <Avatar.Icon icon="account" />
            )}
          </AvatarWrapper>
          <Title>
            Welcome {(user && user.name) || ""}, we are glad to have you here
          </Title>
          <Subheading>
            Your registered birth date is{" "}
            {user && user.birthDate
              ? moment(user.birthDate).format("MM/DD/YYYY")
              : "00/00/00"}
          </Subheading>
          <CustomButton onPress={logout} mode="contained">
            Logout
          </CustomButton>
        </ContentWrapper>
      )}
    </Wrapper>
  );
}
export default observer(Home);
