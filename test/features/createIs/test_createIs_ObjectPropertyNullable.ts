import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectPropertyNullable = _test_is(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    TSON.createIs<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
