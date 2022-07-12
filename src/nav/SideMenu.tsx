import { Component, createSignal } from "solid-js";
import { DefaultProps, theme } from "../config";
import Drawer from "@suid/material/Drawer";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import Divider from "@suid/material/Divider";
import StorefrontIcon from "@suid/icons-material/Storefront";
import ShowChartIcon from "@suid/icons-material/ShowChart";
import SchoolIcon from "@suid/icons-material/School";
import SettingsIcon from "@suid/icons-material/Settings";

export const [state, setState] = createSignal<boolean>(false);

const SideMenu: Component<{} & DefaultProps> = (props) => {
  return (
    <Drawer
      id={props.id}
      style={props.style}
      class={props.class}
      anchor="left"
      open={state()}
      onClose={(event) => {
        setState(false);
      }}
      sx={{
        zIndex: 9999,
        "& .MuiDrawer-paper": { bgcolor: theme.palette.background.default },
      }}
      onClick={(event) => {
        setState(false);
      }}
    >
      <ListItem disablePadding>
        <ListItemButton sx={{ px: "50px" }}>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary={"Markets"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton sx={{ px: "50px" }}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={"Trade"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton sx={{ px: "50px" }}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary={"Academy"} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ mt: "auto", bgcolor: "rgba(0,0,0,0.3)" }}>
        <ListItemButton sx={{ px: "50px" }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
};

export default SideMenu;
