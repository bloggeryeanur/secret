"use client";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import News from "../../photos/news/bakelike-1200x800.jpg";
import Link from "next/link";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <Container maxWidth="xl" style={{ marginTop: "50px" }}>
      <Grid container display="flex" justifyContent="space-between">
        {news.map(({ title, date, description }) => (
          <Grid
            key={""}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            sx={{
              padding: "15px",
            }}>
            <Image src={News} alt="News image" />
            <Typography variant="h5" color="error" sx={{ marginBottom: "8px" }}>
              {title}
            </Typography>
            <Typography sx={{ marginBottom: "8px", fontFamily: "bold" }}>
              {date}
            </Typography>
            <Typography>
              {description.length > 150 ? (
                <p>
                  {description.slice(0, 100)}{" "}
                  <Link href={""}>
                    <Button>Read More...</Button>{" "}
                  </Link>
                </p>
              ) : (
                <Typography>{description}</Typography>
              )}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {/* paganiton */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}>
        <Stack spacing={2}>
          <Pagination count={5} variant="outlined" shape="rounded" />
        </Stack>
      </Box>
    </Container>
  );
};

export default NewsPage;
