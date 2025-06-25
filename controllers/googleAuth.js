import GoogleStrategy from "passport-google-oauth2";
import passport from "passport";
import prisma from "../prisma/prismaClient.js";

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/v1/user/google/callback`,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const { email } = profile;
      let utilizator = await prisma.utilizator.findUnique({
        where: {
          email: email,
        },
      });
      const { sessionID } = request;
      const { _expires } = request.session.cookie;
      _expires.setHours(_expires.getHours() + 3);
      if (!utilizator) {
        try {
          const { givenName, familyName } = profile.name;
          const modalitateLogare = profile.provider;
          const { picture } = profile;
          const data = new Date().toISOString();
          const tipUtilizator = "client";

          utilizator = await prisma.utilizator.create({
            data: {
              email: email,
              nume: familyName,
              prenume: givenName,
              modalitatelogare: modalitateLogare,
              pozaprofil: picture,
              datacreare: data,
              tiputilizator: tipUtilizator,
              IdSessiune: sessionID,
              timpAbsolutExpirareSesiune: _expires,
              tichetValidareDeschis: false,
            },
          });
        } catch (error) {
          console.log(error);
        }
        return done(null, utilizator);
      } else {
        try {
          await prisma.utilizator.update({
            where: {
              idutilizator: utilizator.idutilizator,
            },
            data: {
              IdSessiune: sessionID,
              timpAbsolutExpirareSesiune: _expires,
            },
          });
          utilizator.IdSessiune = sessionID;
          utilizator.timpAbsolutExpirareSesiune = _expires;
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
