import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors";

class UserLoginService {
  async userLogin(email: string, password: string): Promise<object> {
    const user = await User.findOne({ email: email });

    if (!user || !(await compare(password, user.password))) {
      throw new AppError("Email or password incorrect", 403);
    }

    const token = jwt.sign({}, process.env.SECRET_KEY!, {
      subject: user.id,
      expiresIn: "24h",
    });

    return { token: token };
  }
}

export const userAuthService = new UserLoginService();
