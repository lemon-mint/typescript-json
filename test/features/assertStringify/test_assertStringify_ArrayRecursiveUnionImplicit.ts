import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayRecursiveUnionImplicit =
    _test_assertStringify(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.assertStringify(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
