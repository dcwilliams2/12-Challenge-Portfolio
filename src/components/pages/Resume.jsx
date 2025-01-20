import resume from '../../assets/resume.pdf';

function Resume() {
    return (
        <div class="m-5 p-5">
            <h1 class='underlined-text'>Resume</h1>
            <a href={resume} download="My_Resume.pdf">Download My Resume</a>
        </div>
    );
}
export default Resume;