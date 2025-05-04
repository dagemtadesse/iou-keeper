import { TabTriggerSlotProps } from "expo-router/ui";
import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import { typography } from "../theme/typography";
import { Colors } from "../theme/color";

interface CustomTabButtonProps
  extends React.PropsWithChildren,
    TabTriggerSlotProps {
  icon: React.ReactElement;
}

export const TabButton = React.forwardRef<View, CustomTabButtonProps>(
  (props, ref) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        style={[styles.button, props.isFocused && styles.focusedButton]}
        android_ripple={{ color: Colors.hover, borderless: false, foreground: true }}
      >
        {React.cloneElement(props.icon, {
          color: props.isFocused ? Colors.onBackground : Colors.textVariant,
        })}

        <Text
          style={[
            typography.label.large,
            { color: props.isFocused ? Colors.onBackground : Colors.textVariant },
          ]}
        >
          {props.children}
        </Text>
      </Pressable>
    );
  }
);

TabButton.displayName = "CustomTabButton";

const styles = StyleSheet.create({
  button: {
    flex: 1,
    gap: 4,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: 'hidden'
  },
  focusedButton: {},
});
