import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/scss/footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <span className='footer__copy'>
        © {new Date().getFullYear()} Oleg Nosyrev
      </span>
      <ul className='footer__links'>
        <li>
          <a
            className='footer__link'
            href='https://github.com/ymmy1'
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
          >
            <GitHubIcon fontSize='small' />
          </a>
        </li>
        <li>
          <a
            className='footer__link'
            href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
          >
            <LinkedInIcon fontSize='small' />
          </a>
        </li>
        <li>
          <a
            className='footer__link'
            href='mailto:oleg.ymmy@gmail.com'
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
