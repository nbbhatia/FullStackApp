import React, { Component } from "react";
import { Formik } from "formik";
import { Grid, Typography, Drawer, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Form from "./form";
import { validation } from "./validation.js";
// import { ApplyNowAction } from "../../../store/actions/careeractions/applynow.action";
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

class signUp extends Component {
  state = {
    submit: false,
    resume: "",
  };

  render() {
    const { open, close, classes, _applyNow, jobTitle } = this.props;
    const initialval = {
      fullName: "",
      phoneNumber: "",
      Email: "",
      Resume: "",
      Qualification: "",
      Grade: "",
      NoticePeriod: "",
      Profiles: "",
      CurrentCTC: "",
      Experience: "",
      ExpectedCTC: "",
    };
    // let vacancy = jobTitle.title;
    // resume file event
    const handleFile = (url) => {
      this.setState({
        resume: url,
      });
    };
    // form submit
    const handleSubmit = (val) => {
      // this.props.ApplyNowAction({
      //   name: val.fullName,
      //   phone: val.phoneNumber,
      //   email: val.Email,
      //   resumeUrl: this.state.resume,
      //   qualification: val.Qualification,
      //   grade: val.Grade,
      //   previousProfile: val.Profiles,
      //   TotalExperince: val.Experience,
      //   CurrentCTC: val.CurrentCTC,
      //   ExpectedCTC: val.ExpectedCTC,
      //   NoticePeriod: val.NoticePeriod,
      //   job: jobTitle._id,
      // });
      this.setState({
        submit: true,
      });
    };

    return (
      <Grid md={12} sm={12} xs={12} item container>
        <Formik
          initialValues={initialval}
          close={close}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          {(props) => <Form {...props} ResumeFile={(url) => handleFile(url)} />}
        </Formik>
      </Grid>
    );
  }
}
// const mapStateToProps = ({ ApplyNowReducer }) => {
//   return { _applyNow: ApplyNowReducer };
// };
// export default withRouter(
//   connect(mapStateToProps, { ApplyNowAction })(withStyles(style)(ApplyNow))
// );
export default withStyles(style)(signUp);
