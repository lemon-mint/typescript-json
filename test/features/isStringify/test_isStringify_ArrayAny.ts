import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayAny = _test_isStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input) => TSON.isStringify(input),
    ArrayAny.SPOILERS,
);
