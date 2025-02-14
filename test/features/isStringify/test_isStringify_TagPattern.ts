import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagPattern = _test_isStringify(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.isStringify(input),
    TagPattern.SPOILERS,
);
