import { getUUID } from "./get-id.plugin";

describe("Get Id", () => {
  it("Should print string UUID", () => {
    const id = getUUID();
    expect(typeof id).toBe("string");
    expect(id.length).toBe(36);
  });
});
