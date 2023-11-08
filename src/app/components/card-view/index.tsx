import { Button, Card, CardContent, Typography } from '@mui/material';

interface ICardProps {
    title: string;
    description: string;
    price: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CardView({ title, description, price, onClick }: ICardProps) {
    return (
        <Card sx={{ minWidth: 275, maxHeight: 150, overflow: 'scroll', backgroundColor: 'hotpink' }}>
          <CardContent>
            <Typography variant='h3' sx={{color: 'limegreen' }} gutterBottom>
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5, color: 'limegreen' }}>
              {description}
            </Typography>
            <Typography variant="body2" sx={{color: 'yellow'}}>
              {price}
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'hotpink', color: 'limegreen' }} onClick={onClick}>View More</Button>
          </CardContent>
        </Card>
    )
}