import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_SetUnion = _test_isStringify(
    "SetUnion",
    SetUnion.generate,
    (input) => TSON.isStringify(input),
    SetUnion.SPOILERS,
);
