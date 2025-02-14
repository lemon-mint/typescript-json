import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagAtomicUnion = _test_validate(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.validate(input),
    TagAtomicUnion.SPOILERS,
);
