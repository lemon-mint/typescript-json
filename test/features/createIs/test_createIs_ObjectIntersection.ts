import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectIntersection = _test_is(
    "ObjectIntersection",
    ObjectIntersection.generate,
    TSON.createIs<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
