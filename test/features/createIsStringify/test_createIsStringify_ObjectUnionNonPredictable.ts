import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectUnionNonPredictable =
    _test_isStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        TSON.createIsStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
