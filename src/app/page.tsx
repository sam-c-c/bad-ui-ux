"use client"

import { Grid, Typography, Button, AppBar, Toolbar, Box, Modal } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'
import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const handleClose = () => setModalOpen(false);

  const style = {
    textAlign: 'center', marginBottom: '20px', color: 'white'
  };
  const modalStyle = {
    textAlign: 'center', color: 'white', backgroundColor: 'black', padding: '50px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%'
  };

  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="fixed" sx={{backgroundColor: 'limegreen'}}>
            <Toolbar>
              <Image src={logo} height={100} width={100} alt="logo" />
            </Toolbar>
          </AppBar>
      </Box>
      <Grid container mt={"100px"}>
        <Grid item xs={12} sx={{textAlign: 'center'}}>
          <Typography variant='h1' sx={style}>Welcome to KitchenProdz. Click Enter below.</Typography>
          <Typography variant='body1' sx={style} style={{backgroundColor: 'black'}}>This is still in beta so only beta testers know how to access it!</Typography>
          <Button href="/" variant="contained" style={{width: "200px", padding: "30px", textAlign: 'center', fontSize: "48px"}}>Enter</Button>
        </Grid>
        <Grid item xs={12}>
          <Link href="/products" style={{color: "#eeeeee", display: 'block', float: 'left'}}>Enter below</Link>
        </Grid>
      </Grid>
      <Modal
          open={modalOpen}
          onClose={handleClose}
      >
          <Box sx={modalStyle}>
             <Typography variant="h6" component="h2">
                This site doesn&apos;t use cookies.
          </Typography>
          <Button variant='contained' onClick={handleClose}>Ok, got it!</Button>
          </Box>
       </Modal>
    </>
  )
}
