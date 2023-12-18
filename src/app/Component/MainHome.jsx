"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Slider1 from "../../photos/home/first.jpg";
import Link from "next/link";

import Slider from "./Slider";
import BlogsPage from "../blogs/page";

const MainHome = () => {
  return (
    <Box>
      <Slider></Slider>
<BlogsPage></BlogsPage>
     
    </Box>
  );
};

export default MainHome;
