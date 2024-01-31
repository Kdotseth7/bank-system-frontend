import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Card, CardContent, CardActions, Typography, Grid, TextField} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import createAccountFormComponent from "./CreateAccountFormComponent.module.scss";
import APIClient from "../../helpers/APIClient";

const CreateAccountForm = (props) => {
    const [accountId, setAccountId] = useState("");

    const navigate = useNavigate();

    const handleCreateAccount = async (event) => {
    event.preventDefault();
    const apiClient = new APIClient();
    const response = await apiClient.createAccount(accountId);
    if (response[0].account_id === accountId) {
        alert(`Account created successfully!`);
        props.setAccountDetails(response[0]);
    }
    navigate(`/dashboard/${accountId}`);
    };

    return (
        <Grid container className={createAccountFormComponent.container}>
            <Grid item>
                <Card sx={{ minWidth: 300 }} raised={true} className={createAccountFormComponent.card}>
                    <CardContent className={createAccountFormComponent.infoContainer}>
                        <Grid>
                            <Grid item className={createAccountFormComponent.lockIcon}>
                                <LockOutlinedIcon />
                            </Grid>
                            <br/>
                            <Grid item>
                                <Typography component="h3" variant="h5">
                                    Enter your account id
                                </Typography>
                            </Grid>
                            <br/>
                            <Grid item className={createAccountFormComponent.accountField}>
                                <TextField
                                    required
                                    fullWidth
                                    id="account_id"
                                    label="Account Id"
                                    name="account_id"
                                    autoComplete="Account Id..."
                                    onChange={event => setAccountId(event.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={createAccountFormComponent.submit}
                            onClick={handleCreateAccount}
                        >
                            Create Account
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CreateAccountForm;