import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CackeCard = ({ id, im, name, regular, discount, buttonC }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image src={im} alt="Card imgae" height="200" width="300" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "red" }}>
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}>
            <Typography>
              {" "}
              ৳ <del>{regular}</del>{" "}
            </Typography>
            <Typography>৳ {discount}</Typography>
          </Box>
          <Button sx={{ marginTop: "22px" }} color="error">
            <ShoppingCartIcon color="info" />
            {buttonC}
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CackeCard;
