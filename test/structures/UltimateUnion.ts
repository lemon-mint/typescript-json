import TSON from "../../src";
import { Spoiler } from "../internal/Spoiler";
import { ArrayRecursiveUnionExplicit } from "./ArrayRecursiveUnionExplicit";
import { ObjectUnionExplicit } from "./ObjectUnionExplicit";
import { ObjectUnionImplicit } from "./ObjectUnionImplicit";

export type UltimateUnion = TSON.IJsonApplication[];
export namespace UltimateUnion {
    export function generate(): TSON.IJsonApplication[] {
        const output = [
            TSON.application<[ObjectUnionExplicit], "ajv">(),
            TSON.application<[ObjectUnionImplicit], "ajv">(),
            TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        ];
        output[0].schemas[0] = {
            type: "number",
            nullable: false,
            enum: undefined,
        };
        return output;
    }

    export function trail(): TSON.IJsonApplication[] {
        const input: TSON.IJsonApplication[] = generate();
        SPOILERS[0](input);
        return input;
    }

    export const SPOILERS: Spoiler<TSON.IJsonApplication[]>[] = [
        (input) => {
            const [key, schema] = (() => {
                const entries = Object.entries(
                    input[input.length - 1]!.components.schemas,
                );
                return entries[entries.length - 1];
            })();
            schema.properties["sdafasdfsda"] = {
                oneOf: {} as any,
            };
            return [
                `$input[${
                    input.length - 1
                }].components.schemas["${key}"].properties.sdafasdfsda.oneOf`,
            ];
        },
    ];

    export const ADDABLE = false;
}
