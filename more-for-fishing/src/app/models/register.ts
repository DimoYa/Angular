export class RegisterModel {
    constructor(
        public username: string,
        public fullname: string,
        public email: string,
        public password: string,
        public confirmPassword: string,
        public phoneNumber?: string,
        public photo?: string,
    ) {}
}