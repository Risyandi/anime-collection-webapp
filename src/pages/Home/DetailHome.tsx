import { useEffect, useState } from "react";
import MainLayout from "../../common/MainLayout";
import FooterLayout from "../../common/FooterLayout";
import CardDetail from "../../components/CardDetail";
import { useParams } from "react-router-dom";
import { GET_ANIME_LIST_BY_ID } from "../../utils/queryGraphApolloClient";
import { useQuery } from "@apollo/client";

type DetailHomePageParams = {
  id: string;
};

const DetailHomePage = () => {
  const { id } = useParams<DetailHomePageParams>();
  const [dataDetailAnimeList, setDataDetailAnimeList] = useState<{
    [key: string]: any;
  }>([]);

  const { data } = useQuery(GET_ANIME_LIST_BY_ID, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setDataDetailAnimeList([data.Media]);
    }
  }, [data]);

  return (
    <div>
      <MainLayout />
      <CardDetail data={dataDetailAnimeList} />
      <FooterLayout />
    </div>
  );
};

export default DetailHomePage;
