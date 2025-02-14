import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectTuple = _test_assert(
    "ObjectTuple",
    ObjectTuple.generate,
    TSON.createAssert<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
