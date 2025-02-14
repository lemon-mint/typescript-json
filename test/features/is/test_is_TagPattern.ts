import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is } from "../internal/_test_is";

export const test_is_TagPattern = _test_is(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.is(input),
    TagPattern.SPOILERS,
);
