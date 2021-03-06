/**
 * Universal type for any chain's create asset transaction parameters. 
 */
export type CreateAssetParams = {
    from: string,
    to?: string,
    assetName?: string,
    assetURL?: string,
    note?: string,
    amount?: number,
    unitName?: string,
    decimals?: number,
    total?: number,
    assetMetadata?: string | Uint8Array,
    extras?: any
}


/**
 * Universal type for any chain's transfer asset transaction parameters. 
 */
export type CreateTransferAssetParams = {
    to: string,
    from: string,
    amount?: number | bigint,
    note?: Uint8Array | undefined,
    assetIndex: number,
    extras?: any
}
