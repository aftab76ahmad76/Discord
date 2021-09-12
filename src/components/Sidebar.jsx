import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoIcon from "@material-ui/icons/Info";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addChannel } from "../redux/actions/sideBarActions";

const Sidebar = () => {
  const dispatch = useDispatch()
  const handleAddChannelClick = () => {
    const newChannelName = prompt('Enter channel name: ')
    dispatch(addChannel(newChannelName))
  }
  const channelsList = useSelector(state => state.sideBar.channelsList)
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>{"Discord Clone"}</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar-channels">
        <div className="sidebar-channels-header">
          <div className="sidebar-header">
            <ExpandMoreIcon />
            <h4>{"Add Channels"}</h4>
          </div>
          <AddIcon onClick={handleAddChannelClick} className="sidebar-addChannel" />
        </div>
        <div className="sidebar-channelsList">
          {
            channelsList.map(item => {
              return <SidebarChannel name={item.name} id={item.id} />
            })
          }
        </div>
      </div>
      <div className="sidebar-voice">
        <SignalCellularAltIcon
          className="sidebar-voice-icon"
          fontSize="large"
        />
        <div className="sidebar-voice-info">
          <h3>{"Voice Connected"}</h3>
          <p>{"Stream"}</p>
        </div>
        <div className="sidebar-voice-icons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar-user">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjDBO1V6Y6i2ObD7MoyKHkjuVTGQUVs7wJA&usqp=CAU"
        />
        <div className="sidebar-user-info">
          <h3>{'Aftab Ahmad'}</h3>
          <p>{`aa0140527`}</p>
        </div>
        <div className="sidebar-user-icons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
