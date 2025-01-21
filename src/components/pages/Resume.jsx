import resume from '../../assets/resume.pdf';
import '../../styles/Resume.css';

function Resume() {
    return (
        <div>
        <div class="row m-5">
            <div class="col-3">
                <h1 class='underlined-text'>Resume</h1>
            </div>
            <div id="resumeLink" class="col-2 p-3 mt-5 text-center">
            <a href={resume} download="My_Resume.pdf">Download Resume</a>
            </div>
        </div>
        <div class="row m-5">
            <div class="col-1"></div>
            <div class="col-4">
                <h3>Front End Proficiencies:</h3>
                <ul class="resume">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back End Proficiencies:</h3>
                <ul class="resume">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>My SQL</li>
                </ul>
            </div>
        </div>
        </div>
    );
}
export default Resume;