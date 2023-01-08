import React from 'react';
import styles from './Portfolio.module.scss';
import Project from './Project';

interface IProjectsData {
  pid: number;
  image: string;
  name: string;
  title: string;
  comment: string;
  stack: string[];
  links: string;
  info: string;
}

const projectsData: IProjectsData[] = [
  {
    pid: 1,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_1_mono.png',
    name: 'Mobile and desktop app for London hostel store',
    title:
      'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse.',
    stack: ['html5', 'css3', 'JavaScript', 'bower', 'grunt'],
    links: 'www.superapp.com',
    info: '#mobile',
  },
  {
    pid: 2,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_2_mono.png',
    name: 'WEB APP PAGE FOR TREVEL COMPANY',
    title:
      'Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse.',
    stack: ['html5', 'css3', 'JavaScript', 'BEM', 'bower', 'grunt'],
    links: 'www.travellend.com',
    info: '#web',
  },
  {
    pid: 3,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_3_mono.png',
    name: 'ADMIN TEMPLATE FOR PHOTO SERVICE',
    title:
      'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse.',
    stack: ['html5', 'css3', 'JavaScript', 'Gulp', 'bower', 'grunt'],
    links: 'www.coolphoto.com',
    info: '#landing',
  },
];

const Projects = ({ activeBtn }: any): JSX.Element => {
  const projectsDataNew = projectsData.filter((e) => {
    if (activeBtn === '#all') {
      return e;
    }
    return e.info === activeBtn;
  });

  return (
    <div className={styles.projects}>
      {projectsDataNew.map((item) => (
        <Project key={item.pid} {...item} />
      ))}
    </div>
  );
};

export default Projects;
