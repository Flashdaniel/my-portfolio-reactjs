/** @format */

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	listItem: {
		"& .MuiTypography-body1": {
			color: theme.palette.common.lightDark,
		},
	},
}));

export default function MiniDrawer() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<React.Fragment>
			<AppBar position="fixed" className={clsx(classes.appBar)}>
				<Toolbar>
					<div style={{ flexGrow: 1 }}>
						<Typography
							variant="h6"
							noWrap
							style={{
								display: "flex",
								alignItems: "center",
								fontWeight: 800,
								color: "#fff",
							}}
						>
							<Avatar
								style={{
									color: theme.palette.common.red,
									backgroundColor: "#ffff",
									fontSize: 35,
								}}
							>
								A
							</Avatar>
							<Hidden smDown>dmin Dashboard</Hidden>
						</Typography>
					</div>
					<nav style={{ display: "flex", alignItems: "center" }}>
						<Typography variant="h6" nowrap style={{ fontWeight: 600 }}>
							Daniel
						</Typography>
						<IconButton aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="secondary">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton
							aria-label="account of current user"
							aria-controls="primary-search-account-menu"
							aria-haspopup="true"
							color="inherit"
							component={Link}
							href="/logout"
						>
							<AccountCircle />
						</IconButton>
					</nav>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
