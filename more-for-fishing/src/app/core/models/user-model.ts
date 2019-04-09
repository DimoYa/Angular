interface UserModel {
    username: string,
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber?: string,
    photo?: string,
}
export default UserModel;