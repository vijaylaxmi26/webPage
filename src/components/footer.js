import React from "react";
import Container from "@mui/material/Container";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";

function Page_8() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
      }}
    >
      <Container style={{ padding: "20px", color: "white" }}>
        <FacebookTwoToneIcon style={{ color: "white", padding: "10px" }} />
        <TwitterIcon style={{ color: "white", padding: "10px" }} />
        <ul>
          <li>
            <a href="#" style={{ color: "white" }}>
              Products
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white" }}>
              Our Science
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white" }}>
              Vision &amp; Mission
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white" }}>
              About Us
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Page_8;
