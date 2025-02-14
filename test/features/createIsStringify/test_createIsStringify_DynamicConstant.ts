import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicConstant = _test_isStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createIsStringify<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
