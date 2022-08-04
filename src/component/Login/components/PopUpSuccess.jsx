import { Typography } from "@mui/material";
import themeCustom from "../../themeCustom";
import { useEffect, useRef } from "react";
import LoginSuccess from "../components/LoginSuccess";

const { colors } = themeCustom;
export const PopUpSuccess = (props) => {
  const { changeShowPopUpSuccess, currentState } = props;

  const timer = useRef();

  useEffect(() => {
    if (currentState && timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      changeShowPopUpSuccess(false);
    }, 2000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [currentState, changeShowPopUpSuccess]);
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
