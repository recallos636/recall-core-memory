import { g as getDefaultExportFromCjs } from "./react.mjs";
import { r as requireSrc, a as requireSrc$1, b as base } from "./base-x.mjs";
var bs58$3;
var hasRequiredBs58$1;
function requireBs58$1() {
  if (hasRequiredBs58$1) return bs58$3;
  hasRequiredBs58$1 = 1;
  var basex = requireSrc();
  var ALPHABET2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  bs58$3 = basex(ALPHABET2);
  return bs58$3;
}
var bs58Exports = requireBs58$1();
const bs58$2 = /* @__PURE__ */ getDefaultExportFromCjs(bs58Exports);
var bs58$1;
var hasRequiredBs58;
function requireBs58() {
  if (hasRequiredBs58) return bs58$1;
  hasRequiredBs58 = 1;
  var basex = requireSrc$1();
  var ALPHABET2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  bs58$1 = basex(ALPHABET2);
  return bs58$1;
}
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const bs58 = base(ALPHABET);
export {
  bs58 as a,
  bs58$2 as b,
  requireBs58 as r
};
