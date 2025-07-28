import { Colors } from "@/constants/Colors";
import { createTokens } from "@tamagui/core";
import { radius, size, space, zIndex } from "@tamagui/themes";

export const tokens = createTokens({
  color: {
    // light theme
    background: Colors.light.background,
    textPrimary: Colors.light.textPrimary,
    textSecondary: Colors.light.textSecondary,
    iconActive: Colors.light.iconActive,
    border: Colors.light.border,
    linkAction: Colors.light.linkAction,
    likeHeart: Colors.light.likeHeart,
    followButton: Colors.light.followButton,

    // dark theme
    darkBackground: Colors.dark.background,
    darkTextPrimary: Colors.dark.textPrimary,
    darkTextSecondary: Colors.dark.textSecondary,
    darkIconActive: Colors.dark.iconActive,
    darkBorder: Colors.dark.border,
    darkLinkAction: Colors.dark.linkAction,
    darkLikeHeart: Colors.dark.likeHeart,
    darkFollowButton: Colors.dark.followButton,
  },
  size,
  radius,
  space,
  zIndex,
});
