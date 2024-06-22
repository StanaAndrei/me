import './Resume.scss'
import resume from './../../assets/pdf/resume.pdf'

export default function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <div class='doc-container'>
        <embed src={resume} 
          type="application/pdf" />
      </div>
    </div>
  );
}