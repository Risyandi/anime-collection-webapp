/**
 * for handling error, using emotion in reactJS
 * error message : You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `cssName` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).
 */
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams, useMatch } from "react-router-dom";
import { GET_ANIME_LIST_BY_ID } from "../utils/queryGraphApolloClient";
import { convertHtmlToText } from "../utils/generalUtils";
import { useQuery } from "@apollo/client";
import { getCollectionById } from "../utils/localForage";

// breakpoint css emotion
const breakpoints = [768];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const articleCardStyles = css`
  display: grid;
  grid-template-columns: 285px minmax(300px, 445px);
  max-width: 730px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 600px) {
    flex-direction: column;
  }

  ${mq[0]} {
    grid-template-columns: 1fr;
    max-width: 294px;
    overflow: hidden;
  }
`;

const imageBoxStyles = css`
  border-radius: 10px 0 0 10px;
  overflow: hidden;

  ${mq[0]} {
    border-radius: 0;
    height: 180px;
  }
`;

const articleBannerStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.5s ease;

  ${mq[0]} {
  }
`;

const articleContentStyles = css`
  background: white;
  padding: 32px 40px;
  border-radius: 0 10px 10px 0;

  ${mq[0]} {
    border-radius: 0;
    padding: 30px 28px 20px;
  }
`;

const articleTitleStyles = css`
  font-size: 20px;
  color: #ea4c89;
  margin-bottom: 12px;
  line-height: 1.4;

  ${mq[0]} {
    font-size: 15px;
  }
`;

const articleTextStyles = css`
  color: black;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 18px;

  ${mq[0]} {
    margin-bottom: 30px;
  }
`;

const wrapperCardStyles = css`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 80px;
  display: grid;
  place-items: center;
`;

const wrapperDetail = css`
  display: block;
`;

const detailTitle = css`
  color: #ea4c89;
  font-size: 18px;
  font-weight: bold;
`;

const detailText = css`
  font-size: 14px;
`;

type DetailHomePageParams = {
  id: any;
};

const CardDetail = () => {
  const { id } = useParams<DetailHomePageParams>();
  const matches = useMatch("/detail/collections/:id");

  const [dataCardsDetail, setDataCardsDetail] = useState<{
    [key: string]: any;
  }>([]);

  const { data } = useQuery(GET_ANIME_LIST_BY_ID, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (matches !== null) {
      // set data for detail collections from localstorage
      getCollectionById(id).then((data) => {
        setDataCardsDetail(data);
      });
    } else {
      if (data !== undefined) {
        // set data for detail homepage from graphql
        setDataCardsDetail([data.Media]);
      }
    }
  }, [data, id, matches]);

  return (
    <div css={wrapperCardStyles}>
      {dataCardsDetail.map((card: any, index: any) => (
        <article key={index} css={articleCardStyles}>
          <div css={imageBoxStyles}>
            <img
              src={card.coverImage.large}
              alt={card.title ? card.title.romaji : '-'}
              css={articleBannerStyles}
            />
          </div>
          <div css={articleContentStyles}>
            <h3 css={articleTitleStyles}>{card.title ? card.title.romaji : '-'}</h3>
            <p css={articleTextStyles}>{card.description ? convertHtmlToText(card.description): '-'}</p>
            <div css={wrapperDetail}>
              <div css={detailTitle}>Genres</div>
              <div css={detailText}>{card.genres ? card.genres.join(", ").toLowerCase(): '-'}</div>
            </div>
            <br />
            <div css={wrapperDetail}>
              <div css={detailTitle}>Score</div>
              <div css={detailText}>{card.averageScore ? card.averageScore : '-'}</div>
            </div>
            <br />
            <div css={wrapperDetail}>
              <div css={detailTitle}>Duration</div>
              <div css={detailText}>{card.duration ? card.duration+' minutes' : '-'} </div>
            </div>
            <br />
            <div css={wrapperDetail}>
              <div css={detailTitle}>Type</div>
              <div css={detailText}>{card.type ? card.type.toLowerCase() : '-'}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CardDetail;
