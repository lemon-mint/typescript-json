import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagType = _test_validate(
    "TagType",
    TagType.generate,
    (input) => TSON.validate(input),
    TagType.SPOILERS,
);
