/** @format */

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router-dom";
import Slide from "@material-ui/core/Slide";

import axiosInstance from "./Axios";

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: theme.palette.common.bgColor,
		height: "100%",
		width: "100%",
		overflow: "hidden",
	},
	mainContainer1: {
		paddingTop: "60px",
		width: "100%",
		height: "100vh",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "30px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 70,
		},
	},
	paper: {
		padding: "20px 40px",
		backgroundColor: theme.palette.common.lightDark,
		borderRadius: theme.spacing(2),
	},
	avatar: {
		margin: "10px auto",
		backgroundColor: theme.palette.common.red,
	},
	paperForm: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		gap: 3,
		width: 400,
		[theme.breakpoints.down("xs")]: {
			width: 230,
		},
	},
	paperFormTitle: {
		color: theme.palette.common.red,
		fontFamily: "Poppins",
		fontWeight: 800,
		fontSize: "2rem",
	},
	iconButton: {
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	iconButton2: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	formButton: {
		borderRadius: theme.spacing(5),
		fontFamily: "Poppins",
		fontWeight: 600,
		padding: "10px 30px",
		fontSize: "1rem",
	},
	snack: {
		"& .MuiSnackbarContent-root": {
			backgroundColor: theme.palette.common.red,
			color: "#fff",
			opacity: 1,
			fontWeight: 600,
		},
	},
}));

function TransitionRight(props) {
	return <Slide {...props} direction="right" />;
}

export default function SignIn() {
	const initialFormData = Object.freeze({
		email: "",
		password: "",
	});
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();
	const matchesFold = useMediaQuery(
		"(max-width: 280px) and (min-height: 653px)"
	);
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const [formData, setFormData] = useState(initialFormData);
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState(false);
	const [transition, setTransition] = React.useState(undefined);

	useEffect(() => {
		document.title = "Signin - Daniel Nweze";
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = (Transition) => (e) => {
		e.preventDefault();

		axiosInstance
			.post("token/", {
				email: formData.email,
				password: formData.password,
			})
			.then((result) => {
				localStorage.setItem("access_token", result.data.access);
				localStorage.setItem("access_refresh", result.data.refresh);
				setErrors(true);
				history.push("/dashboard");
			})
			.catch((error) => {
				setTransition(() => Transition);
				setErrors(true);
			});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setErrors(false);
	};

	return (
		<Box variant="div" className={classes.box}>
			<Grid
				container
				direction="column"
				justify={matchesXS ? undefined : "center"}
				alignItems="center"
				className={classes.mainContainer1}
			>
				<Grid item>
					<Paper elevation={10} className={classes.paper}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
							spacing={4}
							style={{ width: "100%", height: "100%" }}
						>
							<Snackbar
								classes={{ root: classes.snack, message: classes.snackMessage }}
								anchorOrigin={{
									vertical: "top",
									horizontal: "center",
								}}
								open={errors}
								autoHideDuration={6000}
								onClose={handleClose}
								TransitionComponent={transition}
								key={transition ? transition.name : ""}
								message={
									errors &&
									"Email or password is incorrect! You must be an admin to signin!"
								}
							/>
							<Grid item>
								<Avatar className={classes.avatar}></Avatar>
								<Typography variant="h2" className={classes.paperFormTitle}>
									SIGN IN
								</Typography>
							</Grid>
							<Grid item>
								<Paper
									component="form"
									className={classes.paperForm}
									style={{ width: matchesFold && 190 }}
								>
									<IconButton
										className={classes.iconButton}
										aria-label="email"
										disableRipple
									>
										<EmailIcon className={classes.emailIcon} />
									</IconButton>
									<InputBase
										className={classes.input}
										required
										id="email"
										type="email"
										name="email"
										required
										placeholder="E-Mail"
										inputProps={{ "aria-label": "email" }}
										autoComplete="email"
										autoFocus
										onChange={handleChange}
									/>
								</Paper>
							</Grid>
							<Grid item>
								<Paper
									component="form"
									className={classes.paperForm}
									style={{ width: matchesFold && 190 }}
								>
									<IconButton
										className={classes.iconButton}
										aria-label="locked"
										disableRipple
									>
										<LockIcon className={classes.emailIcon} />
									</IconButton>
									<InputBase
										className={classes.input}
										required
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										name="password"
										inputProps={{ "aria-label": "password" }}
										onChange={handleChange}
									/>
									{formData.password.length > 0 && (
										<IconButton
											className={classes.iconButton2}
											aria-label="eyes"
											disableRipple
											onClick={handleClickShowPassword}
										>
											{showPassword ? (
												<Visibility className={classes.visibility} />
											) : (
												<VisibilityOff className={classes.visibilityOffIcon} />
											)}
										</IconButton>
									)}
								</Paper>
							</Grid>
							<Grid item>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									className={classes.formButton}
									endIcon={<ExitToAppIcon />}
									onClick={handleSubmit(TransitionRight)}
								>
									Sign in
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}
