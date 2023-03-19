import { withAuth } from "@/hoc"

const Users = () => {
      return (
            <div className="bg-white p-3 shadow-sm rounded-md">
                  Hi im felix
            </div>
      )
}

Users.meta = {
      withLayout: true,
      auth: true,
      module: "users",
      head: "Users",
}

export default withAuth(Users);


