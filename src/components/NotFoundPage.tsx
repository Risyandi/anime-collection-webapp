/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const wrapperNotFound = css`
  margin: auto;
  margin-top: 50%;
  display: grid;
  place-items: center;
`;

const textNotFound = css`
  color: #ea4c89;
  font-weight: bold;
`;

const textLink = css`
  color: #ea4c89;
  font-weight: bold;
`;

export default function ErrorPage() {
  return (
    <div css={wrapperNotFound}>
      <h1 css={textNotFound}>Oops! 404</h1>
      <p>Sorry, Page not found. </p>
      <p>
        Back to
        <Link to="/anime-collection-webapp" css={textLink}>
          {" "}
          Homepage
        </Link>
      </p>
    </div>
  );
}
