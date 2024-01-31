import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import transfersComponent from "../transfers/TransfersComponent.module.scss";

const Transfers = (props) => {
    // Filtering only the payment events from the data
    // const initiatedPayments = data.pendingTransactions.filter(txn => txn.amount < 0);
    // const postedPayments = data.settledTransactions.filter(txn => txn.amount < 0).slice(0, 3);

    return (
    <Grid container flexDirection="row" className={transfersComponent.container}>
        <Grid item>
            <Paper
                variant="elevation"
                square={false}
                style={{ width: '300px', height: '200px' }} // adjust these values to your preference
                className={transfersComponent.paper}
            >
                <Grid container flexDirection="column">
                    <Grid item className={transfersComponent.paperTitle}>
                        <Typography variant="h5">Initiated Transfers</Typography>
                        {/*{initiatedPayments.map(payment => (*/}
                        {/*    <p key={payment.id}>{payment.id}: ${payment.amount} @ time {payment.time}</p>*/}
                        {/*))}*/}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Grid item>
            <Paper
                variant="elevation"
                square={false}
                style={{ width: '300px', height: '200px' }} // adjust these values to your preference
                className={transfersComponent.paper}
            >
                <Grid container flexDirection="column">
                    <Grid item className={transfersComponent.paperTitle}>
                        <Typography variant="h5">Pending Transfers</Typography>
                        {/*{postedPayments.map(payment => (*/}
                        {/*    <p key={payment.id}>{payment.id}: ${payment.amount} @ time {payment.time} (posted @ time {payment.finalizedTime})</p>*/}
                        {/*))}*/}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
    );
}

export default Transfers;
