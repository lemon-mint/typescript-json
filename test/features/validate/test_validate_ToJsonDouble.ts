import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ToJsonDouble = _test_validate(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => TSON.validate(input),
);
