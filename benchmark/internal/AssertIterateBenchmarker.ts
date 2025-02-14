import benchmark from "benchmark";

export namespace AssertIterateBenchmarker {
    export interface IOutput<Components extends string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T) => never | T)
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            category: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
            spoilers?: Array<(input: T) => string[]>,
        ): (() => IOutput<Components>) => {
            // GENERATE DATA TO ASSERT
            const x: T = generator();
            const y: T = generator();
            const z: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components) {
                const assert = parameters[key];
                if (assert === null) continue;
                else
                    suite.add(key, () => {
                        assert(x);
                        assert(y);
                        assert(z);
                    });
            }

            const size: number = [x, y, z]
                .map((elem) => Buffer.from(JSON.stringify(elem)).length)
                .reduce((a, b) => a + b);
            const output: IOutput<Components> = {
                category,
                result: {} as any,
                unit: "kilobytes/sec",
            };
            for (const comp of components) output.result[comp] = null;

            return () => {
                suite.run();
                suite.map((elem: benchmark) => {
                    (output as any).result[elem.name!]! =
                        ((elem.count / elem.times.elapsed) * size) / 1_024;
                });

                for (const key of components) {
                    if (
                        output.result[key] === null ||
                        (true &&
                            is(generator(), parameters[key]!) &&
                            (spoilers || []).every((spoil) => {
                                const fake: T = generator();
                                spoil(fake);
                                return is(fake, parameters[key]!) === false;
                            })) ||
                        (key === "class-validator" &&
                            category.indexOf("implicit") === -1 &&
                            category.indexOf("ultimate") === -1)
                    )
                        continue;
                    output.result[key] = null;
                }
                return output;
            };
        };

    const is = <T>(data: T, assert: (input: T) => never | T): boolean => {
        try {
            assert(data);
            return true;
        } catch {
            return false;
        }
    };
}
