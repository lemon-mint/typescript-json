import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicConstant = _test_is(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createIs<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
