import React, { useState, useEffect } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, TextField } from "@mui/material";
import bank from "../../assets/bank.png";
import transfers from "../../assets/transfers.png";
import dashboardComponent from "./DashboardComponent.module.scss";
import APIClient from "../../helpers/APIClient";
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = (props) => {
    const [amount, setAmount] = useState("");
    const [initiatedTransferAmount, setInitiatedTransferAmount] = useState("");
    const [targetId, setTargetId] = useState("");
    const [transferId, setTransferId] = useState("");
    const [rows, setRows] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'timestamp', headerName: 'Timestamp', width: 100 },
        { field: 'command', headerName: 'Transaction', width: 180 }
    ];

    const handleInitiateTransfer = async (event) => {
        event.preventDefault();
        const apiClient = new APIClient();
        const response = await apiClient.initiateTransfer(props.accountDetails.account_id, targetId, initiatedTransferAmount);
        if ((response[0].transfer_id) && (response[0].source_id === props.accountDetails.account_id)) {
            alert(`Transfer initiated successfully! Transfer Id: ${response[0].transfer_id}`);
            setTransferId(response[0].transfer_id);
        }
    }

    const handleAcceptTransfer = async (event) => {
        event.preventDefault();
        const apiClient = new APIClient();
        const response = await apiClient.acceptTransfer(props.accountDetails.account_id, transferId);
        if (response === "Transfer accepted.") {
            alert(`Transfer accepted successfully!`);
        }
    }

    const handleDepositMoney = async (event) => {
        event.preventDefault();
        const apiClient = new APIClient();
        const response = await apiClient.depositMoney(props.accountDetails.account_id, amount);
        if (response[0].account_id === props.accountDetails.account_id) {
            alert(`$${amount} deposited successfully!`);
            props.setAccountDetails(response[0]);
        }
    }

    const handlePayMoney = async (event) => {
        event.preventDefault();
        const apiClient = new APIClient();
        const response = await apiClient.payMoney(props.accountDetails.account_id, amount);
        if (response[0].account_id === props.accountDetails.account_id) {
            alert(`$${amount} payed successfully!`);
            props.setAccountDetails(response[0]);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiClient = new APIClient();
                const response = await apiClient.getAccountDetails(props.accountDetails.account_id);
                if (response && response.transaction_history) {
                    console.log(response.transaction_history);
                    const formattedRows = response.transaction_history.map((row, index) => ({
                        id: index,
                        timestamp: row.timestamp,
                        command: row.command
                    }));
                    setRows(formattedRows);
                } else {
                    setRows([{ id: "N/A" ,timestamp: "N/A", command: "N/A" }]);
                }
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, [props.accountDetails.account_id, rows]);
    


    return (
        // Page Container
        <Grid container className={dashboardComponent.container}>
            <Grid item>
                {/* Profile Image */}
                <Grid item>
                    <Card sx={{ maxWidth: 200 }} raised={true} className={dashboardComponent.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100"
                                width="50"
                                image={bank}
                                alt="bank image"
                                sx={{
                                    borderRadius: '50%', // This creates a circular shape
                                    width: 100,        // Adjust width to be equal to height for a perfect circle
                                    height: 100,       // Make sure height is set for a perfect circle
                                    objectFit: 'cover' // This ensures the image covers the entire area without distortion
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Account Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <b>UID:</b> {props.accountDetails.account_id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <b>Balance:</b> ${props.accountDetails.balance}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <b>Txn Totals:</b> ${props.accountDetails.transaction_totals}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Deposit and Pay Money */}
                <Grid item>
                    <Card sx={{ maxWidth: 500 }} raised={true} className={dashboardComponent.card}>
                        <Grid item flexDirection="column">
                            <Grid item>
                                <Typography variant="h5" component="div">
                                    Deposit and Pay Money
                                </Typography>
                            </Grid>
                            <br/>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    id="amount"
                                    label="$ Amount..."
                                    name="amount"
                                    autoComplete="Amount..."
                                    onChange={event => setAmount(event.target.value)}
                                />
                            </Grid>
                            </Grid>
                            <br/>
                            <Grid container item flexDirection="row">
                                <Grid item marginRight="4px">
                                    <Button color="secondary" variant="contained" onClick={handleDepositMoney}>
                                        DEPOSIT MONEY
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="secondary" variant="contained" onClick={handlePayMoney}>
                                        PAY MONEY
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                {/* Transactions History */}
                <Grid item>
                    <Card sx={{ maxWidth: 500 }} raised={true} className={dashboardComponent.card}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                        }}
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                    />
                    </Card>
                </Grid>
            {/* Transfers */}
            <Grid item>
                <Grid item>
                    <Card sx={{ maxWidth: 500 }} raised={true} className={dashboardComponent.card}>
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                height="100"
                                width="50"
                                image={transfers}
                                alt="transfers image"
                            />
                        </CardActionArea>
                        <CardActions>
                            <Grid container item flexDirection="column">
                            {/* Initiate Transfer */}
                                <Grid container item flexDirection="row">
                                    <Grid item marginRight="6px">
                                        <TextField
                                            id="target_id"
                                            label="Target Id..."
                                            name="target_id"
                                            autoComplete="Target Id..."
                                            onChange={event => setTargetId(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item marginRight="6px">
                                        <TextField
                                            id="transfer_amount"
                                            label="$ Transfer Amount..."
                                            name="amount"
                                            autoComplete="Transfer Amount..."
                                            onChange={event => setInitiatedTransferAmount(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item marginTop="8px">
                                        <Button color="secondary" variant="contained" onClick={handleInitiateTransfer} sx={{width: 80}}>
                                            Initiate
                                        </Button>
                                    </Grid>
                                </Grid>
                                <br/>
                                {/* Accept Transfer */}
                                <Grid container item flexDirection="row">
                                    <Grid item marginRight="6px">
                                        <TextField
                                            id="transfer_id"
                                            label="Transfer Id..."
                                            name="transfer_id"
                                            autoComplete="Transfer Id..."
                                            onChange={event => setTransferId(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item marginTop="8px">
                                        <Button color="secondary" variant="contained" onClick={handleAcceptTransfer}>
                                            Accept
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;