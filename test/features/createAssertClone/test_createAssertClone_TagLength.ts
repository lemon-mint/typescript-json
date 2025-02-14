import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagLength = _test_assertClone(
    "TagLength",
    TagLength.generate,
    TSON.createAssertClone<TagLength>(),
    TagLength.SPOILERS,
);
