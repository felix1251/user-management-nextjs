import { Sidebar } from "@/organisms";
import { Container } from "@/atoms";

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
                        <Container>
                              {children}
                        </Container>
                  </div>
            </div>
      )
}

export default AuthLayout;