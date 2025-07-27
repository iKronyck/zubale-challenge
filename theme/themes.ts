import { tokens } from "@/theme";

export const themes = {
  light: {
    background: tokens.color.background,
    textPrimary: tokens.color.textPrimary,
    textSecondary: tokens.color.textSecondary,
    iconActive: tokens.color.iconActive,
    border: tokens.color.border,
    linkAction: tokens.color.linkAction,
    likeHeart: tokens.color.likeHeart,
    followButton: tokens.color.followButton,
  },
  dark: {
    background: tokens.color.darkBackground,
    textPrimary: tokens.color.darkTextPrimary,
    textSecondary: tokens.color.darkTextSecondary,
    iconActive: tokens.color.darkIconActive,
    border: tokens.color.darkBorder,
    linkAction: tokens.color.darkLinkAction,
    likeHeart: tokens.color.darkLikeHeart,
    followButton: tokens.color.darkFollowButton,
  },
};
