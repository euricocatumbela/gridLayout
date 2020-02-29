import React from "react";
import Card from "./Card";
import Section from "./Section";
import Wave from "./Wave";
import Footer from "./Footer";
import logos from "./Logo";

function IndexPage() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to design and code react apps</h1>
          <p>
            Complete courses about the best tools and design. Prototype and
            build apps with React and Swift
          </p>
          <a href="www.euricocatumbela.co.za">Watch the video</a>
          <div className="Logos">
            <img alt="" width="50" src={logos[0].figma} />
            <img alt="" width="50" src={logos[1].swift} />
            <img alt="" width="50" src={logos[2].react} />
            <img alt="" width="50" src={logos[3].sketch} />
            <img alt="" width="50" src={logos[4].framer} />
            <img alt="" width="50" src={logos[5].invision} />
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2> 12 courses, more comming</h2>
        <div className="CardGroup">
          <Card
            title="React for Designers"
            text="12 Sections"
            image="./images/wallpaper.jpg"
          />
          <Card
            title="React for Designers"
            text="12 Sections"
            image="./images/wallpaper.jpg"
          />
          <Card
            title="React for Designers"
            text="12 Sections"
            image="./images/wallpaper.jpg"
          />
          <Card
            title="React for Designers"
            text="12 Sections"
            image="./images/wallpaper.jpg"
          />
          <Card
            title="React for Designers"
            text="12 Sections"
            image="./images/wallpaper.jpg"
          />
          <Card
            title="React for Designers"
            text="12 Sections"
            image="./images/wallpaper.jpg"
          />
        </div>
      </div>
      <Section
        image={logos[6].wallpaper}
        logo={logos[2].react}
        title={"React for Designers"}
        text={
          "Leearn how to build a site using react and most efficient libraries"
        }
      />
      <Footer title> </Footer>
    </div>
  );
}
export default IndexPage;
