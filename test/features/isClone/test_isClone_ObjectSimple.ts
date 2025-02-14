import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectSimple = _test_isClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => TSON.isClone(input),
    ObjectSimple.SPOILERS,
);
