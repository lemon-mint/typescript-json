import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonAtomicSimple = _test_equals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => TSON.equals(input),
);
