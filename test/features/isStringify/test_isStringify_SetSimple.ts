import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_SetSimple = _test_isStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => TSON.isStringify(input),
    SetSimple.SPOILERS,
);
