import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagMatrix = _test_isStringify(
    "TagMatrix",
    TagMatrix.generate,
    TSON.createIsStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
