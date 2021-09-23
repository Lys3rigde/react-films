function Footer() {
  return (
    <footer className="page-footer deep-purple lighten-1">
      <div className="footer-copyright deep-purple lighten-1">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/Lys3rigde/react-films">Repo</a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }