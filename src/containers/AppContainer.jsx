import { useEffect, useState } from "react";
import PagesContainer from "./PagesCotainer";
import { Sidebar } from "../components/sidebar";
import MainLayout from "../layouts/MainLayout";
import {  useMediaQuery } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../drawer";
import { Home, About, Resume, Contact, Comments } from "../pages";
import { useTheme } from "@mui/material/styles";
import { Page, WorkSamples } from "../components/pages";
import ThemeActionButton from "../components/sidebar/ThemeActionButton";
import {
  createComments,
  createContact,
  getAllComments,
} from "../services/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SwipeableViewer from "react-swipeable-views-react-18-fix";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); //To close Drawe when browser reach to Medium size
  const prefersDarkMode = useMediaQuery(`prefers-color-scheme: dark`); //true or false

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");

    const fetchData = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const createCommentForm = async (values) => {
    try {
      const { status, data } = await createComments(values);
      if (status === 201) {
        const allComments = [...comments,data];

        toast.success("نظرت ثبت شد 🚀 ممنون که وقت گذاشتی ❣️", {
          icon: "🚀",
        });
        setComments(allComments);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const createContactForm = async (values) => {
    try {
      const { status } = await createContact(values);
      if (status === 201) {
        toast.success("پیامت برام ارسال شد، ممنون که وقت گذاشتی ❣️", {
          icon: "🚀",
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
        createComment: createCommentForm,
        comment,
        setComments,
        comments,
        createContact: createContactForm,
      }}
    >
      <MainLayout mode={mode}>
        <ToastContainer
          rtl={true}
          position="top-right"
          theme={theme.palette.mode === "dark" ? "dark" : "light"}
          autoClose={8000}
          icon={false}
        />

        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <ThemeActionButton />
          <SwipeableViewer index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0} style={Object.assign({}, styles.slide, styles.slide1)}>
              <Home helmetTitle={"وب سایت شخصی هادی خالقی"} />
            </Page>
            <Page pageNumber={pageNumber} index={1} style={Object.assign({}, styles.slide, styles.slide2)}>
              <About helmetTitle="وب سایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2} style={Object.assign({}, styles.slide, styles.slide3)}>
              <Resume helmetTitle="وب سایت شخصی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3} style={Object.assign({}, styles.slide, styles.slide1)}>
              <WorkSamples helmetTitle="وب سایت شخصی | نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4} style={Object.assign({}, styles.slide, styles.slide2)}>
              <Comments helmetTitle="وب سایت شخصی | نظرات" />
            </Page>
            <Page pageNumber={pageNumber} index={5}  style={Object.assign({}, styles.slide, styles.slide3)}>
              <Contact helmetTitlte="وب سایت شخصی | ارتباط با من" />
            </Page>
          </SwipeableViewer>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
