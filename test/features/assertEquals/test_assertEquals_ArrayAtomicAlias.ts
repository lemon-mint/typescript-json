import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ArrayAtomicAlias = _test_assertEquals(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertEquals(input),
);
