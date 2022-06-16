import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_constant_number_union(): void {
    test(1);
    test(2);
    test(3);
    test(4);
    test(5);
}
function test(value: Literal) {
    const obj: IPointer<Literal> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    if (Primitive.equal_to(JSON.parse(json), obj) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant number type.",
        );
}
type Literal = 1 | 2 | 3 | 4 | 5;
