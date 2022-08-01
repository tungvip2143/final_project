import { createTheme } from "@mui/material";
import * as colors from "./ThemeColor";

const themePalette = createTheme({
  //! State

  palette: {
    secondary: {
      main: colors.grey[500],
    },
    white: {
      main: colors.white[500],
    },
    dark: {
      main: colors.blue[800],
      contrastText: colors.white[500],
    },
    accent: {
      main: colors.red[500],
      contrastText: colors.white[500],
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "link" },
          style: {
            color: colors.blue[1000],
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
});

export default themePalette;
