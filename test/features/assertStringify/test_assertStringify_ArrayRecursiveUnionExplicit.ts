import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayRecursiveUnionExplicit =
    _test_assertStringify(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.assertStringify(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
