import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectGenericUnion = _test_validate(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createValidate<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
