import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectRecursive = _test_assert(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.assert(input),
    ObjectRecursive.SPOILERS,
);
