import images from "./imgData";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
function slidesData(){
     const SLIDES = [
        {
            image: images.img1,
            //text: "We're gonna do 3 fundamental exercises.",
          },
          {
            image: images.img2,
           // text: "Do 10 reps. Remember about full range of motion. Don't rush.",
          },
          {
            image: images.img3,
           // text: "Squats are important. Remember to keep your back straight.",
          },
        
    ];
    return SLIDES;
}
export default slidesData;