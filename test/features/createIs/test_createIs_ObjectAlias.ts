import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectAlias = _test_is(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createIs<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
