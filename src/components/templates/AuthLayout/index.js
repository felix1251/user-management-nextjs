import { Sidebar } from "@/organisms";

function AuthLayout(children) {
      return (
            <div className="ml-72">
                  <Sidebar />
                  <div className="w-full">
                        <header className="bg-white border-b w-full shadow-sm">
                              <div className="flex justify-end items-center max-w-7xl mx-auto h-14 px-2">
                                    <h2 className="font-medium text-md cursor-pointer">Logout</h2>
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