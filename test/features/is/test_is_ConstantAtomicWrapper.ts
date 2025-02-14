import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantAtomicWrapper = _test_is(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.is(input),
    ConstantAtomicWrapper.SPOILERS,
);
