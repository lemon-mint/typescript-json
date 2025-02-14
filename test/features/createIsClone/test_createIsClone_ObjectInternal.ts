import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectInternal = _test_isClone(
    "ObjectInternal",
    ObjectInternal.generate,
    TSON.createIsClone<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
