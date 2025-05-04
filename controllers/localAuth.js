import LocalStrategy from "passport-local";
import passport from "passport";
import prisma from "../prisma/prismaClient.js";
import bcrypt from "bcrypt";

const verifyCallback = async (username, password, done) => {
  try {
    const user = await prisma.utilizator.findUnique({
      where: {
        email: username,
      },
    });
    if (!user) {
      return done(null, false);
    } else {
      if (bcrypt.compareSync(password, user.modalitatelogare)) {
        return done(null, user);
      } else {
        return done(null, { message: "User sau parola gresita" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const strategy = new LocalStrategy.Strategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
