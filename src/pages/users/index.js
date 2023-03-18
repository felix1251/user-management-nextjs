import Head from 'next/head';

function Users() {
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
      module: "users",
      name: "Users",
}

export default Users;


