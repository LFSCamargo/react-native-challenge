import React from "react";
import { Alert } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/core";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Appbar, Title, Subheading } from "react-native-paper";
import { useUser } from "../../store";
import { initialValues, validationSchema } from "./form";
import {
  ContentWrapper,
  Wrapper,
  CustomInput,
  Error,
  InputWrapper,
} from "./styles";
import { Stacks } from "../../router";
import { useLoading } from "../../hooks";

function Login() {
  const { dispatch } = useNavigation();
  const { loading, triggerLoading } = useLoading();
  const { login } = useUser();
  const {
    values,
    setFieldValue,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    setFieldTouched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }) => {
      try {
        triggerLoading(true);
        await login(email, password);
        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: Stacks.Private,
              },
            ],
          })
        );
      } catch (err) {
        if (!err.response.data.message) {
          Alert.alert(
            "Error",
            "An unexpected error occurred check your internet connection and try again"
          );
        }
        Alert.alert("Error", err.response.data.message);
      } finally {
        triggerLoading(false);
      }
    },
  });

  return (
    <Wrapper>
      <Appbar.Header>
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <ContentWrapper>
        <Title>Login</Title>
        <Subheading>Welcome, fill the form bellow to continue</Subheading>
        <InputWrapper>
          <CustomInput
            label="Email"
            value={values.email}
            onChangeText={(text) => setFieldValue("email", text)}
            onBlur={(event: any) => {
              setFieldTouched("email");
              handleBlur(event);
            }}
          />
          {touched.email && errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>
        <InputWrapper>
          <CustomInput
            label="Password"
            secureTextEntry
            value={values.password}
            onChangeText={(text) => setFieldValue("password", text)}
            onBlur={(event: any) => {
              setFieldTouched("password");
              handleBlur(event);
            }}
          />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </InputWrapper>
        <Button disabled={loading} mode="contained" onPress={handleSubmit}>
          LOGIN
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
}

export default observer(Login);
