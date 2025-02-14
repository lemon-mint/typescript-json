import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ConstantAtomicWrapper = _test_assertStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assertStringify(input),
    ConstantAtomicWrapper.SPOILERS,
);
