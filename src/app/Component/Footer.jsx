"use client";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Brand from "../../photos/icon/brand.png";

import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        bgcolor: "#212121",
        color: "#f5f5f5",
      }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Image src={Brand} style={{ width: "200" }} alt="Brand image two" />
            <Typography sx={{ mt: 3, mb: 2 }}>
              Best Restaurant & Café in Bangladesh
            </Typography>
            <Link color="secondary" href={""}>
              More...
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
          }}>
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                }}>
                Opening Hours
              </Typography>
              <Typography>Everyday 8am-12am</Typography>
              <Typography>
                Hotline : <span style={{ color: "red" }}>01201211254</span>{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
              }}>
              <Typography variant="h5">Follow us</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}>
              <Link href={""}>
                <FacebookSharpIcon />
              </Link>
              <Link href={""}>
                <InstagramIcon />{" "}
              </Link>
              <Link href={""}>
                <YouTubeIcon />{" "}
              </Link>
              <Link href={""}>
                <LinkedInIcon />{" "}
              </Link>
              <Link href={""}>
                <MailIcon />{" "}
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            sx={{
              background: "#f44336",
              display: "flex",
              alignItems: "center",
            }}>
            <TextField
              id="outlined-basic"
              label="Searching..."
              variant="outlined"
            />
            <IconButton>
              <SearchIcon color="wrong" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copy Right */}
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-between",
          p: 4,
          bgcolor: "#f44336",
          color: "white",
          textAlign: "center",
        }}>
        <Box>
          <Typography>
            Copyright © 2023 by Pepperoni, Fair Group. All Rights Reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "11px",
          }}>
          <Link href={""}>About | </Link>
          <Link href={""}>Online Policy | </Link>
          <Link href={""}>FAQ | </Link>
          <Link href={""}> Career </Link>|
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
