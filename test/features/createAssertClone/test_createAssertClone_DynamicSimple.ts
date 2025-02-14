import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicSimple = _test_assertClone(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createAssertClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
