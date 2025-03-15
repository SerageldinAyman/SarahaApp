import connectDB from "./DB/connection.js";
import authRouter from "./modules/auth/auth.controller.js";
import userRouter from "./modules/user/user.controller.js";

const bootstrap = async (app, express) => {
  await connectDB();
  app.use(express.json());

  app.use("/auth", authRouter);
  app.use("/user", userRouter);

  app.all("*", (req, res) => {
    res.status(404).json({ success: false, message: "API not found!" });
  });
};

export default bootstrap;
