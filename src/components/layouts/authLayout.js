import Head from "next/head";

function AuthLayout(children) {
      return (
            <div>
                  <Head>
                        <title>User Page</title>
                        <meta name="description" content="User Page" />
                  </Head>
                  <header>header</header>
                  <nav>sidenav</nav>
                  {children}
            </div>
      )
}

export default AuthLayout;