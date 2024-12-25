"use strict";
/*
Copyright 2018 - 2023 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokensURL = exports.ALPH = exports.testnet = exports.mainnet = void 0;
const mainnet_json_1 = __importDefault(require("../tokens/mainnet.json"));
const testnet_json_1 = __importDefault(require("../tokens/testnet.json"));
__exportStar(require("./types"), exports);
exports.mainnet = mainnet_json_1.default;
exports.testnet = testnet_json_1.default;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
exports.ALPH = exports.mainnet.tokens.find((token) => token.symbol === 'ALPH');
function getTokensURL(networkId) {
    return `https://raw.githubusercontent.com/alephium/token-list/master/tokens/${networkId}.json`;
}
exports.getTokensURL = getTokensURL;
