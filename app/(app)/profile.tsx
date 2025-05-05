import React from "react";
import { View, Text, Pressable } from "react-native";

import { IconProps } from "@/components/icons";
import { ProfileIcon } from "@/components/icons/profile";
import { SignOut } from "@/components/icons/SignOut";
import { Colors } from "@/components/theme/color";
import { typography } from "@/components/theme/typography";
import { useSessionStore } from "@/store/useSessionStore";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKey } from "@/constant/storage-key";

export default function Profile() {
  const { session, setSession } = useSessionStore();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem(StorageKey.AUTH_EMAIL);
    
    setSession(null);
    router.push("/sign-in");
  };

  return (
    <View style={{ padding: 16 }}>
      {/* // profile section */}
      <View style={{ alignItems: "center", gap: 16 }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            width: 96,
            aspectRatio: 1,
            borderRadius: 1000,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProfileIcon color={Colors.onPrimary} size={80} />
        </View>

        <View style={{ gap: 4 }}>
          <Text
            style={[
              typography.headline.small,
              { color: Colors.onBackground, textAlign: "center" },
            ]}
          >
            {session?.user.email}
          </Text>
          <Text
            style={[
              typography.body.medium,
              { color: Colors.onBackground, textAlign: "center" },
            ]}
          >
            {session?.user.email}
          </Text>
        </View>
      </View>

      {/* actions */}
      <View
        style={{
          backgroundColor: Colors.backgroundDark,
          marginTop: 32,
          borderRadius: 8,
        }}
      >
        <ListItem
          onPress={() => handleLogout()}
          label="Logout"
          Icon={SignOut}
          color={Colors.error}
        />
      </View>
    </View>
  );
}

export const ListItem = ({
  onPress,
  label,
  Icon,
  color = Colors.onBackground,
}: {
  onPress: () => void;
  label: string;
  Icon: React.ComponentType<IconProps>;
  color?: string;
}) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        padding: 16,
        overflow: "hidden",
        borderRadius: 8,
      }}
      android_ripple={{
        color: Colors.hover,
        borderless: false,
        foreground: true,
      }}
      onPress={onPress}
    >
      {<Icon color={color} />}
      <Text style={[{ color }]}>{label}</Text>
    </Pressable>
  );
};
