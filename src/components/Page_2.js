import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Page_2.css";

function Page_2() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ff99cc 0%, #ffffff 100%)",
      }}
    >
      <Container class="page_2">
        <h2>What makes us different?</h2>
        <h1>Reimagining and rewiring self-care</h1>

        <p>
          You care about conscious consumption, and so do we.
          <br />
          <br />
          When it comes to your health, “good enough” is not good enough. We’re
          here to flip the script on that narrative because you deserve the best
          <br />
          <br />
          We collaborate with researchers and doctors to
          <br />
          <br />
          <ul>
            <li>
              {" "}
              Help you get granularabout your health and self-care with
              personalized insights, and{" "}
            </li>
            <br />
            <li>
              {" "}
              Equip you with simple, sustainable products that get the job done
            </li>
          </ul>
          <br />
          <br />
          No to-the-moon-and-back claims in this neck of the woods.
          <br />
          <br />
          We’re just solving real problems for real people here.
        </p>
      </Container>
    </div>
  );
}

export default Page_2;
