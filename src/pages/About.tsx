import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <Typography variant="h2" component="h1" className="mb-6">
        About Us
      </Typography>
      <Typography variant="body1" className="mb-4">
        This is a sample about page with Material-UI and Tailwind CSS integration.
      </Typography>
      <Button 
        variant="contained" 
        color="secondary"
        onClick={() => navigate('/')}
        className="mt-4"
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default About; 