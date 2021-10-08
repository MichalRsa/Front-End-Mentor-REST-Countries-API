import styles from '../components/searchingTools/searchingTools.module.scss';

const regionList = (id) => {
  const li = document.querySelectorAll(`.${styles.link}`);
  const showEl = document.querySelector(`#${id}`);
  li.forEach((i) => {
    i.classList.add(`${styles.hide}`);
  });
  showEl.classList.add(`${styles.show}`);
  showEl.classList.toggle(`${styles.hide}`);
};

export default regionList;
