import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Cari user berdasarkan googleId
        let user = await prisma.user.findUnique({
          where: { googleId: profile.id },
        });

        // Kalau belum ada → buat user baru
        if (!user) {
          user = await prisma.user.create({
            data: {
              id: `user_${Date.now()}_${Math.random()
                .toString(36)
                .substr(2, 9)}`,
              name: profile.displayName,
              email: profile.emails[0].value.toLowerCase(),
              googleId: profile.id,
              isEmailVerified: profile.emails[0].verified || true,
              membership_type: "REGULAR",
            },
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
