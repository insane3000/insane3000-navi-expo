import React from "react";
import { ActivityIndicator, View } from "react-native";
import styled from "styled-components/native";
const SpinnerContainerSt = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  background: #070707;
`;
export default function Spinner() {
  return (
    <SpinnerContainerSt>
      <ActivityIndicator size="large" color="#343436" />
    </SpinnerContainerSt>
  );
}
