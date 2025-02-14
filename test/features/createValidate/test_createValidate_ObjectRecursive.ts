import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectRecursive = _test_validate(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createValidate<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
