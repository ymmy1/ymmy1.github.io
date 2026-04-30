import type { Skill } from '../../types';

import html from '../../assets/AVIF/skills/html_original.avif';
import css from '../../assets/AVIF/skills/css_original.avif';
import sass from '../../assets/AVIF/skills/sass_original.avif';
import js from '../../assets/AVIF/skills/js_original.avif';
import ts from '../../assets/AVIF/skills/ts_original.avif';
import react from '../../assets/AVIF/skills/react_original.avif';
import vue from '../../assets/AVIF/skills/vue_original.avif';

import aws from '../../assets/AVIF/skills/aws_original.avif';
import bootstrap from '../../assets/AVIF/skills/bootstrap_original.avif';
import c from '../../assets/AVIF/skills/c_original.avif';
import django from '../../assets/AVIF/skills/django_original.avif';
import figma from '../../assets/AVIF/skills/figma_original.avif';
import github from '../../assets/AVIF/skills/github_original.avif';
import git from '../../assets/AVIF/skills/git_original.avif';
import gitlab from '../../assets/AVIF/skills/gitlab_original.avif';
import jira from '../../assets/AVIF/skills/jira_original.avif';
import jquery from '../../assets/AVIF/skills/jquery.avif';
import postgresql from '../../assets/AVIF/skills/postgresql_original.avif';
import python from '../../assets/AVIF/skills/python_original.avif';
import slack from '../../assets/AVIF/skills/slack_original.avif';
import sqlite from '../../assets/AVIF/skills/sqlite_original.avif';

export const frontend: Skill[] = [
  { name: 'HTML', icon: html, category: 'frontend' },
  { name: 'CSS', icon: css, category: 'frontend' },
  { name: 'SASS', icon: sass, category: 'frontend' },
  { name: 'JavaScript', icon: js, category: 'frontend' },
  { name: 'TypeScript', icon: ts, category: 'frontend' },
  { name: 'React', icon: react, category: 'frontend' },
  { name: 'Vue', icon: vue, category: 'frontend' },
];

export const backend: Skill[] = [
  { name: 'Python', icon: python, category: 'backend' },
  { name: 'Django', icon: django, category: 'backend' },
  { name: 'PostgreSQL', icon: postgresql, category: 'backend' },
  { name: 'SQLite', icon: sqlite, category: 'backend' },
  { name: 'AWS', icon: aws, category: 'backend' },
  { name: 'C', icon: c, category: 'backend' },
];

export const tools: Skill[] = [
  { name: 'Git', icon: git, category: 'tools' },
  { name: 'GitHub', icon: github, category: 'tools' },
  { name: 'GitLab', icon: gitlab, category: 'tools' },
  { name: 'Figma', icon: figma, category: 'tools' },
  { name: 'Jira', icon: jira, category: 'tools' },
  { name: 'Slack', icon: slack, category: 'tools' },
  { name: 'Bootstrap', icon: bootstrap, category: 'tools' },
  { name: 'jQuery', icon: jquery, category: 'tools' },
];
