import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayMatrix = _test_is(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.is(input),
    ArrayMatrix.SPOILERS,
);
