const index = require("./src/routes/index");

const request = require("supertest");
const express = require("express");
const app = express();
const Users = require("./src/routes/user.js");
const mongoose = require("mongoose");

const userData = { name: "TekLoon", gender: "Male", loginUsing: "Facebook" };

app.use(express.urlencoded({ extended: false }));
app.use("/", index);
describe("Filter function", () => {
  test("index route works", (done) => {
    Users.create = jest.fn().mockResolvedValue({ nombre: "jorge" });

    request(app)
      .post("/createuser")
      .expect("Content-Type", /json/)
      .expect({ nombre: "jorge" })
      .expect(200, done);
  });
  test("index route works", (done) => {
    Users.create = jest.fn().mockRejectedValue({});

    request(app)
      .post("/createuser")
      .expect("Content-Type", /json/)
      .expect({})
      .expect(500, done);
  });

  test("index route works", (done) => {
    Users.find = jest.fn().mockReturnValue({ nombre: "jorge" });

    request(app)
      .get("/findusers")
      .expect("Content-Type", /json/)
      .expect({ nombre: "jorge" })
      .expect(200, done);
  });
  test("index route works", (done) => {
    Users.findById = jest.fn().mockReturnValue({ nombre: "jorge" });

    request(app)
      .get("/finduser/:id")
      .expect("Content-Type", /json/)
      .expect({ nombre: "jorge" })
      .expect(200, done);
  });

  test("index route works", (done) => {
    Users.findByIdAndUpdate = jest.fn().mockReturnValue({ nombre: "jorge" });

    request(app)
      .put("/:id")
      // .expect("Content-Type", /json/)
      // .expect({ nombre: "jorge" })
      .expect(200, done);
  });

  test("index route works", (done) => {
    Users.findOneAndDelete = jest.fn().mockReturnValue({});

    request(app)
      .delete("/:id")
      // .expect("Content-Type", /json/)
      .expect({})
      .expect(200, done);
  });
});
