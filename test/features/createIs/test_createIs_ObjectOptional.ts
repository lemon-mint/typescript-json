import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectOptional = _test_is(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createIs<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
