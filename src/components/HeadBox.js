import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../styles/css/headbox.css';
import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';

export default function HeadBox({ theme }) {
  return (
    <div className='head-box' id={theme ? '' : 'notheme'}>
      <h1>Oleg Nosyrev</h1>
      <p>Front End Software Engineer</p>
      <a className='button-main' href={resume} target='_blank' rel='noreferrer'>
        <FileDownloadIcon fontSize='medium' color='#fff' /> Resume
      </a>
    </div>
  );
}
