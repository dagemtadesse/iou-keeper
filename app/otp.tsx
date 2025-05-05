import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "@/components/layout/header";
import { typography } from "@/components/theme/typography";
import { FilledButton } from "@/components/common/Button";
import { Colors } from "@/components/theme/color";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKey } from "@/constant/storage-key";
import { router } from "expo-router";

const schema = yup
  .object({
    email: yup.string().email().required(),
    otp: yup.string().length(6).required(),
  })
  .required();

export default function OtpScreen() {
  const { handleSubmit, control, setValue, watch } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    (async () => {
      const email = await AsyncStorage.getItem(StorageKey.AUTH_EMAIL);
      if (!email) router.push("/");
      else setValue("email", email);
    })();
  }, []);

  const onSubmit = async ({ email, otp }: { otp: string; email: string }) => {
    try {
      await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      router.replace("/")
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Verify OTP" navigateToPrevious />

      {/* main content */}
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <Text
          style={[typography.body.large, { fontWeight: 300, marginBottom: 16 }]}
        >
          A one-time password has been sent to your email address <Text style={{fontWeight: 500}}>{watch('email')}</Text>.
        </Text>

        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            formState: { errors },
          }) => (
            <>
              <OtpInput
                type="numeric"
                numberOfDigits={6}
                theme={{
                  pinCodeTextStyle: { color: Colors.onBackground },
                  pinCodeContainerStyle: { backgroundColor: Colors.surface },
                  focusedPinCodeContainerStyle: { borderColor: Colors.primary },
                  focusStickStyle: { backgroundColor: Colors.primary },
                }}
                onBlur={onBlur}
                onTextChange={onChange}
              />
            </>
          )}
          name="otp"
        />
      </View>

      {/* footer */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <FilledButton pressableProps={{ onPress: handleSubmit(onSubmit) }}>
          <Text style={typography.label.large}>Verify</Text>
        </FilledButton>
      </View>
    </View>
  );
}
