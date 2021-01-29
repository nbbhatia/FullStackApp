import React, { Component } from "react";
import { Formik } from "formik";
import { Grid, Typography, Drawer, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Form from "./form";
import { validation } from "./validation.js";
import { signUp } from "../../store/action/signupaction";
const style = (theme) => ({
  paper: {
    background: "#fff",
    width: "65%",
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
      height: "90%",
    },
  },
  closeButton: {
    height: 0,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  formText: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans",
    // width: 460,
    paddingBottom: 40,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  blessingText: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans",
    width: "max-content",
  },
  ThanksGrid: {
    display: "block",
  },
});

class signUpForm extends Component {
  state = {
    submit: false,
    resume: "",
  };

  render() {
    const { open, close, classes, _signUp, jobTitle } = this.props;
    console.log("_signUp", _signUp);
    const initialval = {
      fullName: "",
      Email: "",
      phoneNumber: "",
      Password: "",
      ConfirmPassword: "",
    };

    const handleFile = (url) => {
      this.setState({
        resume: url,
      });
    };

    const handleSubmit = (val) => {
      this.props.signUp({
        fullName: val.fullName,
        email: val.Email,
        PhoneNumber: val.phoneNumber,
        Password: val.Password,
        ConfirmPassword: val.ConfirmPassword,
      });
      this.setState({
        submit: true,
      });
    };

    return (
      <Grid md={12} sm={12} xs={12} item container>
        <Grid md={2} />
        <Grid md={8} item container justify="center">
          <Formik
            initialValues={initialval}
            close={close}
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            {(props) => (
              <Form {...props} ResumeFile={(url) => handleFile(url)} />
            )}
          </Formik>
        </Grid>
        <Grid md={2} />
      </Grid>
    );
  }
}
const mapStateToProps = ({ SignUpReducer }) => {
  return { _signUp: SignUpReducer };
};
export default withRouter(
  connect(mapStateToProps, { signUp })(withStyles(style)(signUpForm))
);
