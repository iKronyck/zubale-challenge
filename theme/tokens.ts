import { createTokens } from "@tamagui/core";
import { radius, size, space, zIndex } from "@tamagui/themes";

const light = {
  background: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#8E8E8E",
  iconActive: "#262626",
  border: "#DBDBDB",
  linkAction: "#00376B",
  likeHeart: "#ED4956",
  followButton: "#0095F6",
};

const dark = {
  background: "#000000",
  textPrimary: "#FFFFFF",
  textSecondary: "#A8A8A8",
  iconActive: "#FAFAFA",
  border: "#262626",
  linkAction: "#0095F6",
  likeHeart: "#ED4956",
  followButton: "#0095F6",
};

export const tokens = createTokens({
  color: {
    // light theme
    background: light.background,
    textPrimary: light.textPrimary,
    textSecondary: light.textSecondary,
    iconActive: light.iconActive,
    border: light.border,
    linkAction: light.linkAction,
    likeHeart: light.likeHeart,
    followButton: light.followButton,

    // dark theme
    darkBackground: dark.background,
    darkTextPrimary: dark.textPrimary,
    darkTextSecondary: dark.textSecondary,
    darkIconActive: dark.iconActive,
    darkBorder: dark.border,
    darkLinkAction: dark.linkAction,
    darkLikeHeart: dark.likeHeart,
    darkFollowButton: dark.followButton,
  },
  size,
  radius,
  space,
  zIndex,
});
