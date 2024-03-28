import { ContractType } from "./enum"

export class Api {
    static api = `http://localhost:5050/api/`
    static contract = `${this.api}contract/`
    static executer = `${this.api}contract/executer/`
    static contractGet = `${this.api}contract/get/`
    static user = `${this.api}user/`
    static userMe = `${this.api}user/me`
    static send = `${this.api}mail/send`
    static auth = `${this.api}auth/`
}


export const contracts = [
    {
        name: "Хамтран ажиллах гэрээ",
        value: ContractType.partner
    },
    {
        name: "Ажил гүйцэтгэлийн гэрээ",
        value: ContractType.performance
    },
    {
        name: "Түрээсийн гэрээ",
        value: ContractType.lease
    },
]