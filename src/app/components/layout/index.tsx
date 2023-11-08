import { AppBar, Box, Toolbar, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../../../public/logo.png"

interface ILayoutProps {
    children: React.ReactNode;
    showNavItems: boolean;
}

export default function Layout({children, showNavItems}: ILayoutProps) {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor: 'limegreen'}}>
                    <Toolbar>
                        <Image src={logo} height={100} width={100} alt="logo" />
                        {showNavItems && (
                            <Button href="/" sx={{color: 'hotpink'}}>Products</Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            {children}
        </>
    );
}