import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_AtomicSimple = _test_assert(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => TSON.assert(input),
    AtomicSimple.SPOILERS,
);
