import Container from "../../components/Shared/Container/Container";
import Banner from "./Banner/Banner";
import HomeAbout from "./HomeAbout/HomeAbout";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <HomeAbout></HomeAbout>
            </Container>
        </div>
    );
};

export default Home;