import { ReactNode } from "react";
import { ChallengeParams } from "../../types/verify.types.js";

/**
 * Expected return trype for signAndVerifyChallenge()
 */
export type SignAndVerifyChallengeResponse = {
    success: boolean,
    message: string
}

/**
 * Defines schema for displaying a resource within the pop-up modal.
 */
export type PresetResource = {
    assetIdOrUriString: string;
    name: string;
    description?: string
    // image?: string;
    frozen: boolean;
    defaultSelected: boolean;
    isAsset: boolean;
}

/**
 * Defines metadata details about a supported chain.
 */
export type SupportedChainMetadata = {
    name?: string;
    logo?: string;
    chainIds?: string[];
    getAddressExplorerUrl?: (address: string) => string;
    getAssetExplorerUrl?: (asset: string) => string;
    getNameForAddress?: (address: string) => Promise<string | undefined>;
}

/**
 * Props to pass into the SignInModal component
 */
export type SignInModalProps = {
    /**
     * Is the modal being shown currently?
     */
    modalIsVisible: boolean;

    setModalIsVisible: (value: React.SetStateAction<boolean>) => void;

    /**
     * String name of current selected chain to use. There are a few chains that are preset as supported chains. If
     * selectedChainName does not match any of the supported chains, you must specify selectedChainInfo to provide metadata 
     * about the chain.
     */
    selectedChainName: string,
    /**
     * This should be defined if selectedChainName is not in the preset supported chains. See the SupportedChainMetadata type.
     */
    selectedChainInfo?: SupportedChainMetadata,

    /**
     * Address of the connected wallet. See getNameForAddress in selectedChainInfo for name resolutions, such as ENS.
     */
    address?: string;


    /**
     * Valid CSS style JSON. Will be applied as an inline style to the modal.
     */
    modalStyle?: any,

    /**
     * Defaults to false.
     */
    displayNotConnnectedWarning?: boolean,

    /**
     * EIP-4361 params that will make up the challenge. See ChallengeParams type.
     */
    challengeParams?: ChallengeParams,

    /**
    * This function will need to handle all the functionality to a) sign the challenge, and b) verify the challenge.
    * 
    * Note that the Blockin library doesn't handle any signing functionality. 
    * When a user clicks sign-in, it will call thisfunction which is passed in as a prop. Once challenge is signed, 
    * you should use the (challenge, signature) pair for verification. The verification should typically be done on 
    * a backend because it will need a ChainDriver set with an API key. It is not recommended to be done on the 
    * frontend.
    * 
    * During verification, this is where you perform the following: 1) call Blockin's verifyChallenge() within your backend,
    * 2) include any other additional verification checks about the challenge (like nonce verification if using a custom scheme 
    * or assert anything else about the challenge details that should be expected), 3) if verification passes, update whatever is
    * needed on frontend and backend to authenticate the user (your methods of choice). 
    * 
    * Expects a response consistent with the SignAndVerifyChallengeResponse type. 
    * 
    * Must also update the loggedIn prop, if verified.
    */
    signAndVerifyChallenge?: (
        challenge: string
    ) => Promise<SignAndVerifyChallengeResponse>,

    /**
     * Resources to be displayed to sign-in with. See PresetResource type.
     */
    displayedResources?: PresetResource[],

    /**
     * Defaults to false. If set to true, user can add custom asset IDs to the challenge. Is useful if you grant
     * privileges based on metadata and not a specific asset ID, for example.
     */
    canAddCustomAssets?: boolean,
    /**
     * Defaults to false. If set to true, user can add custom asset URIs to the challenge.
     */
    canAddCustomUris?: boolean,
    /**
     * This is for a helper message that is used if a user can add custom resources. This should explain
     * what assets or uris will be accepted, what permissions they will grant, etc. For example, here is where you may explain that 
     * 'if asset with metadata hash === X is added, then privilege X will be granted'
     */
    customAddHelpDisplay?: string | ReactNode
    // To do in the future:
    // canSetExpirationDate: boolean,
    // canSetNotBeforeDate: boolean,
}