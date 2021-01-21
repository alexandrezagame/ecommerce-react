import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.zoneone} theme>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Welcome to <strong>shopay</strong>, every week we propose 8 new products
        at a better price than anywhere else.
      </Typography>
    </Container>
  );
};

export default Hero;
