import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TemplateUnion = _test_is(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createIs<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
