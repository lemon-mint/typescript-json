import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicEnumeration = _test_assert(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assert(input),
    DynamicEnumeration.SPOILERS,
);
