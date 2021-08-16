/** @format */

import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

import emailjs from "emailjs-com";

import facebookIcon from "../src/assets/facebook.svg";
import InstagramIcon from "../src/assets/instagram.svg";
import TwitterIcon from "../src/assets/twitter.svg";
import LinkedInIcon from "../src/assets/linkdin.svg";
import GitHubIcon from "../src/assets/github.svg";
import EmailIcon from "../src/assets/mail.svg";
import CallIcon from "../src/assets/call.svg";

import Header from "./components/ui/Header";
import Appbar from "./components/ui/Appbar";

import SendIcon from "@material-ui/icons/Send";

import { DrawerContext } from "./Context/DrawerContext";

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: theme.palette.common.bgColor,
		height: "100%",
		width: "100%",
		overflowY: "scroll",
	},
	mainContainer1: {
		paddingTop: "60px",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "30px",
		},
	},
	headingcontainer: {
		position: "relative",
	},
	heading11: {
		color: "#ffffff",
		zIndex: 1,
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
	contactInfo: {
		flexBasis: "45%",
		marginRight: "10%",
		[theme.breakpoints.down("sm")]: {
			flexBasis: "100%",
			marginBottom: 100,
		},
	},
	contactInput: {
		flexBasis: "45%",
		[theme.breakpoints.down("sm")]: {
			flexBasis: "100%",
		},
	},
	contact: {
		padding: "60px 130px",
		[theme.breakpoints.down("sm")]: {
			padding: "60px 10px",
		},
	},
	contactLink: {
		marginBottom: 8,
	},
	contactIcon: {
		fontSize: 50,
		color: theme.palette.common.red,
	},
	socialmedia: {
		padding: 0,
	},
	textfield: {
		backgroundColor: theme.palette.common.lightDark,
		borderRadius: 10,
		"& .MuiFilledInput-input": {
			color: "#fff",
		},
		"& .MuiInputLabel-filled": {
			opacity: 0.6,
			color: "#fff",
		},
	},
	button: {
		border: `2px solid ${theme.palette.common.red}`,
		borderRadius: theme.spacing(5),
		paddingRight: 0,
		fontWeight: 600,
		fontFamily: "Poppins",
		height: 50,
		width: 200,
		color: "#ffffff",
		marginTop: 25,
		marginBottom: 45,
		justifyContent: "flex-end",
		transitionDuration: "800ms",
		transitionProperty: "background",
		transitionTimingFunction: "ease-in-out",
		"&:hover": {
			border: `2px solid ${theme.palette.common.red}`,
			borderRadius: theme.spacing(6),
			color: "#ffffff",
			backgroundColor: theme.palette.common.red,
		},
		[theme.breakpoints.down("xs")]: {
			width: 170,
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
	snack: {
		"& .MuiSnackbarContent-root": {
			backgroundColor: theme.palette.common.red,
			color: "#fff",
			opacity: 1,
			fontWeight: 600,
		},
	},
	snackSuccess: {
		"& .MuiSnackbarContent-root": {
			backgroundColor: "#4BB543 ",
			color: "#fff",
			opacity: 1,
			fontWeight: 600,
		},
	},
}));

function TransitionRight(props) {
	return <Slide {...props} direction="right" />;
}

