import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantAtomicWrapper = _test_assert(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createAssert<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
