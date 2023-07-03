/**
 * for handling error, using emotion in reactJS
 * error message : You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).
 */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const cardStyles = css`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  border: 1px solid #ccc;
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
  display: flex;
  flex-direction: column;
`;

interface TCard {
  data: {
    [key: string]: any;
  };
}

const CardDetail = ({ data }: TCard) => {
  return (
    <>
      {data.length !== 0 ? (
        data.map((card: any, index: any) => (
          <div css={cardStyles} key={index}>
            <div css={leftColumnStyles}>
              <h2>{card.title.romaji}</h2>
              <img src={card.coverImage.large} alt={card.title.romaji} />
            </div>
            <div css={rightColumnStyles}>
              <p>{card.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No content Found</div>
      )}
    </>
  );
};

export default CardDetail;
