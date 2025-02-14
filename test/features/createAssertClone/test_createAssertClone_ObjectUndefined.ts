import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUndefined = _test_assertClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createAssertClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
