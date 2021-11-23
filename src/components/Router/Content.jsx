import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Gallery from "../../pages/Gallery";


export default function Content() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>

      <Route path="/gallery">
        <Gallery />
      </Route>
    </Switch>
  );
}
