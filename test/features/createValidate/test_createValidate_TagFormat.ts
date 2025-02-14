import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagFormat = _test_validate(
    "TagFormat",
    TagFormat.generate,
    TSON.createValidate<TagFormat>(),
    TagFormat.SPOILERS,
);
