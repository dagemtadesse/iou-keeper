import { useEffect, useState } from "react";
import { Text } from "react-native";

import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Redirect } from "expo-router";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
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

  if (isLoading) return <Text>Loading...</Text>

  if (!session && !isLoading) return <Redirect href="/sign-in" />

  return <Text>Logged in</Text>
}
