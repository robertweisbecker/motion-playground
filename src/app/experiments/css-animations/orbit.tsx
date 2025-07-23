import styles from './orbit.module.css';

export default function Orbit() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} />
      <div className={styles.orbitingCircle} />
    </div>
  );
}
