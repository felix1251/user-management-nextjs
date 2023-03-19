import { Sidebar, Header } from "@/organisms";
import { Container } from "@/atoms";

function AuthLayout(children) {
      return (
            <div className="ml-72">
                  <Sidebar />
                  <Header />
                  <Container>
                        {children}
                  </Container>
            </div>
      )
}

export default AuthLayout;