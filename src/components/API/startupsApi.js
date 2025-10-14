import projectImg from '../../assets/AVIF/projects/PC/PandaBash.avif';
import PreviewIcon from '@mui/icons-material/Preview';

export const startups = [
  {
    name: 'PandaBash',
    desc: 'React + Typescript',
    img: projectImg,
    imgOpen: projectImg,
    languages: [
      { name: 'ts', width: '61.4%', summary: 'TS 61.4%' },
      { name: 'css', width: '19.1%', summary: 'CSS 19.1%' },
      { name: 'scss', width: '18.9%', summary: 'SCSS 18.9%' },
      { name: 'other', width: '0.6%', summary: 'Other 0.6%' },
    ],
    content: (
      <>
        <strong>React + TypeScript</strong> web app. A volleyball event
        management platform connecting players with local tournaments and open
        gyms in the Seattle area. Features include event listings with
        registration, online payments via Square, automated confirmation emails,
        and admin-only event creation. Built with React, TypeScript, Firebase,
        and Cloudflare Functions for a smooth, modern, and secure user
        experience.
      </>
    ),
    links: [
      {
        name: 'Website',
        url: 'https://pandabash.com/',
        icon: <PreviewIcon size='medium' />,
      },
    ],
  },
];
