import { Box, Container, Typography } from "@mui/material";
import Banner from "../../photos/contact/banner.png";
import Image from "next/image";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const ContactPage = () => {
  return (
    <Container>
      <Box>
        {/* Image */}
        <Box>
          <Image src={Banner} alt="Contact image" />
        </Box>

        {/* Title annousment */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}>
          <Box>
            <Typography variant="h4">Keep in Touch with us today</Typography>
          </Box>
          <Box>
            <Typography>We would love to hear from you!</Typography>

            <Typography>
              Whether you would like to let us know how we did or get more
              information, just drop us an
            </Typography>

            <Typography>
              email! Don’t forget to fill in all the necessary details so we can
              get in touch with you.
            </Typography>
          </Box>
        </Box>

        {/* Form start */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: "center",
            marginTop: '50px'
          }}>
          <Box
            component="form"
            sx={{
              maxWidth: "900px",
              "& > :not(style)": { m: 2 },
            }}
            noValidate
            autoComplete="off">
            <Input placeholder="Hello world" inputProps={ariaLabel} />
            <Input placeholder="Placeholder" inputProps={ariaLabel} /><br />
            <Input placeholder="Disabled" inputProps={ariaLabel} />
            <Input placeholder="Error" inputProps={ariaLabel} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
