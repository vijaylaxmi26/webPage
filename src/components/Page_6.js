import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Page_5.css";
import Button from "@mui/material/Button";
import img from "./6.png";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

function Page_6() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #ffffff 30%, #dadae4 100%)",
      }}
    >
      <Container class="page_5">
        <h1>Consult with wellness experts</h1>
        <p>
          Set up health consultations with experienced doctors and therapists on
          our app. Simply select a service, answer a few questions, and we’ll
          connect you to someone who is the right-fit for you.
        </p>
        <Box style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#6e8cf6 93%" }}
          >
            Get a consultation
          </Button>
        </Box>
        {/* <Card sx={{ maxWidth: "100%", marginTop: "20px" }}>
          <CardMedia component="img" height="100%" image={img} />
        </Card> */}
      </Container>
      <img src={img} />
    </div>
  );
}

export default Page_6;
