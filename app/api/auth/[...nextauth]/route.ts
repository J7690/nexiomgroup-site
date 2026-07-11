import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Extend NextAuth types
declare module 'next-auth' {
  interface User {
    role: string
  }
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Remplacez par votre logique d'authentification réelle
        if (credentials?.email && credentials?.password) {
          // Simulation - en production, vérifiez avec votre base de données
          return {
            id: '1',
            email: credentials.email as string,
            name: 'Utilisateur Nexiom',
            role: 'student', // ou 'university', 'company'
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
