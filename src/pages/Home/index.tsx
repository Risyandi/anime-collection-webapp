import MainLayout from "../../common/MainLayout";
import FooterLayout from "../../common/FooterLayout";
import CardList from "../../components/CardList";

const HomePage = () => {
  return (
    <div>
      <MainLayout />
      <CardList />
      <FooterLayout />
    </div>
  );
};

export default HomePage;
