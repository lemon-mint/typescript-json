import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonNull = _test_is(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => TSON.is(input),
);
