import {
  ConnectWithoutContactRounded,
  FaceRounded,
  HomeRounded,
  MessageRounded,
  TerminalRounded,
  TextSnippetRounded,
} from "@mui/icons-material";
import { About, Comments, Contact, Home, Resume, WorkSamples } from "../pages";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
    { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
    { label: "نمونه کارها", icon: <TerminalRounded />, ...tabProps(3) },
    { label: "نظرات", icon: <MessageRounded />, ...tabProps(4) },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(5),
    },
  ];
  return tabs;
};

export const containersData = [
  {
    index: 0,
    component_name: <Home helmetTitle={"وب سایت شخصی هادی خالقی"} />,
  },
  {
    index: 1,
    component_name: <About helmetTitle="وب سایت شخصی | درباره من" />,
  },
  {
    index: 2,
    component_name: <Resume helmetTitle="وب سایت شخصی | رزومه من" />,
  },
  {
    index: 3,
    component_name: <WorkSamples helmetTitle="وب سایت شخصی | نمونه کارها" />,
  },
  {
    index: 4,
    component_name: <Comments helmetTitle="وب سایت شخصی | نظرات" />,
  },
  {
    index: 5,
    component_name: <Contact helmetTitlte="وب سایت شخصی | ارتباط با من" />,
  },
];
