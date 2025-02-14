import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectUnionImplicit = _test_validate(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => TSON.validate(input),
    ObjectUnionImplicit.SPOILERS,
);
