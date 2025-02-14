import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_SetAlias = _test_assertStringify(
    "SetAlias",
    SetAlias.generate,
    (input) => TSON.assertStringify(input),
    SetAlias.SPOILERS,
);
