import { ReactNode } from "react";
import { Pressable, PressableProps, View } from "react-native";
import { Colors } from "../theme/color";

export const IconButton = ({
  children,
  pressableProps,
}: {
  children: ReactNode;
  pressableProps?: PressableProps;
}) => {
  return (
    <View style={{ borderRadius: 1000, overflow: "hidden" }}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        style={{ padding: 8, borderRadius: 1000 }}
        {...pressableProps}
      >
        {children}
      </Pressable>
    </View>
  );
};

export const FilledButton = ({
  children,
  pressableProps,
}: {
  children: ReactNode;
  pressableProps?: PressableProps;
}) => {
  return (
    <View style={[{ borderRadius: 8, overflow: "hidden" }]}>
      <Pressable
        style={{
          backgroundColor: Colors.primary,
          paddingVertical: 12,
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          overflow: "hidden",
          borderRadius: 8,
        }}
        android_ripple={{ color: "#fff" }}
        {...pressableProps}
      >
        {children}
      </Pressable>
    </View>
  );
};
