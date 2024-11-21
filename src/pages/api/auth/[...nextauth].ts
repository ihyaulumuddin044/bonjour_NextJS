import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsPovider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsPovider({
      type: "credentials",
      credentials: {
        fullName: { label: "fullName", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password, fullName } = credentials as {
          email: string;
          password: string;
          fullName: string;
        };
        const user: any = {
          id: 1,
          email: email,
          password: password,
          fullName: fullName,
        };
        if (user) {
          return user;
          console.log(user);
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider == "credentials") {
        token.email = user.email;
        token.fullName = user.fullName;
      }
      console.log({ token, account, user });
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullName" in token) {
        session.user.fullName = token.fullName;
      }
      console.log(session, token);
      return session;
    },
  },
};

export default NextAuth(authOptions);
