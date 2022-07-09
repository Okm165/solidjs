import { Component } from "solid-js";

import { DefaultProps, theme } from "../config";

import Fab from "@suid/material/Fab";
import Input from "@suid/material/Input";
import SearchIcon from "@suid/icons-material/Search";
import Badge from "@suid/material/Badge";
import Button from "@suid/material/Button";
import MenuIcon from "@suid/icons-material/Menu";

import { setState } from "./SideMenu";
import SideMenu from "./SideMenu";
import Stats from "./Stats";

const Nav: Component<{} & DefaultProps> = (props) => {
  return (
    <div
      id={props.id}
      class={`${props.class} flex flex-row justify-between flex-nowrap items-center p-1 truncate`}
      style={{
        ...props.style,
        "border-bottom-color": `${theme.borders.main}`,
        "border-bottom-width": "2px",
        "border-bottom-style": "solid",
      }}
    >
      <SideMenu />
      <div id="branding" class="inline-flex flex-row p-1 mx-3 shrink-0 grow-0 items-center">
        <img class="object-contain" width="60px" src="/src/assets/svg/bulllogo.svg" alt="logo" />
        <div class="text-base p-1 mx-2 hidden xl:block cursor-default" style={{ color: theme.palette.text.secondary }}>
          Cebulion
        </div>
      </div>
      <div class="truncate flex-shrink-0">
        <Fab
          size="small"
          sx={{
            mx: "10px",
            background: "rgba(159, 168, 218, 0.22)",
            color: theme.palette.text.primary,
            "&:hover": {
              background: `rgb(159, 168, 218, 0.32)`,
            },
          }}
          onClick={() => {
            setState(true);
          }}
        >
          <MenuIcon />
        </Fab>
      </div>
      <div class="p-1">
        <Input placeholder="search" size="small" sx={{ mx: "15px" }} startAdornment={<SearchIcon fontSize="small" color="secondary" />} />
      </div>
      <div class="flex-1 p-1">
        <Stats />
      </div>
      <div id="right_section" class="p-1 m-1">
        <Badge color="warning" variant="dot">
          <Button size="medium" variant="outlined" sx={{ textTransform: "none" }}>
            <div class="flex flex-row">
              <div class="hidden xl:flex flex-1 px-2">0xaf88..0022</div>
              <div class="w-6 h-6">
                <img width="100%" src="/src/assets/svg/metamask.svg" alt="metamask" class="my-auto mx-auto" />
              </div>
            </div>
          </Button>
        </Badge>
      </div>
    </div>
  );
};

export default Nav;
