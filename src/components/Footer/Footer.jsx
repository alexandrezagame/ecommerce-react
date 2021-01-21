import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>© Alex Zagame</footer>;
};

export default Footer;
