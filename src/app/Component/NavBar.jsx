"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import Image from "next/image";
import Sec from "../../photos/icon/brand.png";
import Brand2 from "../../photos/icon/brand2.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";

const pages = [
  {
    path: "menu",
    name: "Menu",
    id: "1",
  },
  {
    path: "outlets",
    name: "Outlets",
    id: "2",
  },
  {
    path: "shop",
    name: "Shop",
    id: "3",
  },
  ,
  {
    path: "news",
    name: "News",
    id: "4",
  },
  {
    path: " blogs",
    name: "Blogs",
    id: "5",
  },
  {
    path: " contact",
    name: "Contact",
    id: "6",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState("");
  const [anchorElUser, setAnchorElUser] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "gray" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              <Image
                src={Sec}
                alt="Logo"
                style={{
                  width: "150px",
                }}
              />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
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
              }}>
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Link href={page.path}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link href={"/"}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              <Image
                src={Sec}
                alt="Logo"
                style={{
                  width: "150px",
                }}
              />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", alignItems: "center" },
            }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                <Link href={page.path}>{page.name}</Link>
              </Button>
            ))}
            <AddShoppingCartIcon color="" />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link href={""}>
              <Image src={Brand2} style={{ width: "150px" }} alt="'brand two" />
            </Link>
          </Box>
          <Button
            style={{
              background: "red",
              color: "white",
              marginLeft: "12px",
            }}>
            Order Now
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
