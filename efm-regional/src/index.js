import ReactDOM from "react-dom";
import App from "./App";
import { legacy_createStore } from "redux";
import { Reducer } from "./config/reducer";
import { Provider } from "react-redux";

const Str = legacy_createStore(Reducer)

const root = document.getElementById("root")

ReactDOM.render(<Provider store={Str} >
  <App />
</Provider>, root);