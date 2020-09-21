import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Box,
  Button,
} from "@material-ui/core";
import Header from "./components/header";
import Intro from "./components/intro";
import panoPic from "./img/pano.jpg";

const styles = (them: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
      "@global": {
        scrollBehavior: "smooth",
        "*::-webkit-scrollbar": {
          width: "10px !important",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "linear-gradient(#108dc7, #ef8e38)",
          borderRadius: "5px",
        },
      },
    },
    container: {
      height: "100vh",
      overflow: "auto",
      background:
        "linear-gradient(217deg, rgba(30, 171, 215,.8), rgba(30, 171, 215,0) 70.71%),linear-gradient(127deg, rgba(242, 103, 31,.8), rgba(242, 103, 31,0) 70.71%),linear-gradient(336deg, rgba(242, 103, 31,.8), rgba(242, 103, 31,0) 70.71%);",
    },
  });

interface Props extends WithStyles<typeof styles> {}

const MainPage = (props: Props) => {
  const { classes } = props;
  const [nums, setNums] = React.useState(0);

  const addCircle = () => {
    setNums(nums + 1);
  };

  const removeCircle = () => {
    setNums(nums > 0 ? nums - 1 : 0);
  };

  const generateCircles = () => {
    let lst = [];
    for (let i = 0; i < nums; i++) {
      lst.push(
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            background: "linear-gradient(#8360c3, #2ebf91)",
            textAlign: "center",
            lineHeight: "50px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {i + 1}
        </div>
      );
    }
    return lst;
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Header />
          <Intro />

          {/* More info about the web */}
          <div
            style={{
              marginTop: "50px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={panoPic}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                zIndex: -1,
              }}
              alt=""
            />
            <Box
              mt="-350px"
              height="350px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box fontSize="2em" color="black">
                Since my island is still under consctruction, there are not much
                availabe for now.
              </Box>
              <Box
                mt="15px"
                width="600px"
                textAlign="center"
                fontSize="1.45em"
                color="white"
              >
                If you want to checkout my LinkedIn, please go to{" "}
                <a
                  href="https://www.linkedin.com/in/lizhuoyou/"
                  style={{ fontWeight: "bold", color: "#FF5C00" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/lizhuoyou/
                </a>
              </Box>
              <Box
                mt="15px"
                width="600px"
                textAlign="center"
                fontSize="1.45em"
                color="white"
              >
                If you want to have a look at my GitHub projects, please visit{" "}
                <a
                  href="https://github.com/lizhuoyou"
                  style={{ fontWeight: "bold", color: "#FF5C00" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/lizhuoyou
                </a>
              </Box>
              <Box
                mt="15px"
                width="600px"
                textAlign="center"
                fontSize="1.45em"
                color="white"
              >
                And please email me at{" "}
                <Box color="green">mrlizhuoyou@gmail.com</Box>
                if you want to know more about me and my projects
              </Box>
            </Box>
          </div>

          <Box
            mt="50px"
            width="600px"
            textAlign="center"
            fontSize="1.45em"
            color="#505050"
          >
            The following is simply used to test the page
          </Box>
          <Box mt="10px" m="30px">
            <Button
              style={{ width: "200px", color: "red", textTransform: "none" }}
              onClick={addCircle}
            >
              Add Circles
            </Button>
            <Button
              style={{ width: "200px", color: "blue", textTransform: "none" }}
              onClick={removeCircle}
            >
              Remove Circles
            </Button>
          </Box>
          {generateCircles()}
        </Box>
      </div>
    </div>
  );
};

export default withStyles(styles)(MainPage);
