import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicConstant = _test_assertStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createAssertStringify<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
