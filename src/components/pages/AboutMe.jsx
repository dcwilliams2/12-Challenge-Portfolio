import '../../styles/AboutMe.css';

function AboutMe() {
    return (
      <div class="m-5">
        <div class="row">
          <div class="col-4">
            <h1 class='underlined-text'>About Me</h1>
          </div>
          <div class="col-4">
          <img src="../src/assets/headshot.jpg" class="img-thumbnail picture" alt="Head Shot"></img>
          </div>
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-6 mt-5">
            <p class="aboutMe"> Hi, I'm Daniel! I'm currently working towards starting a career in software development. Over the past 8 years I've worked in the dental industry, specializing in operational leadership, team development and process implementation. </p>
            <p class="aboutMe"> In addition to my operational experience I've spent the past 4 years coaching both select and high school volleyball. In my spare time I like to play volleyball, practice coding and stay physically active. </p>
            <p class="aboutMe"> Please check out some of the projects in my portfolio and don't hesitate to contact me with any questions. </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutMe;
  