import { useEffect } from "react";
import Router from "next/router";

export const withAuth = (Component) => {
      const { meta } = Component;

      const Auth = (props) => {
            useEffect(() => {
                  if (!meta?.auth) Router.push("/");
            });

            return <Component {...props} />;
      };

      Auth.meta = { ...meta }
      return Auth;
};