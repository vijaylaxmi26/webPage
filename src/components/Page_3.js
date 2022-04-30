import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Page_3.css";
import Button from "@mui/material/Button";
import img from "./1.png";

function Page_3() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: "90vh",
        backgroundPositionY: "100px",
        backgroundRepeat: "no-repeat !important",
      }}
    >
      <Container class="page_3">
        <h3>Liberate your everyday wellness</h3>
        <h1>Shop our self-care products</h1>
        <p>
          Gentle formulations thoughtfully engineered by specialist researchers
          and doctors to simplify your self-care and get results fast. And, we
          always list our ingredients - so what you see is what you get.
        </p>
        <Box style={{ textAlign: "center" }}>
          <Button variant="contained" style={{ backgroundColor: "#ff8080" }}>
            Upgrade your self-care
          </Button>
          <p style={{ fontSize: "20px" }}>#NoNasties, we promise!</p>
        </Box>
      </Container>
    </div>
  );
}

export default Page_3;
