import React from "react";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { MainNavigation } from "./navigation";

export const store = createStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
