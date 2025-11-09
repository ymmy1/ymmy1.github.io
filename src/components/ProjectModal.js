import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectModal({ project, onClose, onClosingStart }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (project) {
      setData(project);
      setOpen(true);
    } else if (data) {
      setOpen(false);
    }
  }, [project]);

  const handleInternalClose = (event, reason) => {
    if (onClosingStart) onClosingStart();
    setOpen(false);
  };

  const handleExited = () => {
    setData(null);
    if (onClose) onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleInternalClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
    >
      <Fade in={open} onExited={handleExited} easing={data} timeout={500}>
        <div className={'modal_box ' + (data?.labelClass || '')}>
          <CloseIcon
            size='large'
            className='closeIcon'
            onClick={handleInternalClose}
          />
          {data?.labelClass && (
            <div className='new_img'>
              <img src={data?.label} alt='status of a project' />
            </div>
          )}
          <h3 className='project_title'>{data?.name}</h3>
          <strong className='project_desc'>{data?.desc}</strong>
          <div className='box_content'>
            <div className='left_box'>
              <a href={data?.imgOpen} target='_blank' rel='noreferrer'>
                <img src={data?.img} alt='project look' />
              </a>
            </div>
            <div className='right_box'>
              <p>{data?.content}</p>
              <div className='project_links'>
                <ul>
                  {data?.links?.map((link, index) => (
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
                  {data?.languages?.map((lng, index) => (
                    <div
                      key={index}
                      className={lng.name}
                      style={{ width: lng.width }}
                    ></div>
                  ))}
                </div>
                <div className='details'>
                  <ul>
                    {data?.languages?.map((lng, index) => (
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
