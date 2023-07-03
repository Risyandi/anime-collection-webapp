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
        ))
      ) : (
        <div>No content Found</div>
      )}
    </>
  );
};

export default CardDetail;
