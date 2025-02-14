import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectGenericAlias = _test_isStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createIsStringify<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
