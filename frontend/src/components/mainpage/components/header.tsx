import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Button,
  Box,
} from "@material-ui/core";
import Typed from "react-typed";
import { history } from "../../../store";

const BackgroundVideo = require("../img/lizhuoBackgroundVideo.mp4");

const styles = (them: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      marginTop: "-100vh",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 10,
    },
    navBar: {
      paddingTop: "1.5vh",
      paddingBottom: "1.5vh",
      paddingRight: "-2vw",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "cneter",
    },
    navLink: {
      padding: "none",
      marginRight: "1vw",
      color: "white",
      fontSize: "1.3rem",
      fontWeight: 900,
      textDecoration: "none",
      textTransform: "uppercase",
      "&:hover, &:active": {
        color: "rgba(255,215, 0 ,0.85)",
      },
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Header = (props: Props) => {
  const { classes } = props;
  const [pages, setPages] = React.useState([false, false, false, false]);

  return (
    <div className={classes.root}>
      <video
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
        autoPlay
        src={BackgroundVideo}
        muted
        loop
      >
        The video is blocked"
      </video>
      <div className={classes.content}>
        <div className={classes.navBar}>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: false ? "gold" : "default" }}
            onClick={() => history.push("/")}
          >
            home
          </Button>
          <div className={classes.navLink}>·</div>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: false ? "gold" : "default" }}
            onClick={() => history.push("/lizhuo")}
          >
            lizhuo
          </Button>
          <div className={classes.navLink}>·</div>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: false ? "gold" : "default" }}
            onClick={() => history.push("/codefountain")}
          >
            codeFountain
          </Button>
          <div className={classes.navLink}>·</div>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: false ? "gold" : "default" }}
            onClick={() => history.push("/poetrylake")}
          >
            poetryLake
          </Button>
        </div>
        <Typed
          style={{
            marginTop: "32vh",
            color: "white",
            fontSize: "5rem",
            fontWeight: "bold",
          }}
          strings={[
            "Hello there,",
            'While people say, "No one is an island"',
            "I say,",
            '"Every website is an island,"',
            '"an island waiting to be explored"',
            "So,",
            "Welcome to Lizhuo's island!",
          ]}
          typeSpeed={65}
          backSpeed={70}
        />
        <Box
          mt="5vh"
          width="350px"
          fontSize="1.3rem"
          color="grey"
          textAlign="center"
        >
          Here it should be a button
        </Box>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
