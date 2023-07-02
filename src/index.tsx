import {StrictMode, Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/configApolloClient";
import "./assets/css/index.css";
import LoadingScreen from './components/LoadingScreen'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen/>}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