export default function Contact() {
	const classes = useStyles();
	const theme = useTheme();
	const initialState = Object.freeze({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [transition, setTransition] = React.useState(undefined);

	const [open] = useContext(DrawerContext);

	useEffect(() => {
		document.title = "Contact - Daniel Nweze";
	});

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value.trim() });

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setError(false);
		setSuccess(false);
	};

	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	const handleSubmit = (Transition) => (e) => {
		e.preventDefault();
		if (
			form.name.length > 1 &&
			form.email.length > 1 &&
			form.subject.length > 1 &&
			form.message.length > 1
		) {
			if (validateEmail(form.email)) {
				emailjs
					.sendForm(
						"service_vvs1jfm",
						"template_o0t2hua",
						e.target,
						"user_3jBibs9k1Zd4THpOV8lSc"
					)
					.then(
						(result) => {
							console.log(result.text);
							setTransition(() => Transition);
							setSuccess(true);
						},
						(error) => {
							console.log(error.text);
							setTransition(() => Transition);
							setError(true);
						}
					);
				e.target.reset();
			} else {
				setTransition(() => Transition);
				setError(true);
			}
		} else {
			setTransition(() => Transition);
			setError(true);
		}
	};

	const title = (
		<span style={{ color: open && "#ffffff" }}>
			GET IN {""}
			<span
				style={{
					color: open ? theme.palette.common.red : theme.palette.common.bgColor,
				}}
			>
				TOUCH
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
							GET IN <span className={classes.us}>TOUCH</span>
						</Typography>
						<span className={classes.resume}>CONTACT</span>
					</Grid>
				</Hidden>
				<Grid item container className={classes.contact}>
					<Grid
						item
						container
						direction="column"
						className={classes.contactInfo}
					>
						<Grid item>
							<Typography variant="h2" gutterBottom>
								DON'T BE SHY!
							</Typography>
							<Typography
								variant="body2"
								gutterBottom
								style={{ marginBottom: 30 }}
							>
								Do you have a sparking new idea? with the right skills{" "}
								<Hidden smDown>
									<br />
								</Hidden>
								and a unique touch we can take that billion{" "}
								<Hidden smDown>
									<br />
								</Hidden>
								dollar idea off the ground.
							</Typography>
							<Grid
								container
								alignItems="center"
								spacing={2}
								className={classes.contactLink}
							>
								<Grid item>
									<IconButton
										aria-label="email"
										disableRipple
										className={classes.socialmedia}
										style={{ cursor: "context-menu" }}
									>
										<img
											src={EmailIcon}
											alt="facebook icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<Typography variant="body2">MAIL ME:</Typography>
									<Link href="mailto:flashdaniel0@gmail.com">
										{" "}
										flashdaniel0@gmail.com
									</Link>
								</Grid>
							</Grid>
							<Grid
								container
								alignItems="center"
								spacing={2}
								className={classes.contactLink}
							>
								<Grid item>
									<IconButton
										aria-label="phone number"
										disableRipple
										className={classes.socialmedia}
										style={{ cursor: "context-menu" }}
									>
										<img
											src={CallIcon}
											alt="facebook icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<Typography variant="body2">CALL ME:</Typography>
									<Link href="tel:+234 816-7644-956"> +234 816-7644-956</Link>
								</Grid>
							</Grid>
							<Grid container noWrap>
								<Grid item>
									<IconButton
										aria-label="instagram icon"
										className={classes.socialmedia}
										component={Link}
										href=""
									>
										<img
											src={InstagramIcon}
											alt="instagram icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton
										aria-label="facebook icon"
										className={classes.socialmedia}
										component={Link}
										href=""
									>
										<img
											src={facebookIcon}
											alt="facebook icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton
										aria-label="twitter"
										className={classes.socialmedia}
										component={Link}
										href=""
									>
										<img
											src={TwitterIcon}
											alt="twitter icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton
										aria-label="linkedin"
										className={classes.socialmedia}
										component={Link}
										href="https://www.linkedin.com/in/daniel-nweze-017909214/"
									>
										<img
											src={LinkedInIcon}
											alt="linkedin icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton
										aria-label="github icon"
										className={classes.socialmedia}
										component={Link}
										href="https://github.com/Flashdaniel"
									>
										<img
											src={GitHubIcon}
											alt="github icon"
											style={{ width: 60, height: 60 }}
										/>
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction="column"
						className={classes.contactInput}
					>
						<Snackbar
							classes={{
								root: success
									? classes.snackSuccess
									: error
									? classes.snack
									: classes.snackSuccess,
								message: classes.snackMessage,
							}}
							anchorOrigin={{
								vertical: "top",
								horizontal: "center",
							}}
							open={error || success}
							autoHideDuration={6000}
							onClose={handleClose}
							TransitionComponent={transition}
							key={transition ? transition.name : ""}
							message={
								success
									? "Message send successfully!"
									: error
									? "Please check to be sure your inputs are correct!"
									: "Message send successfully!"
							}
						/>
						<Grid item>
							<form
								className={classes.root}
								noValidate
								autoComplete="off"
								onSubmit={handleSubmit(TransitionRight)}
							>
								<Grid
									container
									direction="row"
									spacing={2}
									noWrap
									style={{ marginBottom: 8 }}
								>
									<Grid item style={{ flexBasis: "33.333%" }}>
										<TextField
											id="name"
											label="NAME"
											variant="filled"
											name="name"
											type="text"
											required
											onChange={handleChange}
											className={classes.textfield}
										/>
									</Grid>
									<Grid item style={{ flexBasis: "33.333%" }}>
										<TextField
											id="email"
											label="E-MAIL"
											type="email"
											name="email"
											variant="filled"
											required
											onChange={handleChange}
											className={classes.textfield}
										/>
									</Grid>
									<Grid item style={{ flexBasis: "33.333%" }}>
										<TextField
											id="subject"
											label="SUBJECT"
											name="subject"
											variant="filled"
											type="text"
											required
											onChange={handleChange}
											className={classes.textfield}
										/>
									</Grid>
								</Grid>
								<Grid item container>
									<TextField
										id="mesage"
										label="MESSAGE"
										variant="filled"
										name="message"
										multiline
										rows={9}
										type="text"
										required
										fullWidth
										onChange={handleChange}
										className={classes.textfield}
									/>
								</Grid>
								<Button
									variant="outlingd"
									color="primary"
									className={classes.button}
									type="submit"
									endIcon={
										<span className={classes.buttonIconContainer}>
											<SendIcon className={classes.buttonIcon} />
										</span>
									}
								>
									SEND MESSAGE
								</Button>
							</form>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
