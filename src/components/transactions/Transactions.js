import React from 'react';

function Transactions({ data }) {
    return (
        <div>
            <h2>Pending Transactions</h2>
            {/*{data.pendingTransactions.map(txn => (*/}
            {/*    <p key={txn.id}>{txn.id}: ${txn.amount} @ time {txn.time}</p>*/}
            {/*))}*/}

            <h2>Settled Transactions</h2>
            {/*{data.settledTransactions.slice(0, 3).map(txn => (*/}
            {/*    <p key={txn.id}>{txn.id}: ${txn.amount} @ time {txn.time} (finalized @ time {txn.finalizedTime})</p>*/}
            {/*))}*/}
        </div>
    );
}

export default Transactions;
