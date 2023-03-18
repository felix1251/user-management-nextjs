import Head from 'next/head';
import { withAuth } from "@/hoc"

const Users = () => {
      return (
            <div className="text-red-800">
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


