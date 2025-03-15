import User from "../../DB/models/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, password, phone, userName } = req.body;
    const user = await User.create({ email, password, phone, userName });

    return res.status(201).json({
      success: true,
      result: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

export const login = async (req, res) => {
  try {
    return res.status(201).json({
      success: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};
