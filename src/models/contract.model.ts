import { ContractStatus, PartyType } from "@/utils/enum";
import { UserModel } from "./user.schema";
export interface PartyModel {

    user?: string | UserModel;
 
    type: PartyType;

    signature?: string;

    registerNumber: string

    username: string

    phone: string

    email: string

    verified: boolean

  }
export interface ContractModel {
  contractName: string;

  file: string;

  verified: boolean;

  files: PartyModel[];

  status: ContractStatus;
}
