import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectLiteralProperty = _test_assertClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createAssertClone<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
