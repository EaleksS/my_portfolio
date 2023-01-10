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
    name: 'Мобильное и настольное приложение для магазина хостелов в Лондоне',
    title: '---',
    comment: '---',
    stack: ['html5', 'css3', 'JavaScript', 'bower'],
    links: 'https://github.com',
    info: '#react',
  },
  {
    pid: 2,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_2_mono.png',
    name: 'СТРАНИЦА ВЕБ-ПРИЛОЖЕНИЯ ДЛЯ КОМПАНИИ TREVEL',
    title: '---',
    comment: '---',
    stack: ['html5', 'css3', 'JavaScript', 'BEM', 'grunt'],
    links: 'https://github.com',
    info: '#wordpress',
  },
  {
    pid: 3,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_3_mono.png',
    name: 'ШАБЛОН АДМИНИСТРАТОРА ДЛЯ ФОТОСЕРВИСА',
    title: '---',
    comment: '---',
    stack: ['html5', 'css3', 'JavaScript', 'Gulp', 'bower', 'grunt'],
    links: 'https://github.com',
    info: '#verstka',
  },
  {
    pid: 4,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_1_mono.png',
    name: 'Мобильное и настольное приложение для магазина хостелов в Лондоне',
    title: '---',
    comment: '---',
    stack: ['html5', 'css3', 'JavaScript', 'bower'],
    links: 'https://github.com',
    info: '#react',
  },
  {
    pid: 5,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_2_mono.png',
    name: 'СТРАНИЦА ВЕБ-ПРИЛОЖЕНИЯ ДЛЯ КОМПАНИИ TREVEL',
    title: '---',
    comment: '---',
    stack: ['html5', 'css3', 'JavaScript', 'BEM', 'grunt'],
    links: 'https://github.com',
    info: '#wordpress',
  },
  {
    pid: 6,
    image:
      'https://previews.aspirity.com/spirit/assets/img/img_project_3_mono.png',
    name: 'ШАБЛОН АДМИНИСТРАТОРА ДЛЯ ФОТОСЕРВИСА',
    title: '---',
    comment: '---',
    stack: ['html5', 'css3', 'JavaScript', 'Gulp', 'bower', 'grunt'],
    links: 'https://github.com',
    info: '#verstka',
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
      {projectsDataNew.reverse().map((item) => (
        <Project key={item.pid} {...item} />
      ))}
    </div>
  );
};

export default Projects;
