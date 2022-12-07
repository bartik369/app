export default class UserDto {
    dispalyname;
    email;
    id;
    roles;
    isActivated;

    constructor(model) {
        this.dispalyname = model.dispalyname;
        this.email = model.email;
        this.id = model._id;
        this.roles = model.roles;
        this.isActivated = model.isActivated;
    }
};

