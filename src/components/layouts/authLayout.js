function AuthLayout(children) {
      return (
            <div>
                  <header>header</header>
                  <nav>sidenav</nav>
                  {children}
            </div>
      )
}

export default AuthLayout;