import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayAny = _test_assert(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createAssert<ArrayAny>(),
    ArrayAny.SPOILERS,
);
