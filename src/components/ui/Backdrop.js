/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import BeatLoader from "react-spinners/BeatLoader";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";

// import Swiper core and required modules
import SwiperCore, {
	Navigation,
	Pagination,
	EffectCube,
	A11y,
} from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([EffectCube, Navigation, Pagination, A11y]);

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 500,
		color: "#fff",
	},
	paper: {
		backgroundColor: "#fff",
		width: "100%",
	},
	card: {
		borderRadius: theme.spacing(2),
		// "&:hover": {
		// 	boxShadow: theme.shadows[16],
		// },
	},
	media: {
		height: 300,
	},
}));

export default function SimpleBackdrop(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const handleClose = () => {
		props.setOpenBackdrop(false);
	};
	console.log(props.portfolioState);
	return (
		<Backdrop className={classes.backdrop} open={props.openBackdrop}>
			<Grid container direction="column" alignItems="center">
				<Grid item style={{ alignSelf: "center", marginBottom: 100 }}>
					<IconButton
						aria-label="delete"
						className={classes.margin}
						onClick={handleClose}
					>
						<CancelIcon style={{ color: "#fff" }} />
					</IconButton>
				</Grid>
				<Grid item style={{ width: matchesSM ? "100%" : 400 }}>
					<Swiper
						effect={"cube"}
						grabCursor={true}
						cubeEffect={{
							shadow: true,
							slideShadows: true,
							shadowOffset: 20,
							shadowScale: 0.94,
						}}
						spaceBetween={10}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						<Paper className={classes.paper}>
							{props.portfolioState.loading ? (
								<div style={{ display: "flex", margin: "10rem auto" }}>
									<BeatLoader color="white" height={100} width={10} />
								</div>
							) : !props.portfolioState.portfolios ||
							  props.portfolioState.portfolios.length === 0 ? (
								<div style={{ display: "flex", margin: "10rem auto" }}>
									<Typography variant="h6">No portfolio, sorry!</Typography>
								</div>
							) : (
								props.portfolioState.portfolios.map((work, index) => {
									return (
										<SwiperSlide key={`${work.project_name}${index}`}>
											<Card
												className={classes.card}
												style={{ display: !props.openBackdrop && "none" }}
											>
												<CardMedia
													className={classes.media}
													image="https://source.unsplash.com/random/"
													title={work.project_name}
												/>
												<CardContent>
													<Typography
														gutterBottom
														align="center"
														variant="h5"
														component="h2"
													>
														<Link href={work.preview} target="_blank">
															{work.project_name}
														</Link>
													</Typography>
												</CardContent>
											</Card>
										</SwiperSlide>
									);
								})
							)}
						</Paper>
					</Swiper>
				</Grid>
			</Grid>
		</Backdrop>
	);
}
