import theShire from "../assets/images/The Shire.jpg";
import hobbitHole from "../assets/images/Hobbit Hole.jpeg";
import scouredShire from "../assets/images/Scoured Shire.jpeg";
import walkingHobbits from "../assets/images/Walking Hobbits.jpeg";

// Switch background image of image tile dependent on user progress (value in ui state)
export default function ImageTile({ ui }) {
  let bgImg = scouredShire;
  switch (ui.image) {
    case 0:
      bgImg = scouredShire;
      break;
    case 1:
      bgImg = walkingHobbits;
      break;
    case 2:
      bgImg = hobbitHole;
      break;
    case 3:
      bgImg = theShire;
      break;
  }

  return (
    <div
      className="image-tile"
      style={{ backgroundImage: `url(${bgImg})` }}
    ></div>
  );
}
