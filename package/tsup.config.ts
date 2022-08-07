import { Options } from "tsup";
export const tsup: Options = {
  target: "esnext",
  clean: true,
  dts: true,
  keepNames: true,
  minify: true,
  format: ["cjs"],
};
