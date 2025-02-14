import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicComposite = _test_isClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.isClone(input),
    DynamicComposite.SPOILERS,
);
