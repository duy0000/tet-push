import { simpleSHA256 } from "@/services/utils/stringUtils";

export const ROLES = {
  A0000: simpleSHA256("Admin"),
  G0101: "1",
  S0202: "0",
  CBNV0: simpleSHA256("CBNV"),
};
