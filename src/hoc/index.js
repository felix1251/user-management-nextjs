import Router from "next/router";

export const withAuth = (Component) => {
      const { meta } = Component;

      const Auth = (props) => {
            if (!meta?.auth) {
                  Router.push("/login")
                  return null;
            };
            return <Component {...props} />;
      };

      Auth.meta = { ...meta }
      return Auth;
};