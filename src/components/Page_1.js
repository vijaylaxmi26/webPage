import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Page_1.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ScienceIcon from "@mui/icons-material/Science";

function Page_1() {
  return (
    <div class="container">
      <Container>
        <Box class="box">
          <h1>About Diana</h1>
          <h3>A platform that looks out for you</h3>
          <p class="inline">
            Diana empowers you to understand how your body works so you can look
            and feel your best.{" "}
          </p>
        </Box>

        <Box class="box">
          <h2 style={{ fontWeight: "bold" }}>Our Philosophy</h2>
          <h1>Sustainable wellness is a big-picture, inside out approach</h1>

          <p style={{ fontWeight: "bold" }}>
            Diana is on a mission to create thoughtful, science-backed solutions
            for women who want to make informed decisions about their health and
            wellness.
          </p>
          <p>That’s why we’ve created an integrated ecosystem of: </p>
        </Box>

        <Box class="box">
          <ScienceIcon style={{ color: "#A5A6F6", fontSize: "70px" }} />
          <p>
            Consciously formulated products that deliver feel-good results fast{" "}
          </p>

          <AcUnitIcon style={{ color: "#A5A6F6", fontSize: "70px" }} />
          <p>
            In-app mood and period tracking options that help you cultivate a
            deeper connection with your mind and body{" "}
          </p>

          <PhoneInTalkIcon style={{ color: "#A5A6F6", fontSize: "70px" }} />
          <p>
            In-app consultation portals that connect you with compassionate
            wellness experts{" "}
          </p>

          <p>
            Consider us your nerdy ally who spends their time perfecting
            products that work because they want you to feel your best everyday.
          </p>
        </Box>
      </Container>
    </div>
  );
}

export default Page_1;
