import {
  Coffee,
  DataObjectRounded,
  DomainVerificationRounded,
  GitHub,
  Telegram,
  Instagram,
  WhatsApp,
  CodeRounded,
} from "@mui/icons-material";

import {
  CommentFour,
  CommentOne,
  CommentThree,
  CommentTwo,
} from "../assets/avatars";
import { PoeteryIcon, SoccerIcon, TableTennisIcon } from "../assets";

export const devWorkInfo = [
  {
    tooltipTitle: "تعداد قهوه های خورده شده",
    icon: <Coffee color="white" sx={{ color: "white" }} />,
    total: 3,
    color: "lightcoral",
  },
  {
    tooltipTitle: "تعداد پزوژه های برنامه نویسی",
    icon: <CodeRounded color="white" sx={{ color: "white" }} />,
    total: 5,
    color: "lightskyblue",
  },
  {
    tooltipTitle: "تعداد پروژه های ترجمه",
    icon: <DataObjectRounded color="white" sx={{ color: "white" }} />,
    total: 46,
    color: "lightslategray",
  },
  {
    tooltipTitle: "تعداد پروژه های در حال انجام",
    icon: <DomainVerificationRounded color="white" sx={{ color: "white" }} />,
    total: 1,
    color: "lightseagreen",
  },
];

export const devEdu = [
  {
    year: "1394 - 1395",
    cert: "دیپلم",
    major: "ریاضی-فیزیک",
    university: "دبیرستان نمونه شهید بهشتی-بجنورد",
  },
  {
    year: "1395 - 1400",
    cert: "کارشناسی",
    major: "رشته مهندسی کامپیوتر گرایش نرم افزار",
    university: "دانشگاه دولتی بجنورد",
  },
];

export const devExp = [
  {
    year: "1397 - 1400",
    workPlace: "سایت انجام میدم",
    job: "فریلنسری",
    subject: "انجام پروژه های ترجمه و اندروید",
    profile: "https://anjammidam.com/Hadi-63",
  },
  {
    year: "1398 - 1402",
    workPlace: "سایت ترجمیک",
    job: "فریلنسری",
    subject: "انجام پروژه های ترجمه",
    profile: "https://tarjomic.com/",
  },
  {
    year: "1396 - 1400",
    workPlace: "مرکز آموزش زبان کافه زبان",
    job: "تدریس",
    subject: "تدریس زبان انگلیسی",
    profile: "",
  },
  {
    year: "1397 - 1399",
    workPlace: "مجموعه دانش بنیان ابر آروند",
    job: "برنامه نویسی",
    subject:
      "ساخت اپلیکیشن وانیارکلود و حضور در تیم برنامه نویسی اپلیکیشن فانگلیش",
    profile: "https://arvandlms.com/",
  },
  {
    year: "1397 - 1402",
    workPlace: "مجموعه سی جی سکتور",
    job: "مترجم",
    subject:
      "ترجمه ویدیوهای بروز دنیای سی جی و ترجمه مجموعه هایی جذاب از پیکسار و دیزنی",
    profile: "https://cgsector.com/",
  },
  {
    year: "1397 - 1402",
    workPlace: "فریلنسری",
    job: "ادیت ویدپو",
    subject: "ادیت ویدیوهای کوتاه اینستاگرامی",
    profile: "https://www.instagram.com/shiva_sawed_english/?hl=en",
  },
];

export const devSocialMediaInfo = [
  {
    title: "گیت هاب",
    aria_label: "Github",
    url: "",
    icon: <GitHub sx={{ color: "gray" }} />,
  },
  {
    title: "اینستاگرام",
    aria_label: "Instagram",
    url: "https://www.instagram.com/hadi.kh120l?igsh=MTZxdXBiMGU1ZzRwZA==",
    icon: <Instagram sx={{ color: "gray" }} />,
  },
  {
    title: "تلگرام",
    aria_label: "Telegram",
    url: "t.me/hadikh98",
    icon: <Telegram sx={{ color: "gray" }} />,
  },
  {
    title: "واتس اپ",
    aria_label: "WhatsApp",
    url: "",
    icon: <WhatsApp sx={{ color: "gray" }} />,
  },
];

export const userComments = [
  {
    fullname: "olvi-58",
    jobTitle: "مترجم و برنامه نویس ",
    avatar: CommentOne,
    comment: `
    ترجمه:
    آدم همیشه دوست داره با کسی همکاری کنه که به اندازه ی خودش دلسوز کار باشه. واقعا کارشون رو بلدن و انرژیشون مثبته. با اینکه حجم کار من بالاست ، واقعا کم نذاشتن و کیفیت کارشون عالیه.
    سفارش رو هم زودتر از موعد آماده کردن. رعایت زمانبندی در کارشون رو تحسین میکنم. و از همینجا یه خداقوت بهشون میگم.
              `,
  },
  {
    fullname: "shirdel87",
    jobTitle: "مدرس و برنامه نویس جونیور",
    avatar: CommentFour,
    comment: `
                ترجمه:
                در زمان کم و کیفیت خیلی خوب و روان
              `,
  },
  {
    fullname: "ali.haselian",
    jobTitle: "مدرس و برنامه نویس جونیور",
    avatar: CommentTwo,
    comment: `
                ترجمه:‌
                سلام. سپاسگزارم. واقعا ترجمه بسیار عالی و کاملی شده. به امید همکاری های بعدی
              `,
  },
  {
    fullname: "Hamed.A",
    jobTitle: "مدرس و برنامه نویس جونیور",
    avatar: CommentThree,
    comment: `
                ترجمه:
                سریع و خوش‌قول.
              `,
  },
  {
    fullname: "ariapak",
    jobTitle: "مدرس و برنامه نویس جونیور",
    avatar: CommentFour,
    comment: `
                ترجمه:
                ممنون برای ترجمه دقیق و سریع تون
              `,
  },
];

