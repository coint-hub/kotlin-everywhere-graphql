import { PropsWithChildren } from "react";

export default function LayoutView(
  props: PropsWithChildren<Record<never, any>>
) {
  return (
    <>
      <HeadNavView />
      {/* footer 가 컨텐츠를 가리는 경우가 발생한다. */}
      <div style={{ marginBottom: "4rem" }}>{props.children}</div>
      <FooterView />
    </>
  );
}

function HeadNavView() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="/profile">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/edit">
              <i className="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/settings">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Sign in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function FooterView() {
  return (
    <footer>
      <div className="container">
        <a href="/" className="logo-font">
          conduit
        </a>
        <span className="attribution">
          An interactive learning project from{" "}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
