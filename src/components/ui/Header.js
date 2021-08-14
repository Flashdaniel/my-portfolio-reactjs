/** @format */

import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";

import { DrawerContext } from "../../Context/DrawerContext";
import { LinkContext } from "../../Context/LinkContext";

const useStyles = makeStyles((theme) => ({
	nav: {
		position: "fixed",
		zIndex: 1500,
		right: 40,
		top: 100,
		[theme.breakpoints.down("xs")]: {
			right: 10,
		},
		[theme.breakpoints.down("sm")]: {
			right: 20,
			top: 20,
		},
	},
	menuIcon: {
		backgroundColor: theme.palette.common.lightDark,
		width: 40,
		height: 40,
		color: "#ffffff",
	},
	navButton: {
		padding: "10px 20px",
		backgroundColor: theme.palette.common.lightDark,
		fontSize: 15,
		fontFamily: "Poppins",
		color: "#ffffff",
		fontWeight: 500,
		borderRadius: theme.spacing(3),
		"& .MuiButton-iconSizeMedium > *:first-child": {
			fontSize: 30,
		},
	},
	navButtonHover: {
		padding: "10px 20px",
		backgroundColor: theme.palette.common.red,
		fontSize: 15,
		fontFamily: "Poppins",
		color: "#ffffff",
		fontWeight: 500,
		borderRadius: theme.spacing(3),
		"& .MuiButton-iconSizeMedium > *:first-child": {
			fontSize: 30,
		},
		"&:hover": {
			backgroundColor: theme.palette.common.red,
		},
	},
	icon: {
		fontSize: 30,
	},
	drawer: {
		backgroundColor: theme.palette.common.lightDark,
		color: "#ffffff",
		paddingTop: "55px",
	},
	listItem: {
		marginBottom: theme.spacing(2),
	},
}));

export default function Header() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesProPad = useMediaQuery(
		"(max-width: 1024px) and (min-height: 1366px)"
	);
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const [open, setOpen] = useContext(DrawerContext);
	const [selectedNav, setSelectedNav] = useContext(LinkContext);
	const [homeHover, setHomeHover] = useState(false);
	const [profileHover, setProfileHover] = useState(false);
	const [workHover, setWorkHover] = useState(false);
	const [contactHover, setContactHover] = useState(false);

	function homeHoverMouseEnter(e) {
		setHomeHover(true);
	}

	function homeHoverMouseLeave(e) {
		setHomeHover(false);
	}

	function profileHoverMouseEnter(e) {
		setProfileHover(true);
	}

	function profileHoverMouseLeave(e) {
		setProfileHover(false);
	}

	function workHoverMouseEnter(e) {
		setWorkHover(true);
	}

	function workHoverMouseLeave(e) {
		setWorkHover(false);
	}

	function contactHoverMouseEnter(e) {
		setContactHover(true);
	}

	function contactHoverMouseLeave(e) {
		setContactHover(false);
	}

	const routers = [
		{
			name: "HOME",
			link: "/",
			icon: <HomeIcon />,
			iconProps: <HomeIcon className={classes.icon} />,
			hover: homeHover,
			onMouseEnter: homeHoverMouseEnter,
			onMouseLeave: homeHoverMouseLeave,
			selected: 0,
		},
		{
			name: "ABOUT",
			link: "/about",
			icon: <PersonIcon />,
			iconProps: <PersonIcon className={classes.icon} />,
			hover: profileHover,
			onMouseEnter: profileHoverMouseEnter,
			onMouseLeave: profileHoverMouseLeave,
			selected: 1,
		},
		{
			name: "PORTFOLIO",
			link: "/portfolio",
			icon: <LocalMallIcon />,
			iconProps: <LocalMallIcon className={classes.icon} />,
			hover: workHover,
			onMouseEnter: workHoverMouseEnter,
			onMouseLeave: workHoverMouseLeave,
			selected: 2,
		},
		{
			name: "CONTACT",
			link: "/contact",
			icon: <EmailIcon />,
			iconProps: <EmailIcon className={classes.icon} />,
			hover: contactHover,
			onMouseEnter: contactHoverMouseEnter,
			onMouseLeave: contactHoverMouseLeave,
			selected: 3,
		},
	];

	useEffect(() => {
		routers.forEach((route) => {
			switch (window.location.pathname) {
				case route.link:
					if (route.selected !== selectedNav) {
						setSelectedNav(route.selected);
					}
					break;
				default:
					break;
			}
		});
	});

	return (
		<header
			className={classes.nav}
			style={{ top: matchesXS ? 20 : matchesProPad ? 520 : undefined }}
		>
			<Hidden mdUp>
				<IconButton disableRipple onClick={() => setOpen(!open)}>
					{open ? (
						<CloseIcon className={classes.menuIcon} />
					) : (
						<MenuIcon className={classes.menuIcon} />
					)}
				</IconButton>
			</Hidden>

			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				anchor="top"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				classes={{ paper: classes.drawer }}
			>
				<List>
					{routers.map((route, index) => (
						<ListItem
							component={Link}
							to={route.link}
							button
							key={`${route}${index}`}
							className={classes.listItem}
							onClick={() => {
								setSelectedNav(route.selected);
								setOpen(false);
							}}
						>
							<ListItemIcon
								style={{
									color:
										route.selected === selectedNav
											? theme.palette.common.red
											: "#ffffff",
								}}
							>
								{route.iconProps}
							</ListItemIcon>
							<ListItemText
								style={{
									color:
										selectedNav === route.selected
											? theme.palette.common.red
											: "#ffffff",
								}}
								primary={route.name}
							/>
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>

			<Hidden smDown>
				<Grid
					container
					direction="column"
					alignItems="flex-end"
					justify="center"
					spacing={6}
				>
					{routers.map((route, index) => (
						<Grid item key={`${route}${index}`}>
							<Button
								component={Link}
								to={route.link}
								style={{
									backgroundColor:
										route.selected === selectedNav && theme.palette.common.red,
								}}
								variant="contained"
								endIcon={route.hover ? route.icon : undefined}
								className={
									route.hover ? classes.navButtonHover : classes.navButton
								}
								onMouseEnter={route.onMouseEnter}
								onMouseLeave={route.onMouseLeave}
								onClick={() => setSelectedNav(route.selected)}
							>
								{route.hover ? route.name : route.iconProps}
							</Button>
						</Grid>
					))}
				</Grid>
			</Hidden>
		</header>
	);
}
