const k: number = 45;

type someType = number | string | boolean;
const m: someType = true;

type someFunctionType = (firstArg?: string) => string | undefined;
const someFunction: someFunctionType = (firstArg) => {
  console.log({ firstArg });

  return undefined;
};

someFunction("45");
someFunction();

let optional: number | undefined = undefined;
