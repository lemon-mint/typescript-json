import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagLength = _test_isStringify(
    "TagLength",
    TagLength.generate,
    TSON.createIsStringify<TagLength>(),
    TagLength.SPOILERS,
);
