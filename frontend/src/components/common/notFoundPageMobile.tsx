import React from "react";
import { Box } from "@material-ui/core";
import sunsetBackground from "./sunset.jpg";

const NotFoundPage = () => {
  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column">
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
            width: "85vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            boxShadow: "6px 6px 12px #222222",
            borderRadius: "6px",
            paddingTop: "20px",
            paddingBottom: "20px",
            alignItems: "center",
          }}
        >
          <Box
            mt="10px"
            textAlign="center"
            fontSize="88px"
            color="#000"
            fontWeight="bold"
          >
            404
          </Box>
          <Box
            mt="10px"
            width="70vw"
            textAlign="center"
            fontSize="20px"
            color="#505050"
          >
            Sorry, the page is not found.
          </Box>
          <Box
            mt="8px"
            width="70vw"
            textAlign="center"
            fontSize="16px"
            color="#505050"
          >
            Either the URL is wrong or the page hasn't been constructed.
          </Box>
          <Box
            mt="5px"
            width="70vw"
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
    </Box>
  );
};

export default NotFoundPage;
