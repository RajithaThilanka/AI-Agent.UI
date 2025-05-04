import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <Typography variant="h2" component="h1" className="mb-6">
        Welcome to Our App
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/about')}
        className="mt-4"
      >
        Go to About
      </Button>
    </Container>
  );
};

export default Home; 