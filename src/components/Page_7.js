import React from "react";
import Container from "@mui/material/Container";
import img from "./7.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
function Page_7() {
  return (
    <div
      style={{
        background: "#f66e6e",
        color: "white",
      }}
    >
      <Container class="page_7">
        <h1 style={{ paddingLeft: "20px", paddingTop: "20px" }}>
          Get your personalized period box
        </h1>

        <img src={img} />

        <p
          style={{
            textAlign: "center",
            padding: "30px",
          }}
        >
          Tailor your monthly box of organic period products without the organic
          price tag (no pink taxing here). Get it delivered to your doorstep in
          sustainable packaging and track your subscription on our app.{" "}
        </p>

        <Box style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              fontSize: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              marginBottom: "20px",
            }}
          >
            Create your box on the app
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Page_7;
