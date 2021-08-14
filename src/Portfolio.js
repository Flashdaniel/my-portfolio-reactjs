/** @format */
import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";

import Header from "./components/ui/Header";
import Appbar from "./components/ui/Appbar";
import SimpleBackdrop from "./components/ui/Backdrop";

import { DrawerContext } from "./Context/DrawerContext";

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: theme.palette.common.bgColor,
		height: "100%",
		width: "100%",
		overflowY: "scroll",
	},
	headingcontainer: {
		position: "relative",
	},
	heading11: {
		color: "#ffffff",
		zIndex: 1,
	},
	mainContainer1: {
		zIndex: 10000000,
		paddingTop: "60px",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "30px",
		},
		[theme.breakpoints.down("xs")]: {
			paddingTop: "100px",
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
	card: {
		borderRadius: theme.spacing(2),
		"&:hover": {
			boxShadow: theme.shadows[16],
		},
	},
	media: {
		height: 250,
	},
}));

export default function Portfolio() {
	const classes = useStyles();
	const theme = useTheme();
	const [open] = useContext(DrawerContext);
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [portfolioState, setPorfolioState] = useState({
		portfolios: null,
		loading: false,
	});

	useEffect(() => {
		setPorfolioState({ loading: true });
		document.title = "Porfolio - Daniel Nweze";
		const apiUrl = "http://127.0.0.1:8000/api/work/";
		axios
			.get(apiUrl)
			.then((works) => {
				const work = works.data;
				setPorfolioState({ portfolios: work, loading: false });
			})
			.catch((error) => setPorfolioState({ loading: false }));
	}, [setPorfolioState]);

	const handleToggle = () => setOpenBackdrop(!openBackdrop);

	const title = (
		<span style={{ color: open && "#ffffff" }}>
			MY {""}
			<span
				style={{
					color: open ? theme.palette.common.red : theme.palette.common.bgColor,
				}}
			>
				PORTFOLIO
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
							MY <span className={classes.us}>PORTFOLIO</span>
						</Typography>
						<span className={classes.resume}>WORKS</span>
					</Grid>
				</Hidden>
				<Grid
					item
					container
					justify={matchesXS && "center"}
					style={{
						padding: matchesXS ? 0 : "8%",
						paddingLeft: matchesXS ? 0 : "6%",
					}}
				>
					{portfolioState.loading ? (
						<div style={{ display: "flex", margin: "10rem auto" }}>
							<BeatLoader color="white" height={100} width={10} />
						</div>
					) : !portfolioState.portfolios ||
					  portfolioState.portfolios.length === 0 ? (
						<div style={{ display: "flex", margin: "10rem auto" }}>
							<Typography variant="h6">No portfolio, sorry!</Typography>
						</div>
					) : (
						portfolioState.portfolios.map((work) => {
							return (
								<Grid
									item
									key={work.id}
									style={{
										flex: matchesXS ? "0 0 84%" : "0 0 28%",
										marginLeft: matchesXS ? 0 : "4%",
										marginBottom: matchesXS ? "8%" : "4%",
									}}
								>
									<Card className={classes.card} onClick={handleToggle}>
										<CardActionArea>
											<CardMedia
												className={classes.media}
												image="https://source.unsplash.com/random/"
												title={work.project_name}
											/>
										</CardActionArea>
									</Card>
								</Grid>
							);
						})
					)}
				</Grid>
				<SimpleBackdrop
					style={{
						position: "absolute",
						top: 100000,
					}}
					openBackdrop={openBackdrop}
					setOpenBackdrop={setOpenBackdrop}
					portfolioState={portfolioState}
				/>
			</Grid>
		</Box>
	);
}
