export interface TokenList {
    networkId: number;
    tokens: TokenInfo[];
}
export interface TokenInfo {
    id: string;
    name: string;
    symbol: string;
    decimals: number;
    description: string;
    logoURI: string;
    originChain?: string;
    unchainedLogoURI?: string;
}
export type NetworkId = 'mainnet' | 'testnet';
