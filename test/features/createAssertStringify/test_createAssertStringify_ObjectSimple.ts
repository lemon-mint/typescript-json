import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectSimple = _test_assertStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createAssertStringify<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
