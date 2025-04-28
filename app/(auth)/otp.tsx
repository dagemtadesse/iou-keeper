import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "@/components/layout/header";
import { typography } from "@/components/theme/typography";
import { FilledButton } from "@/components/common/Button";
import { Colors } from "@/components/theme/color";

const schema = yup
  .object({
    otp: yup.string().length(6).required()
  })
  .required();

export default function OtpScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { otp: string }) => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={"light"} />
      <Header title="Verify OTP" navigateToPrevious />

      {/* main content */}
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <Text
          style={[typography.body.large, { fontWeight: 300, marginBottom: 16 }]}
        >
          A one-time password has been sent to your registered email address.
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
    </SafeAreaView>
  );
}
