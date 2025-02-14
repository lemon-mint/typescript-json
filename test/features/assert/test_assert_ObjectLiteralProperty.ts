import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectLiteralProperty = _test_assert(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.assert(input),
    ObjectLiteralProperty.SPOILERS,
);
