import GoogleStrategy from "passport-google-oauth2";
import passport from "passport";
import prisma from "../prisma/prismaClient.js";

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/user/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const { email } = profile;
      const utilizator = await prisma.utilizator.findUnique({
        where: {
          email: email,
        },
      });
      if (!utilizator) {
        try {
          const { givenName, familyName } = profile.name;
          const modalitateLogare = profile.provider;
          const { picture } = profile;
          const data = new Date().toISOString();
          const tipUtilizator = "client";
          await prisma.utilizator.create({
            data: {
              email: email,
              nume: familyName,
              prenume: givenName,
              modalitatelogare: modalitateLogare,
              pozaprofil: picture,
              datacreare: data,
              tiputilizator: tipUtilizator,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
      return done(null, utilizator);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
