import React from "react";
import ButtonMUI from "@mui/material/Button";
import { styled } from "@mui/material";
import * as colors from "../../themeCustom/ThemeColor";

//! State

export const colorBtnEnum = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  error: "error",
  info: "info",
  warning: "warning",
  accent: "accent",
  white: "white",
  dark: "dark",
  link: "link",
};

const ButtonStyled = styled(ButtonMUI)((propsStyled) => {
  const { variant, color, theme } = propsStyled;

  let bgColorHovered = "";
  let colorTextHovered = "";

  if (variant === "outlined") {
    switch (color) {
      case colorBtnEnum.primary:
        bgColorHovered = theme.palette.primary.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.secondary:
        bgColorHovered = theme.palette.secondary.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.success:
        bgColorHovered = theme.palette.success.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.error:
        bgColorHovered = theme.palette.error.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.info:
        bgColorHovered = theme.palette.info.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.warning:
        bgColorHovered = theme.palette.warning.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.white:
        bgColorHovered = theme.palette.white.main;
        colorTextHovered = colors.black[500];
        break;
      case colorBtnEnum.dark:
        bgColorHovered = theme.palette.dark.main;
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.accent:
        bgColorHovered = theme.palette.accent.main;
        colorTextHovered = colors.white[500];
        break;

      default:
        break;
    }
  } else if (variant === "contained") {
    switch (color) {
      case colorBtnEnum.white:
        bgColorHovered = colors.white[700];
        colorTextHovered = colors.black[500];
        break;
      case colorBtnEnum.accent:
        bgColorHovered = colors.red[600];
        colorTextHovered = colors.white[500];
        break;
      case colorBtnEnum.dark:
        bgColorHovered = colors.blue[900];
        colorTextHovered = colors.white[500];
        break;

      default:
        break;
    }
  }

  return {
    "&:hover": {
      backgroundColor: `${bgColorHovered} !important`,
      color: `${colorTextHovered} !important`,
    },
  };
});

const Button = (props) => {
  const { sx, isRound, ...remainProps } = props;
  const customSxStyle = () => {
    if (isRound) {
      return {
        borderRadius: "100px",
        ...(sx || {}),
      };
    }
    return sx;
  };

  //! Render
  return <ButtonStyled sx={customSxStyle()} {...remainProps} />;
};

export default Button;
