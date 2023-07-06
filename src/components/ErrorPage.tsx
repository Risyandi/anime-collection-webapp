/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useRouteError } from "react-router-dom";

const wrapperError = css`
  margin: auto;
  margin-top: 50%;
  display: grid;
  place-items: center;
`;

const textError = css`
  color: #ea4c89;
  font-weight: bold;
`;

const textLink = css`
  color: #ea4c89;
  font-weight: bold;
`;

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div css={wrapperError}>
      <h1 css={textError}>Oops! Error</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Back to
        <Link to="/anime-collection-webapp" css={textLink}>
          Homepage
        </Link>
      </p>
    </div>
  );
}
