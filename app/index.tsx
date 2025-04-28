import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "@/components/layout/header";
import { typography } from "@/components/theme/typography";
import { Colors } from "@/components/theme/color";
import { RightArrow } from "@/components/icons/RightArrow";
import { CustomInput } from "@/components/common/CustomInput";
import { FilledButton } from "@/components/common/Button";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export default function Index() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: { email: string }) => router.push("/otp");

  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar style={"light"} />

      <Header />
      {/* content */}
      <View style={{ paddingHorizontal: 12, flex: 1, paddingVertical: 16 }}>
        <Text style={[typography.display.small]}>Let’s get Started</Text>
        <Text
          style={[typography.body.medium, { fontWeight: 300, marginTop: 8 }]}
        >
          Please, enter your email to setup your account
        </Text>

        <View style={{ marginTop: 32 }}>
          <Text
            style={[typography.body.large, { marginLeft: 4, marginBottom: 12 }]}
          >
            Email
          </Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                placeholder="Enter your email"
                enterKeyHint="next"
                inputMode="email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={!!errors.email}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text
              style={[
                typography.body.small,
                { color: Colors.error, marginTop: 4, marginLeft: 4 },
              ]}
            >
              {errors.email.message}
            </Text>
          )}
        </View>
      </View>
      {/* footer */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <FilledButton pressableProps={{ onPress: handleSubmit(onSubmit) }}>
          <Text style={typography.label.large}>Next</Text>
          <RightArrow />
        </FilledButton>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  pageContainer: {
    flex: 1,
  },
  heroText: {
    color: "#fff",
    fontSize: 45,
    lineHeight: 54,
    fontWeight: 500,
    marginTop: 24,
  },
  heroDescription: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    fontWeight: "300",
  },
  buttonShape: {
    marginTop: 64,
  },
} as const;
