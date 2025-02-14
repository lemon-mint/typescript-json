import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagMatrix = _test_validate(
    "TagMatrix",
    TagMatrix.generate,
    (input) => TSON.validate(input),
    TagMatrix.SPOILERS,
);
