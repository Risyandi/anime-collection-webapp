/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const wrapperLoading = css`
  margin: auto;
  margin-top: 150px;
  display: grid;
  place-items: center;
`;

const textLoading = css`
  color: #ea4c89;
  font-weight: bold;
`;

type props = {
  text: String;
};

export default function LoadingScreen({ text }: props) {
  return (
    <div css={wrapperLoading}>
      <h1 css={textLoading}>{text}</h1>
    </div>
  );
}
