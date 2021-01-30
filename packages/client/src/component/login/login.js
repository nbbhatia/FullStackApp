import React, { Component } from "react";
import { Formik } from "formik";
import { Grid, Typography, Drawer, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Form from "./form";
import { validation } from "./validation.js";
import { login } from "../../store/action/signupaction";
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
    login: false,
  };

  render() {
    const { open, close, classes, _login, jobTitle } = this.props;

    const initialval = {
      Email: "",
      Password: "",
    };

    const handleFile = (url) => {
      this.setState({
        resume: url,
      });
    };

    const handleSubmit = (val) => {
      this.props.login({
        email: val.Email,
        Password: val.Password,
      });

      this.setState({
        submit: true,
      });
    };

    return (
      <Grid md={12} sm={12} xs={12} item container justify="center">
        <Grid md={8} item container justify="center">
          <Grid md={12} container item justify="center">
            <Typography style={{ fontSize: 20 }}>Login</Typography>
          </Grid>
          <Formik
            initialValues={initialval}
            close={close}
            onSubmit={handleSubmit}
            validationSchema={validation}
            response={this.state.login}
          >
            {(props) => (
              <Form {...props} ResumeFile={(url) => handleFile(url)} />
            )}
          </Formik>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = ({ LoginReducer }) => {
  return { _login: LoginReducer };
};
export default withRouter(
  connect(mapStateToProps, { login })(withStyles(style)(signUpForm))
);
