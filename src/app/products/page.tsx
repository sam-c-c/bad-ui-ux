"use client"

import { AppBar, Box, Button, Grid, Modal, Toolbar, Typography } from "@mui/material";
import CardView from "../components/card-view";
import { useState } from "react";
import Image from 'next/image';
import getProducts from "../data/products";
import logo from '../../../public/logo.png'

export default function Products() {

    const baseProducts = getProducts();
    const [products, setProducts] = useState(baseProducts);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({name: "", description: "", price: ""});
    
    function cardOnClickHandler() {
        let sortedProducts = products.sort(() => .5 - Math.random());
        setProducts([...sortedProducts]);
    }

    function orderOnClickHandler() {
        let randomProducts = products.sort(() => .5 - Math.random());
        setSelectedProduct(randomProducts[0]);
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const style = {
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
                        <Button href="/" sx={{color: 'hotpink'}}>Products</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid container>
                <Grid item xs={12} sx={{textAlign: 'center'}}>
                    <Typography variant="h3" sx={{ color: "white" }}>Latest kitchen products</Typography>
                    <Button variant="contained" onClick={orderOnClickHandler}>Order</Button>
                </Grid>
                <Grid item xs={12} mt={"20px"}>
                    <Grid container spacing={2}>
                        {products && products.map((x, i) => (
                            <Grid key={i} item xs={4}>
                                <CardView onClick={cardOnClickHandler} title={x.name} description={x.description} price={x.price} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Thanks for purchasing the {selectedProduct.name}.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {selectedProduct.price} has been debited from your account!
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}