export class UpdateModel {
    constructor(
      public username: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public phoneNumber?: string,
        public photo?: string,
    ) { }
  }