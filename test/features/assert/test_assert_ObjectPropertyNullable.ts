import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectPropertyNullable = _test_assert(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => TSON.assert(input),
    ObjectPropertyNullable.SPOILERS,
);
