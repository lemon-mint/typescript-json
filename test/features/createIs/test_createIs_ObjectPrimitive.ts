import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectPrimitive = _test_is(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createIs<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
