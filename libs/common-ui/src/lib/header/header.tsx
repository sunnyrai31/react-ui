import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
}

export function Header(props: HeaderProps) {


  return (
    <div className={styles['container']}>
      <nav className="navbar navbar-dark bg-light">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Longer nav link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;


