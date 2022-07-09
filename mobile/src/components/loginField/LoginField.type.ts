import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export type TLoginFieldProps = {
  emailPlaceholder: string;
  passwordPlaceholder: string;
  emailTextOnChange: () => void;
  passwordTextOnChange: () => void;
  emailTextValue?: string;
  passwordTextValue?: string;
  propsEmailTextbox?: TextInputProps;
  propsPasswordTextbox?: TextInputProps;
};
