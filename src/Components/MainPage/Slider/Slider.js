import { React } from "react";
import Carousel from "./Carousel/Carousel";
import "./Slider.css";
import Severyn from "../../../Pictures/Severyn.jpg";
import Ponasenkov from "../../../Pictures/Ponasenkov.jpg";
import Baumeister from "../../../Pictures/Baumeister.jpg";
import Heidegger from "../../../Pictures/Heidegger.jpg";
import Plato from "../../../Pictures/Plato.jpg";

const imgCreater = (img) => <img src={img} className="feedbackImg" />

const feedbacksArr = [
  {
    photo: imgCreater(Severyn),
    name: "Severyn Kurach",
    feedback:
      "Thank you for watching my pet project. It is the fiirst one on React. I hope you would like it! If to be honest I can give feedback just about Maximillian Shwarzmuller's course. It was very  good. I learned a lot from it. I can advice it form 100%!",
  },
  {
    photo: imgCreater(Ponasenkov),
    name: "Evgeniy Ponasenkov (Just Maestro)",
    feedback:
      "Maestro gives hist best compliment's! I get learned to make the beast sites. Now I like site estetic much more than art! I lost my mind with so cool framework like React.",
  },
  {
      photo: imgCreater(Baumeister),
      name: 'Andriy Baumeister',
      feedback: 'Why I started to visiting React courses!? Philosophy is hard of course, but React... React is like a hell of Dante!!! AAAAaaaAAaaa!!!'
  },
  {
    photo: imgCreater(Heidegger),
    name: 'Martin Heidegger',
    feedback: "Dasein? DaSeiiiin!! On this course I had written my first component function, it is: const Dasein = ({dasein}) => {return <p>Hello {dasein}!</p>)};"
},
{
    photo: imgCreater(Plato),
    name: 'Plato',
    feedback: "What I'm doing here??? Am I not dead for 2360+ years already? Severyn, sorry... BUT I CAN'T WRITE A FEEDBACK FOR YOUR PET PROJECT! LIVE ME ALONE!!!"
}
];

const Slider = () => {
  return (
      <div className="container-for-container-for-slider">
    <div className="container-for-sliders-main-page">
      <Carousel>
        {feedbacksArr.map((feedback) => {
          return (
            <div className="item">
              <span>{feedback.photo}</span>
              <span className="feedback-text-div">
                <div className="feedback-name"><p>{feedback.name}</p></div>
                <div className="feedback-article">{feedback.feedback}</div>
              </span>
            </div>
          );
        })}
      </Carousel>
    </div>
    </div>
  );
};

export default Slider;
