import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";
import User from "@/models/User";

export const userResolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) return null;
      try {
        return await User.findById(user.userId);
      } catch (err) {}
    },

    users: async (_, __, {}) => {
      return await User.find();
    },
    user: async (_, { id }, {}) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    register: async (_, { name, username, email, password }, {}) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();

      const token = generateToken({ userId: newUser._id, username });

      return {
        token,
        user: newUser,
      };
    },
    login: async (_, { username, password }, {}) => {
      console.log("XXXXXXXX", username, password, User);
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      const token = generateToken({ userId: user._id, username });
      return {
        token,
        user,
      };
    },
  },
};
