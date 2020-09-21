import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import Typed from "react-typed";
import { history } from "../../../store";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

const BackgroundVideo = require("../img/lizhuoBackgroundVideo.mp4");
const soundfile = require("./wontCry.mp3");

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
    startButton: {
      marginTop: "max(14px, min(28px, 1.9vw))",
      fontSize: "max(41px, min(82px, 5.7vw))",
      color: "rgba(255,255,255,0.5)",
      height: "max(41px, min(82px, 5.7vw))",
      width: "max(41px, min(82px, 5.7vw))",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#FFFFFF",
      },
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Header = (props: Props) => {
  const { classes } = props;
  const [musicOn, setMusicOn] = React.useState(false);

  const audRef = React.useRef<any>(null);

  const playmusic = () => {
    if (audRef) {
      if (!musicOn) {
        audRef.current.play();
      } else {
        audRef.current.pause();
      }
    }
    setMusicOn(!musicOn);
  };

  return (
    <div className={classes.root}>
      <audio ref={audRef} src={soundfile} loop />
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
        The video is blocked
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
          color="#D8D8D8"
          textAlign="center"
        >
          Click the button to start ↓ (This is currently does nothing but
          playing a beautiful piano music for you)
        </Box>
        <IconButton
          onClick={() => playmusic()}
          disableRipple={true}
          className={classes.startButton}
        >
          {musicOn ? (
            <PauseCircleFilledIcon fontSize="inherit" />
          ) : (
            <PlayCircleFilledWhiteIcon fontSize="inherit" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
