import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUnionNonPredictable =
    _test_assertStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input) => TSON.assertStringify(input),
        ObjectUnionNonPredictable.SPOILERS,
    );
