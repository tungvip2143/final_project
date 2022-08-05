import { Typography } from "@mui/material";
import themeCustom from "../../themeCustom";
import LoginSuccess from "../components/LoginSuccess";

const { colors } = themeCustom;

export const PopUpSuccess = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <section>
      <Typography
        variant="h4"
        align="center"
        component="h1"
        sx={{ color: colors.green[500] }}
      >
        Login Success!
        <LoginSuccess />
      </Typography>
    </section>
  );
};
