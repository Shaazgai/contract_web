import { UserStatus, UserType } from "@/utils/enum";

export interface UserModel {
  username: string;

  lastname: string;
  firstname: string;
  registerNumber: string;

  profileImg?: string;

  phone: string;

  userType: UserType;

  email: string;

  password: string;

  verified: boolean;

  files: string[];

  status: UserStatus;
}
