import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_SetAlias = _test_isStringify(
    "SetAlias",
    SetAlias.generate,
    (input) => TSON.isStringify(input),
    SetAlias.SPOILERS,
);
