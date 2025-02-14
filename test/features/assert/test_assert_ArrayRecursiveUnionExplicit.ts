import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArrayRecursiveUnionExplicit = _test_assert(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.assert(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
