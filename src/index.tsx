import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import QuestionComp from "./components/QuestionComp";
import {
  createBrowserRouter,
  Router,
  FutureConfig,
  RouterProvider,
} from "react-router-dom";
import QuestionsComp from "./components/QuestionsComp";
import { store } from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Question",
    element: <QuestionComp />,
  },
]);

// declare function RouterProvider(props: RouterProviderProps): React.ReactElement;

interface RouterProviderProps {
  fallbackElement?: React.ReactNode;
  router: any;
  future?: FutureConfig;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
