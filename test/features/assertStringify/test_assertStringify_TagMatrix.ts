import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagMatrix = _test_assertStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) => TSON.assertStringify(input),
    TagMatrix.SPOILERS,
);
