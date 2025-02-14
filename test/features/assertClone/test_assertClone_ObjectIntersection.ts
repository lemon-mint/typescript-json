import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectIntersection = _test_assertClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => TSON.assertClone(input),
    ObjectIntersection.SPOILERS,
);
