import React from "react";
import { Box } from "@material-ui/core";
import sunsetBackground from "./sunset.jpg";

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={sunsetBackground}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
        alt=""
      />
      <Box
        mt="-100vh"
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div
          style={{
            width: "500px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255,255,255,0.85)",
            boxShadow: "10px 10px 20px #222222",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            mt="10px"
            textAlign="center"
            fontSize="100px"
            color="#000"
            fontWeight="bold"
          >
            404
          </Box>
          <Box mt="10px" textAlign="center" fontSize="20px" color="#505050">
            Sorry, the page is not found.
          </Box>
          <Box
            mt="20px"
            width="400px"
            textAlign="center"
            fontSize="16px"
            color="#505050"
          >
            Either the URL is wrong or the page hasn't been developed.
          </Box>
          <Box
            mt="10px"
            width="450px"
            textAlign="center"
            fontSize="16px"
            color="#505050"
          >
            If you still want to visit Lizhuo's Island, you can visit{" "}
            <a
              href="https://www.lizhuoisland.com/"
              style={{ fontWeight: "bold", color: "#FF5C00" }}
            >
              https://www.lizhuoisland.com/
            </a>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default NotFoundPage;
