import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { Home } from "../Home";
import { Gallery } from "../Gallery";
import { ImageView } from "../ImageView";
import { Modal } from "../Modal";


export const ModalSwitch = () => {
  let location = useLocation();

  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>

   
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
};