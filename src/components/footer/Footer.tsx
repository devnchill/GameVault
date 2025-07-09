import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/devnchill"
          target="_blank"
          rel="noopener noreferrer"
        >
          viena
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
