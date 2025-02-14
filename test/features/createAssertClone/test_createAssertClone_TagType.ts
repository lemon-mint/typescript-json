import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagType = _test_assertClone(
    "TagType",
    TagType.generate,
    TSON.createAssertClone<TagType>(),
    TagType.SPOILERS,
);
