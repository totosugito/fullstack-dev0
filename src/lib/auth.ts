import { betterAuth } from "better-auth";
import { reactStartCookies } from "better-auth/react-start";
import { createPool } from "mysql2/promise";

export const auth = betterAuth({
    baseURL: process.env.VITE_BASE_URL,

    // https://www.better-auth.com/docs/integrations/tanstack#usage-tips
    plugins: [reactStartCookies()],

    // https://www.better-auth.com/docs/concepts/session-management#session-caching
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // 5 minutes
        },
    },

    database: createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    }),

    // https://www.better-auth.com/docs/authentication/email-password
    emailAndPassword: {
        enabled: true,
        autoSignIn: false //defaults to true
    },
    
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
});