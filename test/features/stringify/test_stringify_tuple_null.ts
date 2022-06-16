import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_tuple_null(): void {
    const obj: IPointer<Tuple> = {
        value: ["hello", "world", null, 2022],
    };
    const json: string = TSON.stringify<IPointer<Tuple>>(obj);
    if (Primitive.equal_to(JSON.parse(json), obj) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the null tuple type.",
        );
}
type Tuple = [string, string, null, number];
