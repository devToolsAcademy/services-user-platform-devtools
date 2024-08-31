import { httpClient } from "./http-client.plugin";

describe("Http Client", () => {
  it("httpClienPlugin should have get, post, put and delete methods", async () => {
    const data = httpClient;
    expect(data).toHaveProperty("get");
    expect(data).toHaveProperty("post");
    expect(data).toHaveProperty("put");
    expect(data).toHaveProperty("delete");
    expect(typeof httpClient.get).toBe("function");
    expect(typeof httpClient.post).toBe("function");
    expect(typeof httpClient.put).toBe("function");
    expect(typeof httpClient.delete).toBe("function");
  });

  it("httpClienPlugin.get should return string", async () => {
    const data = await httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });
});
