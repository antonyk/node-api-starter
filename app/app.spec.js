const supertest = require('supertest')
const server = require('../index')


// auth
describe("app", () => {

  const uname = `u${Math.random()}`
  const pass = "I am secret"

  it("can run tests", () => {
    expect(true).toBeTruthy()
  })

  describe("/auth/register", () => {
    // it("returns error when invalid data provided", () => {
    //   return supertest(server)
    //     .post("/api/auth/register")
    //     .send({username: uname, password: pass})
    //     .then(response => {
    //       expect(response.status).toBe(501)
    //     })
    // })

    it.todo("returns success when good data provided")

    it.todo("returns error when trying a duplicate username")

  })

  describe("/auth/login", () => {
    it.todo("")
  })







})

// app