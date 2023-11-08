import { AppBar, Box, Toolbar, Button, Modal, Typography, Fade } from "@mui/material";
import Image from "next/image";
import logo from "../../../../public/logo.png"
import { useState } from "react";

interface ILayoutProps {
    children: React.ReactNode;
    showNavItems: boolean;
}

export default function Layout({ children, showNavItems }: ILayoutProps) {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [modalMessage, setModalMessage] = useState("Really?! We said don't press that. You should have listened.");
    const handleClose = () => {
        setModalOpen(false);
        setCount(prev => prev + 1);
        if (count < 2) {
            setTimeout(() => setModalOpen(true), 1500);
        }
        else if (count >= 2 && count < 5)
        {
            setModalMessage("Is this getting annoying yet?");
            setTimeout(() => setModalOpen(true), 1500);
        }
        else if (count >= 5 && count < 8)
        {
            setModalMessage("This is why we said don't press the button!");
            setTimeout(() => setModalOpen(true), 1500);
        }
        else {
            setCount(0);
            setModalMessage("This again? You just don't learn do you!");
        }
    }

    function dontClickHandler() {
        setModalOpen(true);
    }

    const modalStyle = {
         position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor: 'limegreen'}}>
                    <Toolbar>
                        <Image src={logo} height={100} width={100} alt="logo" />
                        {showNavItems && (
                            <>
                                <Button href="/" sx={{ color: 'hotpink' }}>Products</Button>
                                <Button onClick={dontClickHandler} sx={{color: 'hotpink'}}>Dont Press</Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            {children}
            <Modal
            open={modalOpen}
            onClose={handleClose}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        {modalMessage}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}