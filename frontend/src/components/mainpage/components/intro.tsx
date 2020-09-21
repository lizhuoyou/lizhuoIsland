import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Button,
  Box,
} from "@material-ui/core";
import { history } from "../../../store";

const styles = (them: Theme) =>
  createStyles({
    root: {
      marginTop: "50px",
      width: "85%",
      height: "1000px",
      padding: "30px 30px 30px 30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: "10px",
      boxShadow: "10px 10px 20px #666666",
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Intro = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Box fontSize="5em" color="green" fontWeight="bold" fontStyle="italic">
        “The Map"
      </Box>
      <Box
        mt="10px"
        width="400px"
        fontSize="1.1em"
        color="grey"
        textAlign="center"
      >
        Here is the handy map which walks you through my island. Please spend a
        minute checking it!
      </Box>
      <Box
        mt="100px"
        width="800px"
        fontSize="1.52em"
        color="black"
        textAlign="center"
      >
        Sorry, the content is not available since the island is still under
        development. But don't worry, the island will be developed soon!
      </Box>
    </div>
  );
};

export default withStyles(styles)(Intro);
