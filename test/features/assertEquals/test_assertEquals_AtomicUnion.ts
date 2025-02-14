import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_AtomicUnion = _test_assertEquals(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.assertEquals(input),
);
