import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagLength = _test_is(
    "TagLength",
    TagLength.generate,
    TSON.createIs<TagLength>(),
    TagLength.SPOILERS,
);
