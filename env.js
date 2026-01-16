import Z from "zod";
// const ageSchema = Z.number().min(18).max(100).int();
// const userAge = 19;
// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);
const portSchema = Z.coerce.number().min(1).max(224343).default(3888);
export const PORT = portSchema.parse(process.env.PORT)
console.log(PORT);