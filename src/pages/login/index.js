const Login = () => {
      return (
            <div className="flex justify-center items-center h-screen">
                  <form className="grid rounded-lg p-5 bg-white w-80">
                        <h2 className="text-center font-medium text-gray-800 text-lg mb-2">Login / Signup</h2>
                        <div className="space-y-3 mb-5">
                              <div className="space-y-1 grid">
                                    <label className="text-sm text-gray-800">Email</label>
                                    <input className="border text-sm rounded-md px-3 py-2" required placeholder="Email" type="text" />
                              </div>
                              <div className="space-y-1 grid">
                                    <label className="text-sm text-gray-800">Password</label>
                                    <input className="border text-sm rounded-md px-3 py-2" required placeholder="Password" type="password" />
                              </div>
                              <a className="text-xs cursor-pointer underline text-blue-500">forgot password?</a>
                        </div>
                        <button type="submit" className="h-fit py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md text-white">Login</button>
                  </form>
            </div>
      )
};

Login.meta = {
      withLayout: false,
      auth: false,
      module: "login",
      head: "Login"
};

export default Login;