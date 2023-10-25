import { Box, Link, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "deeppink", color: '#fff', p: 3 }}>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center" gutterBottom>
                    &copy; {new Date().getFullYear()} Kushagra Seth
                </Typography>
                <Typography variant="body2" align="center">
                    <Link color="inherit" href="https://kdotseth7.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                        Portfolio
                    </Link>
                    {" | "}
                    <Link color="inherit" href="https://www.linkedin.com/in/kushagra-seth/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;