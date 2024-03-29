import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Provider } from "react-redux";
import STORE from "./RTK/Store.ts";
import "react-multi-carousel/lib/styles.css";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Provider store={STORE}>
      <App />
    </Provider>
  </HelmetProvider>
);
