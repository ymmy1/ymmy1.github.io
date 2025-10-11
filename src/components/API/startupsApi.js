import projectImg from '../../assets/AVIF/projects/PC/PandaBash.avif';
import PreviewIcon from '@mui/icons-material/Preview';

export const startups = [
  {
    name: 'PandaBash',
    desc: 'Vite + Typescript',
    img: projectImg,
    imgOpen: projectImg,
    languages: [
      { name: 'ts', width: '61.4%', summary: 'TS 61.4%' },
      { name: 'css', width: '19.1%', summary: 'CSS 19.1%' },
      { name: 'scss', width: '18.9%', summary: 'SCSS 18.9%' },
      { name: 'other', width: '0.6%', summary: 'Other 0.6%' },
    ],
    content: <>Placeholder</>,
    links: [
      {
        name: 'Website',
        url: 'https://pandabash.com/',
        icon: <PreviewIcon size='medium' />,
      },
    ],
  },
];
