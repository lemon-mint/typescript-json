import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectGeneric = _test_assertStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.assertStringify(input),
    ObjectGeneric.SPOILERS,
);
