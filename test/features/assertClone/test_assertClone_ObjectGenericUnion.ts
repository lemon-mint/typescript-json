import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectGenericUnion = _test_assertClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => TSON.assertClone(input),
    ObjectGenericUnion.SPOILERS,
);
