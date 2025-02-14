import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectUnionDouble = _test_assert(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.assert(input),
    ObjectUnionDouble.SPOILERS,
);
