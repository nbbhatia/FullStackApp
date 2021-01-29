import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  textField: {
    "& label.Mui-focused": {
      fontSize: theme.typography.body1.fontSize,
      color: "#8B9092",
      fontWeight: theme.typography.fontWeightBold,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#8B9092",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#8B9092",
      },
      "&:hover fieldset": {
        borderColor: "#8B9092",
      },
    },
  },
  helperText: {
    marginLeft: 0,
    width: "auto",
  },
  helperTextResume: {
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  input: {
    // color: theme.palette.primary.main,
    color: "#454D50",
    fontFamily: "Nunito Sans",
    fontSize: theme.typography.body1.fontSize,
    // background: "#fff",
    "&::placeholder": {
      color: "#454D50",
    },
    webkitAutofill: "#fff",
    background: "transparent",
  },
  labelstyle: {
    fontFamily: "Nunito Sans",
    fontSize: 12,
    color: "#454D50",
  },

  Profiles: {
    paddingRight: 16,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 32,
      paddingRight: 0,
    },
  },
  PaddingRightAndBottomOnly: {
    paddingRight: 10,
    paddingBottom: 32,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  PaddingRightAndBottomOnlyExperience: {
    paddingRight: 10,
    paddingBottom: 32,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 10,
    },
  },
  paddingLeftandBottomOnly: {
    paddingLeft: 10,
    paddingBottom: 32,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  RightLeftBottom: {
    paddingLeft: 10,
    paddingBottom: 32,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  RightLeftBottomQulaification: {
    paddingLeft: 10,
    paddingBottom: 32,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 10,
      paddingLeft: 0,
    },
  },
  submitButton: {
    backgroundColor: theme.palette.secondary.light,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  submitText: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans",
    width: "max-content",
  },
  fileSize: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans",
    width: "max-content",
    position: "absolute",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
    },
  },
  AttachmentIcon: {
    color: theme.palette.secondary.dark,
  },
}));
const Form = (props) => {
  const classes = useStyle();
  const [size, setsize] = useState();
  // initial state
  let {
    values: {
      fullName,
      Email,
      phoneNumber,
      Resume,
      Qualification,
      Grade,
      NoticePeriod,
      Profiles,
      CurrentCTC,
      Experience,
      ExpectedCTC,
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    ResumeFile,
    setFieldValue,
  } = props;

  // resume file handle
  const uploadResume = (e) => {
    e.persist();
    var file = e.target.files[0];
    console.log("file", file);
    if (e.target.files[0] === null) {
      return null;
    } else if (file) {
      console.log("file.name", file.name);
      ResumeFile(file);
      setFieldValue("Resume", file.name);
    }

    if (file.size > 1048576) {
      setsize(true);
    } else {
      setsize(false);
    }
  };
  const [hover, sethover] = useState(false);
  // button hover animation
  const handleMouse = () => {
    sethover(true);
  };
  const hoverEventLeave = () => {
    sethover(false);
  };
  return (
    <Grid container>
      <form onSubmit={handleSubmit}>
        <Grid md={12} xs={12} sm={12} container item>
          <Grid md={1} item />
          <Grid md={10} xs={12} sm={12} item container>
            <Grid md={12} xs={12} sm={12} item container>
              <Grid
                md={6}
                xs={12}
                sm={12}
                item
                container
                className={classes.PaddingRightAndBottomOnly}
              >
                <TextField
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  helperText={touched.fullName ? errors.fullName : ""}
                  error={touched.fullName && Boolean(errors.fullName)}
                  value={fullName}
                  onChange={handleChange}
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  InputLabelProps={{
                    className: classes.labelstyle,
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                />
              </Grid>
              <Grid
                md={6}
                xs={12}
                sm={12}
                item
                container
                className={classes.paddingLeftandBottomOnly}
              >
                <TextField
                  name="Email"
                  variant="outlined"
                  label="Email"
                  className={classes.textField}
                  helperText={touched.Email ? errors.Email : ""}
                  error={touched.Email && Boolean(errors.Email)}
                  value={Email}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  InputLabelProps={{
                    className: classes.labelstyle,
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                />
              </Grid>
            </Grid>
            <Grid md={12} xs={12} sm={12} item container>
              <Grid
                md={6}
                xs={12}
                sm={12}
                item
                container
                className={classes.PaddingRightAndBottomOnly}
              >
                <TextField
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  value={phoneNumber}
                  className={classes.textField}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  InputLabelProps={{
                    className: classes.labelstyle,
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                />
              </Grid>
              <Grid md={6} xs={12} sm={12} item container>
                <Grid
                  md={7}
                  xs={6}
                  sm={6}
                  item
                  container
                  className={classes.RightLeftBottomQulaification}
                >
                  <TextField
                    name="Qualification"
                    variant="outlined"
                    label="Qualification"
                    className={classes.textField}
                    helperText={
                      touched.Qualification ? errors.Qualification : ""
                    }
                    error={
                      touched.Qualification && Boolean(errors.Qualification)
                    }
                    value={Qualification}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                </Grid>
                <Grid
                  md={5}
                  xs={6}
                  sm={6}
                  item
                  container
                  className={classes.paddingLeftandBottomOnly}
                >
                  <TextField
                    name="Grade"
                    variant="outlined"
                    label="Grade"
                    className={classes.textField}
                    helperText={touched.Grade ? errors.Grade : ""}
                    error={touched.Grade && Boolean(errors.Grade)}
                    value={Grade}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid md={12} xs={12} sm={12} item container>
              <Grid
                md={6}
                xs={12}
                sm={12}
                item
                container
                className={classes.PaddingRightAndBottomOnly}
              >
                <TextField
                  name="Profiles"
                  label="Profiles worked in"
                  variant="outlined"
                  helperText={touched.Profiles ? errors.Profiles : ""}
                  error={touched.Profiles && Boolean(errors.Profiles)}
                  value={Profiles}
                  onChange={handleChange}
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  InputLabelProps={{
                    className: classes.labelstyle,
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                />
              </Grid>
              <Grid
                md={6}
                xs={12}
                sm={12}
                item
                container
                className={classes.paddingLeftandBottomOnly}
              >
                <Grid md={12} xs={12} sm={12} item container>
                  <label>
                    <input
                      style={{ display: "none" }}
                      id="file"
                      name="file"
                      type="file"
                      maxLength="0"
                      onChange={(e) => uploadResume(e)}
                      readOnly={true}
                    />
                  </label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Resume"
                    value={Resume}
                    className={classes.textField}
                    helperText={touched.Resume ? errors.Resume : ""}
                    error={touched.Resume && Boolean(errors.Resume)}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperTextResume,
                    }}
                    style={{ height: 59 }}
                  />
                  <Grid xs={12} sm={12} container item justify="flex-end">
                    {!size ? (
                      <Typography
                        className={classes.fileSize}
                        style={{
                          position: "relative",
                        }}
                      >
                        File size should not exceed 1 MB
                      </Typography>
                    ) : (
                      <Typography
                        className={classes.fileSize}
                        style={{ color: "#CF0C2C" }}
                      >
                        File size should not exceed 1 MB
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid md={12} xs={12} sm={12} item container>
              <Grid md={6} xs={12} sm={12} item container>
                <Grid
                  md={8}
                  xs={6}
                  sm={6}
                  item
                  container
                  className={classes.PaddingRightAndBottomOnlyExperience}
                >
                  <TextField
                    name="Experience"
                    label="Total Experience"
                    variant="outlined"
                    helperText={touched.Experience ? errors.Experience : ""}
                    error={touched.Experience && Boolean(errors.Experience)}
                    value={Experience}
                    onChange={handleChange}
                    className={classes.textField}
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                </Grid>
                <Grid
                  md={4}
                  xs={6}
                  sm={6}
                  item
                  container
                  className={classes.RightLeftBottom}
                >
                  <TextField
                    name="CurrentCTC"
                    label="Current CTC"
                    variant="outlined"
                    helperText={touched.CurrentCTC ? errors.CurrentCTC : ""}
                    error={touched.CurrentCTC && Boolean(errors.CurrentCTC)}
                    value={CurrentCTC}
                    onChange={handleChange}
                    className={classes.textField}
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid md={6} xs={12} sm={12} item container>
                <Grid
                  md={5}
                  xs={6}
                  sm={6}
                  item
                  container
                  className={classes.RightLeftBottomQulaification}
                >
                  <TextField
                    name="ExpectedCTC"
                    label="Expected CTC"
                    variant="outlined"
                    helperText={touched.ExpectedCTC ? errors.ExpectedCTC : ""}
                    error={touched.ExpectedCTC && Boolean(errors.ExpectedCTC)}
                    value={ExpectedCTC}
                    onChange={handleChange}
                    className={classes.textField}
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                </Grid>
                <Grid
                  md={7}
                  xs={6}
                  sm={6}
                  item
                  container
                  className={classes.paddingLeftandBottomOnly}
                >
                  <TextField
                    name="NoticePeriod"
                    label="Notice Period"
                    variant="outlined"
                    helperText={touched.NoticePeriod ? errors.NoticePeriod : ""}
                    error={touched.NoticePeriod && Boolean(errors.NoticePeriod)}
                    value={NoticePeriod}
                    onChange={handleChange}
                    className={classes.textField}
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.labelstyle,
                    }}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid md={12} xs={12} sm={12} container item justify="flex-start">
              <Box className="box1">
                <Box
                  className="buttonAnimationcontainedBUtton"
                  onMouseEnter={handleMouse}
                  onMouseLeave={hoverEventLeave}
                >
                  <Button
                    type="submit"
                    variant="text"
                    className="button"
                    style={{ textTransform: "none", paddingRight: 7 }}
                  >
                    <Typography
                      className={classes.submitText}
                      style={{
                        color: hover ? "#fff" : "",
                        fontWeight: "bold",
                        fontFamily: "Nunito Sans",
                      }}
                    >
                      Submit
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid md={1} container item />
        </Grid>
      </form>
    </Grid>
  );
};
export default Form;
