import TSON from "../../../../src";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUnionNonPredictable = _test_application(
    "ajv",
)(
    "ObjectUnionNonPredictable",
    TSON.application<[ObjectUnionNonPredictable], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_":
                    {
                        $id: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_",
                        type: "object",
                        properties: {
                            value: {
                                $ref: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_",
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                "ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_":
                    {
                        $id: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_",
                        type: "object",
                        properties: {
                            value: {
                                oneOf: [
                                    {
                                        $ref: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_number_gt_",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_string_gt_",
                                        "x-tson-required": true,
                                    },
                                ],
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                "ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_": {
                    $id: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_",
                    type: "object",
                    properties: {
                        value: {
                            $ref: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_boolean_gt_",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionNonPredictable.IPointer_lt_boolean_gt_": {
                    $id: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_boolean_gt_",
                    type: "object",
                    properties: {
                        value: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionNonPredictable.IWrapper_lt_number_gt_": {
                    $id: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_number_gt_",
                    type: "object",
                    properties: {
                        value: {
                            $ref: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_number_gt_",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionNonPredictable.IPointer_lt_number_gt_": {
                    $id: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_number_gt_",
                    type: "object",
                    properties: {
                        value: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionNonPredictable.IWrapper_lt_string_gt_": {
                    $id: "components#/schemas/ObjectUnionNonPredictable.IWrapper_lt_string_gt_",
                    type: "object",
                    properties: {
                        value: {
                            $ref: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_string_gt_",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectUnionNonPredictable.IPointer_lt_string_gt_": {
                    $id: "components#/schemas/ObjectUnionNonPredictable.IPointer_lt_string_gt_",
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
