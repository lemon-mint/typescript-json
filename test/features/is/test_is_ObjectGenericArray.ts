import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectGenericArray = _test_is(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.is(input),
    ObjectGenericArray.SPOILERS,
);
