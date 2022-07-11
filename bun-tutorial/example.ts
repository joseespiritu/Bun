// export default {
//   port: 3000,
//   fetch(request) {
//     return new Response('Welcome to Bun!');
//   },
// };
import path from "node:path";

const a: string = 'hello world';
console.log(a);

console.log(Bun.env.HELLO);
console.log(Bun.env.PORT);

console.log(path.join('hello', 'world'));
