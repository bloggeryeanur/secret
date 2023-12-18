"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Slider1 from "../../photos/home/first.jpg";
import Link from "next/link";
import Second from "../../photos/home/second.jpg";
import Third from "../../photos/home/third.jpg";
import Slider from "./Slider";

const MainHome = () => {
  return (
    <Box>
      <Slider></Slider>

      <Box
        sx={{
          marginTop: "32px",
        }}>
        <Grid
          container
          justifyContent="space-between 
      
        ">
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            item
            sx={{
              padding: "11px",
            }}>
            <Typography
              sx={{
                fontSize: "28px",
                textAlign: "center",
              }}>
              Our Cake Shop, Restaurant & Café
            </Typography>

            <Typography
              sx={{
                fontFamily: "bold",
                lineHeight: "25px",
              }}>
              As the leading and largest café chain, Secret Recipe is a popular
              and favourite cake shop, restaurant and café in Bangladesh. It has
              grown rapidly and currently, Secret Recipe operates 18 outlets,
              across the region including Dhaka and Chattogram. Secret Recipe in
              Bangladesh maintains four categories of outlets Premium Flagship,
              Flagship, Standard and Express. By winning the hearts of numerous
              Secret Recipe lovers, it has become the best restaurant and café
              in Bangladesh.
            </Typography>
            <Button fullWidth variant="outlined" color="secondary">
              FIND YOUR NEAREST OUTLET NOW
            </Button>
          </Grid>

          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image src={Third} alt="Feture imag" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainHome;
