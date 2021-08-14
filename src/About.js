/** @format */

import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import PageviewIcon from "@material-ui/icons/Pageview";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from "@material-ui/core/Avatar";

import homeImage from "./assets/ceoo.jpg";
import code from "./assets/code 1.svg";
import consulte from "./assets/avatar (1) 1.svg";
import design from "./assets/design 1.svg";
import educate from "./assets/mortarboard 1.svg";

import Header from "./components/ui/Header";
import Appbar from "./components/ui/Appbar";

import { DrawerContext } from "./Context/DrawerContext";

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: theme.palette.common.bgColor,
		height: "100%",
		overflowY: "scroll",
	},
	headingcontainer: {
		position: "relative",
	},
	heading11: {
		color: "#ffffff",
		zIndex: 1,
	},
	heading2: {
		color: "#ffffff",
		marginBottom: 23,
	},
	avatar: {
		width: 250,
		height: 250,
		border: `6px solid ${theme.palette.common.lightDark}`,
	},
	infoParagraph: {
		fontSize: "0.8rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.8rem",
		},
	},
	mainContainer1: {
		paddingTop: "60px",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "30px",
		},
	},
	personalcontainer: {
		padding: "80px 150px",
		[theme.breakpoints.down("xs")]: {
			padding: "50px 20px",
		},
	},
	resume: {
		fontSize: 110,
		color: theme.palette.common.lightDark,
		fontWeight: 800,
		lineHeight: "62px",
		fontFamily: "Poppins",
		position: "absolute",
		zIndex: 0,
	},
	us: {
		color: theme.palette.common.red,
	},
	infoOpac: {
		opacity: 0.8,
	},
	button: {
		border: `2px solid ${theme.palette.common.red}`,
		borderRadius: theme.spacing(5),
		paddingRight: 0,
		fontWeight: 600,
		fontFamily: "Poppins",
		height: 50,
		width: 160,
		color: "#ffffff",
		marginTop: 25,
		marginBottom: 45,
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
			width: 140,
			fontSize: 12,
			paddingTop: 0,
		},
	},
	buttonIconContainer: {
		backgroundColor: theme.palette.common.red,
		height: 50,
		width: 50,
		borderRadius: theme.spacing(6),
	},
	buttonIcon: {
		marginTop: 9,
		marginBottom: 9,
		fontSize: 32,
	},
	paper: {
		width: 200,
		height: 150,
		color: "#ffffff",
		border: `3px solid ${theme.palette.common.lightDark}`,
		backgroundColor: theme.palette.common.bgColor,
		padding: "8px 0",
	},
	paperFirst: {
		fontSize: "3.3rem",
		fontWeight: 700,
		fontFamily: "Poppins",
		color: theme.palette.common.red,
		marginTop: 10,
		marginLeft: 30,
		display: "inline-block",
	},
	paperSecond: {
		fontSize: 16,
		marginLeft: 30,
	},
	paperlonger: {
		width: 425,
		height: 150,
		color: "#ffffff",
		padding: "8px 0",
		border: `3px solid ${theme.palette.common.lightDark}`,
		backgroundColor: theme.palette.common.bgColor,
		[theme.breakpoints.down("xs")]: {
			width: 200,
		},
	},
	paperlongerFirst: {
		fontSize: "3.3rem",
		fontWeight: 700,
		fontFamily: "Poppins",
		color: theme.palette.common.red,
		marginTop: 25,
		marginLeft: 50,
		display: "inline-block",
		[theme.breakpoints.down("sm")]: {
			marginLeft: 30,
		},
	},
	paperlongerSecond: {
		fontSize: 16,
		marginLeft: 50,
		[theme.breakpoints.down("sm")]: {
			marginLeft: 30,
		},
	},
	progress: {
		padding: "80px 150px",
		[theme.breakpoints.down("xs")]: {
			padding: "50px 20px",
		},
	},
	progressHeading: {
		marginBottom: "26px",
	},
	progressitem: {
		marginBottom: "30px",
	},
	experiencecontainer: {
		padding: "80px 150px",
		[theme.breakpoints.down("xs")]: {
			padding: "50px 20px",
		},
	},
	exerienceTitle: {
		marginBottom: "26px",
	},
	experienceImagecontainer: {
		backgroundColor: theme.palette.common.red,
		padding: "10px",
		height: 32,
		width: 32,
		borderRadius: theme.spacing(5),
	},
	date: {
		backgroundColor: theme.palette.common.lightDark,
		display: "flex",
		justifyContent: "center",
		borderRadius: theme.spacing(3),
		padding: "5px 20px",
		color: "#ffffff",
		opacity: 0.7,
		width: 115,
		fontFamily: "Poppins",
		fontWeight: 300,
		marginBottom: 10,
	},
	subH6: {
		opacity: 0.7,
	},
}));

