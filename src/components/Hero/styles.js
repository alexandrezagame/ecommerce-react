import { makeStyles } from "@material-ui/core/styles";

const font = "'Fredoka One', cursive";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  zoneone: {
    // height: "50vh",
    minWidth: "100vw",
    backgroundColor: "#FEBC00",

    // marginTop: "5rem",
    // marginBottom: "1rem",
  },
  title: {
    // display: "flex",
    margin: "0 auto",
    // justifyContent: "center",
    fontFamily: font,
    fontSize: "2rem",
    // alignContent: "center",
    // alignItems: "center",
    width: "50vw",
    textAlign: "center",
    color: "white",
    marginTop: "5%",
    marginBottom: "5%",
    // overflow: "auto",
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
