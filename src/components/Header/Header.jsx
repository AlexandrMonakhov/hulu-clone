import React from "react";
import "./Header.scss";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <header className="header">
      <div className="header-icons">
        <div className="header-icons__item header-icons__item--active">
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className="header-icons__item">
          <FlashOnIcon />
          <span>Trending</span>
        </div>
        <div className="header-icons__item">
          <LiveTvIcon />
          <span>Verified</span>
        </div>
        <div className="header-icons__item">
          <VideoLibraryIcon />
          <span>Collections</span>
        </div>
        <div className="header-icons__item">
          <SearchIcon />
          <span>Search</span>
        </div>
        <div className="header-icons__item">
          <PersonOutlineIcon />
          <span>Account</span>
        </div>
      </div>
      <img
        className="header__logo"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="Logo: Hulu logo"
      />
    </header>
  );
}

export default Header;
