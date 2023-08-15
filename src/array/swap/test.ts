import test from "node:test";
import assert from "node:assert/strict";
import { swap } from "./index.js";

test("swap", () => {
  const arr = [1, 2, 3];
  swap(arr, 2, 1);
  assert.deepStrictEqual(arr, [1, 3, 2]);
});
