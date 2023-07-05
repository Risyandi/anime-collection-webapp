import MainLayout from '../../common/MainLayout';
import FooterLayout from '../../common/FooterLayout';
import CardListCollection from '../../components/CardListCollection';


const CollectionPage = () => {
  return (
    <div>
      <MainLayout/>
      <CardListCollection/>
      <FooterLayout/>
    </div>
  );
};

export default CollectionPage;
