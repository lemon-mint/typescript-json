import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ConstantAtomicWrapper = _test_validate(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createValidate<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
