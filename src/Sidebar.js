import {
  Chat,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  StorefrontOutlined,
  VideoLibrary,
} from "@mui/icons-material";
import { getDisplayName } from "@mui/utils";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src='' title='Origogi' />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={People} title="Freinds" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={StorefrontOutlined} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
