import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TupleHierarchical = _test_isStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createIsStringify<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
