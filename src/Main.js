import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Transactions from "./components/transactions/Transactions";
import Payments from "./components/payments/Payments";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./shared_components/header/Header";
import Footer from "./shared_components/footer/Footer";
import CreateAccountForm from "./components/create_account_form/CreateAccountForm";

const Main = () => {

    const [accountDetails, setAccountDetails] = useState("");
    console.log(accountDetails);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create_account" element={<CreateAccountForm setAccountDetails={setAccountDetails} />} />
                <Route path="/dashboard/:account_id" element={<Dashboard accountDetails={accountDetails} />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/payments" element={<Payments />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;