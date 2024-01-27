import React, { useState } from 'react';
import Transactions from '../transactions/Transactions';
import Payments from '../payments/Payments';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import bankLogo from "../../assets/bank_logo.png"
import homeComponent from "./HomeComponent.module.scss";

const Home = () => {

    return (
        <Grid container className={homeComponent.container}>
            <Grid item>
                <Card sx={{ maxWidth: 500 }} raised={true} className={homeComponent.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="400"
                            image={bankLogo}
                            alt="bank image"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Step into the future of finance with React Bank System! 🚀
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary">
                                I am Kushagra Seth! I am a Computer Science Masters Student graduating in December 2023 from UC Santa Cruz.
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary">
                                This is my humble attempt at developing a simple Bank System App.
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary">
                                Tech Stack:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Frontend - React and Material UI
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Backend - NodeJS and ExpressJS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Database - PostgreSQL
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={homeComponent.appButton}>
                        <Link to="/dashboard">
                            <Button color="secondary" variant="contained">
                                CREATE ACCOUNT
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Home;