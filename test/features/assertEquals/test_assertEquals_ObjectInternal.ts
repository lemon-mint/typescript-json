import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectInternal = _test_assertEquals(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.assertEquals(input),
);
