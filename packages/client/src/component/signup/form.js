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
    paddingBottom: 24,
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
    values: { fullName, Email, phoneNumber, Password, ConfirmPassword },
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
    <form onSubmit={handleSubmit}>
      <Grid md={12} xs={12} sm={12} item container justify="center">
        <Grid md={2} />
        <Grid md={8}>
          <TextField
            name="fullName"
            label="Full Name"
            variant="outlined"
            fullWidth
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
          <TextField
            name="Password"
            label="Password"
            variant="outlined"
            fullWidth
            helperText={touched.Password ? errors.Password : ""}
            error={touched.Password && Boolean(errors.Password)}
            value={Password}
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
          <TextField
            name="ConfirmPassword"
            label="ConfirmPassword"
            variant="outlined"
            fullWidth
            helperText={touched.ConfirmPassword ? errors.ConfirmPassword : ""}
            error={touched.ConfirmPassword && Boolean(errors.ConfirmPassword)}
            value={ConfirmPassword}
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
          md={12}
          xs={12}
          sm={12}
          container
          item
          justify="flex-start"
          className={classes.button_grid}
        >
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
    </form>
  );
};
export default Form;
