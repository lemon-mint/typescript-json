import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagStep = _test_isStringify(
    "TagStep",
    TagStep.generate,
    TSON.createIsStringify<TagStep>(),
    TagStep.SPOILERS,
);
