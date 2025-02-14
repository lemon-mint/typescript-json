import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TupleHierarchical =
    _test_assertStringify(
        "TupleHierarchical",
        TupleHierarchical.generate,
        TSON.createAssertStringify<TupleHierarchical>(),
        TupleHierarchical.SPOILERS,
    );
