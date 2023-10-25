import React, { useState } from 'react';
import Transactions from '../transactions/Transactions';
import Payments from '../payments/Payments';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import pomeloLogo from "../../assets/pomelo_logo.png"
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
                            image={pomeloLogo}
                            alt="pomelo image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pomelo Coding Exercise!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Step into the future of finance with Pomelo! 🚀
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I am Kushagra Seth! I am a Computer Science Masters Student graduating in December 2023.
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary">
                                This is my humple attempt at developing a simple Pomelo Credit Card App for the coding exercise.
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
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={homeComponent.appButton}>
                        <Link to="/dashboard">
                            <Button color="secondary" variant="contained">
                                POMELO CREDIT CARD APP
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Home;