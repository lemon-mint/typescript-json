import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicComposite = _test_assertClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.assertClone(input),
    DynamicComposite.SPOILERS,
);
