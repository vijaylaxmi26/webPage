import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Page_5.css";
import Button from "@mui/material/Button";
import img from "./5.png";

function Page_5() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f3b8bc 0%, #ffffff 100%)",
      }}
    >
      <Container class="page_5">
        <h1>Track your period</h1>
        <p>
          Stay in the know with reliable AI-based and science-backed period,
          ovulation, and PMS predictions. The intuitive design makes tracking
          your cycle effortless and helps you stay on top of your monthly data.
        </p>
        <Box style={{ textAlign: "center" }}>
          <Button variant="contained" style={{ backgroundColor: "#ff8080" }}>
            Track you period on the app
          </Button>
        </Box>
        {/* <Card sx={{ maxWidth: "100%", marginTop: "20px" }}>
          <CardMedia component="img" height="100%" image={img} />
        </Card> */}
      </Container>
      <img src={img} width="100%" />
    </div>
  );
}

export default Page_5;
