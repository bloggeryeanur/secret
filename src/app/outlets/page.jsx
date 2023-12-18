import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Typography } from "@mui/material";
import Outlate from "../../photos/banner/outlateBanner.png";
import Image from "next/image";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

// Title
export const metadata = {
  title: "Outlet Secret Recipe | Resturent and Cafe",
  description: "This is our popular item",
};

// Table function
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Dhanmondi Flagship Outlet	",
    "01933366431",
    "Sena Kalyan Sangstha,(SKS Tower) VIP Road Mohakhali, Level 3, Shop no 19/20	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Gulshan 2 Flagship Outlet	",
    "01933366430",
    "House-12B, Road-55-Gulshan North Avenue, Dhaka.	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Gulshan 1 Flagship Outlet	",
    "01404427563",
    "Plot No. 16, Block No. CWA (A), Gulshan Avenue, Dhaka.	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Bashundhara R/A Flagship Outlet	",
    "01409955660",
    "Union Tower, Plot No-440,441 & 442, Dhaka 1229	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Elephant Road Flagship Outlet	",
    "01958646627",
    "Plaza Central by Ananta,136 Old Elephant Road,Dhaka.	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "GEC Circle Flagship Outlet	",
    "01409955674",
    "East CDA Avenue Road, GEC Circle Crossing,Chattogram.	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Mirpur Flagship Outlet	",
    "01888069955",
    "Address: Sony Square, 105 Mirpur Rd, Dhaka, 2nd Floor, Dhaka.	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Shantinagor Standard Outlet	",
    "01933366433",
    "Green Peace Apartment, 41 Chamelibagh, Ground Floor, Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Khilgaon Standard Outlet	",
    "01933366432",
    "Manama M .W. Heights, Ground Floor, 25/B, Malibagh Chowdhury para,Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Wari Standard Outlet	",
    "01404427562",
    "A.K. Famous Tower, 41, Rankin Street, Wari, Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Mohakhali Standard Outlet	",
    "01404427560",
    "Sena Kalyan Sangstha,(SKS Tower) VIP Road Mohakhali, Level 3, Shop no 19/20	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Uttara Standard Outlet	",
    "01933366419",
    "Quantum Mostafa Tower, 18 Gausul Azam Ave, Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Mohammodpur Standard Outlet	",
    "01958646626",
    "Suchona Community Center, Ring road, Mohammodpur, Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Khulshi Standard Outlet	",
    "01401671234",
    "Rahim’s Plaza CPDL, Zakir Hossain Road, S Khulshi Rd, Chattogram	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Bailey Road Standard Outlet	",
    "01965555444",
    "3rd floor, Gold Palace, 3 Bailey Rd, Dhaka 1205	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Gulshan 01 Express Outlet	",
    "01933366435",
    "Saiham Tower, house 34, road 136, Block #SE C-1 Gulshan 1, Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Gulshan 02 Circle Express Outlet	",
    "01933366434",
    "Shop no. 5, Bhaban market, Ground Floor, Gulshan 2 circle, Dhaka	",
    "MAP",
    "8am to 12am"
  ),
  createData(
    "Secret Recipe MTB Outlet",
    "01409955657",
    "MTB Centre, 26 Gulshan Avenue, Plot-5, Block SE(D), Dhaka	",
    "MAP",
    "8am to 12am"
  ),
];

const OutlatePage = () => {
  return (
    <Box>
      <Box>
        <Image src={Outlate} alt="Outlate image" />
      </Box>
      {/* Table start */}

      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Outlet (18)</TableCell>
                <TableCell align="left">Contact No </TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Operation Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Box
        sx={{
          textAlign: "center",
          padding: "30px 0px",
        }}>
        <Typography variant="h4" color="red">
          Hotline 09613505085
        </Typography>
        <Typography
          sx={{
            marginTop: "21px",
          }}>
          srdelivery@pepperoni.com.bd <PhoneEnabledIcon />
          +88-01933366432-35
        </Typography>
      </Box>
    </Box>
  );
};

export default OutlatePage;
