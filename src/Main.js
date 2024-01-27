import {Routes, Route, BrowserRouter} from "react-router-dom";
import Transactions from "./components/transactions/Transactions";
import Payments from "./components/payments/Payments";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./shared_components/header/Header";
import Footer from "./shared_components/footer/Footer";

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/payments" element={<Payments />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;