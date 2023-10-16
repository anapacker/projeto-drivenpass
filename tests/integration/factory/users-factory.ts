import { faker } from "@faker-js/faker";

export function createUser(email?:string, password?:string){
  const user = {
    email:email || faker.internet.email(),
    password:password || faker.internet.password()
  }
  return user
}
