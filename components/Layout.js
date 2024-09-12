import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Blago's</span>
              <span>Cooking</span>
            </h1>
            <h2>Blog</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2024 @ Blagovest Dimitrov</p>
      </footer>
    </div>
  );
}
