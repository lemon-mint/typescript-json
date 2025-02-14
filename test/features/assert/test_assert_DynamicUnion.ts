import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicUnion = _test_assert(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.assert(input),
    DynamicUnion.SPOILERS,
);
