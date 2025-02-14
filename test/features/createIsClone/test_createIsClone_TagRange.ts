import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagRange = _test_isClone(
    "TagRange",
    TagRange.generate,
    TSON.createIsClone<TagRange>(),
    TagRange.SPOILERS,
);
