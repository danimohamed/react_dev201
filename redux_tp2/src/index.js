import ReactDOM from "react-dom";
import App from "./App";
import { legacy_createStore } from "redux";
import { reducer } from "./config/Reducer";
import { Provider } from "react-redux";

const Str = legacy_createStore(reducer)

const root = document.getElementById("root")

ReactDOM.render(<Provider store={Str} >
    <App />
</Provider>, root);