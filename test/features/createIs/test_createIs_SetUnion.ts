import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_SetUnion = _test_is(
    "SetUnion",
    SetUnion.generate,
    TSON.createIs<SetUnion>(),
    SetUnion.SPOILERS,
);
