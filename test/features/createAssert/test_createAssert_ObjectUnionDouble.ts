import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectUnionDouble = _test_assert(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    TSON.createAssert<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
