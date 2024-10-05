import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-nobg.png";
import DropdownMenu from "./Dropdown";
import { RoutePaths } from "../routes/routePaths";
import { StyledButton } from "../misc/component";
import DonationModalContent from "./DonationModal";
import { useModal } from "../provider/ModalProvider";

const drawerWidth = 240; //width of the drawer on small screen size
// variable used for the menu items
// Header.js

const navItems = [
  { name: "Accueil", link: RoutePaths.HOME },
  // { name: "Présentation", link: RoutePaths.PRESENTATION },
  { name: "A Propos", link: RoutePaths.ABOUT },
  { name: "Galerie", link: RoutePaths.GALERIE },
  {
    name: "Nos Activités",
    items: [
      {
        name: "Autonomisation de la fille mère",
        link: RoutePaths.AUTONOMISATION_FILLE,
      },
      {
        name: "Lutte contre la grossesse précoce en milieu scolaire",
        link: RoutePaths.LUTTE_GROSSESSE_VIH_IST,
      },
      {
        name: "Remise de Don de kits scolaires",
        link: RoutePaths.REMISE_KITS_SCOLAIRES,
      },
      {
        name: "Accès à l'éducation pour tous",
        link: RoutePaths.ACCES_EDUCATION,
      },
      {
        name: "Accès à l'eau et assainissement",
        link: RoutePaths.ACCES_EAU_ASSAINISSEMENT,
      },
      {
        name: "Assistance aux personnes âgées",
        link: RoutePaths.SENSIBILISATION_ASSISTANCE_PERSONNES_AGEES,
      },
    ],
  },
  {
    name: "Nos Programmes",
    items: [
      { name: "Appui aux Plus Pauvres", link: RoutePaths.APPUI_PLUS_PAUVRES },
      {
        name: "Appui aux Élèves, et à la formation l'entrepreneuriat",
        link: RoutePaths.APPUI_AUX_ELEVEZ_ENTREPENUERIAT,
      },
      {
        name: "Appui aux Orphelins Handicap",
        link: RoutePaths.APPUI_ORPHELINS_HANDICAP,
      },
      {
        name: "Service d'Aide et d'accompagnement à Domicile des personnes âgées",
        link: RoutePaths.AIDE_ACCOMPAGNEMENT_DOMICILE,
      },
    ],
  },
  {
    name: "Contactez-nous",
    link: RoutePaths.CONTACT,
  },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { openModal } = useModal();

  const handleDonateClick = () => {
    openModal(<DonationModalContent />); // Pass the content of the modal
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "12px",
        fontFamily: "Baskervville SC, serif",
        fontWeight: "700",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          height: "90px",
        }}
      />

      <Divider />
      <List
        sx={{
          fontSize: "12px",
          fontFamily: "Baskervville SC, serif",
          fontWeight: "700",
        }}
      >
        {navItems.map((item, index) =>
          item.items ? (
            <DropdownMenu
              key={index}
              title={item.name}
              items={item.items}
              to={item.items}
            />
          ) : (
            <ListItem
              key={index}
              disablePadding
              sx={{
                fontSize: "12px",
                fontFamily: "Baskervville SC, serif",
                fontWeight: "700",
              }}
            >
              <ListItemButton
                component={Link}
                to={item.link} // Add this line to enable routing
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  fontFamily: "Baskervville SC, serif",
                  fontWeight: "700",
                }}
                onClick={handleDrawerToggle} // Close drawer when navigating
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // function to elevate the navbar when scrolling
  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            height: "90px",
            background: "rgb(255,255,255)",
            color: "#000",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: { sm: "space-around" },
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Menu sx={{ color: "#0001FC" }} />
            </IconButton>
            <Link to="/" sx={{ cursor: "pointer" }}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  display: { xs: "none", sm: "block" },
                  height: "70px", // Hide on xs, show on sm and larger
                }}
              />
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) =>
                item.items ? (
                  <DropdownMenu
                    key={index}
                    title={item.name}
                    items={item.items}
                    to={item.items}
                  />
                ) : (
                  <Button
                    component={Link}
                    to={item.link}
                    key={index}
                    sx={{
                      color: "#000",
                      fontSize: "12px",
                      fontFamily: "Baskervville SC, serif",
                      fontWeight: "700",
                    }}
                  >
                    {item.name}
                  </Button>
                )
              )}
              <StyledButton
                onClick={handleDonateClick}
                ml="3em !important"
                bgc="#4ACA4D !important"
              >
                Faire un Don
              </StyledButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F5F5F5",
              color: "#000",
              textTransform: "uppercase",
              fontSize: "12px",
              fontFamily: "Baskervville SC, serif",
              fontWeight: "700",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
