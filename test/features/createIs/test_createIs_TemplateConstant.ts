import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TemplateConstant = _test_is(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createIs<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
