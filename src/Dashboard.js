/** @format */

import React, { useState } from "react";
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
import axios from "axios";

import DashboardHeader from "./components/dashboard/DashboardHeader";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.red,
		color: theme.palette.common.white,
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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
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

	return (
		<div className={classes.root}>
			<DashboardHeader />
			<main className={classes.content}>
				<Container maxWidth="md" className={classes.container}>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>Dessert (100g serving)</StyledTableCell>
									<StyledTableCell align="right">Calories</StyledTableCell>
									<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
									<StyledTableCell align="right">
										Carbs&nbsp;(g)
									</StyledTableCell>
									<StyledTableCell align="right">
										Protein&nbsp;(g)
									</StyledTableCell>
									<StyledTableCell align="right">Delete</StyledTableCell>
									<StyledTableCell align="right">Edit</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<StyledTableRow key={row.name}>
										<StyledTableCell component="th" scope="row">
											{row.name}
										</StyledTableCell>
										<StyledTableCell align="right">
											{row.calories}
										</StyledTableCell>
										<StyledTableCell align="right">{row.fat}</StyledTableCell>
										<StyledTableCell align="right">{row.carbs}</StyledTableCell>
										<StyledTableCell align="right">
											{row.protein}
										</StyledTableCell>
										<StyledTableCell align="right">
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
								))}
								<StyledTableRow>
									<StyledTableCell colSpan={7} align="right">
										<Button variant="contained" color="primary">
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
