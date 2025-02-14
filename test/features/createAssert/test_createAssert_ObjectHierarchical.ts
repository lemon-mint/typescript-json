import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectHierarchical = _test_assert(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    TSON.createAssert<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
