import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagFormat = _test_isStringify(
    "TagFormat",
    TagFormat.generate,
    TSON.createIsStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
