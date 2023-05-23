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
import { Thumbnail } from "../Thumbnail";
import { IMAGES } from "../../IMAGES";

export const Gallery = () => {
  let location = useLocation();
  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: { background: location },
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
};
