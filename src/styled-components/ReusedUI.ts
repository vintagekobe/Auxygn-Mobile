import { TextInput } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

/// --------------- -------- LAYOUT ---------------- ----------------- ///
// most basic wrapper to be used on all pages
export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
`;

// good for forms and columns
export const StyledColumnView = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const LineBreak = styled.View`
  height: 30px;
  width: 100%;
`;

/// --------------- -------- COMPONENTS ---------------- ----------------- ///
export const AuthTextInput = styled(TextInput)`
  border-radius: 40px;
  background-color: rgba(90, 90, 90, 0.01);
  border-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.text};
  border-width: 0.5px;
  padding: 15px;
`;

export const GradientButton = styled(Button)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    13deg,
    rgba(2, 0, 36, 1) 1%,
    rgba(98, 0, 234, 1) 43%,
    rgba(255, 255, 255, 0.007440476190476164) 100%
  );
`;