export default function About() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesIpad = useMediaQuery("(width: 768px) and (height: 1024px)");

	const [open] = useContext(DrawerContext);

	useEffect(() => {
		document.title = "About - Daniel Nweze";
	});
	const title = (
		<span style={{ color: open && "#ffffff" }}>
			ABOUT {""}
			<span
				style={{
					color: open ? theme.palette.common.red : theme.palette.common.bgColor,
				}}
			>
				ME
			</span>
		</span>
	);

	return (
		<Box variant="div" className={classes.box}>
			<Grid container direction="column" className={classes.mainContainer1}>
				<Appbar title={title} />
				<Header />
				<Hidden xsDown>
					<Grid
						item
						container
						justify="center"
						className={classes.headingcontainer}
					>
						<Typography variant="h1" className={classes.heading11}>
							ABOUT <span className={classes.us}>ME</span>
						</Typography>
						<span className={classes.resume}>RESUME</span>
					</Grid>
				</Hidden>
				<Grid
					item
					container
					direction="row"
					alignItems={matchesXS ? "center" : undefined}
					justify={matchesSM ? "center" : undefined}
					className={classes.personalcontainer}
				>
					<Grid
						item
						container
						direction="column"
						justify={matchesSM ? "center" : undefined}
						alignItems={matchesXS ? "center" : undefined}
						md
					>
						<Grid item>
							<Typography
								variant="h2"
								className={classes.heading2}
								gutterBottom
							>
								PERSONAL INFOS
							</Typography>
						</Grid>
						<Hidden smUp>
							<Grid
								item
								style={{
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
							direction={matchesIpad ? "row" : matchesXS ? "column" : "row"}
							spacing={matchesXS ? 0 : matchesSM ? 10 : 4}
						>
							<Grid item>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>First name:</span>
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}{" "}
									Daniel
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Last name:</span>{" "}
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}Nweze
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Age:</span>
									{matchesSM ? undefined : matchesMD ? <br /> : undefined} 23
									Years
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Nationality:</span>
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}{" "}
									Nigeria
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Freelance:</span>
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}{" "}
									Available
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Address:</span>
									{matchesSM ? undefined : matchesMD ? <br /> : undefined} Enugu
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Phone:</span>{" "}
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}
									+2348167644956
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>E-Mail:</span>{" "}
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}
									flashdaniel0@gmail.com
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Instagram:</span>{" "}
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}
									#flashdaniel0
								</Typography>
								<Typography
									variant="body1"
									paragraph
									style={{
										fontSize: matchesIpad
											? "0.8rem"
											: matchesSM
											? "1.1rem"
											: matchesMD && "0.8rem",
										marginBottom: matchesSM ? 22 : matchesMD ? 10 : 20,
									}}
								>
									<span className={classes.infoOpac}>Language:</span>
									{matchesSM ? undefined : matchesMD ? <br /> : undefined}{" "}
									English
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								endIcon={
									<span className={classes.buttonIconContainer}>
										<PageviewIcon className={classes.buttonIcon} />
									</span>
								}
							>
								VIEW CV
							</Button>
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems={matchesSM ? "center" : "flex-end"}
						spacing={2}
						md
					>
						<Grid
							item
							container
							justify={matchesSM ? "center" : "flex-end"}
							spacing={2}
						>
							<Grid item>
								<Paper variant="outlined" className={classes.paper}>
									<Typography variant="h2" className={classes.paperFirst}>
										3+
									</Typography>
									<br />
									<Typography variant="body1" className={classes.paperSecond}>
										YEARS OF
										<br /> EXPERIENCE
									</Typography>
								</Paper>
							</Grid>
							<Grid item>
								<Paper variant="outlined" className={classes.paper}>
									<Typography variant="h2" className={classes.paperFirst}>
										8+
									</Typography>
									<br />
									<Typography variant="body1" className={classes.paperSecond}>
										COMPLETED
										<br /> PROJECTS
									</Typography>
								</Paper>
							</Grid>
						</Grid>
						<Grid item>
							<Paper variant="outlined" className={classes.paperlonger}>
								<Typography variant="h2" className={classes.paperlongerFirst}>
									5+
								</Typography>
								<br />
								<Typography
									variant="body1"
									className={classes.paperlongerSecond}
								>
									VERY HAPPY CUSOMERS
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
				<Divider style={{ backgroundColor: theme.palette.common.lightDark }} />
				<Grid item container direction="column" className={classes.progress}>
					<Grid item className={classes.progressHeading}>
						<Typography variant="h2" align="center" gutterBottom>
							MY SKILLS
						</Typography>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									TEAM WORK
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={98}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									98
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									LEADERSHIP
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={98}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									98
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									ADOBE XD
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={65}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									65
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									HTML
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={80}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={5}>
								<Typography variant="body1" color="primary">{`${Math.round(
									80
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									CSS
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={80}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									80
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									JQUERY
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={70}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									70
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									JAVASCRIPT
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={80}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									80
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									REACTJS
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={85}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									85
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									PYTHON
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={90}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									90
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									FIGMA
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={70}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									70
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item className={classes.progressitem}>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={matchesXS && "column"}
						>
							<Box minWidth={100}>
								<Typography
									variant="h6"
									align={matchesXS ? "center" : undefined}
								>
									WORDPRESS
								</Typography>
							</Box>
							<Box width="100%" mr={matchesXS ? 0 : 1} ml={matchesXS ? 0 : 5}>
								<LinearProgress
									value={73}
									variant="determinate"
									style={{ height: 30 }}
								/>
							</Box>
							<Box minWidth={3}>
								<Typography variant="body1" color="primary">{`${Math.round(
									73
								)}%`}</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Divider style={{ backgroundColor: theme.palette.common.lightDark }} />
				<Grid
					item
					container
					direction="column"
					className={classes.experiencecontainer}
				>
					<Grid item className={classes.exerienceTitle}>
						<Typography variant="h2" align="center" gutterBottom>
							EXPERIENCE & EDUCATION
						</Typography>
					</Grid>
					<Grid item container spacing={matchesXS ? 5 : 8}>
						<Grid item md>
							<Box display="flex">
								<Box className={classes.experienceImagecontainer}>
									<img src={code} alt="seo icon" />
								</Box>
								<Box ml={2}>
									<Grid container direction="column">
										<span className={classes.date}>2019 - 2021</span>
										<Typography varant="h6" gutterBottom>
											WEB DEVELOPMENT{" "}
											<span className={classes.subH6}>- WEBBIT TECHNOLOGY</span>
										</Typography>
										<Typography variant="body2">
											At Webbiit Technologies i worked as a Software Engineer
											whereby Companies come to us to create an online presence
											for them. Working at Webbiit Technologies i had the
											privilage to work with amazing Web Develpers both Junior
											and Senior Developers. I also Junior Developers the hard
											part of JAVASCRIPT
										</Typography>
									</Grid>
								</Box>
							</Box>
						</Grid>
						<Grid item md>
							<Box display="flex">
								<Box className={classes.experienceImagecontainer}>
									<img src={consulte} alt="seo icon" />
								</Box>
								<Box ml={2}>
									<Grid container direction="column">
										<span className={classes.date}>2019 - 2021</span>
										<Typography varant="h6" gutterBottom>
											CONSULTATION{" "}
											<span className={classes.subH6}>- WEBBIT TECHNOLOGY</span>
										</Typography>
										<Typography variant="body2">
											My stay at webbiit Technologies i also did consultation
											where companies and clients will come to seek technical
											adverse on ways to improve there company and make more
											sells with softwares. They sometimes ask questions on how
											an online presence would help their business grow.
										</Typography>
									</Grid>
								</Box>
							</Box>
						</Grid>
					</Grid>
					<Grid
						item
						container
						style={{ marginTop: 20 }}
						spacing={matchesXS ? 5 : 8}
					>
						<Grid item md>
							<Box display="flex">
								<Box className={classes.experienceImagecontainer}>
									<img src={design} alt="seo icon" />
								</Box>
								<Box ml={2}>
									<Grid container direction="column">
										<span className={classes.date}>2019 - 2021</span>
										<Typography varant="h6" gutterBottom>
											UI DESIGNE{" "}
											<span className={classes.subH6}>- WEBBIT TECHNOLOGY</span>
										</Typography>
										<Typography variant="body2">
											I also worked at webbiit Technology as a UI/UX Designer,
											where we designed atonishing designe for clients. During
											does times i have work with extra ordinary UI/UX Designers
											where we use Adobe illustrator and figma for projects.
										</Typography>
									</Grid>
								</Box>
							</Box>
						</Grid>
						<Grid item md>
							<Box display="flex">
								<Box className={classes.experienceImagecontainer}>
									<img src={educate} alt="hat icon" />
								</Box>
								<Box ml={2}>
									<Grid container direction="column">
										<span className={classes.date}>2016 - PRESENT</span>
										<Typography varant="h6" gutterBottom>
											ENGINEERING{" "}
											<span className={classes.subH6}>
												- UNIVERSITY OF NIGERIA
											</span>
										</Typography>
										<Typography variant="body2">
											Agricultural & Bioresources Engineering integrating
											engineering science, Physics and Advanced Mathematics and
											design with applied biological sciences for the solution
											of problems involving plants, animals, and the natural
											environment.
										</Typography>
									</Grid>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
