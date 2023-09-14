import React from "react";
import { BiHomeSmile, BiCameraMovie } from "react-icons/bi";
import {PiTelevision} from "react-icons/pi"
import {VscCalendar} from "react-icons/vsc"
import { TbLogout } from 'react-icons/tb';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BiHomeSmile />,
    className: "",
  },

  {
    title: "Movies",
    path: "/movie:id",
    icon: <BiCameraMovie />,
    className: "",
  },

  {
    title: "TV Series",
    path: "",
    icon: <PiTelevision />,
    className: "nav-text",
  },

  {
    title: "Upcoming",
    path: "",
    icon: <VscCalendar />,
    className: "nav-text",
  },

  {
    title: "Logout",
    path: "/",
    icon: <TbLogout />,
    className: "nav-text",
  },
];
