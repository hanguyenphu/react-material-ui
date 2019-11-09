import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import HistoryIcon from "@material-ui/icons/History";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../../component/authentication/Login/Login";
const useStyles = makeStyles({
    list: {
        width: 600
    },
    fullList: {
        width: 600
    }
});

export default function LeftMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title} style={{ flex: 1 }}>
                        Beeblee
                    </Typography>
                    <div>
                        <IconButton
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            color='inherit'
                        >
                            <Login />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer
                open={state.left}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
                style={{ width: "400px;" }}
            >
                <br />
                <Typography
                    variant='h6'
                    className={classes.title}
                    align='center'
                    color='primary'
                    mt='auto'
                >
                    Fullname
                </Typography>
                <List>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Account Settings' />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary='History' />
                    </ListItem>

                    <Divider />

                    <ListItem button>
                        <ListItemIcon>
                            <PowerSettingsNewIcon />
                        </ListItemIcon>
                        <ListItemText primary='Log out' />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
