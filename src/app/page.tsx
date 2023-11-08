import { Grid, Typography, Button, AppBar, Toolbar, Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const style = {
    textAlign: 'center', marginBottom: '20px', color: 'white'
  };

  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="fixed" sx={{backgroundColor: 'limegreen'}}>
            <Toolbar>
              <Image src="/logo.png" height={100} width={100} alt="logo" />
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
    </>
  )
}
