import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../styles/css/headbox.css';
import resume from '../assets/png&jpg/Oleg_Nosyrev_CV.pdf';

export default function HeadBox() {
  return (
    <div className='head-box'>
      <h1>Oleg Nosyrev</h1>
      <p>Front-End Software Engineer [UI/UX]</p>
      <a className='button-orange' href={resume} download>
        <FileDownloadIcon fontSize='medium' color='#fff' /> Resume
      </a>
    </div>
  );
}
