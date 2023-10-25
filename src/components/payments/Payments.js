import React from 'react';

function Payments({ data }) {
    // Filtering only the payment events from the data
    // const initiatedPayments = data.pendingTransactions.filter(txn => txn.amount < 0);
    // const postedPayments = data.settledTransactions.filter(txn => txn.amount < 0).slice(0, 3);

    return (
        <div>
            <h2>Initiated Payments</h2>
            {/*{initiatedPayments.map(payment => (*/}
            {/*    <p key={payment.id}>{payment.id}: ${payment.amount} @ time {payment.time}</p>*/}
            {/*))}*/}

            <h2>Posted Payments</h2>
            {/*{postedPayments.map(payment => (*/}
            {/*    <p key={payment.id}>{payment.id}: ${payment.amount} @ time {payment.time} (posted @ time {payment.finalizedTime})</p>*/}
            {/*))}*/}
        </div>
    );
}

export default Payments;
