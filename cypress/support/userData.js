import { faker } from '@faker-js/faker';

export class UserData {
    constructor() {
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.postalCode = faker.location.zipCode();
    }
}