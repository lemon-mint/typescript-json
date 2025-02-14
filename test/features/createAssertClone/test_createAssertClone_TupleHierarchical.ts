import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TupleHierarchical = _test_assertClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createAssertClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
