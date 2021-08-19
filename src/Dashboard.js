/** @format */

import React, { useEffect, useState } from "react";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import BeatLoader from "react-spinners/BeatLoader";
import Typography from "@material-ui/core/Typography";
import axiosInstance from "./Axios";

import DashboardHeader from "./components/dashboard/DashboardHeader";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.lightDark,
		color: theme.palette.common.red,
		fontWeight: 800,
	},
	body: {
		fontSize: 14,
		color: theme.palette.common.bgColor,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(id, name, client, date, language) {
	return { id, name, client, date, language };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
	root: {
		overflowY: "scroll",
		width: "100%",
		height: "100%",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingTop: theme.spacing(10),
	},
	table: {
		// minWidth: 700,
	},
	container: {
		maxHeight: 240,
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const theme = useTheme();
	const [portfolioState, setPorfolioState] = useState({
		portfolios: null,
		loading: false,
	});

	const [user, setUser] = useState("");

	useEffect(() => {
		if (localStorage.getItem("access_token")) {
			axiosInstance({
				method: "get",
				url: "account/current_user/",
			}).then((res) => {
				setUser(res.data.first_name);
			});
		}
	});

	useEffect(() => {
		setPorfolioState({ loading: true });
		document.title = "Dashboard - Daniel Nweze";
		axiosInstance
			.get("work/admin/")
			.then((works) => {
				const work = works.data;
				setPorfolioState({ portfolios: work, loading: false });
			})
			.catch((error) => setPorfolioState({ loading: false }));
	}, [setPorfolioState]);

	return (
		<div className={classes.root}>
			<DashboardHeader user={user} />
			<main className={classes.content}>
				<Container maxWidth="md" className={classes.container}>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="customized table">
							<TableHead
								style={{ backgroundColor: theme.palette.common.lightDark }}
							>
								<TableRow>
									<StyledTableCell align="left">PROJECT NAME</StyledTableCell>
									<StyledTableCell align="left">CLIENT</StyledTableCell>
									<StyledTableCell align="left">LANGUAGE</StyledTableCell>
									<StyledTableCell align="left">Delete</StyledTableCell>
									<StyledTableCell align="left">Edit</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{portfolioState.loading ? (
									<StyledTableRow>
										<StyledTableCell colSpan={5} align="center">
											<BeatLoader color="black" height={100} width={10} />
										</StyledTableCell>
									</StyledTableRow>
								) : !portfolioState.portfolios ||
								  portfolioState.portfolios.length === 0 ? (
									<StyledTableRow>
										<StyledTableCell colSpan={5} align="center">
											<Typography variant="h6" style={{ color: "black" }}>
												No portfolio, sorry!
											</Typography>
										</StyledTableCell>
									</StyledTableRow>
								) : (
									portfolioState.portfolios.map((work) => (
										<StyledTableRow key={work.id}>
											<StyledTableCell align="left">
												{work.project_name.toUpperCase()}
											</StyledTableCell>
											<StyledTableCell align="left">
												{work.client.toUpperCase()}
											</StyledTableCell>
											<StyledTableCell align="left">
												{work.language.toUpperCase()}
											</StyledTableCell>
											<StyledTableCell align="left">
												<IconButton
													aria-label="account of current user"
													aria-controls="primary-search-account-menu"
													aria-haspopup="true"
													color="inherit"
												>
													<DeleteIcon style={{ color: "red" }} />
												</IconButton>
											</StyledTableCell>
											<StyledTableCell align="right">
												<IconButton
													aria-label="account of current user"
													aria-controls="primary-search-account-menu"
													aria-haspopup="true"
													color="inherit"
												>
													<EditIcon style={{ color: "blue" }} />
												</IconButton>
											</StyledTableCell>
										</StyledTableRow>
									))
								)}
								<StyledTableRow style={{ backgroundColor: "white" }}>
									<StyledTableCell
										colSpan={7}
										align="right"
										style={{ backgroundColor: "white" }}
									>
										<Button
											variant="outlined"
											color="primary"
											style={{
												borderRadius: 20,
												backgroundColor: theme.palette.common.lightDark,
											}}
										>
											Add portfolio
										</Button>
									</StyledTableCell>
								</StyledTableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			</main>
		</div>
	);
}
