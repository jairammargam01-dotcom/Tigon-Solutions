import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import { Admin } from "@/models/Admin";

export const authOptions: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },

  trustHost: true,

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectDB();

        const admin = await Admin.findOne({
          email: credentials.email,
        }).lean();

        if (!admin) {
          return null;
        }

        const validPassword = await bcrypt.compare(
          credentials.password as string,
          admin.password
        );

        if (!validPassword) {
          return null;
        }

        return {
          id: admin._id.toString(),
          name: admin.name,
          email: admin.email,
          role: admin.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role: string }).role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      return session;
    },
  },
};