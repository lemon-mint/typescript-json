import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicSimple = _test_validate(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createValidate<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
