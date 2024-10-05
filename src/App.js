import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import {
  Box,
  CssBaseline,
  Fab,
  Fade,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import PropTypes from "prop-types";
import Header from "./components/Header";
import { KeyboardArrowUp } from "@mui/icons-material";
import AppRoutes from "./routes/AppRoutes";
import "aos/dist/aos.css";
import { ModalProvider } from "./provider/ModalProvider";
import GlobalModal from "./components/GlobalModal";
import Loading from "./components/Loading";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Simulate a delay or track resource loading.
    // You can use promises here to track when all resources are done loading.
    const timer = setTimeout(() => {
      setIsLoading(false); // When everything is loaded, set loading to false
    }, 5000); // Adjust delay for actual loading time

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ModalProvider>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Toolbar id="back-to-top-anchor" />
        <AppRoutes />
        <Footer />
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
        <GlobalModal />
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
