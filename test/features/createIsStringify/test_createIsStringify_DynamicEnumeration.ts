import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicEnumeration = _test_isStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    TSON.createIsStringify<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
