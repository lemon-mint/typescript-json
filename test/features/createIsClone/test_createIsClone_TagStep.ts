import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagStep = _test_isClone(
    "TagStep",
    TagStep.generate,
    TSON.createIsClone<TagStep>(),
    TagStep.SPOILERS,
);
