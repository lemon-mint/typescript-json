import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagType = _test_assertStringify(
    "TagType",
    TagType.generate,
    (input) => TSON.assertStringify(input),
    TagType.SPOILERS,
);
