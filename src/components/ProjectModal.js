import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectBox(props) {
  const opennedProject = props.opennedProject;
  return (
    <Modal
      open={Object.keys(opennedProject).length > 0}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
    >
      <Fade in={Object.keys(opennedProject).length > 0}>
        <div className={'modal_box ' + opennedProject.labelClass}>
          <CloseIcon
            size='large'
            className='closeIcon'
            onClick={() => props.handleClose()}
          />
          {opennedProject.labelClass && (
            <div className='new_img'>
              <img src={opennedProject.label} alt='status of a project' />
            </div>
          )}
          <h1 className='project_title'>{opennedProject.name}</h1>
          <p>
            <strong>{opennedProject.desc}</strong>
          </p>
          <div className='box_content'>
            <div className='left_box'>
              <a href={opennedProject.imgOpen} target='_blank' rel='noreferrer'>
                <img src={opennedProject.img} alt='project look' />
              </a>
            </div>
            <div className='right_box'>
              <p>{opennedProject.content}</p>
              <div className='project_links'>
                <ul>
                  {opennedProject.links?.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target='_blank'
                        rel='noreferrer'
                        className={'project_link ' + link.name}
                      >
                        {link.icon} {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='languages'>
                <div className='skill-bar'>
                  {opennedProject.languages?.map((lng, index) => (
                    <div
                      key={index}
                      className={lng.name}
                      style={{ width: lng.width }}
                    ></div>
                  ))}
                </div>
                <div className='details'>
                  <ul>
                    {opennedProject.languages?.map((lng, index) => (
                      <li key={index}>
                        <div className={lng.name}></div>
                        {lng.summary}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
