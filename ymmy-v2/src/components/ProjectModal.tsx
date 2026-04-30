import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onClosingStart: () => void;
}

export default function ProjectModal({ project, onClose, onClosingStart }: ProjectModalProps) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Project | null>(null);

  useEffect(() => {
    if (project) {
      setData(project);
      setOpen(true);
    } else if (data) {
      setOpen(false);
    }
  }, [project]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    onClosingStart();
    setOpen(false);
  };

  const handleExited = () => {
    setData(null);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      closeAfterTransition
    >
      <Fade in={open} onExited={handleExited} timeout={400}>
        <div className={`modal-box ${data?.labelClass ?? ''}`}>
          <button className='modal-box__close' onClick={handleClose} aria-label='Close'>
            <CloseIcon />
          </button>

          {data?.labelClass && data.label && (
            <img className='modal-box__badge' src={data.label} alt={data.labelClass} />
          )}

          <h2 id='modal-title' className='modal-box__title'>{data?.name}</h2>
          <p className='modal-box__subtitle'>{data?.desc}</p>

          <div className='modal-box__body'>
            <a
              className='modal-box__img-link'
              href={data?.imgOpen}
              target='_blank'
              rel='noreferrer'
            >
              <img src={data?.img} alt={`${data?.name} preview`} />
            </a>

            <div>
              <p className='modal-box__desc'>{data?.content}</p>

              <ul className='modal-box__links'>
                {data?.links?.map((link) => (
                  <li key={link.name}>
                    <a
                      className='modal-box__link'
                      href={link.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {link.icon} {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className='modal-box__bar'>
                {data?.languages?.map((lng) => (
                  <div
                    key={lng.name}
                    className={`modal-box__bar-segment ${lng.name}`}
                    style={{ width: lng.width }}
                  />
                ))}
              </div>
              <ul className='modal-box__lang-list'>
                {data?.languages?.map((lng) => (
                  <li key={lng.name} className='modal-box__lang-item'>
                    <span className={lng.name} />
                    {lng.summary}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
