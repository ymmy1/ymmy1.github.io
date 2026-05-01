import favorite from '../../assets/AVIF/projects/favorite.avif';
import newL from '../../assets/AVIF/projects/new.avif';
import inProgress from '../../assets/AVIF/projects/in-progress.avif';

import projectImg1 from '../../assets/AVIF/projects/PC/flackyChat.avif';
import projectImg2 from '../../assets/AVIF/projects/PC/weather.avif';
import projectImg3 from '../../assets/AVIF/projects/PC/netflix.avif';
import projectImg4 from '../../assets/AVIF/projects/PC/facebook.avif';
import projectImg7 from '../../assets/AVIF/projects/PC/blogger-gram.avif';
import projectImg10 from '../../assets/AVIF/projects/PC/future-world.avif';
import projectImg11 from '../../assets/AVIF/projects/PC/Dysney+.avif';
import projectImg12 from '../../assets/AVIF/projects/PC/walker.avif';
import projectImg13 from '../../assets/AVIF/projects/PC/iPhone.avif';

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PreviewIcon from '@mui/icons-material/Preview';

import type { Project } from '../../types';

export { inProgress };

const disneyContent = (
  <>
    <strong>Next.js + Tailwind + TypeScript</strong> project to display movie
    details — images, titles, descriptions, ratings, etc.{' '}
    <strong>TMDB API</strong> used to fetch movies. Includes Dark/Light Theme,
    Search and Genre functionality.
  </>
);
const flackyChatContent = (
  <>
    <strong>React</strong> Real-Time Chat App connected with Firebase. Sign in
    through your Google account and start messaging! You can also add different
    rooms to chat and change <strong>Themes</strong>.
  </>
);
const weatherContent = (
  <>
    <strong>Vue.js weather application</strong>. Uses open source APIs from
    OpenWeatherMap to fetch the current weather &amp; 5-day forecast. All
    animations, transitions, and data display built in Vue.js.
  </>
);
const netflixContent = (
  <>
    <strong>React app</strong> — Netflix home page front-end clone.{' '}
    <strong>TMDB API</strong> used to fetch movies. Trailers auto-searched and
    fetched from YouTube.
  </>
);
const facebookContent = (
  <>
    <strong>Django application</strong> — Facebook clone. Login / Register as a
    user. Post / Like / Unlike / Comment / Edit / Delete posts.{' '}
    <strong>See friends online.</strong> Edit Cover Photo, Profile Photo, and
    Public Info. Send / Cancel Friend Requests, Delete friends, and much more.
  </>
);
const bloggerContent = (
  <>
    A small one-page Instagram clone. Register and login using an{' '}
    <strong>SQLite database</strong> for comments, likes, and user details.
    Scroll images, <strong>like them and leave comments</strong>.
  </>
);
const futureContent = (
  <>
    <strong>A Vue app</strong> about global warming and solutions such as
    electric/hybrid vehicles. JSON file used as a future API for Electric &amp;
    Hybrid Cars data. <strong>The API</strong> provides Price / Title / Image /
    YouTube Review links.
  </>
);
const walkerContent = (
  <>
    <strong>A Three.js web app.</strong> Browser-based third-person 3D walker
    with a follow camera. <strong>Controls:</strong> WASD/arrow keys + mouse
    look. <strong>Rendering:</strong> real-time WebGL via Three.js.{' '}
    <strong>Stack:</strong> JavaScript + Three.js (Vite).
  </>
);
const appleContent = (
  <>
    Interactive landing page inspired by Apple&apos;s iPhone product site.
    Responsive hero, scroll-triggered highlights, 3D iPhone viewer with
    lighting and orbit controls, video sections — built with React, Vite,
    Tailwind v4, GSAP, and React Three Fiber.
  </>
);

