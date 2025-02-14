import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_AtomicUnion = _test_validateEquals(
    "AtomicUnion",
    AtomicUnion.generate,
    TSON.createValidateEquals<AtomicUnion>(),
);
