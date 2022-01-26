import './Home.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
