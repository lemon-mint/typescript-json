import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TupleHierarchical = _test_assertClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.assertClone(input),
    TupleHierarchical.SPOILERS,
);
