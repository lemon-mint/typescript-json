import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ClassMethod = _test_clone(
    "ClassMethod",
    ClassMethod.generate,
    TSON.createClone<ClassMethod>(),
);
