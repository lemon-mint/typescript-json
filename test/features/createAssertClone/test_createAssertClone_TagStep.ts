import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagStep = _test_assertClone(
    "TagStep",
    TagStep.generate,
    TSON.createAssertClone<TagStep>(),
    TagStep.SPOILERS,
);
