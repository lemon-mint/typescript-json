import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";

import { stringify_dynamic_properties } from "../internal/stringify_dynamic_properties";
import { stringify_regular_properties } from "../internal/stringify_regular_properties";
import { FunctionImporter } from "./FunctionImporeter";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace StringifyJoiner {
    export const object =
        (importer: FunctionImporter) =>
        (entries: IExpressionEntry[]): ts.Expression => {
            // CHECK AND SORT ENTRIES
            const regular: IExpressionEntry[] = entries.filter((entry) =>
                entry.key.isSoleLiteral(),
            );
            const dynamic: IExpressionEntry[] = entries.filter(
                (entry) => !entry.key.isSoleLiteral(),
            );
            if (regular.length === 0 && dynamic.length === 0)
                return ts.factory.createStringLiteral("{}");

            // PROPERTIES
            const expressions: ts.Expression[] = [
                ...stringify_regular_properties(regular, dynamic),
                ...(dynamic.length
                    ? [
                          stringify_dynamic_properties(
                              dynamic,
                              regular.map((r) => r.key.getSoleLiteral()!),
                          ),
                      ]
                    : []),
            ];

            // POP LAST COMMA, IF REQUIRED
            const filtered: ts.Expression[] =
                (regular.length &&
                    regular[regular.length - 1]!.meta.required &&
                    dynamic.length === 0) ||
                (regular.length === 0 && dynamic.length)
                    ? expressions
                    : [
                          ts.factory.createCallExpression(
                              importer.use("tail"),
                              undefined,
                              [TemplateFactory.generate(expressions)],
                          ),
                      ];

            // RETURNS WITH OBJECT BRACKET
            return TemplateFactory.generate([
                ts.factory.createStringLiteral(`{`),
                ...filtered,
                ts.factory.createStringLiteral(`}`),
            ]);
        };

    export function array(
        input: ts.Expression,
        arrow: ts.ArrowFunction,
    ): ts.Expression {
        return TemplateFactory.generate([
            ts.factory.createStringLiteral(`[`),
            ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(input, "map"),
                        undefined,
                        [arrow],
                    ),
                    ts.factory.createIdentifier("join"),
                ),
                undefined,
                [ts.factory.createStringLiteral(`,`)],
            ),
            ts.factory.createStringLiteral(`]`),
        ]);
    }

    export function tuple(children: ts.Expression[]): ts.Expression {
        if (children.length === 0) return ts.factory.createStringLiteral("[]");
        if (children.every((child) => ts.isStringLiteral(child)))
            return ts.factory.createStringLiteral(
                "[" +
                    children
                        .map((child) => (child as ts.StringLiteral).text)
                        .join(",") +
                    "]",
            );

        const elements: ts.Expression[] = [ts.factory.createStringLiteral(`[`)];
        children.forEach((child, i) => {
            elements.push(child);
            if (i !== children.length - 1)
                elements.push(ts.factory.createStringLiteral(`,`));
        });
        elements.push(ts.factory.createStringLiteral(`]`));
        return TemplateFactory.generate(elements);
    }
}
