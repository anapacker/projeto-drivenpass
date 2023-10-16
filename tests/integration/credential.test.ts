import app from "../../src/app"
import httpStatus from "http-status"
import supertest from "supertest"
import { createCredential } from "./factory/credential-factory"

const server = supertest(app)

describe('POST /credential', () =>{
  it('should create a new credntial', async () => {
    const body = createCredential()
    const response = await server.post('/credential').send({body})

    expect(response.status).toBe(httpStatus.CREATED)

  })

  it('should obtain a credential',async () => {
    const response = await server.get('/credential')
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('should delete a credential',async () => {
    const body = createCredential()
    const response = await server.delete(`/credential/${body.id}`)
    expect(response.status).toBe(httpStatus.OK)
  })
})