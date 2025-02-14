import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectUnionImplicit =
    _test_assertStringify(
        "ObjectUnionImplicit",
        ObjectUnionImplicit.generate,
        TSON.createAssertStringify<ObjectUnionImplicit>(),
        ObjectUnionImplicit.SPOILERS,
    );
