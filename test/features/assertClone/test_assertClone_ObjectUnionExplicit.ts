import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectUnionExplicit = _test_assertClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.assertClone(input),
    ObjectUnionExplicit.SPOILERS,
);
