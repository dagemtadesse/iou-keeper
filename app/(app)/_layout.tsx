import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";

import { CircleIcon } from "@/components/icons/Circle";
import { HomeIcon } from "@/components/icons/Home";
import { ProfileIcon } from "@/components/icons/profile";
import { TabButton } from "@/components/layout/TabButton";
import { supabase } from "@/lib/supabase";
import { Redirect } from "expo-router";
import { useSessionStore } from "@/store/useSessionStore";

export default function AppLayout() {
  const { setSession, setIsLoading, isLoading, session } = useSessionStore();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoading(false);
      setSession(session);
    })();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  if (!session && !isLoading) return <Redirect href="/sign-in" />;

  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabList}>
        <TabTrigger name="home" href="/" style={styles.tabTrigger} asChild>
          <TabButton icon={<HomeIcon />}>Home</TabButton>
        </TabTrigger>
        <TabTrigger
          name="search"
          href="/groups"
          style={styles.tabTrigger}
          asChild
        >
          <TabButton icon={<CircleIcon />}>Groups</TabButton>
        </TabTrigger>
        <TabTrigger
          name="settings"
          href="/profile"
          style={styles.tabTrigger}
          asChild
        >
          <TabButton icon={<ProfileIcon />}>Profile</TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    width: "100%",
    gap: 16,
  },
  tabTrigger: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
