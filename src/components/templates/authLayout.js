function AuthLayout(children) {
      return (
            <div className="ml-72">
                  <nav className="fixed bg-white left-0 top-0 w-72 border-r h-screen p-3 z-50 shadow-sm">sidenav</nav>
                  <div className="w-full">
                        <header className="bg-white border-b w-full shadow-sm">
                              <div className="flex items-center max-w-7xl mx-auto h-14 px-2">
                                    <h2 className="font-medium text-lg">Logo</h2>
                              </div>
                        </header>
                        <div className="max-w-7xl mx-auto p-3">
                              {children}
                        </div>
                  </div>
            </div>
      )
}

export default AuthLayout;