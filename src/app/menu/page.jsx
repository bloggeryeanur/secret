"use client";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Baner from "../../photos/banner/Menu-Banner-1.jpg";

import Break from "../../photos/breakfast/Eggs-Benedict.jpg";
import Pizza from "../../photos/pizza/pizza_cover.jpg";
import Sideorder from "../../photos/sideorder/wedge.jpg";
import Soupandsalad from "../../photos/soupandsalad/Wild-mushroom-Soup-400x400.jpg";
import Stater from "../../photos/stater/10-600x600-1-400x400.jpg";
import Western from "../../photos/western/London-Fish-and-Chips-400x400.jpg";
import Winterspcial from "../../photos/winterspcial/Duck-A-L_orange-1-400x400.png";
import Sandwichandburger from "../../photos/sandwichandburger/DD-BEEF-BURGER--400x400.jpg";
import Premiumsteck from "../../photos/premiumsteck/T-Bone-Steak-400x400.jpg";
import Premium from "../../photos/premium/45-400x400.jpg";
import Pasta from "../../photos/pasta/Thai-Seafood-Spaghett-Resizedi-500x500.jpg";
import Newarival from "../../photos/newarival/Salted-Caramel-Cake-500x500.webp";
import Dessert from "../../photos/dessert/Shinjuku-With-Ice-Cream-.jpg";
import Chicken from "../../photos/chicken/title.jpg";
import Cake from "../../photos/cake/creamcake_update.jpg";
import Buy3get1 from "../../photos/buy3get1/BUY-3-GET-1-500x500.jpg";

const titleImage = [
  Break,
  Pizza,
  Sideorder,
  Soupandsalad,
  Stater,
  Western,
  Winterspcial,
  Sandwichandburger,
  Premiumsteck,
  Premium,
  Pasta,
  Newarival,
  Dessert,
  Chicken,
  Cake,
  Buy3get1,
];

const metadata = {
  title: "Menu Secret Recipe | Resturent and Cafe",
  description: "This is our popular item",
};

// Title menu
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const page = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        {/* Menu banner image */}
        <Box>
          <Image src={Baner} alt="menu banner image" />
          <Box
            sx={{
              bgcolor: "#b71c1c",
              textAlign: "center",
              padding: "4rem",
              color: "white",
            }}>
            <Typography variant="h4">Our Menu</Typography>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Click on the category to see the FULL MENU of Secret Recipe
            </Typography>
            <Typography>
              The price as per law, 5% VAT to all items & 10% SD to pizza,
              pasta, sandwich, fries etc.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                mt: 2,
              }}>
              Download Menu
            </Button>
          </Box>
        </Box>

        {/* Title menu */}
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center">
          {titleImage.map((single) => (
            <Grid
              key={single}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{
                padding: "11px",
              }}>
              <Item>
                <Image src={single} alt="Title image" />
              </Item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}>
                <Button variant="text" color="secondary">
                  Order
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default page;
