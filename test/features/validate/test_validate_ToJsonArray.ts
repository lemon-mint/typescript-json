import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ToJsonArray = _test_validate(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => TSON.validate(input),
);