export const api: Project[] = [
  {
    labelClass: 'new_project',
    label: newL,
    name: 'iPhone Landing Page',
    desc: 'Three + GSAP',
    img: projectImg13,
    imgOpen: projectImg13,
    languages: [
      { name: 'ts', width: '91.8%', summary: 'TS 91.8%' },
      { name: 'css', width: '6.2%', summary: 'CSS 6.2%' },
      { name: 'js', width: '2.0%', summary: 'JS 2.0%' },
    ],
    content: appleContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/iPhoneLanding',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://ymmy1.github.io/iPhoneLanding/',
        icon: <PreviewIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'Mindless 3D Walker',
    desc: 'Three.js',
    img: projectImg12,
    imgOpen: projectImg12,
    languages: [
      { name: 'js', width: '96.6%', summary: 'JS 96.6%' },
      { name: 'html', width: '2.9%', summary: 'HTML 2.9%' },
      { name: 'css', width: '0.5%', summary: 'CSS 0.5%' },
    ],
    content: walkerContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/walker',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://ymmy1.github.io/walker/',
        icon: <PreviewIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/jOrh4QNJC7I',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'Disney+ Clone',
    desc: 'Next.js + TailwindCSS',
    img: projectImg11,
    imgOpen: projectImg11,
    languages: [
      { name: 'ts', width: '95.2%', summary: 'TS 95.2%' },
      { name: 'css', width: '3.9%', summary: 'CSS 3.9%' },
      { name: 'js', width: '0.9%', summary: 'JS 0.9%' },
    ],
    content: disneyContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/disney-clone',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://disney-clone-ymmy.netlify.app/',
        icon: <PreviewIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/T7pQZk2V3lg',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    labelClass: 'favorite_project',
    label: favorite,
    name: 'FlackyChat',
    desc: 'React + Firebase',
    img: projectImg1,
    imgOpen: projectImg1,
    languages: [
      { name: 'scss', width: '58.2%', summary: 'SCSS 58.2%' },
      { name: 'js', width: '35.3%', summary: 'JS 35.3%' },
      { name: 'html', width: '5.4%', summary: 'HTML 5.4%' },
      { name: 'css', width: '1.1%', summary: 'CSS 1.1%' },
    ],
    content: flackyChatContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/flacky-chat',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://flacky-chat.netlify.app/',
        icon: <PreviewIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/watch?v=Q8chuGwnHvk&t=18s',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'Vue Weather',
    desc: 'Vue.js',
    img: projectImg2,
    imgOpen: projectImg2,
    languages: [
      { name: 'vue', width: '92.1%', summary: 'Vue.js 92.1%' },
      { name: 'html', width: '6.1%', summary: 'HTML 6.1%' },
      { name: 'js', width: '1.8%', summary: 'JS 1.8%' },
    ],
    content: weatherContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/weather',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://ymmy-weather.netlify.app/',
        icon: <PreviewIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/Ll_VLD3JJnM',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'React Netflix',
    desc: 'React',
    img: projectImg3,
    imgOpen: projectImg3,
    languages: [
      { name: 'js', width: '65.1%', summary: 'JS 65.1%' },
      { name: 'css', width: '19.7%', summary: 'CSS 19.7%' },
      { name: 'html', width: '15.2%', summary: 'HTML 15.2%' },
    ],
    content: netflixContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/netflix-clone',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://netflix-ymmy-clone.web.app/',
        icon: <PreviewIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/f7AdwJH-IWs',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'Facebook Clone',
    desc: 'Django',
    img: projectImg4,
    imgOpen: projectImg4,
    languages: [
      { name: 'html', width: '44.5%', summary: 'HTML 44.5%' },
      { name: 'scss', width: '30.2%', summary: 'SCSS 30.2%' },
      { name: 'py', width: '18.6%', summary: 'Python 18.6%' },
      { name: 'js', width: '6.7%', summary: 'JS 6.7%' },
    ],
    content: facebookContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/facebook',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/YUxv7zD3H3M',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'BloggerGram',
    desc: 'SQLite',
    img: projectImg7,
    imgOpen: projectImg7,
    languages: [
      { name: 'html', width: '60%', summary: 'HTML 60%' },
      { name: 'py', width: '30%', summary: 'Python 30%' },
      { name: 'css', width: '10%', summary: 'CSS 10%' },
    ],
    content: bloggerContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/BloggerGram',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/ErZqklvnL-I',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
  {
    name: 'Future World',
    desc: 'Vue',
    img: projectImg10,
    imgOpen: projectImg10,
    languages: [
      { name: 'vue', width: '92.6%', summary: 'Vue 92.6%' },
      { name: 'js', width: '7.4%', summary: 'JS 7.4%' },
    ],
    content: futureContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/Future_World',
        icon: <GitHubIcon fontSize='medium' />,
      },
      {
        name: 'Website',
        url: 'https://future-world.netlify.app/',
        icon: <PreviewIcon fontSize='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/zk5ik1IuRaI',
        icon: <YouTubeIcon fontSize='medium' />,
      },
    ],
  },
];
