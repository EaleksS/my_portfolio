import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './Portfolio.module.scss';

interface IProjectsData {
  pid: number;
  image: string;
  name: string;
  title: string;
  comment: string;
  stack: string[];
  links: string;
}

const Project = ({
  image,
  name,
  title,
  stack,
  comment,
  links,
}: IProjectsData) => {
  const [openModal, setOpenModal]: any = useState(false);

  return (
    <>
      <div className={styles.project} onClick={() => setOpenModal(true)}>
        <img src={image} alt={name} />
        <div className={styles.content}>
          <h2>{name}</h2>
          <p>{title}</p>
          <h3>USED STACK:</h3>
          <div className={styles.stack}>
            {stack.map((item, index) => (
              <button key={index}>{item}</button>
            ))}
          </div>
          <a href={links}>{links}</a>
        </div>
      </div>
      {/* Modal */}
      <div className={`${styles.modal} ${!openModal && styles.closeModal}`}>
        <div
          className={styles.loyaut}
          onClick={() => setOpenModal(false)}
        ></div>
        <div className={styles.content}>
          <div className={styles.close}>
            <span>
              <IoMdClose onClick={() => setOpenModal(false)} />
            </span>
          </div>
          <div className={styles.info}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{comment}</p>
            <a href={links}>{links}</a>
            <div className={styles.usingStack}>
              <h2>USING STACK:</h2>
              {stack.map((item, index) => (
                <button key={index}>{item}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
