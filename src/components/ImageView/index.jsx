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


import { Image } from "../Image";
import { IMAGES } from "../../IMAGES";

export const ImageView = () => {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
      <button onClick={back}>
        Close
      </button>
    </div>
  );
};