import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectUnionNonPredictable = _test_stringify(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.stringify(input),
);
