import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Transactions from "./components/transactions/Transactions";
import Transfers from "./components/transfers/Transfers";
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
                <Route path="/dashboard/:account_id" element={<Dashboard accountDetails={accountDetails} setAccountDetails={setAccountDetails} />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/transfers/:account_id" element={<Transfers accountDetails={accountDetails} x/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;