"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "../../photos/shop/banner.png";
import DefaultImg from "../../photos/shop/Chcolate-Mocha-Cake-500x500.jpg";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ScopedCssBaseline,
  Typography,
} from "@mui/material";
import CackeCard from "../Component/CackeCard";

const metadata = {
  title: "Shop Online - Secret Recipe | Resturent and Cafe",
  description: "This is our popular item",
};

const ShopPage = () => {
  const [cakes, setCakes] = useState([]);
  const [test, setTest] = useState([]);
  useEffect(() => {
    fetch("cakes.json")
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);

  // Test api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setTest(data));
  }, []);

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      {/* Banner image Start */}
      <Box>
        <Image
          src={Banner}
          alt="Shop banner"
          style={{
            width: "100%",
          }}
        />
      </Box>
      {/* Banner Image End */}

      {/* Category Text start */}
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            height: "4px",
            width: "40%",
            background: "gray",
          }}></Typography>
        <Typography>Cheese Cakes Category</Typography>
        <Typography
          sx={{
            height: "4px",
            width: "40%",
            background: "gray",
          }}></Typography>
      </Box>
      {/* Category Text End */}

      {/* Category Cakes start */}
      <Box>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center">
          {cakes.map(({ id, image, name, regular, discount, buttonC }) => (
            <Grid
              key={id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              sx={{
                padding: "1rem",
              }}>
              <CackeCard
                name={name}
                im={DefaultImg}
                buttonC="Add to Card"
                regular={regular}
                discount={discount}></CackeCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Category Cakes End */}
    </Container>
  );
};

export default ShopPage;
