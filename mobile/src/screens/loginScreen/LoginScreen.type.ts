import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export type TLoginScreenViewProps = {
  email: string;
  setEmail: () => void;
  password: string;
  setPassword: () => void;
  onPress: () => void;
  isLoading: boolean;
  message: string;
};
