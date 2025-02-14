import TSON from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectGenericAlias = _test_application("ajv")(
    "ObjectGenericAlias",
    TSON.application<[ObjectGenericAlias], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectGenericAlias.Alias",
            },
        ],
        components: {
            schemas: {
                "ObjectGenericAlias.Alias": {
                    $id: "components#/schemas/ObjectGenericAlias.Alias",
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
