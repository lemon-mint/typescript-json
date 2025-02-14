import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectRecursive = _test_assertClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createAssertClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
