import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TagStep = _test_isClone(
    "TagStep",
    TagStep.generate,
    (input) => TSON.isClone(input),
    TagStep.SPOILERS,
);
