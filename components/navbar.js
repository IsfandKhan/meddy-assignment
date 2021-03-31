import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="/">
        My App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span className="nav-link">
              <Link href="/">
                SSR Posts
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link href="/static">
                SSG Posts
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link href="/create">
                Create Post
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
