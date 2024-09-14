import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <div>
            {" "}
            {/* Wrap the content in a single div */}
            <h1>
              <span>Blago's</span>
              <span>Cooking</span>
            </h1>
            <h2>Blog</h2>
          </div>
        </Link>
      </header>

      <main className="page-content">{children}</main>

      <footer>
        <p>Copyright 2024 @ Blagovest Dimitrov</p>
      </footer>
    </div>
  );
}
