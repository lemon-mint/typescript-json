import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicUnion = _test_is(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createIs<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
