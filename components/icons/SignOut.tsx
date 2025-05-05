import Svg, { Path } from "react-native-svg";
import { Colors } from "../theme/color";
import { IconProps } from ".";

export const SignOut = ({
  size = 24,
  color = Colors.onBackground,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.5 22.5H13.5C13.8978 22.5 14.2794 22.342 14.5607 22.0607C14.842 21.7794 15 21.3978 15 21V18.75H13.5V21H4.5V3H13.5V5.25H15V3C15 2.60218 14.842 2.22064 14.5607 1.93934C14.2794 1.65804 13.8978 1.5 13.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5Z"
        fill={color}
      />
      <Path
        d="M15.4395 15.4395L18.129 12.75H7.5V11.25H18.129L15.4395 8.5605L16.5 7.5L21 12L16.5 16.5L15.4395 15.4395Z"
        fill={color}
      />
    </Svg>
  );
};
