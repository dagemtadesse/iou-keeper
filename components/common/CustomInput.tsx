import { TextInput, TextInputProps } from "react-native";
import { Colors } from "../theme/color";
import { typography } from "../theme/typography";
import { useState } from "react";

export const CustomInput = (props: TextInputProps & { isError?: boolean }) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusedStyle = { borderColor: Colors.primary };
  const errorStyle = { borderColor: Colors.error };

  const modifiedProps = {
    placeholderTextColor: "#fff",
    cursorColor: Colors.primary,
    ...props,
    style: [
      {
        borderWidth: 1,
        borderColor: Colors.outline,
        padding: 16,
        borderRadius: 8,
        height: 56,
        backgroundColor: Colors.surface,
        ...typography.body.medium,
      },
      isFocused && focusedStyle,
      props.isError && errorStyle,
      props.style,
    ],
  };
  return (
    <TextInput
      {...modifiedProps}
      onFocus={(e) => {
        setIsFocused(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        props.onBlur?.(e);
      }}
    />
  );
};
