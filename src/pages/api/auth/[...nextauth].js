import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const credentialDetails = {
          username: credentials.username,
          password: credentials.password,
        };

        const resp = await fetch(
          "https://eu-central-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-osxavnp/auth/providers/local-userpass/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentialDetails),
          }
        );

        const user = await resp.json();

        if (user.access_token) {
          return { email: credentials.username };
        } else {
          throw Error(user?.error_code);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};

export default NextAuth(authOptions);
