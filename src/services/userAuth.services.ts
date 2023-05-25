import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors";

class UserAuthService {
  async userLogin(userEmail: string, password: string) {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new AppError("Email or password incorrect", 403);
    }

    if (user.password) {
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new AppError("Email or password incorrect", 403);
      }
    }

    const token = jwt.sign({}, process.env.SECRET_KEY!, {
      subject: user.id,
      expiresIn: "24h",
    });
    return { token: token };
  }
}

export const userAuthService = new UserAuthService();
