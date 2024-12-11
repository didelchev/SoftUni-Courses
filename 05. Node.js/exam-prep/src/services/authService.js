import User from "../models/User.js";

const authService = {
  async register(username, email, password) {
    const user = await User.findOne().or([{ email }, { username }]);
    if (password !== rePassword) {
      throw new Error("Password missmatch ! ");
    }

    if (user) {
      throw new Error("User already exists !");
    }
    return User.create({ username, email, password });
  },

  async login(email, password) {
    const user = await User.find({ email });

    if (!user) {
      throw new Error("Invalid user");
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid password  ");
    }

    const payload = {
      _id: user._id,
      email,
      username: user.username,
    };
  },
};

export default authService;
