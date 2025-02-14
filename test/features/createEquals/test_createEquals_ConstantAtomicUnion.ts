import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ConstantAtomicUnion = _test_equals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    TSON.createEquals<ConstantAtomicUnion>(),
);
