import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TemplateConstant = _test_isClone(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createIsClone<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
