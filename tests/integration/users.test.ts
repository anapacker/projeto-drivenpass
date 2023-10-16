import app from "app";
import httpStatus from "http-status";
import supertest from "supertest";
import { faker } from '@faker-js/faker'
import { createUser } from "./factory/users-factory";

const server = supertest(app)

describe('POST /signup', () => {
  it('should respond with status 400 when body is not given', async () => {
    const response = await server.post('/signup')

    expect(response.status).toBe(httpStatus.BAD_REQUEST)
  })

  it('should respond with status 400 when body is not valid', async () => {
    const invalidBody = {email: 'invalid-email', password:'short'}
    const response = await server.post('/signup').send(invalidBody)
    expect(response.status).toBe(httpStatus.BAD_REQUEST)
    
  })
})
describe('User API POST /signup | when body is valid', ()=> {
  it("should return 201 when insertind a user", async () => {
    const body = createUser()
    const {status} = await server.post("/signup").send(body)
    expect(status).toBe(httpStatus.CREATED)

  })

  it('should return a 409 conflict response when POST /users is called with an existing email', async () => {
    const email1 = createUser()
    await server.post('/signup').send(email1)
    const email2 = createUser(email1.email)
    const {status} = await server.post("/signup").send(email2)
    expect(status).toBe(httpStatus.CONFLICT)
  })
})

