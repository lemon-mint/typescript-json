import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectSimple = _test_equals(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => TSON.equals(input),
);
