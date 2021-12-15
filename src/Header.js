import React from "react";
import "./Header.css";
import {
  Flag,
  Home,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <Search />
        <input type="text" />
      </div>
      <div className="header__middle">
        <div className="header__option">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
          <div className="header__info">
              <Avatar />
              <h4>Origogi</h4>
          </div>
      </div>
    </div>
  );
}

export default Header;
