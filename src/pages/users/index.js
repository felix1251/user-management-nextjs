import Head from 'next/head';
import { withAuth } from "@/hoc"

const Users = () => {
      return (
            <div className="text-red-800">
                  <Head>
                        <title>User Page</title>
                        <meta name="description" content="User Page" />
                  </Head>
                  Hi im felix
            </div>
      )
}

Users.meta = {
      withLayout: true,
      auth: true,
      module: "users",
}

export default withAuth(Users);


