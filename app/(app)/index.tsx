import { Text, View } from "react-native";

import { Colors } from "@/components/theme/color";
import { typography } from "@/components/theme/typography";
import { Header } from "@/components/layout/header";
import { IconButton } from "@/components/common/Button";
import { SearchIcon } from "@/components/icons/Search";

export default function Index() {
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Header
        hideAppIcon
        showTitle={false}
        containerStyle={{ justifyContent: "flex-end" }}
      >
        <IconButton pressableProps={{ onPress: () => {} }}>
          <SearchIcon />
        </IconButton>
      </Header>

      {/* content */}
      <View style={{ flex: 1, padding: 16, gap: 24 }}>
        <View>
          <Text
            style={[typography.headline.large, { color: Colors.onBackground }]}
          >
            Welcome to the app!
          </Text>
          <Text style={[typography.body.large, { fontWeight: 300, color: Colors.onBackground }]}>
            You are logged in!
          </Text>
        </View>

        <View
          style={{
            alignItems: "stretch",
            height: 300,
            gap: 16,
          }}
        >
          <View
            style={{
              flex: 8,
              backgroundColor: Colors.primaryVariant,
              borderRadius: 8,
            }}
          ></View>
          <View style={{ flex: 6, gap: 16, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.primaryVariant,
                borderRadius: 8,
              }}
            ></View>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.primaryVariant,
                borderRadius: 8,
              }}
            ></View>
          </View>
        </View>

        <View>
          <Text style={[typography.headline.small, { color: Colors.onBackground }]}>Transactions</Text>
        </View>
      </View>
    </View>
  );
}
