import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import permission from "./permisson";
import Button from "../CommonStyles/Button/CommonBtn";
import themeCustom from "../themeCustom";
//Import Icon
import MenuIcon from "@mui/icons-material/Menu";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import Login from "../Login";

const { colors } = themeCustom;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar(props) {
  //! State
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [menu, setMenu] = useState([]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("handleDrawerToggle", !mobileOpen);
  };
  const navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickMenuBtn = (item) => {
    navigate(item);
  };
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/home");
  };
  //!Function
  useEffect(() => {
    const listMenu = Object.entries(permission).map((el, index) => {
      return {
        key: index,
        label: el[1].name,
        href: el[1].href,
        id: el[1].id,
      };
    });
    setMenu(listMenu);
  }, []);

  //! Render
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FlutterDashIcon />
            <Button
              onClick={() => navigate("/home")}
              variant="text"
              component="a"
              color="white"
              sx={{
                fontSize: "1.5rem",
                "&:hover": {
                  color: colors.white[500],
                  backgroundColor: "transparent",
                },
              }}
            >
              Vayne
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menu.map((el) => (
                  <MenuItem
                    key={el.id}
                    onClick={() => handleClickMenuBtn(el.href)}
                  >
                    <Typography textAlign="center">{el.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {menu.map((el) => (
                <Button
                  key={el.id}
                  onClick={() => handleClickMenuBtn(el.href)}
                  color="white"
                >
                  {el.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User settings">
                <IconButton onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                  <PersonOutlineIcon color="white" />
                </IconButton>
              </Tooltip>
              <Login
                open={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Box>
            {localStorage.getItem("isLogged") ? (
              <NavLink to="/cart">
                <IconButton>
                  <ShoppingCartIcon color="white" />
                  {state && state.length > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-3px",
                        right: "-4px",
                        width: "20px",
                        height: "20px",
                        textAlign: "center",
                        color: "#fff",
                        borderRadius: "50%",
                        background: colors.red[500],
                        fontSize: " 0.6rem",
                        lineHeight: " 20px",
                      }}
                    >
                      <p className="text-xs text-white font-semibold">
                        {state.length}
                      </p>
                    </span>
                  )}
                </IconButton>
              </NavLink>
            ) : null}
            {localStorage.getItem("isLogged") ? (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleLogout} sx={{ ml: 2 }}>
                  <LogoutIcon color="white" />
                </IconButton>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default React.memo(Navbar);
