/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Box, Modal, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../CommonStyles/Button/CommonBtn";
import { PopUpSuccess } from "./components/PopUpSuccess";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50vw",
  maxWidth: "600px",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: " 2rem",
  borderRadius: "16px",
  maxHeight: "95vh",
  overflowY: "hidden",
  overflowX: " hidden",
};

const DialogLogin = ({ open, toggle, isLogged, onSubmitSignIn }) => {
  //! State
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter email"),
    password: Yup.string()
      .required("Please enter password")
      .min(7, "Password should be minium 7 Characters"),
  });

  //! Render
  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isLogged ? (
            <PopUpSuccess />
          ) : (
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={initialValues}
              onSubmit={onSubmitSignIn}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Typography
                    align="center"
                    variant="h4"
                    component="div"
                    sx={{ pb: 2 }}
                  >
                    Sign in
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    component="div"
                  >
                    If you have made a purchase on the Website before, you can
                    use the <a href="#">"Get password"</a> feature to access
                    your account by email.
                  </Typography>
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    fullWidth
                    required
                    sx={{ my: 2 }}
                    error={
                      Boolean(props.errors.email) &&
                      Boolean(props.touched.email)
                    }
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    error={
                      Boolean(props.errors.password) &&
                      Boolean(props.touched.password)
                    }
                    helperText={<ErrorMessage name="password" />}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading" : "Sign in"}
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default React.memo(DialogLogin);
