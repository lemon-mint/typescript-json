import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicSimple = _test_assert(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createAssert<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
