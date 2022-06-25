import React from "react";
import classes from "./Navbar.module.scss";
import ShareIcon from "@mui/icons-material/Share";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const shareData = {
    title: "Loop",
    text: "Easy Catch Up!",
    url: "https://loop.com",
  };
  const shareButtonHandler = async () => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error("there was an error when trying to share");
    }
  };
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" width="80" />
        <span className={classes.logoText}>
          <span className={classes.logoTextHeader}>Loop</span>
          <span className={classes.logoTextDescription}>Easy Catch Up</span>
        </span>
      </div>
      <div className={classes.share} onClick={shareButtonHandler}>
        <p>Spread the word!</p>
        <ShareIcon />
      </div>
    </div>
  );
};

export default Navbar;
