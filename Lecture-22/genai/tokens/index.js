import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

let userQuery = "heyy buddy, how is code_biatgak"
let tokens = enc.encode(userQuery)
console.log(tokens);

let decodedToken = enc.decode(tokens)
console.log(decodedToken);
