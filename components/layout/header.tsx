import { View, Text } from "react-native";
import { useRouter } from "expo-router";

import { Logo } from "../icons/Logo";
import { typography } from "../theme/typography";
import { IconButton } from "../common/Button";
import { LeftArrow } from "../icons/LeftArrow";

export const Header = ({
  showTitle = true,
  title = "IOU Keeper",
  navigateToPrevious = false,
}: {
  showTitle?: boolean;
  title?: string;
  navigateToPrevious?: boolean;
}) => {
  const router = useRouter();

  return (
    <>
      <View style={styles.headerContainer}>
        {navigateToPrevious ? (
          <IconButton pressableProps={{ onPress: () => router.back() }}>
            <LeftArrow />
          </IconButton>
        ) : (
          <Logo />
        )}

        {showTitle && <Text style={styles.headerText}>{title}</Text>}
      </View>
    </>
  );
};

const styles = {
  headerContainer: {
    padding: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  headerText: {
    ...typography.title.large,
  },
} as const;
