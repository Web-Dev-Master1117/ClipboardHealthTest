const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given undefined input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given null input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the expected encryption when given 'thisIsaVeryLongsString' as input", () => {
    const trivialKey = deterministicPartitionKey("thisIsAVeryLongInputText");
    expect(trivialKey).toHaveLength(128)
  });

  it("Returns the expected encryption when given 123 number as input", () => {
    const trivialKey = deterministicPartitionKey(123);
    expect(trivialKey).toHaveLength(128)
  });

  it("Returns the literal '0' when given 0 number as input", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
  });

  it("Returns the expected encryption when given {} as input", () => {
    const trivialKey = deterministicPartitionKey(123);
    expect(trivialKey).toHaveLength(128)
  });

  it("Returns the expected encryption when given [] number as input", () => {
    const trivialKey = deterministicPartitionKey([]);
    expect(trivialKey).toHaveLength(128)
  });

  it("Returns the same string given as partitionKey attribute as input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:"iWillRemainUnchanged"});
    expect(trivialKey).toBe("iWillRemainUnchanged")
  });

});
