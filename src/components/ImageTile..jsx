import { useState } from "react";
import theShire from "../assets/images/The Shire.jpg";
import hobbitHole from "../assets/images/Hobbit Hole.jpeg";
import scouredShire from "../assets/images/Scoured Shire.jpeg";
import walkingHobbits from "../assets/images/Walking Hobbits.jpeg";

export default function ImageTile() {
  const [image, setImage] = useState(theShire);

  return <img className="image-tile" src={image} />;
}
