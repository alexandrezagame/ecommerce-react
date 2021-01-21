import React from "react";
import useStyles from "./styles";
import { Toolbar, Typography, Container, AppBar } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>© Alex Zagame</footer>;
};

export default Footer;
