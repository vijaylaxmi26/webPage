import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Page_4.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import img1 from "./Rec1.png";
import img2 from "./Rec2.png";
import img3 from "./Rec3.png";
import img4 from "./Rec4.png";

function Page_4() {
  return (
    <div>
      <Container class="page_4">
        <h1>Track your mood</h1>
        <p>
          All days and all moods are not made equal. But we can only improve
          what we measure. Track your mood and vitals (including skin and hair
          health) so you can take better care of yourself every day.
        </p>
        <Box style={{ textAlign: "center" }}>
          <Button variant="contained" style={{ backgroundColor: "#47DEFF" }}>
            Track you mood on the app
          </Button>
        </Box>

        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid
            xs={6}
            style={{
              backgroundImage: `url(${img1})`,
              height: "200px",

              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            spacing={2}
          ></Grid>
          <Grid
            xs={6}
            style={{
              backgroundImage: `url(${img2})`,
              height: "200px",

              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            spacing={2}
          ></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            xs={6}
            style={{
              backgroundImage: `url(${img3})`,
              height: "200px",

              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            spacing={2}
          ></Grid>
          <Grid
            xs={6}
            style={{
              backgroundImage: `url(${img4})`,
              height: "200px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            spacing={2}
          ></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Page_4;
