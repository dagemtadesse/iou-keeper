import Svg, { Path } from "react-native-svg";
import { Colors } from "../theme/color";

export const CircleIcon = ({color = Colors.onBackground}: {color?: string}) => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M12.5 1.5C6.701 1.5 2 6.201 2 12C2 17.799 6.701 22.5 12.5 22.5C18.299 22.5 23 17.799 23 12C23 6.201 18.299 1.5 12.5 1.5ZM12.5 21C7.52975 21 3.5 16.9702 3.5 12C3.5 7.02975 7.52975 3 12.5 3C17.4702 3 21.5 7.02975 21.5 12C21.5 16.9702 17.4702 21 12.5 21Z"
        fill={color}
      />
    </Svg>
  );
};
