import { faker } from "@faker-js/faker";

export function createCredential(id?: number,username?:string, password?:string, title?:string,url?:string){
  const user = {
    id: id || faker.number,
    username: username || faker.internet.userName(),
    password: password ||faker.internet.password(),
    title: title || faker.lorem.words(3),
    url: url || faker.internet.url(),
  }
  return user
}