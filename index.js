import express from "express";
import { rootRouter } from "./routes/root.js";
import dotenv from "dotenv";
import cors from "cors";
import "./controllers/googleAuth.js";
import passport from "passport";
import session from "express-session";
import "./controllers/localAuth.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend domain
    credentials: true,
  })
);

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 259200000,
      domain: ".suporteasy.eu",
    }, //259200000 milisecunde = 3 zile
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
  res.send(`hello <a href="/api/v1/user/google/auth">Authgoogle </a>`);
});

app.listen(port, () => {
  console.log(`App listens on port ${port}`);
});
