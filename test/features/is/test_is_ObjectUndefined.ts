import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUndefined = _test_is(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => TSON.is(input),
    ObjectUndefined.SPOILERS,
);
