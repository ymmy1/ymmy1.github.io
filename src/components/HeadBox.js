import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../styles/css/headbox.css';
import resume from '../assets/Resumes/Front-End_Oleg-Nosyrev.pdf';

export default function HeadBox({ theme }) {
  return (
    <div className='head-box' id={theme ? '' : 'notheme'}>
      <h1>Oleg Nosyrev</h1>
      <p>Front-End Software Engineer</p>
      <a
        className='button-orange'
        href={resume}
        target='_blank'
        rel='noreferrer'
      >
        <FileDownloadIcon fontSize='medium' color='#fff' /> Resume
      </a>
    </div>
  );
}
