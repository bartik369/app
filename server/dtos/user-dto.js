export default class UserDto {
    dispalyname;
    email;
    id;
    isActivated;

    constructor(model) {
        this.dispalyname = model.dispalyname;
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
};

