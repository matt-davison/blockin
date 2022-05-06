import { IChainDriver } from './@types/ChainDriver';
import { ChallengeParams, EIP4361Challenge } from './@types/verify';
export declare function initializeVerify(driver: IChainDriver): void;
export declare function lookupTransactionById(txnID: string): Promise<any>;
export declare function getAssetDetails(txnId: string): Promise<any>;
/**
 * Creates a challenge to be signed by Wallet Provider to prove identity
 * @param domain
 * @param statement
 * @param address
 * @param uri
 * @param expirationDate
 * @param notBefore
 * @param resources
 * @returns
 */
export declare function createChallenge(challengeParams: ChallengeParams): Promise<string>;
/**
 * Verifies that the challenge was signed by the account belonging to the asset
 * @param originalChallenge
 * @param signedChallenge
 * @returns
 */
export declare function verifyChallenge(originalChallenge: Uint8Array, signedChallenge: Uint8Array): Promise<string>;
/**
 * This function usually is not needed. If it is not needed, just return the input as is.
 *
 * For Algorand and WalletConnect, you can't just explicitly call signBytes() so we had to include it as
 * a note within a txn object. This function extracts the challenge note from the txn object stringified JSON
 */
export declare function getChallengeStringFromBytes(txnBytes: Uint8Array): Promise<string>;
export declare function createMessageFromString(challenge: string): EIP4361Challenge;
export declare function getAllAssets(address: string): Promise<any>;
