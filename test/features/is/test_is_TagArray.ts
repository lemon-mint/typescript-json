import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_is } from "../internal/_test_is";

export const test_is_TagArray = _test_is(
    "TagArray",
    TagArray.generate,
    (input) => TSON.is(input),
    TagArray.SPOILERS,
);
