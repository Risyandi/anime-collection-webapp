/**
 * for handling error, using emotion in reactJS
 * error message : You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).
 */
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { GET_ANIME_LIST_BY_ID } from "../utils/queryGraphApolloClient";
import { useQuery } from "@apollo/client";

const cardStyles = css`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin: auto;
  margin-top: 50px;
  width: 70vw;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const leftColumnStyles = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rightColumnStyles = css`
  flex: 4;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const imgStyles = css`
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: left;
  transition: all 0.5s ease;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

type DetailHomePageParams = {
  id: string;
};

const CardDetail = () => {
  const { id } = useParams<DetailHomePageParams>();
  const [dataCardsDetail, setDataCardsDetail] = useState<{
    [key: string]: any;
  }>([]);

  const { data } = useQuery(GET_ANIME_LIST_BY_ID, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setDataCardsDetail([data.Media]);
    }
  }, [data]);

  return (
    <>
      {dataCardsDetail.map((card: any, index: any) => (
        <div css={cardStyles} key={index}>
          <div css={leftColumnStyles}>
            <img
              css={imgStyles}
              src={card.coverImage.large}
              alt={card.title.romaji}
            />
          </div>
          <div css={rightColumnStyles}>
            <h2>{card.title.romaji}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardDetail;
