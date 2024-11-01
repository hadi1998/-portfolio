import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  EmailRounded,
  Face6Rounded,
  SubjectRounded,
} from "@mui/icons-material";
import { boolean, date } from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import {
  commentValidationSchema,
  contactValidationSchema,
} from "./contactValidationSchema";
import { useContext } from "react";
import MainContext from "../../context";
import { MaterialUISwitch } from "../common/MaterialUISwitch";

const ContactForm = ({ section }) => {
  const theme = useTheme();
  

  const { createComment, createContact } = useContext(MainContext);

  const contactInputNames = {
    fullname: "",
    email: "",
    message: "",
    subject: "",
    //recaptcha: "",
  };

  const formatedTimestamp = ()=> {
    const d = new Date()
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return `${date} ${time}`
  }

  const commentInputNames = {
    fullname: "",
    email: "",
    message: "",
    jobTitle: "",
    //recaptcha: "",
    gender: true,
    date: formatedTimestamp()
  };
 

  const formik = useFormik({
    initialValues:
      section === "Comments" ? commentInputNames : contactInputNames,
    onSubmit: (values, { resetForm }) => {
      section === "Comments" ? createComment(values) : createContact(values);
      resetForm();
    },
    validationSchema:
      section === "Comments"
        ? commentValidationSchema
        : contactValidationSchema,
  });

  const jobs = ["برنامه نویسی", "ترجمه", "ادیت ویديو", "تدریس"];

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent sx={{ mt: 2 }}>
        <Box>
          <Grid xs={12} sx={{ direction: "ltr" }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="اسمتو بده"
                  name="fullname"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="ایمیلتو بده"
                  name="email"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
            {section === "Comments" ? (
              <Grid sx={{ my: 2 }}>
                <Grid xs={12} md={12}>
                  <FormControl fullWidth sx={{ borderColor: "green" }}>
                    <InputLabel id="select-label">
                      توی چه حوزه ای با هم همکاری داشتیم
                    </InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      label="jobTitle"
                      value={formik.values?.jobTitle}
                      onChange={(e) => {
                        formik.setFieldValue("jobTitle", e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      {jobs.map((job) => (
                        <MenuItem
                          key={job}
                          value={job}
                          sx={{
                            color: "#3c52b2",
                            backgroundColor: "wheat",
                            borderRadius: 2,
                            m: 1,
                            "&:hover": {
                              backgroundColor: "violet",
                              color: "#3c52b2",
                            },
                          }}
                        >
                          {job}
                        </MenuItem>
                      ))}
                    </Select>

                    {formik.errors.jobTitle && formik.touched.jobTitle && (
                      <Typography variant="caption" color="error">
                        {formik.errors.jobTitle}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12} md={12} sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    color="warning"
                    label="نظرت رو بهم بگو..."
                    name="message"
                    variant="outlined"
                    helperText={
                      formik.touched.message ? formik.errors.message : null
                    }
                    error={boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    value={formik.values?.message}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid sx={{ my: 2 }}>
                <Grid xs={12} md={12}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="موضوعش چیه"
                    name="subject"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SubjectRounded />
                        </InputAdornment>
                      ),
                    }}
                    helperText={
                      formik.touched.subject ? formik.errors.subject : null
                    }
                    error={boolean(
                      formik.touched.subject && formik.errors.subject
                    )}
                    value={formik.values?.subject}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid xs={12} md={12} sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    color="warning"
                    label="هر چه دل تنگ میخواهد بگو..."
                    name="message"
                    variant="outlined"
                    helperText={
                      formik.touched.message ? formik.errors.message : null
                    }
                    error={boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    value={formik.values?.message}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            )}
            {section === "Comments" ? (
              <FormGroup>
                <FormControlLabel
                  name="gender"
                  onChange={formik.handleChange}
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                />
              </FormGroup>
            ) : null}
          </Grid>
        </Box>
      </CardContent>
      <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
        {/*<ReCAPTCHA
          sitekey="6LeyJJopAAAAAJeNGkwfCZ4NzuDfsWhUy2J2dXIc"
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />*/}
        {/*formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )*/}
        <Button
          type="submit"
          sx={{
            width: 1,
            color: theme.palette.mode === "dark" ? "primary" : "primary",
            mt: 2,
          }}
          variant="contained"
        >
          بفرست برام
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
