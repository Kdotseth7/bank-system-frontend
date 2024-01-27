import React, { useState } from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import bank from "../../assets/bank.png";
import {Link} from "react-router-dom";
import dashboardComponent from "./DashboardComponent.module.scss";

const Dashboard = () => {
    return (
        <Grid container className={dashboardComponent.container}>
            <Grid item>
                <Card sx={{ maxWidth: 500 }} raised={true} className={dashboardComponent.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={bank}
                            alt="pomelo image"
                        />
                        <CardContent>
                            <Grid container item flexDirection="column" className={dashboardComponent.infoContainer}>
                                <Grid item>
                                    <Typography>
                                        Available Credit: $1000
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Payable Balance: $0
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
                                        Transactions
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/payments">
                                    <Button color="secondary" variant="contained">
                                        Payments
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