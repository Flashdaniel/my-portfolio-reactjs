/** @format */

import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

import { LinkContext } from "./Context/LinkContext";

import Header from "./components/ui/Header";

import homeImage from "./assets/ceoo.jpg";
import forwardArrow from "./assets/forward.svg";

const useStyles = makeStyles((theme) => ({
	firstBox: {
		backgroundColor: theme.palette.common.bgColor,
		height: "100%",
		width: "100%",
	},
	secondBox: {
		backgroundColor: theme.palette.common.red,
		position: "fixed",
		height: "200%",
		width: "100%",
		transform: "rotate(-15deg)",
		top: "-50%",
		left: "-73%",
	},
	mainContainer: {
		height: "100%",
		width: "auto",
		[theme.breakpoints.down("xs")]: {
			margin: "10px 20px",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "50px 0",
		},
	},
	paper: {
		backgroundImage: `url(${homeImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top",
		height: "calc(100vh - 100px)",
		Width: "100%",
		minWidth: "400px",
		top: "48px",
		left: "40px",
		borderRadius: theme.spacing(5),
		position: "fixed",
		zIndex: theme.zIndex.modal,
	},
	avatar: {
		width: 250,
		height: 250,
		border: `6px solid ${theme.palette.common.lightDark}`,
	},
	content: {
		maxWidth: "55%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "80%",
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: "100%",
		},
	},
	heading1: {
		lineHeight: "48px",
		[theme.breakpoints.down("md")]: {
			fontSize: "2.6rem",
			lineHeight: "38px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.6rem",
			lineHeight: "29px",
		},
	},
	h1Span: {
		color: "#ffffff",
		fontSize: 45,
		[theme.breakpoints.down("md")]: {
			fontSize: 33,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.6rem",
		},
	},
	button: {
		border: `2px solid ${theme.palette.common.red}`,
		borderRadius: theme.spacing(5),
		paddingRight: 0,
		fontWeight: 600,
		fontFamily: "Poppins",
		height: 60,
		width: 240,
		color: "#ffffff",
		marginTop: 20,
		marginBottom: 40,
		backgroundColor: theme.palette.common.red,
		justifyContent: "flex-end",
		transitionDuration: "800ms",
		transitionProperty: "background",
		transitionTimingFunction: "ease-in-out",
		"&:hover": {
			border: `2px solid ${theme.palette.common.red}`,
			borderRadius: theme.spacing(6),
			color: "#ffffff",
			backgroundColor: theme.palette.primary.dark,
		},
		[theme.breakpoints.down("xs")]: {
			width: "200px",
			fontSize: "12px",
		},
	},
	buttonIconContainer: {
		backgroundColor: theme.palette.common.red,
		height: "60px",
		width: "60px",
		borderRadius: theme.spacing(6),
	},
	buttonIcon: {
		marginTop: "13px",
		marginBottom: "13px",
		marginLeft: "13px",
	},
}));

export default function Home(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const [selectedNav, setSelectedNav] = useContext(LinkContext);

	useEffect(() => {
		document.title = "Home - Daniel Nweze";
	});

	return (
		<Box
			variant="div"
			className={classes.firstBox}
			style={{ overflowY: matchesSM ? "scroll" : undefined }}
		>
			<Header />
			<Hidden smDown>
				<Box variant="div" className={classes.secondBox}></Box>
			</Hidden>
			<Grid
				container
				className={classes.mainContainer}
				direction="row"
				justify={matchesXS ? "flex-start" : matchesSM ? "center" : undefined}
				alignItems={matchesSM ? "center" : undefined}
			>
				<Hidden smDown>
					<Grid item xs={4}>
						<Paper elevation={10} className={classes.paper} />
					</Grid>
				</Hidden>
				<Hidden mdUp xsDown>
					<Grid
						item
						style={{
							alignSelf: matchesSM && "flex-end",
							marginBottom: matchesSM && 15,
						}}
					>
						<Avatar
							alt="image picture"
							src={homeImage}
							className={classes.avatar}
						/>
					</Grid>
				</Hidden>
				<Grid
					item
					container
					direction="column"
					justify="center"
					alignItems={matchesXS ? "flex-start" : "center"}
					style={{
						alignSelf: matchesXS ? "center" : matchesSM && "flex-start",
					}}
					md
				>
					<Grid item className={classes.content}>
						<Typography
							variant="h1"
							color="primary"
							gutterBottom
							className={classes.heading1}
							align={
								matchesXS ? "flex-start" : matchesSM ? "center" : undefined
							}
						>
							NWEZE DANIEL
							<br />
							<span className={classes.h1Span}>SOFTWARE ENGINEER</span>
						</Typography>
						<Typography
							variant="subtitle1"
							align={
								matchesXS ? "flex-start" : matchesSM ? "center" : undefined
							}
						>
							I’m a Nigerian based UI Designer and Full Stack Web Developer
							focused on crafting clean & user-friendly experiences, I am
							passionate about building excellent softwares that improves the
							lives of those around me.
						</Typography>
						<Hidden smDown>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								onClick={() => setSelectedNav(1)}
								endIcon={
									<span className={classes.buttonIconContainer}>
										<img
											className={classes.buttonIcon}
											alt="forward arrow"
											src={forwardArrow}
										/>
									</span>
								}
								to="/about"
								component={Link}
							>
								MORE ABOUT ME
							</Button>
						</Hidden>
					</Grid>
					<Hidden mdUp>
						<Grid item>
							<Button
								variant="outlined"
								color="primary"
								to="/about"
								component={Link}
								className={classes.button}
								onClick={() => setSelectedNav(1)}
								endIcon={
									<span className={classes.buttonIconContainer}>
										<img
											className={classes.buttonIcon}
											alt="Go to about me page forward arrow"
											src={forwardArrow}
										/>
									</span>
								}
							>
								MORE ABOUT ME
							</Button>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
		</Box>
	);
}
