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
const suportApp = express();

app.use(
  cors({
    origin: "http://localhost:5000", // Replace with your frontend domain
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
    cookie: { maxAge: 259200000 }, //259200000 3 zile
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", rootRouter);
app.use("/admin", suportApp);

app.get("/", (req, res) => {
  res.send(`hello <a href="/api/v1/user/google/auth">Authgoogle </a>`);
});

app.listen(port, () => {
  console.log(`App listens on port ${port}`);
});
