import { Container } from '@mui/material';
import './Home.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Header />
      <Container sx={{ width: '50%' }}>
        <Banner />
      </Container>
    </div>
  );
};

export default Home;
