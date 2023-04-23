import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import { logBunsMiddleware } from "../../services/middlewares/logBunsMiddleware";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


//composeWithDevTools(applyMiddleware(thunk, logBunsMiddleware))