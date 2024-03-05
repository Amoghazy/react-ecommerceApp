import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Provider } from "react-redux";
import STORE from "./RTK/Store.ts";
import "react-multi-carousel/lib/styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={STORE}>
    <App />
  </Provider>
);
