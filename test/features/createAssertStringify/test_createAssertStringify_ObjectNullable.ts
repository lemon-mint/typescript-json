import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectNullable = _test_assertStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    TSON.createAssertStringify<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
