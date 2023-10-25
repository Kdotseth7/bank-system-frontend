import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import header from "./HeaderComponent.module.scss";

const Header = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'deeppink' }} className={header.appBar}>
            <Link to="/" className={header.header}>
                <Typography variant="h3" component="h1" fontFamily="Roboto">
                    Bank of Pomelo
                </Typography>
            </Link>
        </AppBar>
    );
}

export default Header;