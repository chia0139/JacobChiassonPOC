const request = require("supertest");
const app = require("../server/server");

describe("GET /foods/:id", () => {
    test("returns a food when the id exists", async () => {
        const response = await request(app).get("/foods/1");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            id: "1",
            name: "Bread"
        });
    });
});