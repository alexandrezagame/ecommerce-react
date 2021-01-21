import { makeStyles } from "@material-ui/core/styles";

const font = "'Fredoka One', cursive";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  zoneone: {
    height: "50vh",
    display: "flex",
    minWidth: "100vw",
    flexDirection: "column",
    backgroundColor: "#FEBC00",
    alignItems: "center",
    // marginTop: "5rem",
    // marginBottom: "1rem",
  },
  title: {
    // display: "flex",
    fontFamily: font,
    width: "50vw",
    textAlign: "center",
    color: "white",
    marginTop: "5%",
    marginBottom: "5%",
    overflow: "auto",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    height: "20vh",
    justifyContent: "space-between",
  },
}));
