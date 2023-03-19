import { Button } from "@/atoms";
import { TextField } from "@/atoms"

const Login = () => {
      return (
            <div className="grid place-items-center h-screen">
                  <form className="grid rounded-lg p-5 bg-white w-80 border">
                        <h2 className="text-center font-medium text-gray-800 text-lg mb-2">Login / Signup</h2>
                        <div className="space-y-3 mb-5">
                              <div className="space-y-1 grid">
                                    <label className="text-sm text-gray-800">Email</label>
                                    <TextField required placeholder="Email" type="text" />
                              </div>
                              <div className="space-y-1 grid">
                                    <label className="text-sm text-gray-800">Password</label>
                                    <TextField required placeholder="Password" type="password" />
                              </div>
                              <a className="text-xs cursor-pointer underline text-blue-500">Forgot password?</a>
                        </div>
                        <Button type="submit">Login</Button>
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