import React, { useState } from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import bank from "../../assets/bank.png";
import {Link} from "react-router-dom";
import dashboardComponent from "./DashboardComponent.module.scss";

const Dashboard = (props) => {
    console.log(props);
    return (
        <Grid container className={dashboardComponent.container}>
            <Grid item>
                <Card sx={{ maxWidth: 500 }} raised={true} className={dashboardComponent.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={bank}
                            alt="bank image"
                        />
                        <CardContent>
                            <Grid container item flexDirection="column" className={dashboardComponent.infoContainer}>
                                <Grid item>
                                    <Typography>
                                        Account Id: {props.accountDetails.account_id}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Balance: ${props.accountDetails.balance}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Transaction Totals: ${props.accountDetails.transaction_totals}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Grid container item flexDirection="row" className={dashboardComponent.infoContainer}>
                            <Grid item className={dashboardComponent.options}>
                                <Link to="/transactions">
                                    <Button color="secondary" variant="contained">
                                        Transaction History
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/transfers">
                                    <Button color="secondary" variant="contained">
                                        Transfers
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;