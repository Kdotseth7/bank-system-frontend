import React from 'react';
import {Grid, Paper, Typography} from "@mui/material"
import transactionsComponent from "./TransactionsComponent.module.scss";

function Transactions({ data }) {
    return (
        <Grid container flexDirection="row" className={transactionsComponent.container}>
            <Grid item>
                <Paper
                    variant="elevation"
                    square={false}
                    style={{ width: '300px', height: '200px' }} // adjust these values to your preference
                    className={transactionsComponent.paper}
                >
                    <Grid container flexDirection="column">
                        <Grid item className={transactionsComponent.paperTitle}>
                            <Typography variant="h5">Pending Transactions</Typography>
                            {/*{data.pendingTransactions.map(txn => (*/}
                            {/*    <p key={txn.id}>{txn.id}: ${txn.amount} @ time {txn.time}</p>*/}
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
                    className={transactionsComponent.paper}
                >
                    <Grid container flexDirection="column">
                        <Grid item className={transactionsComponent.paperTitle}>
                            <Typography variant="h5">Settled Transactions</Typography>
                            {/*{data.pendingTransactions.map(txn => (*/}
                            {/*    <p key={txn.id}>{txn.id}: ${txn.amount} @ time {txn.time}</p>*/}
                            {/*))}*/}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Transactions;
