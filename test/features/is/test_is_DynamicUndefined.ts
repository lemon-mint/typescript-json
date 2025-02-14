import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicUndefined = _test_is(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.is(input),
    DynamicUndefined.SPOILERS,
);
