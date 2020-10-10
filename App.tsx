import React from "react";
import createStore from "./reducks/store/store";
import { MainNavigation } from "./navigation";

export const store = createStore();

const App: React.FC = () => {
  return <MainNavigation />;
};

export default App;
