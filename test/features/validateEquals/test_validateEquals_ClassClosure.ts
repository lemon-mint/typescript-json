import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ClassClosure = _test_validateEquals(
    "ClassClosure",
    ClassClosure.generate,
    (input) => TSON.validateEquals(input),
);
