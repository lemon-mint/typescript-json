import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagAtomicUnion = _test_assertStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.assertStringify(input),
    TagAtomicUnion.SPOILERS,
);
