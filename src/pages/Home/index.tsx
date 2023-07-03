import { useEffect, useState } from "react";
import MainLayout from "../../common/MainLayout";
import FooterLayout from "../../common/FooterLayout";
import CardList from "../../components/CardList";
import { GET_ANIME_LIST } from "../../utils/queryGraphApolloClient";
import { useQuery } from "@apollo/client";

const HomePage = () => {
  const [dataCards, setDataCards] = useState<{ [key: string]: any }>([]);

  const { data } = useQuery(GET_ANIME_LIST, {
    variables: {
      search: "detective conan",
      page: 2,
      perPage: 10,
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setDataCards(data.Page.media);
    }
  }, [data]);

  return (
    <div>
      <MainLayout />
      <CardList data={dataCards} />
      <FooterLayout />
    </div>
  );
};

export default HomePage;
