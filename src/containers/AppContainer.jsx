import { useEffect, useState } from "react";
import PagesContainer from "./PagesCotainer";
import { Sidebar } from "../components/sidebar";
import MainLayout from "../layouts/MainLayout";
import { Icon, Typography, useMediaQuery } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../drawer";
import SwipeableViews from "react-swipeable-views";
import { Home, About, Resume, Contact, Comments } from "../pages";
import { useTheme } from "@mui/material/styles";
import { Page, WorkSamples } from "../components/pages";
import ThemeActionButton from "../components/sidebar/ThemeActionButton";
import { createComments, createContact, getAllComments } from "../services/service";
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        const { data: commentData } = await getAllComments();
        setComments(commentData.data);
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
        const allComments = [...data.commentData];
        toast.success("نظرت ثبت شد 🚀 ممنون که وقت گذاشتی ❣️", {
          icon: "🚀"
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
          icon: "🚀"
        });
      }
    } catch (err) {
      console.log(err.message);
    }
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
        createContact: createContactForm
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
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle={"وب سایت شخصی هادی خالقی"} />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="وب سایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="وب سایت شخصی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <WorkSamples helmetTitle="وب سایت شخصی | نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="وب سایت شخصی | نظرات" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitlte="وب سایت شخصی | ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
