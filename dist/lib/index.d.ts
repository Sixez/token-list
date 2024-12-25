import { NetworkId, TokenInfo, TokenList } from './types';
export * from './types';
export declare const mainnet: TokenList;
export declare const testnet: TokenList;
export declare const ALPH: TokenInfo;
export declare function getTokensURL(networkId: NetworkId): string;
