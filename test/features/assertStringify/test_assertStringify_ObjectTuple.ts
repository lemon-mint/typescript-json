import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectTuple = _test_assertStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.assertStringify(input),
    ObjectTuple.SPOILERS,
);
