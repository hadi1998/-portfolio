import * as Yup from "yup";
import {
  CaptchaIcon,
  EmailIcon,
  JobIcon,
  MessageIcon,
  SubjectIcon,
  UserIcon,
} from "../../assets";
import ValidationTextError from "./ValidtionTextError";

export const contactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required(
    <ValidationTextError message={"اسمت رو بهم نگفتی!"} icon={UserIcon} />
  ),
  email: Yup.string()
    .email(
      <ValidationTextError
        message={"ای بابا! ایمیل هنوز اشتباهه!"}
        icon={EmailIcon}
      />
    )
    .required(
      <ValidationTextError
        message={"یادت رفت ایمیل رو وارد کنی!"}
        icon={EmailIcon}
      />
    ),
  subject: Yup.string().required(
    <ValidationTextError message={"نمیخوای بگی راجب چیه!"} icon={SubjectIcon} />
  ),
  message: Yup.string().required(
    <ValidationTextError message={"یه کم توضیح بده!"} icon={MessageIcon} />
  ),
  /*recaptcha: Yup.string().required(
    <ValidationTextError
      message={"!گلم، کپتچا رو فراموش کردی"}
      icon={CaptchaIcon}
    />
  ),*/
});

export const commentValidationSchema = Yup.object().shape({
  fullname: Yup.string().required(
    <ValidationTextError message={"اسمت رو بهم نگفتی!"} icon={UserIcon} />
  ),
  email: Yup.string()
    .email(
      <ValidationTextError
        message={"ای بابا! ایمیل هنوز اشتباهه!"}
        icon={EmailIcon}
      />
    )
    .required(
      <ValidationTextError
        message={"یادت رفت ایمیل رو وارد کنی!"}
        icon={EmailIcon}
      />
    ),
  message: Yup.string().required(
    <ValidationTextError message={"یه کم توضیح بده!"} icon={MessageIcon} />
  ),
  jobTitle: Yup.string().required(
    <ValidationTextError
      message={"نمیخوای بدونم توی کدوم حوزه با همکاری کردیم!"}
      icon={JobIcon}
    />
  ),
  /*recaptcha: Yup.string().required(
    <ValidationTextError
      message={"!گلم، کپتچا رو فراموش کردی"}
      icon={CaptchaIcon}
    />
  ),*/
  gender: Yup.boolean()
});