// Auto generated code based on B.net Service Interfaces.  Do not edit manually.

import { ApiIntermediary } from "./ApiIntermediary";
import { Globals } from "./BungieEnum";

export namespace User {
  export interface GeneralUser {
    membershipId: string;
    uniqueName: string;
    normalizedName: string;
    displayName: string;
    profilePicture: number;
    profileTheme: number;
    userTitle: number;
    successMessageFlags: string;
    isDeleted: boolean;
    about: string;
    firstAccess?: string;
    lastUpdate?: string;
    legacyPortalUID?: string;
    context: User.UserToUserContext;
    psnDisplayName: string;
    xboxDisplayName: string;

    fbDisplayName: string;

    showActivity?: boolean;

    locale: string;

    localeInheritDefault: boolean;

    lastBanReportId?: string;

    showGroupMessaging: boolean;

    profilePicturePath: string;

    profilePictureWidePath: string;

    profileThemeName: string;

    userTitleDisplay: string;

    statusText: string;

    statusDate: string;

    profileBanExpire?: string;

    blizzardDisplayName: string;
  }

  export interface UserToUserContext {
    isFollowing: boolean;

    ignoreStatus: Ignores.IgnoreResponse;

    globalIgnoreEndDate?: string;
  }

  /**
	This contract supplies basic information commonly used to display a minimal amount of information about
	a user.  Take care to not add more properties here unless the property applies in all (or at least the majority) of the
	situations where UserInfoCard is used.  Avoid adding game specific or platform specific details here. In cases
	where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
	*/
  export interface UserInfoCard {
    /**
		A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
		*/
    supplementalDisplayName: string;

    /**f
		URL the Icon if available.
		*/
    iconPath: string;
    membershipType: Globals.BungieMembershipType;
    membershipId: string;
    displayName: string;
  }

  export interface UserAuthContextResponse {
    MembershipId: string;

    DeviceType: Globals.ClientDeviceType;

    AuthProvider: Globals.BungieCredentialType;

    Scope: Globals.ApplicationScopes;

    IsOAuth: boolean;
  }

  export interface DestinyEmblemSourceRequest {
    MembershipType: Globals.BungieMembershipType;

    DestinyMembershipId: string;

    DestinyCharacterId: string;
  }

  export interface AckState {
    /**
		Indicates the related item has not been acknowledged.
		*/
    needsAck: boolean;

    /**
		Identifier to use when acknowledging the related item.
		[category]:[entityId]:[targetId]
		*/
    ackId: string;
  }

  export interface MobileAppPairing {
    ApnLocale: string;

    ApnToken: number[];

    AppInstallationId: string;

    AppType: string;

    C2dmRegistrationId: string;

    DeviceName: string;

    DeviceType: Globals.ClientDeviceType;

    MembershipId: string;

    MembershipType: Globals.BungieMembershipType;

    PairId: string;

    PairingDate: string;
  }

  export interface UserMembershipData {
    /**
		this allows you to see destiny memberships that are visible and linked to this account
		(regardless of whether or not they have characters on the world server)
		*/
    destinyMemberships: User.UserInfoCard[];

    bungieNetUser: User.GeneralUser;
  }

  /**
	Very basic info about a user as returned by the Account server.
	*/
  export interface UserMembership {
    /**
		Type of the membership.
		*/
    membershipType: Globals.BungieMembershipType;

    /**
		Membership ID as they user is known in the Accounts service
		*/
    membershipId: string;

    /**
		Display Name the player has chosen for themselves. The display name is optional when
		the data type is used as input to a platform API.
		*/
    displayName: string;
  }

  export interface UserBanState {
    membershipId: string;

    bnetProfileBanExpireDate?: string;

    isProfileBanned: boolean;

    isForumBanned: boolean;

    bnetBanExpireDate?: string;

    psnBanExpireDate?: string;

    xblBanExpireDate?: string;

    demonBanExpireDate?: string;

    blizzardBanExpireDate?: string;

    isMsgBanned: boolean;

    bnetMessageBanExpireDate?: string;

    psnMessageBanExpireDate?: string;

    xblMessageBanExpireDate?: string;

    demonMessageBanExpireDate?: string;

    blizzardMessageBanExpireDate?: string;

    isGroupWallBanned: boolean;

    bnetGroupWallBanExpireDate?: string;

    psnGroupWallBanExpireDate?: string;

    xblGroupWallBanExpireDate?: string;

    demonGroupWallBanExpireDate?: string;

    blizzardGroupWallBanExpireDate?: string;

    isFireteamBanned: boolean;

    psnFireteamBanExpireDate?: string;

    xboxFireteamBanExpireDate?: string;

    blizzardFireteamBanExpireDate?: string;
  }
}

export namespace Ignores {
  export interface IgnoreResponse {
    isIgnored: boolean;

    ignoreFlags: Globals.IgnoreStatus;
  }

  export interface ReportContextResponse {
    reportId: string;

    contextItemId: string;

    contextItemType: Globals.IgnoredItemType;

    subject: string;

    body: string;

    urlLinkOrImage: string;

    tags: string[];

    author: User.GeneralUser;
  }
}

export namespace Applications {
  export interface ApplicationCredentials {
    /**
		This token is use on the Authorization header in requests to the Bungie.net APIs.
		*/
    accessToken: Applications.Token;

    /**
		This token can be traded for a fresh pair of access and refresh tokens.
		*/
    refreshToken: Applications.Token;

    /**
		Scope granted to the application.
		*/
    scope: Globals.ApplicationScopes;

    /**
		Bungie.net Membership ID of the authenticated user.
		*/
    membershipId: string;
  }

  export interface Token {
    /**
		Token value
		*/
    value: string;

    /**
		Number of seconds before the provide token can be used.
		*/
    readyin: number;

    /**
		Number of seconds before token expires.
		*/
    expires: number;
  }

  export interface RequestWithCode {
    /**
		This authorization code the application was given in the redirect URL.
		*/
    code: string;
  }

  export interface RequestWithRefreshToken {
    /**
		This refresh token the application was given in a previous authorization request.
		*/
    refreshToken: string;
  }

  export interface CreateApplicationAction {
    /**
		Name of the application
		*/
    name: string;

    /**
		URL used to pass the user's authorization code to the application
		*/
    redirectUrl: string;

    /**
		Link to website for the application where a user can learn more about the app.
		*/
    link: string;

    /**
		Permissions the application needs to work
		*/
    scope: string;

    /**
		Value of the Origin header sent in requests generated by this application.
		*/
    origin: string;

    /**
		Indicates the user agreed with the current EULA.
		*/
    agreedToCurrentEula: boolean;

    applicationType: Globals.OAuthApplicationType;
  }

  export interface Application {
    applicationType: Globals.OAuthApplicationType;

    /**
		Unique ID assigned to the application
		*/
    applicationId: number;

    /**
		Name of the application
		*/
    name: string;

    /**
		URL used to pass the user's authorization code to the application
		*/
    redirectUrl: string;

    /**
		Link to website for the application where a user can learn more about the app.
		*/
    link: string;

    /**
		Permissions the application needs to work
		*/
    scope: string;

    /**
		Value of the Origin header sent in requests generated by this application.
		*/
    origin: string;

    /**
		Current status of the application.
		*/
    status: Globals.ApplicationStatus;

    /**
		Date the application was first added to our database.
		*/
    creationDate: string;

    /**
		Date the application status last changed.
		*/
    statusChanged: string;

    /**
		Date the first time the application status entered the 'Public' status.
		*/
    firstPublished: string;

    /**
		List of team members who manage this application on Bungie.net.  Will always consist of at least
		the application owner.
		*/
    team: Applications.ApplicationDeveloper[];
  }

  export interface ApplicationDeveloper {
    role: Globals.DeveloperRole;

    apiEulaVersion: number;

    user: User.UserInfoCard;
  }

  export interface EditApplicationAction {
    /**
		Name of the application
		*/
    name: string;

    /**
		URL used to pass the user's authorization code to the application
		*/
    redirectUrl: string;

    /**
		Link to website for the application where a user can learn more about the app.
		*/
    link: string;

    /**
		Permissions the application needs to work
		*/
    scope?: string;

    /**
		Value of the Origin header sent in requests generated by this application.
		*/
    origin: string;

    /**
		Change the status of the application
		*/
    status?: Globals.ApplicationStatus;

    applicationType?: Globals.OAuthApplicationType;
  }

  export interface ApplicationApiKey {
    /**
		Integer ID of the API key.
		*/
    apiKeyId: number;

    /**
		Value of the key to use on the wire.
		*/
    apiKey: string;

    /**
		Client secret used for OAuth token endpoint
		*/
    clientSecret: string;

    authorizationUrl: string;

    /**
		Date the key was generated.
		*/
    creationDate: string;

    /**
		Status of the key.
		*/
    status: Globals.ApiKeyStatus;
  }

  export interface ApiUsage {
    /**
		The date range for the data being reported.
		*/
    range: Dates.DateRange;

    /**
		Counts for on API calls made for the time range.
		*/
    apiCalls: Applications.Series[];

    /**
		Instances of blocked requests or requests that crossed the warn threshold
		during the time range.
		*/
    throttledRequests: Applications.Series[];
  }

  export interface Series {
    /**
		Collection of samples with time and value.
		*/
    datapoints: Applications.Datapoint[];

    /**
		Target to which to datapoints apply.
		*/
    target: string;
  }

  export interface Datapoint {
    /**
		Timestamp for the related count.
		*/
    time: string;

    /**
		Count associated with timestamp
		*/
    count?: number;
  }

  export interface Authorization {
    /**
		Unique ID assigned to the application
		*/
    applicationId: number;

    /**
		Name of the application
		*/
    name: string;

    /**
		URL used to pass the user's authorization code to the application
		*/
    redirectUrl: string;

    /**
		Link to website for the application where a user can learn more about the app.
		*/
    link: string;

    /**
		Scope granted by the user.
		*/
    scope: string;

    /**
		Value of the Origin header sent in requests generated by this application.
		*/
    origin: string;

    /**
		Current status of the application.
		*/
    applicationStatus: Globals.ApplicationStatus;

    /**
		Bungie.net membership ID for which the application is authorized.
		*/
    membershipId: string;

    /**
		Status of the authorization
		*/
    authorizationStatus: Globals.AuthorizationStatus;

    /**
		Date that the authorization expires.
		*/
    authExpirationDate: string;

    /**
		Date that the authorization was established.
		*/
    authorizationDate: string;

    /**
		Session ID assigned to the authorization.
		*/
    sessionId: string;
  }

  export interface ApplicationQuery {
    name: string;

    ownerMembershipId: string;

    itemsPerPage: number;

    currentPage: number;

    requestContinuationToken: string;
  }

  export interface OAuthTokenResponse {
    accessToken: string;

    tokenType: string;

    accessTokenExpiresIn: number;

    refreshToken: string;

    refreshTokenExpiresIn: number;

    membershipId: string;

    error: string;

    errorDescription: string;
  }

  export interface OAuthClientCredentialTokenResponse {
    accessToken: string;

    tokenType: string;

    accessTokenExpiresIn: number;

    refreshToken: string;

    error: string;

    errorDescription: string;
  }

  export interface ApplicationSummary {
    /**
		Unique ID assigned to the application
		*/
    applicationId: number;

    /**
		Name of the application
		*/
    name: string;

    /**
		Link provided by the app developer
		*/
    link: string;
  }
}

export namespace Dates {
  export interface DateRange {
    start: string;

    end: string;
  }
}

export namespace Queries {
  export interface SearchResultAuthorization {
    results: Applications.Authorization[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface PagedQuery {
    itemsPerPage: number;

    currentPage: number;

    requestContinuationToken: string;
  }

  export interface SearchResultApplication {
    results: Applications.Application[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultGeneralUser {
    results: User.GeneralUser[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultContentItemPublicContract {
    results: Content.ContentItemPublicContract[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultLegacyFollowingResponse {
    results: Contract.LegacyFollowingResponse[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultFollowerResponse {
    results: Followers.FollowerResponse[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultDestinyItemActivityRecord {
    results: Activities.DestinyItemActivityRecord[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultFriend {
    results: Friends.Friend[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultGroupMember {
    results: GroupsV2.GroupMember[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultGroupBan {
    results: GroupsV2.GroupBan[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultGroupMemberApplication {
    results: GroupsV2.GroupMemberApplication[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultReportedItemResponse {
    results: Contracts.ReportedItemResponse[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultTokenSupportClaimEntry {
    results: Tokens.TokenSupportClaimEntry[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultEververseChangeEvent {
    results: Tokens.EververseChangeEvent[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultEververseVendorPurchaseEvent {
    results: Tokens.EververseVendorPurchaseEvent[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultDestinyEntitySearchResultItem {
    results: Definitions.DestinyEntitySearchResultItem[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultCommunityLiveStatus {
    results: Community.CommunityLiveStatus[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultAdminCommunityLiveStatus {
    results: Admin.AdminCommunityLiveStatus[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultTrendingEntry {
    results: Trending.TrendingEntry[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultFireteamSummary {
    results: Fireteam.FireteamSummary[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SearchResultFireteamResponse {
    results: Fireteam.FireteamResponse[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }
}

export namespace Contract {
  export interface UserDetail {
    user: User.GeneralUser;

    email: string;

    emailStatus: number;

    emailUsage: string;

    realName: string;

    gamerTag: string;

    psnId: string;

    facebookName: string;

    blizzardDisplayName: string;

    userAcls: Globals.AclEnum[];

    showGamertagPublic: boolean;

    showFacebookPublic: boolean;

    showPsnPublic: boolean;

    showBlizzardPublic: boolean;

    publicCredentialTypes: Globals.BungieCredentialType[];

    isThemeLight: boolean;

    adultMode: boolean;

    userResearchStatusFlags: string;

    lastViewedConversations?: string;

    privacy: Globals.BNetAccountPrivacy;

    hideDestinyData: boolean;

    destinyEmblemMembershipType?: Globals.BungieMembershipType;

    destinyEmblemMembershipId?: string;

    destinyEmblemCharacterId?: string;

    pmToastsEnabled: boolean;

    privacyVersion: number;

    isUltrabanned: boolean;
  }

  export interface CreateBungieProfileRequest {
    displayName: string;

    email: string;

    emailUsage?: string;

    credentialPublic: boolean;

    termsAccepted: boolean;

    authProviderType: Globals.BungieCredentialType;

    locale: string;

    offer: string;
  }

  export interface CreateEmailUserRequest {
    email: string;

    termsAccepted: boolean;

    locale: string;
  }

  export interface UserEditRequest {
    membershipId: string;

    displayName: string;

    uniqueName: string;

    profilePicture?: number;

    userTitle?: number;

    about: string;

    emailUsage?: string;

    emailAddress: string;

    showActivity?: boolean;

    profileTheme?: number;

    locale: string;

    localeInheritDefault?: boolean;

    showGroupMessaging?: boolean;

    hideDestinyData?: boolean;

    statusText: string;

    privacyFlags?: Globals.BNetAccountPrivacy;

    pmToastsEnabled?: boolean;

    showGamertagPublic?: boolean;

    showFacebookPublic?: boolean;

    showPsnPublic?: boolean;

    showBlizzardDisplayNamePublic?: boolean;

    adultMode?: boolean;

    isThemeLight?: boolean;
  }

  export interface UserCounts {
    onlineFriendCount: number;

    notificationCount: number;

    messageCount: number;

    groupMessageCounts: Contracts.GroupItemCount[];

    providersNeedingReauth: Globals.BungieCredentialType[];

    lastUpdated: string;

    acks: Contract.Acknowlegements;

    reportCount?: number;
  }

  export interface Acknowlegements {
    triumphs: User.AckState;

    gearManager: User.AckState;
  }

  export interface ForumUser {
    userId: string;

    email: string;

    displayName: string;

    uniqueName: string;

    profilePicturePath: string;
  }

  export interface NotificationSetting {
    notificationSettingId: string;

    membershipId: string;

    optInFlags: string;

    scheduleFlags: number;

    notificationMethod: string;

    notificationType: string;

    displayName: string;

    settingDescription: string;

    possibleMethods: Globals.NotificationMethods;

    grouping: Globals.NotificationGrouping;
  }

  export interface GetCredentialTypesForAccountResponse {
    credentialType: Globals.BungieCredentialType;

    credentialDisplayName: string;

    isPublic: boolean;
  }

  export interface LinkOverrideInput {
    crType: Globals.BungieCredentialType;

    Credential: string;

    DisplayName: string;
  }

  export interface ExternalMessage {
    dateCreated: string;

    message: string;

    service: Globals.ExternalService;

    extendedData: { [key: string]: string };
  }

  export interface PostLocation {
    parentPostId?: string;

    tagCategory: string;

    groupId?: string;

    isGroupPrivate?: boolean;

    subTopicOverride: boolean;
  }

  export interface PostResponse {
    lastReplyTimestamp: string;

    IsPinned: boolean;

    urlMediaType: Globals.ForumMediaType;

    thumbnail: string;

    popularity: Globals.ForumPostPopularity;

    isActive: boolean;

    isAnnouncement: boolean;

    userRating: number;

    userHasRated: boolean;

    userHasMutedPost: boolean;

    latestReplyPostId: string;

    latestReplyAuthorId: string;

    ignoreStatus: Ignores.IgnoreResponse;

    locale: string;

    postId: string;

    parentPostId?: string;

    topicId?: string;

    lastReplyId?: string;

    threadDepth: number;

    category: Globals.ForumPostCategoryEnums;

    authorMembershipId: string;

    editorMembershipId?: string;

    subject: string;

    body: string;

    urlLinkOrImage: string;

    metadata: any;

    creationDate: string;

    lastModified: string;

    lastReplyDate?: string;

    editCount: number;

    replyCount: number;

    topicReplyCount: number;

    ratingCount: number;

    rating: number;

    upvotes: number;

    downvotes: number;

    ratingScore: number;

    groupOwnerId?: string;

    isGroupPrivate: boolean;

    parentGroupId?: string;

    parentTopicId?: string;

    flags: Globals.ForumFlagsEnum;

    lockedForReplies: boolean;

    parentAuthorId: string;

    topicAuthorId: string;

    tags: string[];

    isTopicBanned: boolean;

    actualParentPostId?: string;

    playerSupportFlags?: number;

    playerSupportMetadata: string;

    pinned: number;

    awaitingApproval: boolean;

    forumId?: number;

    archivedLastReplyDate?: string;
  }

  export interface CreatePostRequest {
    subject: string;

    body: string;

    tagInput: string;

    category: Globals.ForumPostCategoryEnums;

    urlLinkOrImage: string;

    metadata: any;

    playerSupportFlags: number;

    playerSupportMetadata: string;

    recruitMicrophoneRequired?: boolean;

    recruitIntensity?: Globals.ForumRecruitmentIntensityLabel;

    recruitTone?: Globals.ForumRecruitmentToneLabel;

    recruitSlots?: number;

    locale: string;

    parentPostId?: string;

    tagCategory: string;

    groupId?: string;

    isGroupPrivate?: boolean;

    subTopicOverride: boolean;
  }

  export interface CreateContentCommentRequest {
    contentId: string;

    subject: string;

    body: string;

    tagInput: string;

    category: Globals.ForumPostCategoryEnums;

    urlLinkOrImage: string;

    metadata: any;

    playerSupportFlags: number;

    playerSupportMetadata: string;

    recruitMicrophoneRequired?: boolean;

    recruitIntensity?: Globals.ForumRecruitmentIntensityLabel;

    recruitTone?: Globals.ForumRecruitmentToneLabel;

    recruitSlots?: number;

    locale: string;

    parentPostId?: string;

    tagCategory: string;

    groupId?: string;

    isGroupPrivate?: boolean;

    subTopicOverride: boolean;
  }

  export interface EditPostRequest {
    subject: string;

    body: string;

    tagInput: string;

    tagCategory: string;

    urlLinkOrImage: string;

    metadata: any;

    category?: Globals.ForumPostCategoryEnums;

    disableBits?: Globals.ForumPostCategoryEnums;

    isGroupPostPrivate?: boolean;

    playerSupportFlags?: number;

    playerSupportMetadata: string;

    locale: string;
  }

  export interface PostSearchResponse {
    relatedPosts: Contract.PostResponse[];

    authors: User.GeneralUser[];

    groups: GroupsV2.GroupResponse[];

    searchedTags: Contracts.TagResponse[];

    polls: Contract.PollResponse[];

    recruitmentDetails: Contract.ForumRecruitmentDetail[];

    availablePages?: number;

    results: Contract.PostResponse[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface PollResponse {
    topicId: string;

    results: Contract.PollResult[];

    totalVotes: number;
  }

  export interface PollResult {
    answerText: string;

    answerSlot: number;

    lastVoteDate: string;

    votes: number;

    requestingUserVoted: boolean;
  }

  export interface ForumRecruitmentDetail {
    topicId: string;

    microphoneRequired: boolean;

    intensity: Globals.ForumRecruitmentIntensityLabel;

    tone: Globals.ForumRecruitmentToneLabel;

    approved: boolean;

    conversationId?: string;

    playerSlotsTotal: number;

    playerSlotsRemaining: number;

    Fireteam: User.GeneralUser[];

    kickedPlayerIds: string[];
  }

  export interface LegacyFollowingResponse {
    detail: Followers.FollowingDecorations;

    following: Followers.LegacyFollowing;
  }

  export interface Post {
    downvotes: number;

    ratingScore: number;

    isAnnouncement: boolean;

    locale: string;

    popularity: string;

    postId: string;

    parentPostId?: string;

    topicId?: string;

    lastReplyId?: string;

    threadDepth: number;

    category: Globals.ForumPostCategoryEnums;

    authorMembershipId: string;

    editorMembershipId?: string;

    subject: string;

    body: string;

    urlLinkOrImage: string;

    metadata: any;

    flags: Globals.ForumFlagsEnum;

    creationDate: string;

    lastModified: string;

    lastReplyDate?: string;

    editCount: number;

    replyCount: number;

    topicReplyCount: number;

    ratingCount: number;

    rating: number;

    upvotes: number;

    pinned: number;

    forumId?: number;

    groupOwnerId?: string;

    isGroupPrivate: boolean;

    parentGroupId?: string;

    parentTopicId?: string;

    lockedForReplies: boolean;

    parentAuthorId: string;

    topicAuthorId: string;

    tags: string[];

    isTopicBanned: boolean;

    actualParentPostId?: string;

    playerSupportFlags: number;

    playerSupportMetadata: string;

    awaitingApproval: boolean;

    archivedLastReplyDate?: string;
  }

  export interface LegacyGamePlayer {
    HaloReach: Models.PlayerGameDetails;

    Halo3Odst: Models.PlayerGameDetails;

    Halo3: Models.PlayerGameDetails;

    Halo2: Models.PlayerGameDetails;
  }

  export interface UserBanRequest {
    comment: string;

    banExpireDate?: string;

    profileBanExpireDate?: string;
  }

  export interface BulkEditPostRequest {
    PostsToEdit: { [key: string]: Contract.EditPostRequest };
  }

  export interface CommunityContentSubmission {
    sourceUrl: string;

    title: string;

    description: string;
  }
}

export namespace Notifications {
  export interface NotificationUpdateRequest {
    settings: Notifications.NotificationUpdateSetting[];
  }

  export interface NotificationUpdateSetting {
    notificationType?: string;

    notifyEmail?: boolean;

    notifyMobile?: boolean;

    notifyWeb?: boolean;
  }

  export interface NotificationResponse {
    notifications: Notifications.Notification[];

    invitations: { [key: string]: Invitations.Invitation };

    tagActivityCount: number;

    groupActivityCount: number;
  }

  export interface Notification {
    notificationId: string;

    membershipId: string;

    notificationType: Globals.NotificationType;

    createdDate: string;

    notificationDetail: string;

    memberInitiatedId?: string;

    relatedItemId?: string;

    relatedChildItemId?: string;

    relatedGroupId?: string;

    relatedGroupType?: Globals.GroupType;

    isNew: boolean;

    icon: string;

    memberInitiated: User.GeneralUser;

    relatedItemDetail: string;

    relatedEntityType: Globals.EntityType;

    invitationId?: string;
  }

  export interface RealTimeEventData {
    eventType: Globals.RealTimeEventType;

    /**
		Used with: ConversationChanged, Typing, RecruitThreadUpdate, ClanFireteamUpdate
		The ID of the conversation that changed, had typing, or was created the for recruitment
		*/
    conversationId?: string;

    /**
		Used with: ConversationChanged
		The ID of the conversation that received a new message
		*/
    messageId?: string;

    /**
		Used with: Typing
		The display name of the user who is typing.
		*/
    whoIsTyping: string;

    /**
		Used with: ConversationChanged, Typing
		The Bungie.net membership ID of the user who is typing or added the new message.
		*/
    senderMembershipId?: string;

    /**
		Used with: ConversationChanged
		The type of conversation (private, group) receiving the new message.
		*/
    conversationType: Globals.EventConversationType;

    /**
		Used with: ConversationChanged
		Preview of the message that was added to the conversation.
		*/
    preview: string;

    /**
		Used with: NotificationsChanged
		The number of web notifications the user has yet to observe
		*/
    notificationCount?: number;

    /**
		Used with: MessageCounts
		The number of private conversations that have new messages.
		*/
    privateMessageCount?: number;

    /**
		Used with: MessageCounts
		The number of group conversations that have new messages.
		*/
    externalMessageCount?: number;

    /**
		Used with: FriendCounts
		Dictionary with the number of friends online for various platforms (PSN, Xbox, etc)
		*/
    friendCounts: { [key: string]: number };

    /**
		Used with: FriendCounts
		List of credentials that have expired preventing new friend counts from being provided.
		*/
    needsReauth: Globals.BungieCredentialType[];

    /**
		Used with: Announcements
		Dictionary with global announcements that have yet to be acknowledged by the user.
		*/
    announcements: { [key: string]: User.AckState };

    /**
		Used with: RecruitThreadUpdate, ClanFireteamUpdate
		Bungie.net Membership ID of a user who joined a fire team via the recruitment forum or clan fireteam.
		*/
    targetMembershipId?: string;

    /**
		Used with: RecruitThreadUpdate/ClanFireteamUpdate
		True if the indicated targetMembershipId was removed from the fire team
		*/
    isRemoved?: boolean;

    /**
		Used with: RecruitThreadUpdate
		Topic ID that identifies the recruitment thread being modified.
		*/
    topicId?: string;

    /**
		Used with group conversations
		*/
    groupId?: string;

    /**
		Used for optional group chat walls - they have names.
		*/
    name: string;

    /**
		Used with ClanFireteamUpdate
		The fireteam id being updated
		*/
    fireteamId?: string;
  }
}

export namespace Contracts {
  export interface GroupItemCount {
    groupId: string;

    count: number;

    conversationId: string;
  }

  export interface FrontPageContentResponseV3 {
    featuredArticle: Content.ContentItemPublicContract;

    pinnedArticles: Content.ContentItemPublicContract[];
  }

  export interface DestinyContentResponse {
    aboutContent: Content.ContentItemPublicContract;

    mediaBuckets: Contracts.ContentBucket[];
  }

  export interface ContentBucket {
    ContentId: string;

    Title: string;

    Items: Content.ContentItemPublicContract[];
  }

  export interface DestinyContentResponseV2 {
    TopSet: Content.ContentItemPublicContract;

    StorySet: Content.ContentItemPublicContract;

    GuardianSet: Content.ContentItemPublicContract;

    FrontierSet: Content.ContentItemPublicContract;

    EnemySet: Content.ContentItemPublicContract;

    MediaBuckets: Content.ContentItemPublicContract;

    PressReleases: Queries.SearchResultContentItemPublicContract;
  }

  export interface ModerationRequest {
    moderatedItemId: string;

    moderatedItemType: Globals.IgnoredItemType;

    comments: string;

    reason: string;

    requestedPunishment: Globals.ModeratorRequestedPunishment;

    requestedBlastBan: boolean;
  }

  export interface TagResponse {
    tagText: string;

    ignoreStatus: Ignores.IgnoreResponse;
  }

  export interface ActivityMessageSearchResponse {
    users: User.GeneralUser[];

    results: Contracts.ActivityMessage[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface ActivityMessage {
    activity: Models.Activity;

    message: string;
  }

  export interface LegacyFriendSearchResponse {
    users: User.GeneralUser[];

    results: Friends.LegacyFriend[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface IgnoreSearchResult {
    tags: Contracts.IgnoreDetailResponseTag[];

    groups: Contracts.IgnoreDetailResponseGroup[];

    posts: Contracts.IgnoreDetailResponsePost[];

    users: Contracts.IgnoreDetailResponseUser[];

    totalResults: number;

    hasMore: boolean;

    availablePages: number;

    currentPage: number;

    itemsPerPage: number;
  }

  export interface IgnoreDetailResponseTag {
    tagText: string;

    displayName: string;

    dateCreated: string;

    dateExpires: string;

    dateModified: string;

    comment: string;

    flags: number;

    reason: string;
  }

  export interface IgnoreDetailResponseGroup {
    group: GroupsV2.GroupV2;

    displayName: string;

    dateCreated: string;

    dateExpires: string;

    dateModified: string;

    comment: string;

    flags: number;

    reason: string;
  }

  export interface IgnoreDetailResponsePost {
    post: Contract.Post;

    displayName: string;

    dateCreated: string;

    dateExpires: string;

    dateModified: string;

    comment: string;

    flags: number;

    reason: string;
  }

  export interface IgnoreDetailResponseUser {
    user: User.GeneralUser;

    displayName: string;

    dateCreated: string;

    dateExpires: string;

    dateModified: string;

    comment: string;

    flags: number;

    reason: string;
  }

  export interface IgnoreDetailResponse {
    displayName: string;

    dateCreated: string;

    dateExpires: string;

    dateModified: string;

    comment: string;

    flags: number;

    reason: string;
  }

  export interface IgnoreItemRequest {
    ignoredItemId: string;

    ignoredItemType: Globals.IgnoredItemType;

    comment: string;

    reason: string;

    itemContextId: string;

    itemContextType: Globals.IgnoredItemType;

    requestedPunishment: Globals.ModeratorRequestedPunishment;

    requestedBlastBan: boolean;
  }

  export interface UnignoreItemRequest {
    ignoredItemId: string;

    ignoredItemType: Globals.IgnoredItemType;
  }

  export interface LastReportedItemResponse {
    membershipId: string;

    reportId?: string;

    banSourceId: string;

    banSourceType: Globals.IgnoredItemType;

    banReason?: string;
  }

  export interface ReportedItemResponse {
    moderatedMemberDisplayName: string;

    RelatedStrings: string[];

    AutoTriggerHelpText: string;

    reportId: string;

    reportedItem: string;

    reportedItemType: Globals.IgnoredItemType;

    dateCreated: string;

    dateResolved?: string;

    comment: string;

    result: Globals.ReportResolutionStatus;

    reason: string;

    moderatorMembershipId: string;

    dateAssigned?: string;

    overturnComment: string;

    resultOverturned: Globals.ReportResolutionStatus;

    dateOverturned?: string;

    overturnedMembershipId?: string;

    entity: any;

    reportCount: number;

    banDurationInDays: number;

    autoTriggerId?: number;

    reportedItemGroupContextId?: string;

    locale: string;
  }

  export interface ReportAssignmentFilter {
    locale: string;
  }

  export interface ReportResolution {
    reportId: string;

    reason: string;

    result: Globals.ReportResolutionStatus;

    comments: string;

    banLength: Globals.IgnoreLength;
  }

  export interface IgnoreItemOverrideRequest {
    globalIgnoreEndDate: string;

    ignoredItemId: string;

    ignoredItemType: Globals.IgnoredItemType;

    comment: string;
  }

  export interface AdminHistoryEntry {
    historyId: string;

    historyDate: string;

    historyType: Globals.AdminHistoryType;

    historyTypeText: string;

    historyItemId: string;

    historyItemFlags: Globals.AdminHistoryItemFlags;

    historyItemText: string;

    adminMembershipId: string;

    adminMembershipFlags: Globals.AdminHistoryMembershipFlags;

    adminMembershipFlagsText: string;

    targetMembershipId?: string;

    targetGroupId?: string;

    foundAdminUser: boolean;

    adminUser: User.GeneralUser;

    foundTargetUser: boolean;

    targetUser: User.GeneralUser;

    foundTargetGroup: boolean;

    targetGroup: GroupsV2.GroupV2;
  }

  export interface OfferHistoryResponse {
    OfferKey: string;

    OfferDisplayName: string;

    OfferDisplayDetail: string;

    OfferImagePath: string;

    OfferPurchaseDate: string;

    OfferQuantity: number;

    ConsumableQuantity: number;

    RedeemType: Globals.OfferRedeemMode;

    GrantedPlatformCode: boolean;

    Code: string;
  }

  export interface TokenThrottleStateResponse {
    IsThrottled: boolean;

    ThrottleExpires: string;

    NumberOfFailedAttemptsToday: number;

    MaximumFailedAttemptsPerDay: number;

    AgeVerificationState: boolean;
  }

  export interface ClaimResponse {
    tokenId?: string;

    membershipId?: string;

    membershipType?: Globals.BungieMembershipType;

    OfferName: string;

    OfferClaimText: string;
  }

  export interface PlatformMarketplaceCodeResponse {
    offerKey: string;

    deviceType: Globals.ClientDeviceType;

    platformCodeRegion: Globals.MarketplaceCodeRegion;

    OfferDistributionDate: string;

    platformCode: string;

    OfferDisplayName: string;

    OfferDisplayDetail: string;
  }
}

export namespace Config {
  export interface UserTheme {
    userThemeId: number;

    userThemeName: string;

    userThemeDescription: string;
  }

  export interface GroupTheme {
    name: string;

    folder: string;

    description: string;
  }

  /**
	DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
	*/
  export interface DestinyManifest {
    version: string;

    mobileAssetContentPath: string;

    mobileGearAssetDataBases: Config.GearAssetDataBaseDefinition[];

    mobileWorldContentPaths: { [key: string]: string };

    jsonWorldContentPaths: { [key: string]: string };

    mobileClanBannerDatabasePath: string;

    mobileGearCDN: { [key: string]: string };

    /**
		Information about the "Image Pyramid" for Destiny icons.
		Where possible, we create smaller versions of Destiny icons.
		These are found as subfolders under the location of the "original/full size" Destiny images,
		with the same file name and extension as the original image itself.  (this lets us avoid sending largely redundant
		path info with every entity, at the expense of the smaller versions of the image being less discoverable)
		*/
    iconImagePyramidInfo: Config.ImagePyramidEntry[];
  }

  export interface GearAssetDataBaseDefinition {
    version: number;

    path: string;
  }

  export interface ImagePyramidEntry {
    /**
		The name of the subfolder where these images are located.
		*/
    name: string;

    /**
		The factor by which the original image size has been reduced.
		*/
    factor: number;
  }
}

export namespace Partnerships {
  /**
	All the partnership info that's fit to expose externally, if we care to do so.
	*/
  export interface PublicPartnershipDetail {
    partnerType: Globals.PartnershipType;

    identifier: string;

    name: string;

    icon: string;
  }
}

export namespace Responses {
  /**
	A response wrapper for a single Message Conversation, that includes any linked entity information and additional
	information about the conversation.
	*/
  export interface MessageConversationResponse {
    users: { [key: string]: User.GeneralUser };

    invitationDetail: Invitations.InvitationResponseCodeDetail;

    group: GroupsV2.GroupV2;

    detail: Messages.MessageConversation;

    participants: Messages.MessageConversationMember[];
  }

  export interface MessageSearchResult {
    users: { [key: string]: User.GeneralUser };

    invitationDetails: {
      [key: string]: Invitations.InvitationResponseCodeDetail;
    };

    userNotificationPreference: boolean;

    results: Messages.Message[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface SaveMessageResult {
    conversationId: string;

    messageId: string;
  }

  /**
	A response wrapper for a set of Conversations, that includes any linked entity information and additional
	information about those conversations.
	*/
  export interface MessageConversationSearchResult {
    users: { [key: string]: User.GeneralUser };

    invitationDetails: {
      [key: string]: Invitations.InvitationResponseCodeDetail;
    };

    groups: { [key: string]: GroupsV2.GroupV2 };

    unreadCount: number;

    results: Messages.MessageConversationDetail[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface UnreadConversationCountResult {
    unreadConversations: string[];

    unreadConversationTotal: number;
  }

  /**
	I know what you seek.  You seek linked accounts.  Found them, you have.

	This contract returns a minimal amount of data about Destiny Accounts that are linked through your
	Bungie.Net account.  We will not return accounts in this response whose
	*/
  export interface DestinyLinkedProfilesResponse {
    /**
		Any Destiny account for whom we could successfully pull characters will be returned here,
		as the Platform-level summary of user data.  (no character data, no Destiny account data other
		than the Membership ID and Type so you can make further queries)
		*/
    profiles: Responses.DestinyProfileUserInfoCard[];

    /**
		If the requested membership had a linked Bungie.Net membership ID, this is the basic information
		about that BNet account.

		I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns.  But
		it's so damn convenient!  https://www.youtube.com/watch?v=X5R-bB-gKVI
		*/
    bnetMembership: User.UserInfoCard;

    /**
		This is brief summary info for profiles that we believe have valid Destiny info, but who
		failed to return data for some other reason and thus we know that subsequent calls for
		their info will also fail.
		*/
    profilesWithErrors: Responses.DestinyErrorProfile[];
  }

  export interface DestinyProfileUserInfoCard {
    dateLastPlayed: string;

    supplementalDisplayName: string;

    iconPath: string;

    membershipType: Globals.BungieMembershipType;

    membershipId: string;

    displayName: string;
  }

  /**
	If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account,
	this will contain as much info as we can get about the profile for your use.

	Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
	*/
  export interface DestinyErrorProfile {
    /**
		The error that we encountered.  You should be able to look up localized text to show to the
		user for these failures.
		*/
    errorCode: Globals.PlatformErrorCodes;

    /**
		Basic info about the account that failed.  Don't expect anything other than membership ID,
		Membership Type, and displayName to be populated.
		*/
    infoCard: User.UserInfoCard;
  }

  /**
	The response for GetDestinyProfile, with components for character and item-level data.
	*/
  export interface DestinyProfileResponse {
    /**
		Recent, refundable purchases you have made from vendors.  When will you use it?  Couldn't say...

		COMPONENT TYPE: VendorReceipts
		*/
    vendorReceipts: Components.SingleComponentResponseDestinyVendorReceiptsComponent;

    /**
		The profile-level inventory of the Destiny Profile.

		COMPONENT TYPE: ProfileInventories
		*/
    profileInventory: Components.SingleComponentResponseDestinyInventoryComponent;

    /**
		The profile-level currencies owned by the Destiny Profile.

		COMPONENT TYPE: ProfileCurrencies
		*/
    profileCurrencies: Components.SingleComponentResponseDestinyInventoryComponent;

    /**
		The basic information about the Destiny Profile (formerly "Account").

		COMPONENT TYPE: Profiles
		*/
    profile: Components.SingleComponentResponseDestinyProfileComponent;

    /**
		Items available from Kiosks that are available Profile-wide (i.e. across all characters)

		This component returns information about what Kiosk items are available to you on a *Profile*
		level.  It is theoretically possible for Kiosks to have items gated by specific Character as well.
		If you ever have those, you will find them on the characterKiosks property.

		COMPONENT TYPE: Kiosks
		*/
    profileKiosks: Components.SingleComponentResponseDestinyKiosksComponent;

    /**
		When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is
		the set of plugs and their states that are profile-scoped.

		This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.

		COMPONENT TYPE: ItemSockets
		*/
    profilePlugSets: Components.SingleComponentResponseDestinyPlugSetsComponent;

    /**
		When we have progression information - such as Checklists - that may apply profile-wide, it will
		be returned here rather than in the per-character progression data.

		COMPONENT TYPE: ProfileProgression
		*/
    profileProgression: Components.SingleComponentResponseDestinyProfileProgressionComponent;

    /**
		COMPONENT TYPE: PresentationNodes
		*/
    profilePresentationNodes: Components.SingleComponentResponseDestinyPresentationNodesComponent;

    /**
		COMPONENT TYPE: Records
		*/
    profileRecords: Components.SingleComponentResponseDestinyProfileRecordsComponent;

    /**
		COMPONENT TYPE: Collectibles
		*/
    profileCollectibles: Components.SingleComponentResponseDestinyProfileCollectiblesComponent;

    /**
		Basic information about each character, keyed by the CharacterId.

		COMPONENT TYPE: Characters
		*/
    characters: Components.DictionaryComponentResponseInt64DestinyCharacterComponent;

    /**
		The character-level non-equipped inventory items, keyed by the Character's Id.

		COMPONENT TYPE: CharacterInventories
		*/
    characterInventories: Components.DictionaryComponentResponseInt64DestinyInventoryComponent;

    /**
		Character-level progression data, keyed by the Character's Id.

		COMPONENT TYPE: CharacterProgressions
		*/
    characterProgressions: Components.DictionaryComponentResponseInt64DestinyCharacterProgressionComponent;

    /**
		Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.

		COMPONENT TYPE: CharacterRenderData
		*/
    characterRenderData: Components.DictionaryComponentResponseInt64DestinyCharacterRenderComponent;

    /**
		Character activity data - the activities available to this character and its status, keyed by the Character's Id.

		COMPONENT TYPE: CharacterActivities
		*/
    characterActivities: Components.DictionaryComponentResponseInt64DestinyCharacterActivitiesComponent;

    /**
		The character's equipped items, keyed by the Character's Id.

		COMPONENT TYPE: CharacterEquipment
		*/
    characterEquipment: Components.DictionaryComponentResponseInt64DestinyInventoryComponent;

    /**
		Items available from Kiosks that are available to a specific character as opposed to the account as a whole.
		It must be combined with data from the profileKiosks property to get a full picture of the character's available
		items to check out of a kiosk.

		This component returns information about what Kiosk items are available to you on a *Character*
		level.  Usually, kiosk items will be earned for the entire Profile (all characters) at once.
		To find those, look in the profileKiosks property.

		COMPONENT TYPE: Kiosks
		*/
    characterKiosks: Components.DictionaryComponentResponseInt64DestinyKiosksComponent;

    /**
		When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is
		the set of plugs and their states, per character, that are character-scoped.

		This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.

		COMPONENT TYPE: ItemSockets
		*/
    characterPlugSets: Components.DictionaryComponentResponseInt64DestinyPlugSetsComponent;

    /**
		Do you ever get the feeling that a system was designed *too* flexibly?  That it can be used
		in so many different ways that you end up being unable to provide an easy to use abstraction
		for the mess that's happening under the surface?

		Let's talk about character-specific data that might be related to items without
		instances.  These two statements are totally unrelated, I promise.

		At some point during D2, it was decided that items - such as Bounties - could be given to characters
		and *not* have instance data, but that *could* display and even use relevant state information
		on your account and character.

		Up to now, any item that had meaningful dependencies on character or account state had to be instanced,
		and thus "itemComponents" was all that you needed: it was keyed by item's instance IDs and provided the
		stateful information you needed inside.

		Unfortunately, we don't live in such a magical world anymore.  This is information held on a per-character
		basis about non-instanced items that the characters have in their inventory - or that reference character-specific
		state information even if it's in Account-level inventory - and the values related to that item's state
		in relation to the given character.

		To give a concrete example, look at a Moments of Triumph bounty.  They exist in a character's inventory,
		and show/care about a character's progression toward completing the bounty.  But the bounty itself is a
		non-instanced item, like a mod or a currency.  This returns that data for the characters who have the bounty
		in their inventory.

		I'm not crying, you're crying
		Okay we're both crying but it's going to be okay I promise
		Actually I shouldn't promise that, I don't know if it's going to be okay
		*/
    characterUninstancedItemComponents: {
      [key: string]: Sets.DestinyBaseItemComponentSetUInt32;
    };

    /**
		COMPONENT TYPE: PresentationNodes
		*/
    characterPresentationNodes: Components.DictionaryComponentResponseInt64DestinyPresentationNodesComponent;

    /**
		COMPONENT TYPE: Records
		*/
    characterRecords: Components.DictionaryComponentResponseInt64DestinyCharacterRecordsComponent;

    /**
		COMPONENT TYPE: Collectibles
		*/
    characterCollectibles: Components.DictionaryComponentResponseInt64DestinyCollectiblesComponent;

    /**
		Information about instanced items across all returned characters, keyed by the item's instance ID.

		COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
		*/
    itemComponents: Sets.DestinyItemComponentSetInt64;

    /**
		A "lookup" convenience component that can be used to quickly check if the character has access
		to items that can be used for purchasing.

		COMPONENT TYPE: CurrencyLookups
		*/
    characterCurrencyLookups: Components.DictionaryComponentResponseInt64DestinyCurrenciesComponent;
  }

  /**
	The response contract for GetDestinyCharacter, with components that can be returned for character
	and item-level data.
	*/
  export interface DestinyCharacterResponse {
    /**
		The character-level non-equipped inventory items.

		COMPONENT TYPE: CharacterInventories
		*/
    inventory: Components.SingleComponentResponseDestinyInventoryComponent;

    /**
		Base information about the character in question.

		COMPONENT TYPE: Characters
		*/
    character: Components.SingleComponentResponseDestinyCharacterComponent;

    /**
		Character progression data, including Milestones.

		COMPONENT TYPE: CharacterProgressions
		*/
    progressions: Components.SingleComponentResponseDestinyCharacterProgressionComponent;

    /**
		Character rendering data - a minimal set of information about equipment and dyes used for rendering.

		COMPONENT TYPE: CharacterRenderData
		*/
    renderData: Components.SingleComponentResponseDestinyCharacterRenderComponent;

    /**
		Activity data - info about current activities available to the player.

		COMPONENT TYPE: CharacterActivities
		*/
    activities: Components.SingleComponentResponseDestinyCharacterActivitiesComponent;

    /**
		Equipped items on the character.

		COMPONENT TYPE: CharacterEquipment
		*/
    equipment: Components.SingleComponentResponseDestinyInventoryComponent;

    /**
		Items available from Kiosks that are available to this specific character.

		COMPONENT TYPE: Kiosks
		*/
    kiosks: Components.SingleComponentResponseDestinyKiosksComponent;

    /**
		When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is
		the set of plugs and their states that are scoped to this character.

		This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.

		COMPONENT TYPE: ItemSockets
		*/
    plugSets: Components.SingleComponentResponseDestinyPlugSetsComponent;

    /**
		COMPONENT TYPE: PresentationNodes
		*/
    presentationNodes: Components.SingleComponentResponseDestinyPresentationNodesComponent;

    /**
		COMPONENT TYPE: Records
		*/
    records: Components.SingleComponentResponseDestinyCharacterRecordsComponent;

    /**
		COMPONENT TYPE: Collectibles
		*/
    collectibles: Components.SingleComponentResponseDestinyCollectiblesComponent;

    /**
		The set of components belonging to the player's instanced items.

		COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
		*/
    itemComponents: Sets.DestinyItemComponentSetInt64;

    /**
		The set of components belonging to the player's UNinstanced items.  Because apparently
		now those too can have information relevant to the character's state.

		COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
		*/
    uninstancedItemComponents: Sets.DestinyBaseItemComponentSetUInt32;

    /**
		A "lookup" convenience component that can be used to quickly check if the character has access
		to items that can be used for purchasing.

		COMPONENT TYPE: CurrencyLookups
		*/
    currencyLookups: Components.SingleComponentResponseDestinyCurrenciesComponent;
  }

  /**
	The response object for retrieving an individual instanced item.  None of these components are relevant
	for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
	*/
  export interface DestinyItemResponse {
    /**
		If the item is on a character, this will return the ID of the character that is holding the item.
		*/
    characterId?: string;

    /**
		Common data for the item relevant to its non-instanced properties.

		COMPONENT TYPE: ItemCommonData
		*/
    item: Components.SingleComponentResponseDestinyItemComponent;

    /**
		Basic instance data for the item.

		COMPONENT TYPE: ItemInstances
		*/
    instance: Components.SingleComponentResponseDestinyItemInstanceComponent;

    /**
		Information specifically about the item's objectives.

		COMPONENT TYPE: ItemObjectives
		*/
    objectives: Components.SingleComponentResponseDestinyItemObjectivesComponent;

    /**
		Information specifically about the perks currently active on the item.

		COMPONENT TYPE: ItemPerks
		*/
    perks: Components.SingleComponentResponseDestinyItemPerksComponent;

    /**
		Information about how to render the item in 3D.

		COMPONENT TYPE: ItemRenderData
		*/
    renderData: Components.SingleComponentResponseDestinyItemRenderComponent;

    /**
		Information about the computed stats of the item: power, defense, etc...

		COMPONENT TYPE: ItemStats
		*/
    stats: Components.SingleComponentResponseDestinyItemStatsComponent;

    /**
		Information about the talent grid attached to the item.  Talent nodes can provide a variety of
		benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".

		COMPONENT TYPE: ItemTalentGrids
		*/
    talentGrid: Components.SingleComponentResponseDestinyItemTalentGridComponent;

    /**
		Information about the sockets of the item: which are currently active, what potential sockets
		you could have and the stats/abilities/perks you can gain from them.

		COMPONENT TYPE: ItemSockets
		*/
    sockets: Components.SingleComponentResponseDestinyItemSocketsComponent;
  }

  /**
	A response containing all of the components for all requested vendors.
	*/
  export interface DestinyVendorsResponse {
    /**
		For Vendors being returned, this will give you the information you need to group them and order them
		in the same way that the Bungie Companion app performs grouping.  It will automatically be returned
		if you request the Vendors component.

		COMPONENT TYPE: Vendors
		*/
    vendorGroups: Components.SingleComponentResponseDestinyVendorGroupComponent;

    /**
		The base properties of the vendor.
		These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.

		COMPONENT TYPE: Vendors
		*/
    vendors: Components.DictionaryComponentResponseUInt32DestinyVendorComponent;

    /**
		Categories that the vendor has available, and references to the sales therein.
		These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.

		COMPONENT TYPE: VendorCategories
		*/
    categories: Components.DictionaryComponentResponseUInt32DestinyVendorCategoriesComponent;

    /**
		Sales, keyed by the vendorItemIndex of the item being sold.
		These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.

		Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you
		can relate it to the corrent sale item definition within the Vendor's definition.

		COMPONENT TYPE: VendorSales
		*/
    sales: Components.DictionaryComponentResponseUInt32PersonalDestinyVendorSaleItemSetComponent;

    /**
		The set of item detail components, one set of item components per Vendor.
		These are keyed by the Vendor Hash, so you will get one Item Component Set per vendor returned.

		The components contained inside are themselves keyed by the vendorSaleIndex, and will have whatever
		item-level components you requested (Sockets, Stats, Instance data etc...) per item being sold by the vendor.
		*/
    itemComponents: { [key: number]: Sets.DestinyItemComponentSetInt32 };

    /**
		A "lookup" convenience component that can be used to quickly check if the character has access
		to items that can be used for purchasing.

		COMPONENT TYPE: CurrencyLookups
		*/
    currencyLookups: Components.SingleComponentResponseDestinyCurrenciesComponent;
  }

  export interface PersonalDestinyVendorSaleItemSetComponent {
    saleItems: { [key: number]: Vendors.DestinyVendorSaleItemComponent };
  }

  /**
	A response containing all of the components for a vendor.
	*/
  export interface DestinyVendorResponse {
    /**
		The base properties of the vendor.

		COMPONENT TYPE: Vendors
		*/
    vendor: Components.SingleComponentResponseDestinyVendorComponent;

    /**
		Categories that the vendor has available, and references to the sales therein.

		COMPONENT TYPE: VendorCategories
		*/
    categories: Components.SingleComponentResponseDestinyVendorCategoriesComponent;

    /**
		Sales, keyed by the vendorItemIndex of the item being sold.

		COMPONENT TYPE: VendorSales
		*/
    sales: Components.DictionaryComponentResponseInt32DestinyVendorSaleItemComponent;

    /**
		Item components, keyed by the vendorItemIndex of the active sale items.

		COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
		*/
    itemComponents: Sets.DestinyItemComponentSetInt32;

    /**
		A "lookup" convenience component that can be used to quickly check if the character has access
		to items that can be used for purchasing.

		COMPONENT TYPE: CurrencyLookups
		*/
    currencyLookups: Components.SingleComponentResponseDestinyCurrenciesComponent;
  }

  /**
	A response containing all valid components for the public Vendors endpoint.

	 It is a decisively smaller subset of data compared to what we can get when we know
	 the specific user making the request.

	 If you want any of the other data - item details, whether or not you can buy it, etc... you'll have
	 to call in the context of a character.  I know, sad but true.
	*/
  export interface DestinyPublicVendorsResponse {
    /**
		For Vendors being returned, this will give you the information you need to group them and order them
		in the same way that the Bungie Companion app performs grouping.  It will automatically be returned
		if you request the Vendors component.

		COMPONENT TYPE: Vendors
		*/
    vendorGroups: Components.SingleComponentResponseDestinyVendorGroupComponent;

    /**
		The base properties of the vendor.
		These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.

		COMPONENT TYPE: Vendors
		*/
    vendors: Components.DictionaryComponentResponseUInt32DestinyPublicVendorComponent;

    /**
		Categories that the vendor has available, and references to the sales therein.
		These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.

		COMPONENT TYPE: VendorCategories
		*/
    categories: Components.DictionaryComponentResponseUInt32DestinyVendorCategoriesComponent;

    /**
		Sales, keyed by the vendorItemIndex of the item being sold.
		These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.

		Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you
		can relate it to the corrent sale item definition within the Vendor's definition.

		COMPONENT TYPE: VendorSales
		*/
    sales: Components.DictionaryComponentResponseUInt32PublicDestinyVendorSaleItemSetComponent;
  }

  export interface PublicDestinyVendorSaleItemSetComponent {
    saleItems: { [key: number]: Vendors.DestinyPublicVendorSaleItemComponent };
  }

  /**
	Returns the detailed information about a Collectible Presentation Node and any Collectibles
	that are direct descendants.
	*/
  export interface DestinyCollectibleNodeDetailResponse {
    /**
		COMPONENT TYPE: Collectibles
		*/
    collectibles: Components.SingleComponentResponseDestinyCollectiblesComponent;

    /**
		Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.

		NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but
		ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn't have
		to have a special override to do the collectible -> item lookup once you delve into an item's details, and it also
		meant that you didn't have to remember that the Hash being used as the key for plugSets was different from the
		Hash being used for the other Dictionaries.  As a result, using the Item Hash felt like the least crappy solution.

		We may all come to regret this decision.  We will see.

		COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
		*/
    collectibleItemComponents: Sets.DestinyItemComponentSetUInt32;
  }

  export interface DestinyItemChangeResponse {
    item: Responses.DestinyItemResponse;

    addedInventoryItems: Items.DestinyItemComponent[];

    removedInventoryItems: Items.DestinyItemComponent[];
  }
}

export namespace Invitations {
  export interface InvitationResponseCodeDetail {
    invitationId: string;

    membershipId: string;

    resolutionStatus: Globals.InvitationResponseState;

    expireDate: string;

    invitationType: Globals.InvitationType;

    requestingObjectId: string;

    targetObjectId?: string;

    targetState?: number;

    requestMessage: string;

    responseMessage: string;

    responseCode: string;

    hasExpired: boolean;

    message: string;

    membershipIdCreated: string;

    canRespond: boolean;
  }

  export interface Invitation {
    invitationId: string;

    invitationType: Globals.InvitationType;

    dateCreated: string;

    dateResolved?: string;

    expireDate: string;

    membershipIdCreated: string;

    membershipIdResolved?: string;

    requestingObjectId: string;

    resolutionStatus: Globals.InvitationResponseState;

    targetObjectId?: string;

    targetState?: number;

    requestMessage: string;

    responseMessage: string;

    isExpired: boolean;
  }
}

export namespace GroupsV2 {
  export interface GroupV2 {
    groupId: string;

    name: string;

    groupType: Globals.GroupType;

    membershipIdCreated: string;

    creationDate: string;

    modificationDate: string;

    about: string;

    tags: string[];

    memberCount: number;

    isPublic: boolean;

    isPublicTopicAdminOnly: boolean;

    motto: string;

    allowChat: boolean;

    isDefaultPostPublic: boolean;

    chatSecurity: Globals.ChatSecuritySetting;

    locale: string;

    avatarImageIndex: number;

    homepage: Globals.GroupHomepage;

    membershipOption: Globals.MembershipOption;

    defaultPublicity: Globals.GroupPostPublicity;

    theme: string;

    bannerPath: string;

    avatarPath: string;

    conversationId: string;

    enableInvitationMessagingForAdmins: boolean;

    banExpireDate?: string;

    features: GroupsV2.GroupFeatures;

    clanInfo: GroupsV2.GroupV2ClanInfoAndInvestment;
  }

  export interface GroupFeatures {
    maximumMembers: number;

    /**
		Maximum number of groups of this type a typical membership may join. For example,
		a user may join about 50 General groups with their Bungie.net account.  They may
		join one clan per Destiny membership.
		*/
    maximumMembershipsOfGroupType: number;

    capabilities: Globals.Capabilities;

    membershipTypes: Globals.BungieMembershipType[];

    /**
		Minimum Member Level allowed to invite new members to group

		Always Allowed: Founder, Acting Founder

		True means admins have this power, false means they don't

		Default is false for clans, true for groups.
		*/
    invitePermissionOverride: boolean;

    /**
		Minimum Member Level allowed to update group culture

		Always Allowed: Founder, Acting Founder

		True means admins have this power, false means they don't

		Default is false for clans, true for groups.
		*/
    updateCulturePermissionOverride: boolean;

    /**
		Minimum Member Level allowed to host guided games

		Always Allowed: Founder, Acting Founder, Admin

		Allowed Overrides: None, Member, Beginner

		Default is Member for clans, None for groups, although this means nothing for groups.
		*/
    hostGuidedGamePermissionOverride: Globals.HostGuidedGamesPermissionLevel;

    /**
		Minimum Member Level allowed to update banner

		Always Allowed: Founder, Acting Founder

		True means admins have this power, false means they don't

		Default is false for clans, true for groups.
		*/
    updateBannerPermissionOverride: boolean;

    /**
		Level to join a member at when accepting an invite, application, or joining an open clan

		Default is Beginner.
		*/
    joinLevel: Globals.RuntimeGroupMemberType;
  }

  /**
	The same as GroupV2ClanInfo, but includes any investment data.
	*/
  export interface GroupV2ClanInfoAndInvestment {
    d2ClanProgressions: { [key: number]: World.DestinyProgression };

    clanCallsign: string;

    clanBannerData: GroupsV2.ClanBanner;
  }

  export interface ClanBanner {
    decalId: number;

    decalColorId: number;

    decalBackgroundColorId: number;

    gonfalonId: number;

    gonfalonColorId: number;

    gonfalonDetailId: number;

    gonfalonDetailColorId: number;
  }

  export interface GroupResponse {
    detail: GroupsV2.GroupV2;

    founder: GroupsV2.GroupMember;

    alliedIds: string[];

    parentGroup: GroupsV2.GroupV2;

    allianceStatus: Globals.GroupAllianceStatus;

    groupJoinInviteCount: number;

    /**
		This property will be populated if the authenticated user is a member of the group. Note that because of
		account linking, a user can sometimes be part of a clan more than once.  As such, this returns the
		highest member type available.
		*/
    currentUserMemberMap: { [key: string]: GroupsV2.GroupMember };

    /**
		This property will be populated if the authenticated user is an applicant or has an outstanding invitation to join.
		Note that because of account linking, a user can sometimes be part of a clan more than once.
		*/
    currentUserPotentialMemberMap: {
      [key: string]: GroupsV2.GroupPotentialMember;
    };
  }

  export interface GroupMember {
    memberType: Globals.RuntimeGroupMemberType;

    isOnline: boolean;

    lastOnlineStatusChange: string;

    groupId: string;

    destinyUserInfo: User.UserInfoCard;

    bungieNetUserInfo: User.UserInfoCard;

    joinDate: string;
  }

  export interface GroupPotentialMember {
    potentialStatus: Globals.GroupPotentialMemberStatus;

    groupId: string;

    destinyUserInfo: User.UserInfoCard;

    bungieNetUserInfo: User.UserInfoCard;

    joinDate: string;
  }

  /**
	A small infocard of group information, usually used for when a list of groups are returned
	*/
  export interface GroupV2Card {
    groupId: string;

    name: string;

    groupType: Globals.GroupType;

    creationDate: string;

    about: string;

    motto: string;

    memberCount: number;

    locale: string;

    membershipOption: Globals.MembershipOption;

    capabilities: Globals.Capabilities;

    clanInfo: GroupsV2.GroupV2ClanInfo;

    avatarPath: string;

    theme: string;
  }

  /**
	This contract contains clan-specific group information.  It does not include any investment data.
	*/
  export interface GroupV2ClanInfo {
    clanCallsign: string;

    clanBannerData: GroupsV2.ClanBanner;
  }

  export interface GroupSearchResponse {
    results: GroupsV2.GroupV2Card[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  /**
	NOTE: GroupQuery, as of Destiny 2, has essentially two totally different and incompatible "modes".

	If you are querying for a group, you can pass any of the properties below.

	If you are querying for a Clan, you MUST NOT pass any of the following properties (they must be null or undefined in your request, not just empty string/default values):

	- groupMemberCountFilter
	- localeFilter
	- tagText

	If you pass these, you will get a useless InvalidParameters error.
	*/
  export interface GroupQuery {
    name: string;

    groupType: Globals.GroupType;

    creationDate: Globals.GroupDateRange;

    sortBy: Globals.GroupSortBy;

    groupMemberCountFilter?: Globals.GroupMemberCountFilter;

    localeFilter: string;

    tagText: string;

    itemsPerPage: number;

    currentPage: number;

    requestContinuationToken: string;
  }

  export interface GroupNameSearchRequest {
    groupName: string;

    groupType: Globals.GroupType;
  }

  export interface GroupOptionalConversation {
    groupId: string;

    conversationId: string;

    chatEnabled: boolean;

    chatName: string;

    chatSecurity: Globals.ChatSecuritySetting;
  }

  export interface GroupCreationResponse {
    groupId: string;
  }

  export interface GroupAction {
    /**
		Type of group, either Bungie.net hosted group, or a game services hosted clan.
		*/
    groupType: Globals.GroupType;

    name: string;

    about: string;

    motto: string;

    theme: string;

    avatarImageIndex: number;

    tags: string;

    isPublic: boolean;

    membershipOption: Globals.MembershipOption;

    isPublicTopicAdminOnly: boolean;

    isDefaultPostPublic: boolean;

    allowChat: boolean;

    isDefaultPostAlliance: boolean;

    chatSecurity: Globals.ChatSecuritySetting;

    callsign: string;

    locale: string;

    homepage: Globals.GroupHomepage;

    /**
		When operation needs a platform specific account ID for the present user, use this property.
		In particular, groupType of Clan requires this value to be set.
		*/
    platformMembershipType: Globals.BungieMembershipType;
  }

  export interface GroupEditAction {
    name: string;

    about: string;

    motto: string;

    theme: string;

    avatarImageIndex?: number;

    tags: string;

    isPublic?: boolean;

    membershipOption?: Globals.MembershipOption;

    isPublicTopicAdminOnly?: boolean;

    allowChat?: boolean;

    chatSecurity?: Globals.ChatSecuritySetting;

    callsign: string;

    locale: string;

    homepage?: Globals.GroupHomepage;

    enableInvitationMessagingForAdmins?: boolean;

    defaultPublicity?: Globals.GroupPostPublicity;
  }

  export interface GroupOptionsEditAction {
    /**
		Minimum Member Level allowed to invite new members to group

		Always Allowed: Founder, Acting Founder

		True means admins have this power, false means they don't

		Default is false for clans, true for groups.
		*/
    InvitePermissionOverride?: boolean;

    /**
		Minimum Member Level allowed to update group culture

		Always Allowed: Founder, Acting Founder

		True means admins have this power, false means they don't

		Default is false for clans, true for groups.
		*/
    UpdateCulturePermissionOverride?: boolean;

    /**
		Minimum Member Level allowed to host guided games

		Always Allowed: Founder, Acting Founder, Admin

		Allowed Overrides: None, Member, Beginner

		Default is Member for clans, None for groups, although this means nothing for groups.
		*/
    HostGuidedGamePermissionOverride?: Globals.HostGuidedGamesPermissionLevel;

    /**
		Minimum Member Level allowed to update banner

		Always Allowed: Founder, Acting Founder

		True means admins have this power, false means they don't

		Default is false for clans, true for groups.
		*/
    UpdateBannerPermissionOverride?: boolean;

    /**
		Level to join a member at when accepting an invite, application, or joining an open clan

		Default is Beginner.
		*/
    JoinLevel?: Globals.RuntimeGroupMemberType;
  }

  export interface GroupOptionalConversationAddRequest {
    chatName: string;

    chatSecurity: Globals.ChatSecuritySetting;
  }

  export interface GroupOptionalConversationEditRequest {
    chatEnabled?: boolean;

    chatName: string;

    chatSecurity?: Globals.ChatSecuritySetting;
  }

  export interface GroupMemberLeaveResult {
    group: GroupsV2.GroupV2;

    groupDeleted: boolean;
  }

  export interface GroupBanRequest {
    comment: string;

    length: Globals.IgnoreLength;
  }

  export interface GroupBan {
    groupId: string;

    lastModifiedBy: User.UserInfoCard;

    createdBy: User.UserInfoCard;

    dateBanned: string;

    dateExpires: string;

    comment: string;

    bungieNetUserInfo: User.UserInfoCard;

    destinyUserInfo: User.UserInfoCard;
  }

  export interface GroupApplicationResponse {
    resolution: Globals.GroupApplicationResolveState;
  }

  export interface GroupApplicationRequest {
    message: string;
  }

  export interface GroupMemberApplication {
    groupId: string;

    creationDate: string;

    resolveState: Globals.GroupApplicationResolveState;

    resolveDate?: string;

    resolvedByMembershipId?: string;

    requestMessage: string;

    resolveMessage: string;

    destinyUserInfo: User.UserInfoCard;

    bungieNetUserInfo: User.UserInfoCard;
  }

  export interface GroupApplicationListRequest {
    memberships: User.UserMembership[];

    message: string;
  }

  export interface GroupMembershipSearchResponse {
    results: GroupsV2.GroupMembership[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface GroupMembership {
    member: GroupsV2.GroupMember;

    group: GroupsV2.GroupV2;
  }

  export interface GroupPotentialMembershipSearchResponse {
    results: GroupsV2.GroupPotentialMembership[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface GroupPotentialMembership {
    member: GroupsV2.GroupPotentialMember;

    group: GroupsV2.GroupV2;
  }
}

export namespace World {
  /**
	Information about a current character's status with a Progression.
	A progression is a value that can increase with activity and has levels.
	Think Character Level and Reputation Levels.
	Combine this "live" data with the related DestinyProgressionDefinition for a full picture
	of the Progression.
	*/
  export interface DestinyProgression {
    /**
		The hash identifier of the Progression in question.  Use it to look up the DestinyProgressionDefinition in static data.
		*/
    progressionHash: number;

    /**
		The amount of progress earned today for this progression.
		*/
    dailyProgress: number;

    /**
		If this progression has a daily limit, this is that limit.
		*/
    dailyLimit: number;

    /**
		The amount of progress earned toward this progression in the current week.
		*/
    weeklyProgress: number;

    /**
		If this progression has a weekly limit, this is that limit.
		*/
    weeklyLimit: number;

    /**
		This is the total amount of progress obtained overall for this
		progression (for instance, the total amount of Character Level experience earned)
		*/
    currentProgress: number;

    /**
		This is the level of the progression (for instance, the Character Level).
		*/
    level: number;

    /**
		This is the maximum possible level you can achieve for this progression (for example, the maximum
		character level obtainable)
		*/
    levelCap: number;

    /**
		Progressions define their levels in "steps".  Since the last step may be repeatable, the user may
		be at a higher level than the actual Step achieved in the progression.  Not necessarily useful, but
		potentially interesting for those cruising the API.  Relate this to the "steps" property of the DestinyProgression
		to see which step the user is on, if you care about that.  (Note that this is Content Version dependent since
		it refers to indexes.)
		*/
    stepIndex: number;

    /**
		The amount of progression (i.e. "Experience") needed to reach the next level of this Progression.
		Jeez, progression is such an overloaded word.
		*/
    progressToNextLevel: number;

    /**
		The total amount of progression (i.e. "Experience") needed in order to reach the next level.
		*/
    nextLevelAt: number;

    /**
		The number of resets of this progression you've executed this season, if applicable to this progression.
		*/
    currentResetCount?: number;

    /**
		Information about historical resets of this progression, if there is any data for it.
		*/
    seasonResets: World.DestinyProgressionResetEntry[];
  }

  /**
	Represents a season and the number of resets you had in that season.

	 We do not necessarily - even for progressions with resets - track it over all seasons.  So be
	 careful and check the season numbers being returned.
	*/
  export interface DestinyProgressionResetEntry {
    season: number;

    resets: number;
  }

  /**
	Used in a number of Destiny contracts to return data about an item stack and its quantity.
	Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returned
	will be 1.  If it's not... uh, let me know okay?  Thanks.
	*/
  export interface DestinyItemQuantity {
    /**
		The hash identifier for the item in question.  Use it to look up the item's DestinyInventoryItemDefinition.
		*/
    itemHash: number;

    /**
		If this quantity is referring to a specific instance of an item, this will have the item's instance ID.
		Normally, this will be null.
		*/
    itemInstanceId?: string;

    /**
		The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
		*/
    quantity: number;
  }

  export interface DyeReference {
    channelHash: number;

    dyeHash: number;
  }

  /**
	Represents the "Live" data that we can obtain about a Character's status with a specific Activity.
	This will tell you whether the character can participate in the activity, as well as some other
	basic mutable information.

	Meant to be combined with static DestinyActivityDefinition data for a full
	picture of the Activity.
	*/
  export interface DestinyActivity {
    /**
		The hash identifier of the Activity.  Use this to look up the DestinyActivityDefinition of the activity.
		*/
    activityHash: number;

    /**
		If true, then the activity should have a "new" indicator in the Director UI.
		*/
    isNew: boolean;

    /**
		If true, the user is allowed to lead a Fireteam into this activity.
		*/
    canLead: boolean;

    /**
		If true, the user is allowed to join with another Fireteam in this activity.
		*/
    canJoin: boolean;

    /**
		If true, we both have the ability to know that the user has completed this activity and
		they have completed it.  Unfortunately, we can't necessarily know this for all activities.  As such,
		this should probably only be used if you already know in advance which specific activities you wish to check.
		*/
    isCompleted: boolean;

    /**
		If true, the user should be able to see this activity.
		*/
    isVisible: boolean;

    /**
		The difficulty level of the activity, if applicable.
		*/
    displayLevel?: number;

    /**
		The recommended light level for the activity, if applicable.
		*/
    recommendedLight?: number;

    /**
		A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.
		*/
    difficultyTier: Globals.DestinyActivityDifficultyTier;
  }

  /**
	Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
	*/
  export interface DestinyStat {
    /**
		The hash identifier for the Stat.  Use it to look up the DestinyStatDefinition for static data about the stat.
		*/
    statHash: number;

    /**
		The current value of the Stat.
		*/
    value: number;

    /**
		The highest possible value for the stat, if we were able to compute it.  (I wouldn't necessarily trust this
		value right now.  I would like to improve its calculation in later iterations of the API.  Consider this
		a placeholder for desired future functionality)
		*/
    maximumValue: number;
  }

  /**
	I see you've come to find out more about Talent Nodes.  I'm so sorry.
	Talent Nodes are the conceptual, visual nodes that appear on Talent Grids.
	Talent Grids, in Destiny 1, were found on almost every instanced item: they had Nodes that could
	be activated to change the properties of the item.
	In Destiny 2, Talent Grids only exist for Builds/Subclasses, and while the basic concept is the same
	(Nodes can be activated once you've gained sufficient Experience on the Item, and provide effects),
	there are some new concepts from Destiny 1.  Examine DestinyTalentGridDefinition and its subordinates
	for more information.
	This is the "Live" information for the current status of a Talent Node on a specific item.
	Talent Nodes have many Steps, but only one can be active at any one time: and it is the Step that determines
	both the visual and the game state-changing properties that the Node provides.  Examine this and DestinyTalentNodeStepDefinition
	carefully.
	*IMPORTANT NOTE* Talent Nodes are, unfortunately, Content Version DEPENDENT.  Though they refer to hashes for Nodes and Steps,
	those hashes are not guaranteed to be immutable across content versions.  This is a source of great exasperation for me,
	but as a result anyone using Talent Grid data must ensure that the content version of their static content
	matches that of the server responses before showing or making decisions based on talent grid data.
	*/
  export interface DestinyTalentNode {
    /**
		The index of the Talent Node being referred to (an index into DestinyTalentGridDefinition.nodes[]).
		CONTENT VERSION DEPENDENT.
		*/
    nodeIndex: number;

    /**
		The hash of the Talent Node being referred to (in DestinyTalentGridDefinition.nodes).
		Deceptively CONTENT VERSION DEPENDENT.  We have no guarantee of the hash's immutability between content versions.
		*/
    nodeHash: number;

    /**
		An DestinyTalentNodeState enum value indicating the node's state: whether it can be activated or swapped, and why not
		if neither can be performed.
		*/
    state: Globals.DestinyTalentNodeState;

    /**
		If true, the node is activated: it's current step then provides its benefits.
		*/
    isActivated: boolean;

    /**
		The currently relevant Step for the node.  It is this step that has rendering data for the node
		and the benefits that are provided if the node is activated.  (the actual rules for benefits provided
		are extremely complicated in theory, but with how Talent Grids are being used in Destiny 2 you don't have to worry
		about a lot of those old Destiny 1 rules.)  This is an index into:
		DestinyTalentGridDefinition.nodes[nodeIndex].steps[stepIndex]
		*/
    stepIndex: number;

    /**
		If the node has material requirements to be activated, this is the list of those requirements.
		*/
    materialsToUpgrade: Definitions.DestinyMaterialRequirement[];

    /**
		The progression level required on the Talent Grid in order to be able to activate this talent node.
		Talent Grids have their own Progression - similar to Character Level, but in this case it is experience
		related to the item itself.
		*/
    activationGridLevel: number;

    /**
		If you want to show a progress bar or circle for how close this talent node is to being activate-able, this
		is the percentage to show.  It follows the node's underlying rules about when the progress bar should first
		show up, and when it should be filled.
		*/
    progressPercent: number;

    /**
		Whether or not the talent node is actually visible in the game's UI.  Whether you want to show it in your own
		UI is up to you!  I'm not gonna tell you who to sock it to.
		*/
    hidden: boolean;

    /**
		This property has some history.  A talent grid can provide stats on both the item it's related to and
		the character equipping the item.  This returns data about those stat bonuses.
		*/
    nodeStatsBlock: World.DestinyTalentNodeStatBlock;
  }

  /**
	This property has some history.  A talent grid can provide stats on both the item it's related to and
	the character equipping the item.  This returns data about those stat bonuses.
	*/
  export interface DestinyTalentNodeStatBlock {
    /**
		The stat benefits conferred when this talent node is activated for the current Step that is active on the node.
		*/
    currentStepStats: World.DestinyStat[];

    /**
		This is a holdover from the old days of Destiny 1, when a node could be activated multiple times, conferring
		multiple steps worth of benefits: you would use this property to show what activating the "next" step on the node
		would provide vs. what the current step is providing.
		While Nodes are currently not being used this way, the underlying system for this functionality still exists.
		I hesitate to remove this property while the ability for designers to make such a talent grid still exists.
		Whether you want to show it is up to you.
		*/
    nextStepStats: World.DestinyStat[];
  }

  /**
	Indicates the status of an "Unlock Flag" on a Character or Profile.

	These are individual bits of state that can be either set or not set, and sometimes provide interesting
	human-readable information in their related DestinyUnlockDefinition.
	*/
  export interface DestinyUnlockStatus {
    /**
		The hash identifier for the Unlock Flag.  Use to lookup DestinyUnlockDefinition for static data.
		Not all unlocks have human readable data - in fact, most don't.  But when they do, it can be very useful to show.
		Even if they don't have human readable data, you might be able to infer the meaning of an unlock flag
		with a bit of experimentation...
		*/
    unlockHash: number;

    /**
		Whether the unlock flag is set.
		*/
    isSet: boolean;
  }

  /**
	The results of a bulk Equipping operation performed through the Destiny API.
	*/
  export interface DestinyEquipItemResults {
    equipResults: World.DestinyEquipItemResult[];
  }

  /**
	The results of an Equipping operation performed through the Destiny API.
	*/
  export interface DestinyEquipItemResult {
    /**
		The instance ID of the item in question (all items that can be equipped must, but definition,
		be Instanced and thus have an Instance ID that you can use to refer to them)
		*/
    itemInstanceId: string;

    /**
		A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why.
		*/
    equipStatus: Globals.PlatformErrorCodes;
  }
}

export namespace Messages {
  export interface MessageConversation {
    conversationId: string;

    memberFromId: string;

    dateStarted: string;

    totalMessageCount: number;

    lastMessageSent: string;

    lastMessageId?: string;

    isGlobal?: boolean;

    isLocked?: boolean;

    invitationId?: string;

    starter: string;

    lastRead: string;

    status: number;

    subject: string;

    body: string;

    isAutoResponse: boolean;

    isRead: boolean;

    ownerEntityId: string;

    ownerEntityType: Globals.EntityType;

    targetMembershipId?: string;

    ownerEntityGroupType?: Globals.GroupType;

    systemId?: number;
  }

  export interface MessageConversationMember {
    membershipId: string;

    /**
		This property is deprecated and will always be false.
		*/
    isDeleted?: boolean;
  }

  export interface Message {
    messageId: string;

    conversationId: string;

    dateSent: string;

    subject: string;

    body: string;

    folderId?: number;

    systemId?: number;

    isAutoResponse?: boolean;

    memberFromId: string;

    isDeleted: boolean;

    invitationId?: string;
  }

  /**
	The information about the conversation, including members of that conversation.
	*/
  export interface MessageConversationDetail {
    detail: Messages.MessageConversation;

    participants: Messages.MessageConversationMember[];
  }
}

export namespace Requests {
  export interface SaveMessageForConversationRequest {
    conversationId: string;

    subject: string;

    body: string;
  }

  export interface UserIsTypingRequest {
    conversationId: string;
  }

  export interface CreateConversationRequest {
    membersToId: string[];

    subject: string;

    body: string;
  }

  export interface DestinyItemTransferRequest {
    itemReferenceHash: number;

    stackSize: number;

    transferToVault: boolean;

    itemId: string;

    characterId: string;

    membershipType: Globals.BungieMembershipType;
  }

  /**
	If you want to report a player causing trouble in a game, this request will let you report that player
	and the specific PGCR in which the trouble was caused, along with why.

	Please don't do this just because you dislike the person!  I mean, I know people will do it anyways, but
	can you like take a good walk, or put a curse on them or something?  Do me a solid and reconsider.

	Note that this request object doesn't have the actual PGCR ID nor your Account/Character ID in it.
	We will infer that information from your authentication information and the PGCR ID that you pass into
	the URL of the reporting endpoint itself.
	*/
  export interface DestinyReportOffensePgcrRequest {
    /**
		So you've decided to report someone instead of cursing them and their descendants.  Well, okay then.
		This is the category or categorie(s) of infractions for which you are reporting the user.
		These are hash identifiers that map to DestinyReportReasonCategoryDefinition entries.
		*/
    reasonCategoryHashes: number[];

    /**
		If applicable, provide a more specific reason(s) within the general category of problems provided by the
		reasonHash.  This is also an identifier for a reason.  All reasonHashes provided must be children
		of at least one the reasonCategoryHashes provided.
		*/
    reasonHashes: number[];

    /**
		Within the PGCR provided when calling the Reporting endpoint, this should be the character ID of
		the user that you thought was violating terms of use.  They must exist in the PGCR provided.
		*/
    offendingCharacterId: string;
  }
}

export namespace Entities {
  export interface EntityActionResult {
    entityId: string;

    result: Globals.PlatformErrorCodes;
  }

  export interface EntityList {
    entityIds: string[];
  }
}

export namespace Models {
  export interface GroupInvitationSearchResponse {
    groups: GroupsV2.GroupResponse[];

    results: Invitations.Invitation[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }

  export interface ContentTypeDescription {
    cType: string;

    name: string;

    contentDescription: string;

    previewImage: string;

    priority: number;

    reminder: string;

    properties: Models.ContentTypeProperty[];

    tagMetadata: Models.TagMetadataDefinition[];

    tagMetadataItems: { [key: string]: Models.TagMetadataItem };

    usageExamples: string[];

    showInContentEditor: boolean;

    typeOf: string;

    bindIdentifierToProperty: string;

    boundRegex: string;

    forceIdentifierBinding: boolean;

    allowComments: boolean;

    autoEnglishPropertyFallback: boolean;

    bulkUploadable: boolean;

    previews: Models.ContentPreview[];

    suppressCmsPath: boolean;

    propertySections: Models.ContentTypePropertySection[];
  }

  export interface ContentTypeProperty {
    name: string;

    readableName: string;

    value: string;

    propertyDescription: string;

    localizable: boolean;

    fallback: boolean;

    enabled: boolean;

    order: number;

    visible: boolean;

    isTitle: boolean;

    required: boolean;

    maxLength: number;

    maxByteLength: number;

    maxFileSize: number;

    regexp: string;

    validateAs: string;

    rssAttribute: string;

    visibleDependency: string;

    visibleOn: string;

    datatype: Globals.ContentPropertyDataTypeEnum;

    attributes: { [key: string]: string };

    childProperties: Models.ContentTypeProperty[];

    contentTypeAllowed: string;

    bindToProperty: string;

    boundRegex: string;

    representationSelection: { [key: string]: string };

    defaultValues: Models.ContentTypeDefaultValue[];

    isExternalAllowed: boolean;

    propertySection: string;

    weight: number;

    entitytype: string;

    isCombo: boolean;

    suppressProperty: boolean;

    legalContentTypes: string[];

    representationValidationString: string;

    minWidth: number;

    maxWidth: number;

    minHeight: number;

    maxHeight: number;

    isVideo: boolean;

    isImage: boolean;
  }

  export interface ContentTypeDefaultValue {
    whenClause: string;

    whenValue: string;

    defaultValue: string;
  }

  export interface TagMetadataDefinition {
    description: string;

    order: number;

    items: Models.TagMetadataItem[];

    datatype: string;

    name: string;

    isRequired: boolean;
  }

  export interface TagMetadataItem {
    description: string;

    tagText: string;

    groups: string[];

    isDefault: boolean;

    name: string;
  }

  export interface ContentPreview {
    name: string;

    path: string;

    itemInSet: boolean;

    setTag: string;

    setNesting: number;

    useSetId: number;
  }

  export interface ContentTypePropertySection {
    name: string;

    readableName: string;

    collapsed: boolean;
  }

  export interface ContentQueryPublic {
    contentTypes: string[];

    tag: string;

    notTag: string;

    sortBy: Globals.ContentSortBy;

    creationDate: Globals.ContentDateRange;

    modifiedDate: Globals.ContentDateRange;

    itemsPerPage: number;

    currentPage: number;

    requestContinuationToken: string;
  }

  export interface Activity {
    activityId: string;

    activityType: Globals.ActivityType;

    affectedItemId: string;

    affectedItemType: Globals.AffectedItemType;

    affectedItemDescription: string;

    creationDate: string;

    relatedItemId: string;

    relatedMembershipId: string;

    applicationId: number;

    gameVersion: number;
  }

  export interface IgnoreQuery {
    itemType: Globals.IgnoredItemType;

    itemsPerPage: number;

    currentPage: number;

    requestContinuationToken: string;
  }

  export interface PlayerGameDetails {
    Gamertag: string;

    GamesPlayed?: string;

    ServiceTag: string;

    EmblemUrl: string;

    PlayerModelUrl: string;

    PlayerModelAvatarUrl: string;

    Status: Globals.GameServiceStatus;
  }

  export interface CoreSettingsConfiguration {
    environment: string;

    systems: { [key: string]: Models.CoreSystem };

    ignoreReasons: Models.CoreSetting[];

    forumCategories: Models.CoreSetting[];

    groupAvatars: Models.CoreSetting[];

    destinyMembershipTypes: Models.CoreSetting[];

    recruitmentPlatformTags: Models.CoreSetting[];

    recruitmentMiscTags: Models.CoreSetting[];

    recruitmentActivities: Models.CoreSetting[];

    userContentLocales: Models.CoreSetting[];

    systemContentLocales: Models.CoreSetting[];

    clanBannerDecals: Models.CoreSetting[];

    clanBannerDecalColors: Models.CoreSetting[];

    clanBannerGonfalons: Models.CoreSetting[];

    clanBannerGonfalonColors: Models.CoreSetting[];

    clanBannerGonfalonDetails: Models.CoreSetting[];

    clanBannerGonfalonDetailColors: Models.CoreSetting[];

    clanBannerStandards: Models.CoreSetting[];

    destiny2CoreSettings: Models.Destiny2CoreSettings;
  }

  export interface CoreSystem {
    enabled: boolean;

    parameters: { [key: string]: string };
  }

  export interface CoreSetting {
    identifier: string;

    isDefault: boolean;

    displayName: string;

    summary: string;

    imagePath: string;

    childSettings: Models.CoreSetting[];
  }

  export interface Destiny2CoreSettings {
    collectionRootNode: number;

    badgesRootNode: number;

    recordsRootNode: number;

    medalsRootNode: number;

    currentRankProgressionHashes: number[];

    undiscoveredCollectibleImage: string;

    ammoTypeHeavyIcon: string;

    ammoTypeSpecialIcon: string;

    ammoTypePrimaryIcon: string;
  }
}

export namespace Legacy {
  export interface LegacyConversationV2 {
    conversationId: string;

    memberFromId: string;

    dateStarted: string;

    totalMessageCount: number;

    lastMessageSent: string;

    lastMessageId?: string;

    isGlobal?: boolean;

    isLocked?: boolean;

    memberToId?: string;

    invitationId?: string;

    ownerEntityType: number;

    ownerEntityId?: string;

    starter: string;

    lastRead: string;

    status: number;

    subject: string;

    body: string;

    isAutoResponse: boolean;

    membersToId: Messages.MessageConversationMember[];

    usersTo: User.GeneralUser[];

    invitationDetail: Invitations.InvitationResponseCodeDetail;

    isRead: boolean;
  }

  export interface LegacySaveMessageRequestV2 {
    membersToId: string[];

    conversationId: string;

    subject: string;

    body: string;
  }

  export interface LegacyConversationResponse {
    conversations: Legacy.LegacyConversationV2[];

    unreadCount: number;
  }

  export interface LegacyConversationMessageV2 {
    invitationDetail: Invitations.InvitationResponseCodeDetail;

    messageId: string;

    conversationId: string;

    dateSent: string;

    subject: string;

    body: string;

    folderId?: number;

    systemId?: number;

    isAutoResponse?: boolean;

    memberFromId: string;

    isDeleted: boolean;

    invitationId?: string;

    userFrom: User.GeneralUser;
  }
}

export namespace RealTimeEventing {
  export interface EventChannelResponse {
    seq: number;

    tab: number;

    /**
		The is set to true to let the client know it should not re-create this event channel right away.
		It has been replaced by another event channel from the same user.
		*/
    replaced: boolean;

    events: Notifications.RealTimeEventData[];
  }
}

export namespace Content {
  export interface ContentItemPublicContract {
    contentId: string;

    cType: string;

    cmsPath: string;

    creationDate: string;

    modifyDate: string;

    allowComments: boolean;

    hasAgeGate: boolean;

    minimumAge: number;

    ratingImagePath: string;

    author: User.GeneralUser;

    autoEnglishPropertyFallback: boolean;

    /**
		Firehose content is really a collection of metadata and "properties", which are
		the potentially-but-not-strictly localizable data that comprises the meat of
		whatever content is being shown.

		As Cole Porter would have crooned, "Anything Goes" with Firehose properties.
		They are most often strings, but they can theoretically be anything.  They are JSON
		encoded, and could be JSON structures, simple strings, numbers etc...  The Content Type
		of the item (cType) will describe the properties, and thus how they ought to be deserialized.
		*/
    properties: { [key: string]: any };

    representations: Content.ContentRepresentation[];

    tags: string[];

    commentSummary: Content.CommentSummary;
  }

  export interface ContentRepresentation {
    name: string;

    path: string;

    validationString: string;
  }

  export interface CommentSummary {
    topicId: string;

    commentCount: number;
  }
}

export namespace Careers {
  export interface CareerSetResponse {
    categories: Careers.CareerCategory[];
  }

  export interface CareerCategory {
    categoryName: string;

    tag: string;

    careers: Careers.CareerSummary[];
  }

  export interface CareerSummary {
    careerId: string;

    title: string;

    categoryTag: string;
  }

  export interface CareerResponse {
    careerId: string;

    title: string;

    category: string;

    categoryTag: string;

    tags: string[];

    detail: string;

    /**
		If actionLink has a value, that is the link you should go to if you click "Apply" on this career.
		Otherwise, you should initiate an email to be sent to the Bungie Careers email address.
		*/
    actionLink: string;
  }
}

export namespace Followers {
  export interface FollowingDecorations {
    displayName: string;

    avatarImage: string;

    sourceMissing: boolean;

    memberType: Globals.RuntimeGroupMemberType;

    allianceStatus: Globals.GroupAllianceStatus;
  }

  export interface LegacyFollowing {
    entityId: string;

    identifier: string;

    entityType: string;

    activityCount: number;
  }

  export interface FollowerResponse {
    user: User.GeneralUser;

    dateFollowed: string;
  }
}

export namespace Activities {
  export interface DestinyItemActivityRecord {
    activityId: string;

    details: Activities.DestinyItemActivityDetails;

    permission: Activities.AwaPermissionRecord;

    application: Applications.ApplicationSummary;
  }

  export interface DestinyItemActivityDetails {
    activityType: Globals.ActivityType;

    activityDescription: string;

    creationDate: string;

    membershipId: string;

    itemSummary: Activities.ItemSummary;

    secondItemSummary: Activities.ItemSummary;

    characterId: string;

    characterSummary: Activities.CharacterSummary;

    membershipType: Globals.BungieMembershipType;

    destinyMembershipId: string;

    stackSize: number;

    /**
		If the operation completed, the outcome field contains the enumeration indicating
		if the operation was successful or failed.
		*/
    outcome?: Globals.PlatformErrorCodes;

    /**
		The player facing text related to the error code in the outcome field.
		*/
    outcomeDescription: string;
  }

  export interface ItemSummary {
    itemReferenceHash: number;

    iconPath: string;

    name: string;

    itemType: string;
  }

  export interface CharacterSummary {
    iconPath: string;

    className: string;

    light: number;

    level: number;
  }

  export interface AwaPermissionRecord {
    /**
		Type of advanced write action.
		*/
    type: Globals.AwaType;

    /**
		Item instance ID the action shall be applied to. This is optional for all but a new
		AwaType values. Rule of thumb is to provide the item instance ID if one is available.
		*/
    itemInstanceId?: string;

    /**
		Destiny membership type of the account to modify.
		*/
    destinyMembershipType: Globals.BungieMembershipType;

    /**
		Destiny membership ID of the account to modify.
		*/
    destinyMembershipId: string;

    /**
		Destiny character ID, if applicable, that will be affected by the action.
		*/
    characterId?: string;

    /**
		The correlation ID of the approved request.
		*/
    correlationId: string;

    /**
		The name of the device that approved the request.
		*/
    deviceName: string;

    /**
		Date and time the request was approved.
		*/
    approvalDate: string;

    /**
		Date and time when the request expires.
		*/
    expiration: string;

    /**
		The maximum number of times a permission token can be used.
		*/
    maxNumberOfUses: number;
  }

  /**
	Represents the public-facing status of an activity: any data about what is currently active in the
	Activity, regardless of an individual character's progress in it.
	*/
  export interface DestinyPublicActivityStatus {
    /**
		Active Challenges for the activity, if any - represented as hashes for DestinyObjectiveDefinitions.
		*/
    challengeObjectiveHashes: number[];

    /**
		The active modifiers on this activity, if any - represented as hashes for DestinyActivityModifierDefinitions.
		*/
    modifierHashes: number[];

    /**
		If the activity itself provides any specific "mock" rewards, this will be the items and their quantity.

		Why "mock", you ask?  Because these are the rewards as they are represented in the tooltip of the Activity.

		These are often pointers to fake items that look good in a tooltip, but represent an abstract concept of
		what you will get for a reward rather than the specific items you may obtain.
		*/
    rewardTooltipItems: World.DestinyItemQuantity[];
  }
}

export namespace Friends {
  export interface LegacyFriend {
    credentialType: Globals.BungieCredentialType;

    platform: string;

    platformDisplayName: string;

    bungieNetMembershipId: string;

    statusCode: Globals.FriendOnlineStatus;

    status: string;

    imagePath: string;

    destinyMembershipId: string;
  }

  export interface Friend {
    friendType: Globals.BungieCredentialType;

    /**
		The user info card of this Friend entry.  Tiger memberships with hard links to relevant credentials will be populated here.
		*/
    platformUserInfo: User.UserInfoCard;

    /**
		If public, the bungie.net membership details for this Friend entry
		*/
    bungieNetUserInfo: User.GeneralUser;

    /**
		The presence status of this friend
		*/
    onlineStatus: Globals.FriendOnlineStatus;

    /**
		The presence string (usually, what game they are currently playing)
		*/
    presenceString: string;

    /**
		More details info about the game the friend is playing if available.
		*/
    gameStatus: string;
  }
}

export namespace Core {
  /**
	Use when you need to send a date and string together across the wire.
	*/
  export interface StringDatePackage {
    Data: string;

    Date: string;
  }

  export interface BungieNetVersionInfo {
    BuildNumber: string;

    FullVersionString: string;

    IsLocalBuild: boolean;

    DestinyContentVersionString: string;
  }

  export interface GlobalAlert {
    AlertKey: string;

    AlertHtml: string;

    AlertTimestamp: string;

    AlertLink: string;

    AlertLevel: Globals.GlobalAlertLevel;

    AlertType: Globals.GlobalAlertType;

    StreamInfo: Core.StreamInfo;
  }

  export interface StreamInfo {
    ChannelName: string;
  }

  export interface ScheduledBroadcastNotification {
    Id: string;

    BroadcastTitle: string;

    BroadcastMessage: string;

    BroadcastLink: string;

    BroadcastTime: string;
  }
}

export namespace Forums {
  /**
	This response object returns information about edits made to a specific Forum Post.

	 This should be useful for admins/support/ninjas who need this information.
	*/
  export interface PostRevisionHistoryResponse {
    postId: string;

    revisions: Forums.PostRevisionHistoryEntry[];
  }

  /**
	A specific edit made to a forum post.
	*/
  export interface PostRevisionHistoryEntry {
    editId: string;

    editorMembershipId: string;

    editorDisplayName: string;

    subject: string;

    body: string;

    urlLinkOrImage: string;

    category: Globals.ForumPostCategoryEnums;

    flags: Globals.ForumFlagsEnum;

    editDate: string;

    playerSupportFlags?: number;

    playerSupportMetadata: string;

    awaitingApproval: boolean;

    forumId?: number;
  }
}

export namespace Tokens {
  export interface TokenSupportDetails {
    tokenId: string;

    code: string;

    claimStateLastUpdated?: string;

    currentUseCount: number;

    dateCreated: string;

    dateProvisioned?: string;

    isUnlimitedUse: boolean;

    isValid: boolean;

    maximumUseCount: number;

    offerKey: string;

    offerHideInHistory: boolean;

    offerDateAdded?: string;

    campaignName: string;

    campaignDateAdded?: string;

    claims: Queries.SearchResultTokenSupportClaimEntry;
  }

  export interface TokenSupportClaimEntry {
    membershipId: string;

    membershipType: Globals.BungieMembershipType;

    displayName: string;

    dateClaimed: string;
  }

  export interface EververseChangeEvent {
    EventId: string;

    Timestamp: string;

    ItemHash: string;

    ItemDisplayName: string;

    ItemDisplayDescription: string;

    NewQuantity: number;

    PreviousQuantity: number;

    EventClassification: Globals.EververseChangeEventClassification;
  }

  export interface EververseVendorPurchaseEvent {
    EventId: string;

    Timestamp: string;

    ItemHash: string;

    PurchasedItemDisplayName: string;

    PurchasedItemDisplayDescription: string;

    PurchasedItemQuantity: number;

    EventClassification: Globals.EververseVendorPurchaseEventClassification;

    PaidCosts: Tokens.EververseVendorPaidCostPair[];
  }

  export interface EververseVendorPaidCostPair {
    ItemHash: string;

    ItemDisplayName: string;

    ItemDisplayDescription: string;

    Quantity: number;
  }

  export interface EververseCashout {
    CurrentSilverBalance: number;

    BungieGrantedSilver: number;

    PlatformGrantedSilver: number;

    TotalSilverSpent: number;

    CashoutQuantity: number;
  }

  export interface RAFBondDetailResponse {
    requestingUser: User.GeneralUser;

    requestingMembershipId: string;

    requestingMembershipType: Globals.BungieMembershipType;

    requestingUserIsVeteran: boolean;

    bonds: Tokens.RAFBondDetails[];
  }

  /**
	The external-facing contract for Refer-a-friend information.
	*/
  export interface RAFBondDetails {
    bondedPlayer: User.GeneralUser;

    rafId: string;

    targetDeviceType: Globals.ClientDeviceType;

    bondedPlayerMembershipId?: string;

    bondedPlayerMembershipType?: Globals.BungieMembershipType;

    isVeteran: boolean;

    dateCreated: string;

    bondStatus: Globals.RAFBondState;
  }

  export interface RAFEligibilityResponse {
    MembershipId?: string;

    MembershipType?: Globals.BungieMembershipType;

    DisplayName: string;

    VeteranEligibilityStatus: Globals.RAFEligibility;

    NewPlayerEligibilityStatus: Globals.RAFEligibility;
  }

  export interface RAFVeteranRewardStatusResponse {
    MembershipId: string;

    MembershipType: Globals.BungieMembershipType;

    RewardsEarned: number;

    RewardsApplied: number;
  }

  export interface RAFQuestProgressResponse {
    MembershipId?: string;

    MembershipType?: Globals.BungieMembershipType;

    CurrentStep: Globals.RAFQuestStepsForsaken;

    IsVeteran: boolean;
  }
}

export namespace Triumphs {
  /**
	This class should be considered ephimeral: it is almost certain that this will go away after the summer.

	Don't write any permanent systems against it, k thanks
	*/
  export interface DestinyTriumphsResponse {
    categories: Triumphs.DestinyTriumphsCategory[];

    rewards: Triumphs.DestinyTriumphsReward[];

    discountReward: Triumphs.DestinyTriumphsDiscountReward;

    displayProperties: Common.DestinyDisplayPropertiesDefinition;

    backgroundImage: string;

    startDate: string;

    endDate: string;

    discountCodeExpiresDate: string;

    generateCodeEndDate: string;

    eventStartDate: string;

    eventEndDate: string;

    currentPoints: number;

    unclaimedPoints: number;

    maximumPoints: number;

    faqContentId: string;

    helpContentId: string;

    faqLink: string;

    helpLink: string;

    nameplateImage: string;

    upgradedNameplateImage: string;
  }

  export interface DestinyTriumphsCategory {
    displayProperties: Common.DestinyDisplayPropertiesDefinition;

    records: Triumphs.DestinyTriumphsRecord[];
  }

  export interface DestinyTriumphsRecord {
    displayProperties: Common.DestinyDisplayPropertiesDefinition;

    progressCaption: string;

    difficulty: Globals.DestinyActivityDifficultyTier;

    pointValue: number;

    state: Globals.DestinyTriumphRecordState;

    hasProgressBar: boolean;

    currentProgress?: number;

    completedAtProgress?: number;

    furthestProgressCharacterId?: string;

    /**
		IF this is populated, it is the live data for a checklist associated with this record.
		Use its contents to look up the corresponding DestinyChecklistDefinition and show some cool data.
		*/
    checklist: Checklists.DestinyChecklistStatus;

    /**
		If there are checklist details to view for this triumph, this will be populatd with the string to use
		for showing the button to link to the checklist details.
		*/
    viewActionString: string;
  }

  export interface DestinyTriumphsReward {
    displayProperties: Common.DestinyDisplayPropertiesDefinition;

    pointValueThreshold: number;

    earned: boolean;
  }

  export interface DestinyTriumphsDiscountReward {
    itemUrl: string;

    imagePath: string;

    pointValueThreshold: number;

    playerDiscountCode: string;

    claimedDate?: string;

    state: Globals.DestinyTriumphsDiscountState;
  }
}

export namespace Common {
  /**
	Many Destiny*Definition contracts - the "first order" entities of Destiny
	that have their own tables in the Manifest Database - also have displayable
	information.  This is the base class for that display information.
	*/
  export interface DestinyDisplayPropertiesDefinition {
    description: string;

    name: string;

    /**
		Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity.
		For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.

		But usually, it will be a small square image that you can use as... well, an icon.

		They are currently represented as 96px x 96px images.
		*/
    icon: string;

    hasIcon: boolean;
  }

  export interface CEDictionaryStringString {
    Comparer: any;

    Count: number;

    Keys: any;

    Values: any;

    Item: string;
  }
}

export namespace Checklists {
  export interface DestinyChecklistStatus {
    /**
		The unique identifier of the checklist being referred to.
		*/
    checklistHash: number;

    entries: { [key: number]: boolean };
  }
}

export namespace Definitions {
  /**
	Provides common properties for destiny definitions.
	*/
  export interface DestinyDefinition {
    /**
		The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally.

		When entities refer to each other in Destiny content, it is this hash that they are referring to.
		*/
    hash: number;

    /**
		The index of the entity as it was found in the investment tables.
		*/
    index: number;

    /**
		If this is true, then there is an entity with this identifier/type combination, but BNet is
		not yet allowed to show it.  Sorry!
		*/
    redacted: boolean;
  }

  /**
	Many actions relating to items require you to expend materials:
	- Activating a talent node
	- Inserting a plug into a socket
	The items will refer to material requirements by a materialRequirementsHash in these cases, and this
	is the definition for those requirements in terms of the item required, how much of it is required and other
	interesting info.
	This is one of the rare/strange times where a single contract class is used both in definitions *and*
	in live data response contracts.  I'm not sure yet whether I regret that.
	*/
  export interface DestinyMaterialRequirement {
    /**
		The hash identifier of the material required.  Use it to look up the material's DestinyInventoryItemDefinition.
		*/
    itemHash: number;

    /**
		If True, the material will be removed from the character's inventory when the action is performed.
		*/
    deleteOnAction: boolean;

    /**
		The amount of the material required.
		*/
    count: number;

    /**
		If True, this requirement is "silent": don't bother showing it in a material requirements display.
		I mean, I'm not your mom: I'm not going to tell you you *can't* show it.  But we won't show it in our UI.
		*/
    omitFromRequirements: boolean;
  }

  export interface DestinyHistoricalStatsDefinition {
    /**
		Unique programmer friendly ID for this stat
		*/
    statId: string;

    /**
		Statistic group
		*/
    group: Globals.DestinyStatsGroupType;

    /**
		Time periods the statistic covers
		*/
    periodTypes: Globals.PeriodType[];

    /**
		Game modes where this statistic can be reported.
		*/
    modes: Globals.DestinyActivityModeType[];

    /**
		Category for the stat.
		*/
    category: Globals.DestinyStatsCategoryType;

    /**
		Display name
		*/
    statName: string;

    /**
		Display name abbreviated
		*/
    statNameAbbr: string;

    /**
		Description of a stat if applicable.
		*/
    statDescription: string;

    /**
		Unit, if any, for the statistic
		*/
    unitType: Globals.UnitType;

    /**
		Optional URI to an icon for the statistic
		*/
    iconImage: string;

    /**
		Optional icon for the statistic
		*/
    mergeMethod?: Globals.DestinyStatsMergeMethod;

    /**
		Localized Unit Name for the stat.
		*/
    unitLabel: string;

    /**
		Weight assigned to this stat indicating its relative impressiveness.
		*/
    weight: number;

    /**
		The tier associated with this medal - be it implicitly or explicitly.
		*/
    medalTierHash?: number;
  }

  /**
	The results of a search for Destiny content.  This will be improved on over time,
	I've been doing some experimenting to see what might be useful.
	*/
  export interface DestinyEntitySearchResult {
    /**
		A list of suggested words that might make for better search results,
		based on the text searched for.
		*/
    suggestedWords: string[];

    /**
		The items found that are matches/near matches for the searched-for term,
		sorted by something vaguely resembling "relevance".  Hopefully this will
		get better in the future.
		*/
    results: Queries.SearchResultDestinyEntitySearchResultItem;
  }

  /**
	An individual Destiny Entity returned from the entity search.
	*/
  export interface DestinyEntitySearchResultItem {
    /**
		The hash identifier of the entity.  You will use this to look up the DestinyDefinition
		relevant for the entity found.
		*/
    hash: number;

    /**
		The type of entity, returned as a string matching the DestinyDefinition's contract class name.
		You'll have to have your own mapping from class names to actually looking up those definitions
		in the manifest databases.
		*/
    entityType: string;

    /**
		Basic display properties on the entity, so you don't have to look up the definition to show
		basic results for the item.
		*/
    displayProperties: Common.DestinyDisplayPropertiesDefinition;

    /**
		The ranking value for sorting that we calculated using our relevance formula.  This
		will hopefully get better with time and iteration.
		*/
    weight: number;
  }
}

export namespace Profiles {
  /**
	For now, this isn't used for much: it's a record of the recent refundable purchases
	that the user has made.  In the future, it could be used for providing refunds/buyback via the API.
	Wouldn't that be fun?
	*/
  export interface DestinyVendorReceiptsComponent {
    /**
		The receipts for refundable purchases made at a vendor.
		*/
    receipts: Vendors.DestinyVendorReceipt[];
  }

  /**
	The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
	*/
  export interface DestinyProfileComponent {
    /**
		If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains
		that information.
		*/
    userInfo: User.UserInfoCard;

    /**
		The last time the user played with any character on this Profile.
		*/
    dateLastPlayed: string;

    /**
		If you want to know what expansions they own, this will contain that data.
		*/
    versionsOwned: Globals.DestinyGameVersions;

    /**
		A list of the character IDs, for further querying on your part.
		*/
    characterIds: string[];
  }

  /**
	The set of progression-related information that applies at a Profile-wide level for
	your Destiny experience.  This differs from the Jimi Hendrix Experience because there's
	less guitars on fire.  Yet.  #spoileralert?

	This will include information such as Checklist info.
	*/
  export interface DestinyProfileProgressionComponent {
    /**
		The set of checklists that can be examined on a profile-wide basis, keyed by the hash identifier
		of the Checklist (DestinyChecklistDefinition)

		For each checklist returned, its value is itself a Dictionary keyed by the checklist's hash identifier
		with the value being a boolean indicating if it's been discovered yet.
		*/
    checklists: { [key: number]: { [key: number]: boolean } };
  }
}

export namespace Vendors {
  /**
	If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile.
	These expire after a configurable period of time, but until then can be used to get refunds on items.
	BNet does not provide the ability to refund a purchase *yet*, but you know.
	*/
  export interface DestinyVendorReceipt {
    /**
		The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.
		*/
    currencyPaid: World.DestinyItemQuantity[];

    /**
		The item that was received, and its quantity.
		*/
    itemReceived: World.DestinyItemQuantity;

    /**
		The unlock flag used to determine whether you still have the purchased item.
		*/
    licenseUnlockHash: number;

    /**
		The ID of the character who made the purchase.
		*/
    purchasedByCharacterId: string;

    /**
		Whether you can get a refund, and what happens in order for the refund to be received.
		See the DestinyVendorItemRefundPolicy enum for details.
		*/
    refundPolicy: Globals.DestinyVendorItemRefundPolicy;

    /**
		The identifier of this receipt.
		*/
    sequenceNumber: number;

    /**
		The seconds since epoch at which this receipt is rendered invalid.
		*/
    timeToExpiration: string;

    /**
		The date at which this receipt is rendered invalid.
		*/
    expiresOn: string;
  }

  /**
	This component returns references to all of the Vendors in the response, grouped by categorizations
	that Bungie has deemed to be interesting, in the order in which both the groups and the vendors within
	that group should be rendered.
	*/
  export interface DestinyVendorGroupComponent {
    /**
		The ordered list of groups being returned.
		*/
    groups: Vendors.DestinyVendorGroup[];
  }

  /**
	Represents a specific group of vendors that can be rendered in the recommended order.

	How do we figure out this order?  It's a long story, and will likely get more complicated over time.
	*/
  export interface DestinyVendorGroup {
    vendorGroupHash: number;

    /**
		The ordered list of vendors within a particular group.
		*/
    vendorHashes: number[];
  }

  /**
	This component contains essential/summary information about the vendor.
	*/
  export interface DestinyVendorComponent {
    /**
		If True, you can purchase from the Vendor.

		Theoretically, Vendors can be restricted from selling items.  In practice, none do that (yet?).
		*/
    canPurchase: boolean;

    /**
		If the Vendor has a related Reputation, this is the Progression data that represents the character's
		Reputation level with this Vendor.
		*/
    progression: World.DestinyProgression;

    /**
		An index into the vendor definition's "locations" property array, indicating which location they are at
		currently.  If -1, then the vendor has no known location (and you may choose not to show them in your UI
		as a result.  I mean, it's your bag honey)
		*/
    vendorLocationIndex: number;

    /**
		If this vendor has a seasonal rank, this will be the calculated value of that rank.  How nice is that?
		I mean, that's pretty sweeet.  It's a whole 32 bit integer.
		*/
    seasonalRank?: number;

    vendorHash: number;

    nextRefreshDate: string;

    enabled: boolean;
  }

  /**
	A vendor can have many categories of items that they sell.  This component will return the category information
	for available items, as well as the index into those items in the user's sale item list.

	Note that, since both the category and items are indexes, this data is Content Version dependent.  Be sure to check
	that your content is up to date before using this data.  This is an unfortunate, but permanent, limitation of
	Vendor data.
	*/
  export interface DestinyVendorCategoriesComponent {
    /**
		The list of categories for items that the vendor sells, in rendering order.

		These categories each point to a "display category" in the displayCategories property of the DestinyVendorDefinition,
		as opposed to the other categories.
		*/
    categories: Vendors.DestinyVendorCategory[];
  }

  /**
	Information about the category and items currently sold in that category.
	*/
  export interface DestinyVendorCategory {
    /**
		An index into the DestinyVendorDefinition.displayCategories property, so you can grab the display data for this category.
		*/
    displayCategoryIndex: number;

    /**
		An ordered list of indexes into items being sold in this category (DestinyVendorDefinition.itemList)
		which will contain more information about the items being sold themselves.  Can also be used to index into
		DestinyVendorSaleItemComponent data, if you asked for that data to be returned.
		*/
    itemIndexes: number[];
  }

  /**
	Request this component if you want the details about an item being sold in relation to the character
	making the request: whether the character can buy it,
	whether they can afford it, and other data related to purchasing the item.

	Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as
	ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.
	*/
  export interface DestinyVendorSaleItemComponent {
    /**
		A flag indicating whether the requesting character can buy the item, and if not the reasons why the character can't buy it.
		*/
    saleStatus: Globals.VendorItemStatus;

    /**
		If you can't buy the item due to a complex character state, these will be hashes for
		DestinyUnlockDefinitions that you can check to see messages regarding the failure (if the unlocks
		have human readable information: it is not guaranteed that Unlocks will have human readable strings, and
		your application will have to handle that)

		Prefer using failureIndexes instead.  These are provided for informational purposes, but have largely
		been supplanted by failureIndexes.
		*/
    requiredUnlocks: number[];

    /**
		If any complex unlock states are checked in determining purchasability, these will
		be returned here along with the status of the unlock check.

		Prefer using failureIndexes instead.  These are provided for informational purposes, but have largely
		been supplanted by failureIndexes.
		*/
    unlockStatuses: World.DestinyUnlockStatus[];

    /**
		Indexes in to the "failureStrings" lookup table in DestinyVendorDefinition for the given Vendor.
		Gives some more reliable failure information for why you can't purchase an item.

		It is preferred to use these over requiredUnlocks and unlockStatuses: the latter are provided
		mostly in case someone can do something interesting with it that I didn't anticipate.
		*/
    failureIndexes: number[];

    /**
		A flags enumeration value representing the current state of any "state modifiers" on the item being sold.
		These are meant to correspond with some sort of visual indicator as to the augmentation: for instance, if an
		item is on sale or if you already own the item in question.

		Determining how you want to represent these in your own app (or if you even want to) is an exercise left for the reader.
		*/
    augments: Globals.DestinyVendorItemState;

    vendorItemIndex: number;

    itemHash: number;

    overrideStyleItemHash?: number;

    quantity: number;

    costs: World.DestinyItemQuantity[];

    overrideNextRefreshDate?: string;
  }

  /**
	This component contains essential/summary information about the vendor from the perspective of a
	character-agnostic view.
	*/
  export interface DestinyPublicVendorComponent {
    vendorHash: number;

    nextRefreshDate: string;

    enabled: boolean;
  }

  /**
	Has character-agnostic information about an item being sold by a vendor.

	Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as
	ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.  For most of these,
	however, you'll have to ask for it in context of a specific character.
	*/
  export interface DestinyPublicVendorSaleItemComponent {
    vendorItemIndex: number;

    itemHash: number;

    overrideStyleItemHash?: number;

    quantity: number;

    costs: World.DestinyItemQuantity[];

    overrideNextRefreshDate?: string;
  }
}

export namespace Components {
  export interface SingleComponentResponseDestinyVendorReceiptsComponent {
    data: Profiles.DestinyVendorReceiptsComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyInventoryComponent {
    data: Inventory.DestinyInventoryComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyProfileComponent {
    data: Profiles.DestinyProfileComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyKiosksComponent {
    data: Kiosks.DestinyKiosksComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyPlugSetsComponent {
    data: PlugSets.DestinyPlugSetsComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyProfileProgressionComponent {
    data: Profiles.DestinyProfileProgressionComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyPresentationNodesComponent {
    data: Presentation.DestinyPresentationNodesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyProfileRecordsComponent {
    data: Records.DestinyProfileRecordsComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyProfileCollectiblesComponent {
    data: Collectibles.DestinyProfileCollectiblesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCharacterComponent {
    data: { [key: string]: Characters.DestinyCharacterComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyInventoryComponent {
    data: { [key: string]: Inventory.DestinyInventoryComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCharacterProgressionComponent {
    data: { [key: string]: Characters.DestinyCharacterProgressionComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCharacterRenderComponent {
    data: { [key: string]: Characters.DestinyCharacterRenderComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCharacterActivitiesComponent {
    data: { [key: string]: Characters.DestinyCharacterActivitiesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyKiosksComponent {
    data: { [key: string]: Kiosks.DestinyKiosksComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyPlugSetsComponent {
    data: { [key: string]: PlugSets.DestinyPlugSetsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemObjectivesComponent {
    data: { [key: number]: Items.DestinyItemObjectivesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyPresentationNodesComponent {
    data: { [key: string]: Presentation.DestinyPresentationNodesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCharacterRecordsComponent {
    data: { [key: string]: Records.DestinyCharacterRecordsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCollectiblesComponent {
    data: { [key: string]: Collectibles.DestinyCollectiblesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemInstanceComponent {
    data: { [key: string]: Items.DestinyItemInstanceComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemPerksComponent {
    data: { [key: string]: Items.DestinyItemPerksComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemRenderComponent {
    data: { [key: string]: Items.DestinyItemRenderComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemStatsComponent {
    data: { [key: string]: Items.DestinyItemStatsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemSocketsComponent {
    data: { [key: string]: Items.DestinyItemSocketsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemTalentGridComponent {
    data: { [key: string]: Items.DestinyItemTalentGridComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemPlugComponent {
    data: { [key: number]: Items.DestinyItemPlugComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyItemObjectivesComponent {
    data: { [key: string]: Items.DestinyItemObjectivesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt64DestinyCurrenciesComponent {
    data: { [key: string]: Inventory.DestinyCurrenciesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCharacterComponent {
    data: Characters.DestinyCharacterComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCharacterProgressionComponent {
    data: Characters.DestinyCharacterProgressionComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCharacterRenderComponent {
    data: Characters.DestinyCharacterRenderComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCharacterActivitiesComponent {
    data: Characters.DestinyCharacterActivitiesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCharacterRecordsComponent {
    data: Records.DestinyCharacterRecordsComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCollectiblesComponent {
    data: Collectibles.DestinyCollectiblesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyCurrenciesComponent {
    data: Inventory.DestinyCurrenciesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemComponent {
    data: Items.DestinyItemComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemInstanceComponent {
    data: Items.DestinyItemInstanceComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemObjectivesComponent {
    data: Items.DestinyItemObjectivesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemPerksComponent {
    data: Items.DestinyItemPerksComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemRenderComponent {
    data: Items.DestinyItemRenderComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemStatsComponent {
    data: Items.DestinyItemStatsComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemTalentGridComponent {
    data: Items.DestinyItemTalentGridComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyItemSocketsComponent {
    data: Items.DestinyItemSocketsComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyVendorGroupComponent {
    data: Vendors.DestinyVendorGroupComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyVendorComponent {
    data: { [key: number]: Vendors.DestinyVendorComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyVendorCategoriesComponent {
    data: { [key: number]: Vendors.DestinyVendorCategoriesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32PersonalDestinyVendorSaleItemSetComponent {
    data: {
      [key: number]: Responses.PersonalDestinyVendorSaleItemSetComponent;
    };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemInstanceComponent {
    data: { [key: number]: Items.DestinyItemInstanceComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemPerksComponent {
    data: { [key: number]: Items.DestinyItemPerksComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemRenderComponent {
    data: { [key: number]: Items.DestinyItemRenderComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemStatsComponent {
    data: { [key: number]: Items.DestinyItemStatsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemSocketsComponent {
    data: { [key: number]: Items.DestinyItemSocketsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemTalentGridComponent {
    data: { [key: number]: Items.DestinyItemTalentGridComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyItemObjectivesComponent {
    data: { [key: number]: Items.DestinyItemObjectivesComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyVendorComponent {
    data: Vendors.DestinyVendorComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface SingleComponentResponseDestinyVendorCategoriesComponent {
    data: Vendors.DestinyVendorCategoriesComponent;

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseInt32DestinyVendorSaleItemComponent {
    data: { [key: number]: Vendors.DestinyVendorSaleItemComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyPublicVendorComponent {
    data: { [key: number]: Vendors.DestinyPublicVendorComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32PublicDestinyVendorSaleItemSetComponent {
    data: { [key: number]: Responses.PublicDestinyVendorSaleItemSetComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemInstanceComponent {
    data: { [key: number]: Items.DestinyItemInstanceComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemPerksComponent {
    data: { [key: number]: Items.DestinyItemPerksComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemRenderComponent {
    data: { [key: number]: Items.DestinyItemRenderComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemStatsComponent {
    data: { [key: number]: Items.DestinyItemStatsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemSocketsComponent {
    data: { [key: number]: Items.DestinyItemSocketsComponent };

    privacy: Globals.ComponentPrivacySetting;
  }

  export interface DictionaryComponentResponseUInt32DestinyItemTalentGridComponent {
    data: { [key: number]: Items.DestinyItemTalentGridComponent };

    privacy: Globals.ComponentPrivacySetting;
  }
}

export namespace Inventory {
  /**
	A list of minimal information for items in an inventory: be it a character's inventory, or a Profile's inventory.
	(Note that the Vault is a collection of inventory buckets in the Profile's inventory)

	Inventory Items returned here are in a flat list, but importantly they have a bucketHash property that
	indicates the specific inventory bucket that is holding them.  These buckets constitute things like the separate
	sections of the Vault, the user's inventory slots, etc.  See DestinyInventoryBucketDefinition for more info.
	*/
  export interface DestinyInventoryComponent {
    /**
		The items in this inventory.  If you care to bucket them, use the item's bucketHash property to group
		them.
		*/
    items: Items.DestinyItemComponent[];
  }

  /**
	This component provides a quick lookup of every item the requested character has and how much of that item they have.

	Requesting this component will allow you to circumvent manually putting together the list of which currencies you have
	for the purpose of testing currency requirements on an item being purchased, or operations that have costs.

	You *could* figure this out yourself by doing a GetCharacter or GetProfile request and forming your own lookup table, but
	that is inconvenient enough that this feels like a worthwhile (and optional) redundency.  Don't bother requesting it if you
	have already created your own lookup from prior GetCharacter/GetProfile calls.
	*/
  export interface DestinyCurrenciesComponent {
    /**
		A dictionary - keyed by the item's hash identifier (DestinyInventoryItemDefinition), and whose value is the amount of
		that item you have across all available inventory buckets for purchasing.

		This allows you to see whether the requesting character can afford any given purchase/action without having to re-create
		this list itself.
		*/
    itemQuantities: { [key: number]: number };
  }
}

export namespace Items {
  /**
	The base item component, filled with properties that are generally useful to know in any item request or that
	don't feel worthwhile to put in their own component.
	*/
  export interface DestinyItemComponent {
    /**
		The identifier for the item's definition, which is where most of the useful static information for the item
		can be found.
		*/
    itemHash: number;

    /**
		If the item is instanced, it will have an instance ID.  Lack of an instance ID implies
		that the item has no distinct local qualities aside from stack size.
		*/
    itemInstanceId?: string;

    /**
		The quantity of the item in this stack.  Note that Instanced items cannot stack.
		If an instanced item, this value will always be 1 (as the stack has exactly one item in it)
		*/
    quantity: number;

    /**
		If the item is bound to a location, it will be specified in this enum.
		*/
    bindStatus: Globals.ItemBindStatus;

    /**
		An easy reference for where the item is located.  Redundant if you got the item
		from an Inventory, but useful when making detail calls on specific items.
		*/
    location: Globals.ItemLocation;

    /**
		The hash identifier for the specific inventory bucket in which the item is located.
		*/
    bucketHash: number;

    /**
		If there is a known error state that would cause this item to not be transferable, this Flags enum will
		indicate all of those error states.  Otherwise, it will be 0 (CanTransfer).
		*/
    transferStatus: Globals.TransferStatuses;

    /**
		If the item can be locked, this will indicate that state.
		*/
    lockable: boolean;

    /**
		A flags enumeration indicating the transient/custom states of the item that affect how it is rendered:
		whether it's tracked or locked for example, or whether it has a masterwork plug inserted.
		*/
    state: Globals.ItemState;

    /**
		If populated, this is the hash of the item whose icon (and other secondary styles, but *not* the human readable
		strings) should override whatever icons/styles are on the item being sold.

		If you don't do this, certain items whose styles are being overridden by socketed items - such as the "Recycle Shader"
		item - would show whatever their default icon/style is, and it wouldn't be pretty or look accurate.
		*/
    overrideStyleItemHash?: number;

    /**
		If the item can expire, this is the date at which it will/did expire.
		*/
    expirationDate?: string;
  }

  /**
	Items can have objectives and progression.  When you request this block, you will obtain
	information about any Objectives and progression tied to this item.
	*/
  export interface DestinyItemObjectivesComponent {
    /**
		If the item has a hard association with objectives, your progress on them
		will be defined here.

		Objectives are our standard way to describe a series of tasks that have to be completed for a reward.
		*/
    objectives: Quests.DestinyObjectiveProgress[];

    /**
		I may regret naming it this way - but this represents when an item has an objective that doesn't serve
		a beneficial purpose, but rather is used for "flavor" or additional information.  For instance, when Emblems
		track specific stats, those stats are represented as Objectives on the item.
		*/
    flavorObjective: Quests.DestinyObjectiveProgress;

    /**
		If we have any information on when these objectives were completed, this will be the date of that completion.
		This won't be on many items, but could be interesting for some items that do store this information.
		*/
    dateCompleted?: string;
  }

  /**
	If an item is "instanced", this will contain information about the item's instance that doesn't fit easily
	into other components.  One might say this is the "essential" instance data for the item.

	Items are instanced if they require information or state that can vary.  For instance, weapons are Instanced:
	they are given a unique identifier, uniquely generated stats, and can have their properties altered.  Non-instanced
	items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.

	You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's
	definition.inventory.isInstanceItem property.
	*/
  export interface DestinyItemInstanceComponent {
    /**
		If the item has a damage type, this is the item's current damage type.
		*/
    damageType: Globals.DamageType;

    /**
		The current damage type's hash, so you can look up localized info and icons for it.
		*/
    damageTypeHash?: number;

    /**
		The item stat that we consider to be "primary" for the item.  For instance, this would be "Attack" for
		Weapons or "Defense" for armor.
		*/
    primaryStat: World.DestinyStat;

    /**
		The Item's "Level" has the most significant bearing on its stats, such as Light and Power.
		*/
    itemLevel: number;

    /**
		The "Quality" of the item has a lesser - but still impactful - bearing on stats like Light and Power.
		*/
    quality: number;

    /**
		Is the item currently equipped on the given character?
		*/
    isEquipped: boolean;

    /**
		If this is an equippable item, you can check it here.  There are permanent as well as transitory reasons
		why an item might not be able to be equipped: check cannotEquipReason for details.
		*/
    canEquip: boolean;

    /**
		If the item cannot be equipped until you reach a certain level, that level will be reflected here.
		*/
    equipRequiredLevel: number;

    /**
		Sometimes, there are limitations to equipping that are represented by character-level flags called "unlocks".

		This is a list of flags that they need in order to equip the item that the character has not met.
		Use these to look up the descriptions to show in your UI by looking up the relevant DestinyUnlockDefinitions for the hashes.
		*/
    unlockHashesRequiredToEquip: number[];

    /**
		If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn't equip
		the item.  You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel.
		*/
    cannotEquipReason: Globals.EquipFailureReason;
  }

  /**
	Instanced items can have perks: benefits that the item bestows.

	These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info.
	When they do, they are the icons and text that you see in an item's tooltip.

	Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.
	*/
  export interface DestinyItemPerksComponent {
    /**
		The list of perks to display in an item tooltip - and whether or not they have been activated.
		*/
    perks: Perks.DestinyPerkReference[];
  }

  /**
	Many items can be rendered in 3D.  When you request this block, you will obtain
	the custom data needed to render this specific instance of the item.
	*/
  export interface DestinyItemRenderComponent {
    /**
		If you should use custom dyes on this item, it will be indicated here.
		*/
    useCustomDyes: boolean;

    /**
		A dictionary for rendering gear components, with:

		key = Art Arrangement Region Index

		value = The chosen Arrangement Index for the Region, based on the value of a stat on the item used for making the choice.
		*/
    artRegions: { [key: number]: number };
  }

  /**
	If you want the stats on an item's instanced data, get this component.

	These are stats like Attack, Defense etc... and *not* historical stats.

	Note that some stats have additional computation in-game at runtime - for instance,
	Magazine Size - and thus these stats might not be 100% accurate compared to what you see
	in-game for some stats.  I know, it sucks.  I hate it too.
	*/
  export interface DestinyItemStatsComponent {
    /**
		If the item has stats that it provides (damage, defense, etc...), it will be given here.
		*/
    stats: { [key: number]: World.DestinyStat };
  }

  /**
	Instanced items can have sockets, which are slots on the item where plugs can be inserted.

	Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's
	"socket" block and elsewhere on these objects for more details.
	*/
  export interface DestinyItemSocketsComponent {
    /**
		The list of all sockets on the item, and their status information.
		*/
    sockets: Items.DestinyItemSocketState[];
  }

  /**
	The status of a given item's socket.  (which plug is inserted, if any: whether it is enabled, what "reusable"
	plugs can be inserted, etc...)

	If I had it to do over, this would probably have a DestinyItemPlug representing the inserted item instead of
	most of these properties.  :shrug:
	*/
  export interface DestinyItemSocketState {
    /**
		The currently active plug, if any.

		Note that, because all plugs are statically defined, its effect on stats and perks can be
		statically determined using the plug item's definition.  The stats and perks can be taken at face
		value on the plug item as the stats and perks it will provide to the user/item.
		*/
    plugHash?: number;

    /**
		Even if a plug is inserted, it doesn't mean it's enabled.

		This flag indicates whether the plug is active and providing its benefits.
		*/
    isEnabled: boolean;

    /**
		A plug may theoretically provide benefits but not be visible - for instance, some older items
		use a plug's damage type perk to modify their own damage type.  These, though they are not visible,
		still affect the item.  This field indicates that state.

		An invisible plug, while it provides benefits if it is Enabled, cannot be directly modified by the user.
		*/
    isVisible: boolean;

    /**
		If a plug is inserted but not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules
		property, so that you can show the reasons why it is not enabled.
		*/
    enableFailIndexes: number[];

    /**
		If the item supports reusable plugs, this is the list of plug item hashes that are currently
		allowed to be used for this socket.  See the "reusablePlugs" property, which has rendered this
		obsolete, for more information.
		*/
    reusablePlugHashes: number[];

    /**
		Sometimes, Plugs may have objectives: generally, these are used for flavor and display purposes.
		For instance, a Plug might be tracking the number of PVP kills you have made.  It will use the parent item's
		data about that tracking status to determine what to show, and will generally show it using the DestinyObjectiveDefinition's
		progressDescription property.  Refer to the plug's itemHash and objective property for more information if
		you would like to display even more data.
		*/
    plugObjectives: Quests.DestinyObjectiveProgress[];

    /**
		If the item supports reusable plugs, this is the list of plugs that are allowed to be used for the socket,
		and any relevant information about whether they are "enabled", whether they are allowed to be inserted,
		and any other information such as objectives.

		A Reusable Plug is a plug that you can always insert into this socket as long as its insertion rules are passed,
		regardless of whether or not you have the plug in your inventory.  An example of it failing an insertion rule
		would be if it has an Objective that needs to be completed before it can be inserted, and that objective
		hasn't been completed yet.

		In practice, a socket will *either* have reusable plugs *or*
		it will allow for plugs in your inventory to be inserted.  See DestinyInventoryItemDefinition.socket
		for more info.
		*/
    reusablePlugs: Sockets.DestinyItemPlug[];
  }

  /**
	Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.

	The good news is that they're pretty much only being used for certain base information
	on items and for Builds/Subclasses.  The bad news is that they still suck.
	If you really want this information, grab this component.

	An important note is that talent grids are defined as such:

	A Grid has 1:M Nodes, which has 1:M Steps.

	Any given node can only have a single step
	active at one time, which represents the actual visual contents and effects of the Node
	(for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node
	is coming from the current Step of that node).

	Nodes can be grouped into exclusivity sets
	*and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect
	each other).

	See DestinyTalentGridDefinition for more information.  Brace yourself, the water's cold
	out there in the deep end.
	*/
  export interface DestinyItemTalentGridComponent {
    /**
		Most items don't have useful talent grids anymore, but Builds in particular still do.

		You can use this hash to lookup the DestinyTalentGridDefinition attached to this item,
		which will be crucial for understanding the node values on the item.
		*/
    talentGridHash: number;

    /**
		Detailed information about the individual nodes in the talent grid.

		A node represents a single visual "pip" in the talent grid or Build detail view,
		though each node may have multiple "steps" which indicate the actual bonuses
		and visual representation of that node.
		*/
    nodes: World.DestinyTalentNode[];

    /**
		Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it.

		Only will be true if the item actually *has* a talent grid, and only then if it is completed (i.e. every exclusive set
		has an activated node, and every non-exclusive set node has been activated)
		*/
    isGridComplete: boolean;

    /**
		If the item has a progression, it will be detailed here.  A progression
		means that the item can gain experience.  Thresholds of experience are what determines
		whether and when a talent node can be activated.
		*/
    gridProgression: World.DestinyProgression;
  }

  /**
	Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item.
	Items have Sockets, and Plugs are inserted into Sockets.

	This component finds all items that are considered "Plugs" in your inventory, and return information about
	the plug aside from any specific Socket into which it could be inserted.
	*/
  export interface DestinyItemPlugComponent {
    plugItemHash: number;

    plugObjectives: Quests.DestinyObjectiveProgress[];

    canInsert: boolean;

    enabled: boolean;

    insertFailIndexes: number[];

    enableFailIndexes: number[];
  }
}

export namespace Kiosks {
  /**
	A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have
	already acquired that item before.

	This component returns information about what Kiosk items are available to you on a *Profile*
	level.  It is theoretically possible for Kiosks to have items gated by specific Character as well.
	If you ever have those, you will find them on the individual character's DestinyCharacterKiosksComponent.

	Note that, because this component returns vendorItemIndexes (that is to say, indexes into the Kiosk Vendor's
	itemList property), these results are necessarily content version dependent.  Make sure that you have
	the latest version of the content manifest databases before using this data.
	*/
  export interface DestinyKiosksComponent {
    /**
		A dictionary keyed by the Kiosk Vendor's hash identifier (use it to look up the DestinyVendorDefinition
		for the relevant kiosk vendor), and whose value is a list of all the items that the user can "see" in
		the Kiosk, and any other interesting metadata.
		*/
    kioskItems: { [key: number]: Kiosks.DestinyKioskItem[] };
  }

  export interface DestinyKioskItem {
    /**
		The index of the item in the related DestinyVendorDefintion's itemList property, representing
		the sale.
		*/
    index: number;

    /**
		If true, the user can not only see the item, but they can acquire it.  It is possible that a user
		can see a kiosk item and not be able to acquire it.
		*/
    canAcquire: boolean;

    /**
		Indexes into failureStrings for the Vendor, indicating the reasons why it failed if any.
		*/
    failureIndexes: number[];

    /**
		I may regret naming it this way - but this represents when an item has an objective that doesn't serve
		a beneficial purpose, but rather is used for "flavor" or additional information.  For instance, when Emblems
		track specific stats, those stats are represented as Objectives on the item.
		*/
    flavorObjective: Quests.DestinyObjectiveProgress;
  }
}

export namespace Quests {
  /**
	Returns data about a character's status with a given Objective.
	Combine with DestinyObjectiveDefinition static data for display purposes.
	*/
  export interface DestinyObjectiveProgress {
    /**
		The unique identifier of the Objective being referred to.  Use to look up the DestinyObjectiveDefinition in static data.
		*/
    objectiveHash: number;

    /**
		If the Objective has a Destination associated with it, this is the unique identifier of the Destination being referred to.
		Use to look up the DestinyDestinationDefinition in static data.
		This will give localized data about *where* in the universe the objective should be achieved.
		*/
    destinationHash?: number;

    /**
		If the Objective has an Activity associated with it, this is the unique identifier of the Activity being referred to.
		Use to look up the DestinyActivityDefinition in static data.
		This will give localized data about *what* you should be playing for the objective to be achieved.
		*/
    activityHash?: number;

    /**
		If progress has been made, and the progress can be measured numerically, this will be the value of that progress.
		You can compare it to the DestinyObjectiveDefinition.completionValue property for current vs. upper bounds,
		and use DestinyObjectiveDefinition.valueStyle to determine how this should be rendered.
		Note that progress, in Destiny 2, need not be a literal numeric progression.  It could be one of a number of
		possible values, even a Timestamp.  Always examine DestinyObjectiveDefinition.valueStyle before rendering
		progress.
		*/
    progress?: number;

    /**
		As of Forsaken, objectives' completion value is determined dynamically at runtime.

		This value represents the threshold of progress you need to surpass in order for this objective to be
		considered "complete".

		If you were using objective data, switch from using the DestinyObjectiveDefinition's "completionValue" to
		this value.
		*/
    completionValue: number;

    /**
		Whether or not the Objective is completed.
		*/
    complete: boolean;

    /**
		If this is true, the objective is visible in-game.  Otherwise, it's not yet visible to the player.
		Up to you if you want to honor this property.
		*/
    visible: boolean;
  }

  /**
	Data regarding the progress of a Quest for a specific character.
	Quests are composed of multiple steps, each with potentially multiple objectives:
	this QuestStatus will return Objective data for the *currently active* step in this quest.
	*/
  export interface DestinyQuestStatus {
    /**
		The hash identifier for the Quest Item.  (Note: Quests are defined as Items, and thus you would
		use this to look up the quest's DestinyInventoryItemDefinition).
		For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData
		property for Quest Steps (which are *also* items).
		You can use the Item Definition to display human readable data about the overall quest.
		*/
    questHash: number;

    /**
		The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition.  You can use
		this to get human readable data about the current step and what to do in that step.
		*/
    stepHash: number;

    /**
		A step can have multiple objectives.  This will give you the progress for each objective in the current step,
		in the order in which they are rendered in-game.
		*/
    stepObjectives: Quests.DestinyObjectiveProgress[];

    /**
		Whether or not the quest is tracked
		*/
    tracked: boolean;

    /**
		The current Quest Step will be an instanced item in the player's inventory.  If you care about that,
		this is the instance ID of that item.
		*/
    itemInstanceId: string;

    /**
		Whether or not the whole quest has been completed, regardless of whether or not
		you have redeemed the rewards for the quest.
		*/
    completed: boolean;

    /**
		Whether or not you have redeemed rewards for this quest.
		*/
    redeemed: boolean;

    /**
		Whether or not you have started this quest.
		*/
    started: boolean;

    /**
		If the quest has a related Vendor that you should talk to in order to initiate the quest/earn
		rewards/continue the quest, this will be the hash identifier of that Vendor.  Look it up its DestinyVendorDefinition.
		*/
    vendorHash?: number;
  }
}

export namespace PlugSets {
  /**
	Sockets may refer to a "Plug Set": a set of reusable plugs that may be shared across multiple sockets
	(or even, in theory, multiple sockets over multiple items).

	This is the set of those plugs that we came across in the users' inventory, along with the values
	for plugs in the set.  Any given set in this component may be represented in Character and Profile-level, as some
	plugs may be Profile-level restricted, and some character-level restricted.  (note that the ones that are even more
	specific will remain on the actual socket component itself, as they cannot be reused)
	*/
  export interface DestinyPlugSetsComponent {
    /**
		The shared list of plugs for each relevant PlugSet, keyed by the hash identifier of the PlugSet (DestinyPlugSetDefinition).
		*/
    plugs: { [key: number]: Sockets.DestinyItemPlug[] };
  }
}

export namespace Sockets {
  export interface DestinyItemPlug {
    /**
		The hash identifier of the DestinyInventoryItemDefinition that represents this plug.
		*/
    plugItemHash: number;

    /**
		Sometimes, Plugs may have objectives: these are often used for flavor and display purposes, but they
		can be used for any arbitrary purpose (both fortunately and unfortunately).  Recently (with Season 2) they
		were expanded in use to be used as the "gating" for whether the plug can be inserted at all.
		For instance, a Plug might be tracking the number of PVP kills you have made.  It will use the parent item's
		data about that tracking status to determine what to show, and will generally show it using the DestinyObjectiveDefinition's
		progressDescription property.  Refer to the plug's itemHash and objective property for more information if
		you would like to display even more data.
		*/
    plugObjectives: Quests.DestinyObjectiveProgress[];

    /**
		If true, this plug has met all of its insertion requirements.  Big if true.
		*/
    canInsert: boolean;

    /**
		If true, this plug will provide its benefits while inserted.
		*/
    enabled: boolean;

    /**
		If the plug cannot be inserted for some reason, this will have the indexes into the plug item definition's
		plug.insertionRules property, so you can show the reasons why it can't be inserted.

		This list will be empty if the plug can be inserted.
		*/
    insertFailIndexes: number[];

    /**
		If a plug is not enabled, this will be populated with indexes into the plug item definition's
		plug.enabledRules property, so that you can show the reasons why it is not enabled.

		This list will be empty if the plug is enabled.
		*/
    enableFailIndexes: number[];
  }
}

export namespace Presentation {
  export interface DestinyPresentationNodesComponent {
    nodes: { [key: number]: Presentation.DestinyPresentationNodeComponent };
  }

  export interface DestinyPresentationNodeComponent {
    state: Globals.DestinyPresentationNodeState;

    /**
		An optional property: presentation nodes MAY have objectives, which can be used to infer
		more human readable data about the progress.  However, progressValue and completionValue
		ought to be considered the canonical values for progress on Progression Nodes.
		*/
    objective: Quests.DestinyObjectiveProgress;

    /**
		How much of the presentation node is considered to be completed so far by the given character/profile.
		*/
    progressValue: number;

    /**
		The value at which the presentation ode is considered to be completed.
		*/
    completionValue: number;
  }
}

export namespace Records {
  export interface DestinyProfileRecordsComponent {
    /**
		Your "Triumphs" score.
		*/
    score: number;

    /**
		If this profile is tracking a record, this is the hash identifier of the record it is tracking.
		*/
    trackedRecordHash?: number;

    records: { [key: number]: Records.DestinyRecordComponent };
  }

  export interface DestinyRecordComponent {
    state: Globals.DestinyRecordState;

    objectives: Quests.DestinyObjectiveProgress[];
  }

  export interface DestinyCharacterRecordsComponent {
    featuredRecordHashes: number[];

    records: { [key: number]: Records.DestinyRecordComponent };
  }
}

export namespace Collectibles {
  export interface DestinyProfileCollectiblesComponent {
    /**
		The list of collectibles determined by the game as having been "recently" acquired.
		*/
    recentCollectibleHashes: number[];

    /**
		The list of collectibles determined by the game as having been "recently" acquired.

		The game client itself actually controls this data, so I personally question whether anyone
		will get much use out of this: because we can't edit this value through the API.  But in case
		anyone finds it useful, here it is.
		*/
    newnessFlaggedCollectibleHashes: number[];

    collectibles: { [key: number]: Collectibles.DestinyCollectibleComponent };
  }

  export interface DestinyCollectibleComponent {
    state: Globals.DestinyCollectibleState;
  }

  export interface DestinyCollectiblesComponent {
    collectibles: { [key: number]: Collectibles.DestinyCollectibleComponent };
  }
}

export namespace Characters {
  /**
	This component contains base properties of the character.  You'll probably want to always request this component,
	but hey you do you.
	*/
  export interface DestinyCharacterComponent {
    /**
		Every Destiny Profile has a membershipId.  This is provided on the character as well for convenience.
		*/
    membershipId: string;

    /**
		membershipType tells you the platform on which the character plays.
		Examine the BungieMembershipType enumeration for possible values.
		*/
    membershipType: Globals.BungieMembershipType;

    /**
		The unique identifier for the character.
		*/
    characterId: string;

    /**
		The last date that the user played Destiny.
		*/
    dateLastPlayed: string;

    /**
		If the user is currently playing, this is how long they've been playing.
		*/
    minutesPlayedThisSession: string;

    /**
		If this value is 525,600, then they played Destiny for a year.  Or they're a very dedicated Rent fan.
		Note that this includes idle time, not just time spent actually in activities shooting things.
		*/
    minutesPlayedTotal: string;

    /**
		The user's calculated "Light Level".  Light level is an indicator of your power that mostly matters in
		the end game, once you've reached the maximum character level: it's a level that's dependent on the average
		Attack/Defense power of your items.
		*/
    light: number;

    /**
		Your character's stats, such as Agility, Resilience, etc... *not* historical stats.

		You'll have to call a different endpoint for those.
		*/
    stats: { [key: number]: number };

    /**
		Use this hash to look up the character's DestinyRaceDefinition.
		*/
    raceHash: number;

    /**
		Use this hash to look up the character's DestinyGenderDefinition.
		*/
    genderHash: number;

    /**
		Use this hash to look up the character's DestinyClassDefinition.
		*/
    classHash: number;

    /**
		Mostly for historical purposes at this point, this is an enumeration for the character's race.

		It'll be preferable in the general case to look up the related definition: but for some people this
		was too convenient to remove.
		*/
    raceType: Globals.DestinyRace;

    /**
		Mostly for historical purposes at this point, this is an enumeration for the character's class.

		It'll be preferable in the general case to look up the related definition: but for some people this
		was too convenient to remove.
		*/
    classType: Globals.DestinyClass;

    /**
		Mostly for historical purposes at this point, this is an enumeration for the character's Gender.

		It'll be preferable in the general case to look up the related definition: but for some people this
		was too convenient to remove.  And yeah, it's an enumeration and not a boolean.  Fight me.
		*/
    genderType: Globals.DestinyGender;

    /**
		A shortcut path to the user's currently equipped emblem image.  If you're just showing summary
		info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
		*/
    emblemPath: string;

    /**
		A shortcut path to the user's currently equipped emblem background image.  If you're just showing summary
		info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
		*/
    emblemBackgroundPath: string;

    /**
		The hash of the currently equipped emblem for the user.  Can be used to look up the DestinyInventoryItemDefinition.
		*/
    emblemHash: number;

    /**
		A shortcut for getting the background color of the user's currently equipped emblem without having to do a
		DestinyInventoryItemDefinition lookup.
		*/
    emblemColor: Misc.DestinyColor;

    /**
		The progression that indicates your character's level.  Not their light level, but their
		character level: you know, the thing you max out a couple hours in and then ignore for
		the sake of light level.
		*/
    levelProgression: World.DestinyProgression;

    /**
		The "base" level of your character, not accounting for any light level.
		*/
    baseCharacterLevel: number;

    /**
		A number between 0 and 100, indicating the whole and fractional % remaining to get to
		the next character level.
		*/
    percentToNextLevel: number;

    /**
		If this Character has a title assigned to it, this is the identifier of
		the DestinyRecordDefinition that has that title information.
		*/
    titleRecordHash?: number;
  }

  /**
	This component returns anything that could be considered "Progression" on a user: data
	where the user is gaining levels, reputation, completions, rewards, etc...
	*/
  export interface DestinyCharacterProgressionComponent {
    /**
		A Dictionary of all known progressions for the Character, keyed by the Progression's hash.

		Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
		*/
    progressions: { [key: number]: World.DestinyProgression };

    /**
		A dictionary of all known Factions, keyed by the Faction's hash.  It contains data about this character's
		status with the faction.
		*/
    factions: { [key: number]: Progression.DestinyFactionProgression };

    /**
		Milestones are related to the simple progressions shown in the game, but return additional and
		hopefully helpful information for users about the specifics of the Milestone's status.
		*/
    milestones: { [key: number]: Milestones.DestinyMilestone };

    /**
		If the user has any active quests, the quests' statuses will be returned here.

		Note that quests have been largely supplanted by Milestones, but that doesn't mean that
		they won't make a comeback independent of milestones at some point.
		*/
    quests: Quests.DestinyQuestStatus[];

    /**
		Sometimes, you have items in your inventory that don't have instances, but still have
		Objective information.  This provides you that objective information for uninstanced
		items.

		This dictionary is keyed by the item's hash: which you can use to look up the
		name and description for the overall task(s) implied by the objective.
		The value is the list of objectives for this item, and their statuses.
		*/
    uninstancedItemObjectives: {
      [key: number]: Quests.DestinyObjectiveProgress[];
    };

    /**
		The set of checklists that can be examined for this specific character, keyed by the hash identifier
		of the Checklist (DestinyChecklistDefinition)

		For each checklist returned, its value is itself a Dictionary keyed by the checklist's hash identifier
		with the value being a boolean indicating if it's been discovered yet.
		*/
    checklists: { [key: number]: { [key: number]: boolean } };
  }

  /**
	Only really useful if you're attempting to render the character's current appearance in 3D,
	this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering.
	Note that you need to combine this with other 3D assets and data from our servers.

	Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but
	be warned: the rabbit hole goes pretty deep.
	*/
  export interface DestinyCharacterRenderComponent {
    /**
		Custom dyes, calculated by iterating over the character's equipped items.
		Useful for pre-fetching all of the dye data needed from our server.
		*/
    customDyes: World.DyeReference[];

    /**
		This is actually something that Spasm.js *doesn't* do right now, and that we don't return assets for yet.
		This is the data about what character customization options you picked.  You can combine this with
		DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually
		render a user's face in 3D.  We'll see if we ever end up with time for that.
		*/
    customization: Character.DestinyCharacterCustomization;

    /**
		A minimal view of:

		- Equipped items

		- The rendering-related custom options on those equipped items

		Combined, that should be enough to render all of the items on the equipped character.
		*/
    peerView: Character.DestinyCharacterPeerView;
  }

  /**
	This component holds activity data for a character.  It will tell you about the character's current activity status,
	as well as activities that are available to the user.
	*/
  export interface DestinyCharacterActivitiesComponent {
    /**
		The last date that the user started playing an activity.
		*/
    dateActivityStarted: string;

    /**
		The list of activities that the user can play.
		*/
    availableActivities: World.DestinyActivity[];

    /**
		If the user is in an activity, this will be the hash of the Activity being played.
		Note that you must combine this info with currentActivityModeHash to get a real picture of what
		the user is doing right now.  For instance, PVP "Activities" are just maps: it's the ActivityMode
		that determines what type of PVP game they're playing.
		*/
    currentActivityHash: number;

    /**
		If the user is in an activity, this will be the hash of the activity mode being played.
		Combine with currentActivityHash to give a person a full picture of what they're doing right now.
		*/
    currentActivityModeHash: number;

    /**
		And the current activity's most specific mode type, if it can be found.
		*/
    currentActivityModeType?: Globals.DestinyActivityModeType;

    /**
		If the user is in an activity, this will be the hashes of the DestinyActivityModeDefinition being played.
		Combine with currentActivityHash to give a person a full picture of what they're doing right now.
		*/
    currentActivityModeHashes: number[];

    /**
		All Activity Modes that apply to the current activity being played, in enum form.
		*/
    currentActivityModeTypes: Globals.DestinyActivityModeType[];

    /**
		If the user is in a playlist, this is the hash identifier for the playlist that they chose.
		*/
    currentPlaylistActivityHash?: number;

    /**
		This will have the activity hash of the last completed story/campaign mission, in case you care about that.
		*/
    lastCompletedStoryHash: number;
  }
}

export namespace Misc {
  /**
	Represents a color whose RGBA values are all represented as values between 0 and 255.
	*/
  export interface DestinyColor {
    red: number;

    green: number;

    blue: number;

    alpha: number;
  }
}

export namespace Progression {
  /**
	Mostly for historical purposes, we segregate Faction progressions from other progressions.
	This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition
	of the faction related to the progression.
	*/
  export interface DestinyFactionProgression {
    /**
		The hash identifier of the Faction related to this progression.  Use it to look up the DestinyFactionDefinition
		for more rendering info.
		*/
    factionHash: number;

    /**
		The index of the Faction vendor that is currently available. Will be set to -1 if no vendors are available.
		*/
    factionVendorIndex: number;

    progressionHash: number;

    dailyProgress: number;

    dailyLimit: number;

    weeklyProgress: number;

    weeklyLimit: number;

    currentProgress: number;

    level: number;

    levelCap: number;

    stepIndex: number;

    progressToNextLevel: number;

    nextLevelAt: number;

    currentResetCount?: number;

    seasonResets: World.DestinyProgressionResetEntry[];
  }
}

export namespace Milestones {
  /**
	Represents a runtime instance of a user's milestone status.
	Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user
	a picture of what is available for them to do in the game, and their status in regards to said "things to do."
	Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
	*/
  export interface DestinyMilestone {
    /**
		The unique identifier for the Milestone.  Use it to look up the DestinyMilestoneDefinition, so
		you can combine the other data in this contract with static definition data.
		*/
    milestoneHash: number;

    /**
		Indicates what quests are available for this Milestone.
		Usually this will be only a single Quest, but some quests have multiple available that you
		can choose from at any given time.
		All possible quests for a milestone can be found in the DestinyMilestoneDefinition, but they must
		be combined with this Live data to determine which one(s) are actually active right now.
		It is possible for Milestones to not have any quests.
		*/
    availableQuests: Milestones.DestinyMilestoneQuest[];

    /**
		The currently active Activities in this milestone, when the Milestone is driven by Challenges.

		Not all Milestones have Challenges, but when they do this will indicate the Activities and Challenges
		under those Activities related to this Milestone.
		*/
    activities: Milestones.DestinyMilestoneChallengeActivity[];

    /**
		Milestones may have arbitrary key/value pairs associated with them, for data that users will
		want to know about but that doesn't fit neatly into any of the common components such as Quests.
		A good example of this would be - if this existed in Destiny 1 - the number of wins you currently have
		on your Trials of Osiris ticket.
		Looking in the DestinyMilestoneDefinition,
		you can use the string identifier of this dictionary to look up more info about the value, including
		localized string content for displaying the value.  The value in the dictionary is the floating point
		number.  The definition will tell you how to format this number.
		*/
    values: { [key: string]: number };

    /**
		A milestone may have one or more active vendors that are "related" to it (that provide rewards, or that
		are the initiators of the Milestone).  I already regret this, even as I'm typing it. [I told you I'd regret this]
		You see, sometimes a milestone may be directly correlated with a set of vendors that provide varying tiers
		of rewards.  The player may not be able to interact with one or more of those vendors.  This will return
		the hashes of the Vendors that the player *can* interact with, allowing you to show their current inventory
		as rewards or related items to the Milestone or its activities.

		Before we even use it, it's already deprecated!  How much of a bummer is that?  We need more data.
		*/
    vendorHashes: number[];

    /**
		Replaces vendorHashes, which I knew was going to be trouble the day it walked in the door.
		This will return not only what Vendors are active and relevant to the activity (in an implied
		order that you can choose to ignore), but also other data - for example, if the Vendor is featuring
		a specific item relevant to this event that you should show with them.
		*/
    vendors: Milestones.DestinyMilestoneVendor[];

    /**
		If the entity to which this component is attached has known active Rewards for the player, this will detail
		information about those rewards, keyed by the RewardEntry Hash. (See DestinyMilestoneDefinition for
		more information about Reward Entries)
		Note that these rewards are not for the Quests related to the Milestone.  Think of these as "overview/checklist"
		rewards that may be provided for Milestones that may provide rewards for performing a variety of tasks that
		aren't under a specific Quest.
		*/
    rewards: Milestones.DestinyMilestoneRewardCategory[];

    /**
		If known, this is the date when the event last began or refreshed.  It will only be populated for events with fixed
		and repeating start and end dates.
		*/
    startDate?: string;

    /**
		If known, this is the date when the event will next end or repeat.  It will only be populated for events with fixed
		and repeating start and end dates.
		*/
    endDate?: string;

    /**
		Used for ordering milestones in a display to match how we order them in BNet.  May pull from static data,
		or possibly in the future from dynamic information.
		*/
    order: number;
  }

  /**
	If a Milestone has one or more Quests, this will contain the live information for the character's status with
	one of those quests.
	*/
  export interface DestinyMilestoneQuest {
    /**
		Quests are defined as Items in content.  As such, this is the hash identifier
		of the DestinyInventoryItemDefinition that represents this quest.  It will have pointers to all of the steps
		in the quest, and display information for the quest (title, description, icon etc)
		Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData
		property, and themselves are Items with their own renderable data.
		*/
    questItemHash: number;

    /**
		The current status of the quest for the character making the request.
		*/
    status: Quests.DestinyQuestStatus;

    /**
		*IF* the Milestone has an active Activity that can give you greater details
		about what you need to do, it will be returned here.
		Remember to associate this with the DestinyMilestoneDefinition's activities
		to get details about the activity, including what specific quest it is related to if you
		have multiple quests to choose from.
		*/
    activity: Milestones.DestinyMilestoneActivity;

    /**
		The activities referred to by this quest can have many associated challenges.
		They are all contained here, with activityHashes so that you can associate them with
		the specific activity variants in which they can be found.
		In retrospect, I probably should have put these under the specific Activity Variants,
		but it's too late to change it now.
		Theoretically, a quest without Activities can still have Challenges, which is why
		this is on a higher level than activity/variants, but it probably should have been
		in both places.  That may come as a later revision.
		*/
    challenges: Challenges.DestinyChallengeStatus[];
  }

  /**
	Sometimes, we know the specific activity that the Milestone wants you to play.
	This entity provides additional information about that Activity and all of its
	variants.  (sometimes there's only one variant, but I think you get the point)
	*/
  export interface DestinyMilestoneActivity {
    /**
		The hash of an arbitrarily chosen variant of this activity.  We'll go ahead and
		call that the "canonical" activity, because if you're using this value you should
		only use it for properties that are common across the variants: things like the
		name of the activity, it's location, etc...
		Use this hash to look up the DestinyActivityDefinition of this activity for rendering data.
		*/
    activityHash: number;

    /**
		The hash identifier of the most specific Activity Mode under which this activity is played.  This is useful for situations
		where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being
		played under.  If it's a playlist, this will be less specific: but hopefully useful in some way.
		*/
    activityModeHash?: number;

    /**
		The enumeration equivalent of the most specific Activity Mode under which this activity is played.
		*/
    activityModeType?: Globals.DestinyActivityModeType;

    /**
		If the activity has modifiers, this will be the list of modifiers that all variants
		have in common.  Perform lookups against
		DestinyActivityModifierDefinition which defines the modifier being applied to get
		at the modifier data.
		Note that, in the DestiyActivityDefinition, you will see many more modifiers than this
		being referred to: those are all *possible* modifiers for the activity, not the active ones.
		Use only the active ones to match what's really live.
		*/
    modifierHashes: number[];

    /**
		If you want more than just name/location/etc... you're going to have to dig into
		and show the variants of the conceptual activity.  These will differ in seemingly
		arbitrary ways, like difficulty level and modifiers applied.  Show it in whatever
		way tickles your fancy.
		*/
    variants: Milestones.DestinyMilestoneActivityVariant[];
  }

  /**
	Represents custom data that we know about an individual variant of an activity.
	*/
  export interface DestinyMilestoneActivityVariant {
    /**
		The hash for the specific variant of the activity related to this milestone.
		You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
		*/
    activityHash: number;

    /**
		An OPTIONAL component: if it makes sense to talk about this activity variant in terms of
		whether or not it has been completed or what progress you have made in it, this will be returned.
		Otherwise, this will be NULL.
		*/
    completionStatus: Milestones.DestinyMilestoneActivityCompletionStatus;

    /**
		The hash identifier of the most specific Activity Mode under which this activity is played.  This is useful for situations
		where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being
		played under.  If it's a playlist, this will be less specific: but hopefully useful in some way.
		*/
    activityModeHash?: number;

    /**
		The enumeration equivalent of the most specific Activity Mode under which this activity is played.
		*/
    activityModeType?: Globals.DestinyActivityModeType;
  }

  /**
	Represents this player's personal completion status for the Activity under a Milestone, if the
	activity has trackable completion and progress information. (most activities won't, or the concept
	won't apply.  For instance, it makes sense to talk about a tier of a raid as being Completed or having
	progress, but it doesn't make sense to talk about a Crucible Playlist in those terms.
	*/
  export interface DestinyMilestoneActivityCompletionStatus {
    /**
		If the activity has been "completed", that information will be returned here.
		*/
    completed: boolean;

    /**
		If the Activity has discrete "phases" that we can track, that info will be here.  Otherwise,
		this value will be NULL.
		Note that this is a list and not a dictionary: the order implies the ascending order of phases
		or progression in this activity.
		*/
    phases: Milestones.DestinyMilestoneActivityPhase[];
  }

  /**
	Represents whatever information we can return about an explicit phase in an activity.
	In the future, I hope we'll have more than just "guh, you done gone and did something,"
	but for the forseeable future that's all we've got.  I'm making it more than just a list of
	booleans out of that overly-optimistic hope.
	*/
  export interface DestinyMilestoneActivityPhase {
    /**
		Indicates if the phase has been completed.
		*/
    complete: boolean;

    /**
		In DestinyActivityDefinition, if the activity has phases, there will be a set of
		phases defined in the "insertionPoints" property.  This is the hash that maps to that phase.
		*/
    phaseHash: number;
  }

  export interface DestinyMilestoneChallengeActivity {
    activityHash: number;

    challenges: Challenges.DestinyChallengeStatus[];

    /**
		If the activity has modifiers, this will be the list of modifiers that all variants
		have in common.  Perform lookups against DestinyActivityModifierDefinition which defines the modifier
		being applied to get at the modifier data.

		Note that, in the DestiyActivityDefinition, you will see many more modifiers than this
		being referred to: those are all *possible* modifiers for the activity, not the active ones.
		Use only the active ones to match what's really live.
		*/
    modifierHashes: number[];

    /**
		The set of activity options for this activity, keyed by an identifier that's unique for this activity
		(not guaranteed to be unique between or across all activities, though should be unique for every *variant* of a
		given *conceptual* activity: for instance, the original D2 Raid has many variant DestinyActivityDefinitions.  While
		other activities could potentially have the same option hashes, for any given D2 base Raid variant the hash will be unique).

		As a concrete example of this data, the hashes you get for Raids will correspond to the currently active "Challenge Mode".

		We don't have any human readable information for these, but saavy 3rd party app users could manually associate the key
		(a hash identifier for the "option" that is enabled/disabled) and the value (whether it's enabled or disabled presently)

		On our side, we don't necessarily even know what these are used for (the game designers know, but we don't),
		and we have no human readable data for them.  In order to use them, you will have to do some experimentation.
		*/
    booleanActivityOptions: { [key: number]: boolean };

    /**
		If returned, this is the index into the DestinyActivityDefinition's "loadouts" property,
		indicating the currently active loadout requirements.
		*/
    loadoutRequirementIndex?: number;

    /**
		If the Activity has discrete "phases" that we can track, that info will be here.  Otherwise,
		this value will be NULL.
		Note that this is a list and not a dictionary: the order implies the ascending order of phases
		or progression in this activity.
		*/
    phases: Milestones.DestinyMilestoneActivityPhase[];
  }

  /**
	If a Milestone has one or more Vendors that are relevant to it, this will contain information about
	that vendor that you can choose to show.
	*/
  export interface DestinyMilestoneVendor {
    /**
		The hash identifier of the Vendor related to this Milestone.  You can show useful things
		from this, such as thier Faction icon or whatever you might care about.
		*/
    vendorHash: number;

    /**
		If this vendor is featuring a specific item for this event, this will be the hash identifier
		of that item.  I'm taking bets now on how long we go before this needs to be a list or
		some other, more complex representation instead and I deprecate this too.
		I'm going to go with 5 months.  Calling it now, 2017-09-14 at 9:46pm PST.
		*/
    previewItemHash?: number;
  }

  /**
	Represents a category of "summary" rewards that can be earned for the Milestone regardless of
	specific quest rewards that can be earned.
	*/
  export interface DestinyMilestoneRewardCategory {
    /**
		Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the
		category info in DestinyMilestoneDefinition.rewards.
		*/
    rewardCategoryHash: number;

    /**
		The individual reward entries for this category, and their status.
		*/
    entries: Milestones.DestinyMilestoneRewardEntry[];
  }

  /**
	The character-specific data for a milestone's reward entry.  See DestinyMilestoneDefinition for
	more information about Reward Entries.
	*/
  export interface DestinyMilestoneRewardEntry {
    /**
		The identifier for the reward entry in question.  It is important to look up the related
		DestinyMilestoneRewardEntryDefinition to get the static details about the reward, which
		you can do by looking up the milestone's DestinyMilestoneDefinition and examining the
		DestinyMilestoneDefinition.rewards[rewardCategoryHash].rewardEntries[rewardEntryHash] data.
		*/
    rewardEntryHash: number;

    /**
		If TRUE, the player has earned this reward.
		*/
    earned: boolean;

    /**
		If TRUE, the player has redeemed/picked up/obtained this reward.
		Feel free to alias this to "gotTheShinyBauble" in your own codebase.
		*/
    redeemed: boolean;
  }

  /**
	Represents localized, extended content related to Milestones.
	This is intentionally returned by a separate endpoint and not with Character-level Milestone data
	because we do not put localized data into standard Destiny responses, both for brevity of response
	and for caching purposes.  If you really need this data, hit the Milestone Content endpoint.
	*/
  export interface DestinyMilestoneContent {
    /**
		The "About this Milestone" text from the Firehose.
		*/
    about: string;

    /**
		The Current Status of the Milestone, as driven by the Firehose.
		*/
    status: string;

    /**
		A list of tips, provided by the Firehose.
		*/
    tips: string[];

    /**
		If DPS has defined items related to this Milestone, they can categorize those items in the Firehose.
		That data will then be returned as item categories here.
		*/
    itemCategories: Milestones.DestinyMilestoneContentItemCategory[];
  }

  /**
	Part of our dynamic, localized Milestone content is arbitrary categories of items.
	These are built in our content management system, and thus aren't the same as programmatically
	generated rewards.
	*/
  export interface DestinyMilestoneContentItemCategory {
    title: string;

    itemHashes: number[];
  }

  /**
	Information about milestones, presented in a character state-agnostic manner.
	Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which
	is basically a checklist of things to do in the game.  Think of this as GetPublicAdvisors 3.0, for
	those who used the Destiny 1 API.
	*/
  export interface DestinyPublicMilestone {
    /**
		The hash identifier for the milestone.  Use it to look up the DestinyMilestoneDefinition for
		static data about the Milestone.
		*/
    milestoneHash: number;

    /**
		A milestone not need have even a single quest, but if there are active quests they will be returned here.
		*/
    availableQuests: Milestones.DestinyPublicMilestoneQuest[];

    activities: Milestones.DestinyPublicMilestoneChallengeActivity[];

    /**
		Sometimes milestones - or activities active in milestones - will have relevant vendors.
		These are the vendors that are currently relevant.

		Deprecated, already, for the sake of the new "vendors" property that has more data.
		What was I thinking.
		*/
    vendorHashes: number[];

    /**
		This is why we can't have nice things.  This is the ordered list of vendors to be shown that
		relate to this milestone, potentially along with other interesting data.
		*/
    vendors: Milestones.DestinyPublicMilestoneVendor[];

    /**
		If known, this is the date when the Milestone started/became active.
		*/
    startDate?: string;

    /**
		If known, this is the date when the Milestone will expire/recycle/end.
		*/
    endDate?: string;

    /**
		Used for ordering milestones in a display to match how we order them in BNet.  May pull from static data,
		or possibly in the future from dynamic information.
		*/
    order: number;
  }

  export interface DestinyPublicMilestoneQuest {
    /**
		Quests are defined as Items in content.  As such, this is the hash identifier
		of the DestinyInventoryItemDefinition that represents this quest.  It will have pointers to all of the steps
		in the quest, and display information for the quest (title, description, icon etc)
		Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData
		property, and themselves are Items with their own renderable data.
		*/
    questItemHash: number;

    /**
		A milestone need not have an active activity, but if there is one it will be returned here,
		along with any variant and additional information.
		*/
    activity: Milestones.DestinyPublicMilestoneActivity;

    /**
		For the given quest there could be 0-to-Many challenges: mini quests
		that you can perform in the course of doing this quest, that may grant you rewards and benefits.
		*/
    challenges: Milestones.DestinyPublicMilestoneChallenge[];
  }

  /**
	A milestone may have one or more conceptual Activities associated with it, and each of those conceptual
	activities could have a variety of variants, modes, tiers, what-have-you.
	Our attempts to determine what qualifies as a conceptual activity are, unfortunately, janky.  So if
	you see missing modes or modes that don't seem appropriate to you, let us know and I'll buy you a beer
	if we ever meet up in person.
	*/
  export interface DestinyPublicMilestoneActivity {
    /**
		The hash identifier of the activity that's been chosen to be considered the canonical
		"conceptual" activity definition.  This may have many variants, defined herein.
		*/
    activityHash: number;

    /**
		The activity may have 0-to-many modifiers: if it does, this will contain the hashes
		to the DestinyActivityModifierDefinition that defines the modifier being applied.
		*/
    modifierHashes: number[];

    /**
		Every relevant variation of this conceptual activity, including the conceptual activity itself,
		have variants defined here.
		*/
    variants: Milestones.DestinyPublicMilestoneActivityVariant[];

    /**
		The hash identifier of the most specific Activity Mode under which this activity is played.  This is useful for situations
		where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being
		played under.  If it's a playlist, this will be less specific: but hopefully useful in some way.
		*/
    activityModeHash?: number;

    /**
		The enumeration equivalent of the most specific Activity Mode under which this activity is played.
		*/
    activityModeType?: Globals.DestinyActivityModeType;
  }

  /**
	Represents a variant of an activity that's relevant to a milestone.
	*/
  export interface DestinyPublicMilestoneActivityVariant {
    /**
		The hash identifier of this activity variant.  Examine the activity's definition in the Manifest database
		to determine what makes it a distinct variant.  Usually it will be difficulty level or whether or not it is a
		guided game variant of the activity, but theoretically it could be distinguished in any arbitrary way.
		*/
    activityHash: number;

    /**
		The hash identifier of the most specific Activity Mode under which this activity is played.  This is useful for situations
		where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being
		played under.  If it's a playlist, this will be less specific: but hopefully useful in some way.
		*/
    activityModeHash?: number;

    /**
		The enumeration equivalent of the most specific Activity Mode under which this activity is played.
		*/
    activityModeType?: Globals.DestinyActivityModeType;
  }

  /**
	A Milestone can have many Challenges.  Challenges are just extra Objectives that provide
	a fun way to mix-up play and provide extra rewards.
	*/
  export interface DestinyPublicMilestoneChallenge {
    /**
		The objective for the Challenge, which should have human-readable data about what
		needs to be done to accomplish the objective.  Use this hash to look up the DestinyObjectiveDefinition.
		*/
    objectiveHash: number;

    /**
		IF the Objective is related to a specific Activity, this will be that activity's hash.
		Use it to look up the DestinyActivityDefinition for additional data to show.
		*/
    activityHash?: number;
  }

  export interface DestinyPublicMilestoneChallengeActivity {
    activityHash: number;

    challengeObjectiveHashes: number[];

    /**
		If the activity has modifiers, this will be the list of modifiers that all variants
		have in common.  Perform lookups against DestinyActivityModifierDefinition which defines the modifier
		being applied to get at the modifier data.

		Note that, in the DestiyActivityDefinition, you will see many more modifiers than this
		being referred to: those are all *possible* modifiers for the activity, not the active ones.
		Use only the active ones to match what's really live.
		*/
    modifierHashes: number[];

    /**
		If returned, this is the index into the DestinyActivityDefinition's "loadouts" property,
		indicating the currently active loadout requirements.
		*/
    loadoutRequirementIndex?: number;

    /**
		The ordered list of phases for this activity, if any.
		Note that we have no human readable info for phases, nor any entities to relate them to: relating these hashes
		to something human readable is up to you unfortunately.
		*/
    phaseHashes: number[];

    /**
		The set of activity options for this activity, keyed by an identifier that's unique for this activity
		(not guaranteed to be unique between or across all activities, though should be unique for every *variant* of a
		given *conceptual* activity: for instance, the original D2 Raid has many variant DestinyActivityDefinitions.  While
		other activities could potentially have the same option hashes, for any given D2 base Raid variant the hash will be unique).

		As a concrete example of this data, the hashes you get for Raids will correspond to the currently active "Challenge Mode".

		We have no human readable information for this data, so it's up to you if you want to associate it with such info to show it.
		*/
    booleanActivityOptions: { [key: number]: boolean };
  }

  export interface DestinyPublicMilestoneVendor {
    /**
		The hash identifier of the Vendor related to this Milestone.  You can show useful things
		from this, such as thier Faction icon or whatever you might care about.
		*/
    vendorHash: number;

    /**
		If this vendor is featuring a specific item for this event, this will be the hash identifier
		of that item.  I'm taking bets now on how long we go before this needs to be a list or
		some other, more complex representation instead and I deprecate this too.
		I'm going to go with 5 months.  Calling it now, 2017-09-14 at 9:46pm PST.
		*/
    previewItemHash?: number;
  }
}

export namespace Challenges {
  /**
	Represents the status and other related information for a challenge that is - or was - available
	to a player.

	A challenge is a bonus objective, generally tacked onto Quests or Activities, that
	provide additional variations on play.
	*/
  export interface DestinyChallengeStatus {
    /**
		The progress - including completion status - of the active challenge.
		*/
    objective: Quests.DestinyObjectiveProgress;
  }
}

export namespace Character {
  /**
	Raw data about the customization options chosen for a character's face and appearance.

	You can look up the relevant class/race/gender combo in DestinyCharacterCustomizationOptionDefinition
	for the character, and then look up these values within the CustomizationOptions found
	to pull some data about their choices.  Warning: not all of that data is meaningful.  Some data has
	useful icons.  Others have nothing, and are only meant for 3D rendering purposes (which we sadly
	do not expose yet)
	*/
  export interface DestinyCharacterCustomization {
    personality: number;

    face: number;

    skinColor: number;

    lipColor: number;

    eyeColor: number;

    hairColors: number[];

    featureColors: number[];

    decalColor: number;

    wearHelmet: boolean;

    hairIndex: number;

    featureIndex: number;

    decalIndex: number;
  }

  /**
	A minimal view of a character's equipped items, for the purpose of rendering a summary
	screen or showing the character in 3D.
	*/
  export interface DestinyCharacterPeerView {
    equipment: Character.DestinyItemPeerView[];
  }

  /**
	Bare minimum summary information for an item, for the sake of 3D rendering the item.
	*/
  export interface DestinyItemPeerView {
    /**
		The hash identifier of the item in question.  Use it to look up the DestinyInventoryItemDefinition of the item
		for static rendering data.
		*/
    itemHash: number;

    /**
		The list of dyes that have been applied to this item.
		*/
    dyes: World.DyeReference[];
  }
}

export namespace Sets {
  export interface DestinyBaseItemComponentSetUInt32 {
    objectives: Components.DictionaryComponentResponseUInt32DestinyItemObjectivesComponent;
  }

  export interface DestinyItemComponentSetInt64 {
    instances: Components.DictionaryComponentResponseInt64DestinyItemInstanceComponent;

    perks: Components.DictionaryComponentResponseInt64DestinyItemPerksComponent;

    renderData: Components.DictionaryComponentResponseInt64DestinyItemRenderComponent;

    stats: Components.DictionaryComponentResponseInt64DestinyItemStatsComponent;

    sockets: Components.DictionaryComponentResponseInt64DestinyItemSocketsComponent;

    talentGrids: Components.DictionaryComponentResponseInt64DestinyItemTalentGridComponent;

    plugStates: Components.DictionaryComponentResponseUInt32DestinyItemPlugComponent;

    objectives: Components.DictionaryComponentResponseInt64DestinyItemObjectivesComponent;
  }

  export interface DestinyItemComponentSetInt32 {
    instances: Components.DictionaryComponentResponseInt32DestinyItemInstanceComponent;

    perks: Components.DictionaryComponentResponseInt32DestinyItemPerksComponent;

    renderData: Components.DictionaryComponentResponseInt32DestinyItemRenderComponent;

    stats: Components.DictionaryComponentResponseInt32DestinyItemStatsComponent;

    sockets: Components.DictionaryComponentResponseInt32DestinyItemSocketsComponent;

    talentGrids: Components.DictionaryComponentResponseInt32DestinyItemTalentGridComponent;

    plugStates: Components.DictionaryComponentResponseUInt32DestinyItemPlugComponent;

    objectives: Components.DictionaryComponentResponseInt32DestinyItemObjectivesComponent;
  }

  export interface DestinyItemComponentSetUInt32 {
    instances: Components.DictionaryComponentResponseUInt32DestinyItemInstanceComponent;

    perks: Components.DictionaryComponentResponseUInt32DestinyItemPerksComponent;

    renderData: Components.DictionaryComponentResponseUInt32DestinyItemRenderComponent;

    stats: Components.DictionaryComponentResponseUInt32DestinyItemStatsComponent;

    sockets: Components.DictionaryComponentResponseUInt32DestinyItemSocketsComponent;

    talentGrids: Components.DictionaryComponentResponseUInt32DestinyItemTalentGridComponent;

    plugStates: Components.DictionaryComponentResponseUInt32DestinyItemPlugComponent;

    objectives: Components.DictionaryComponentResponseUInt32DestinyItemObjectivesComponent;
  }
}

export namespace Perks {
  /**
	The list of perks to display in an item tooltip - and whether or not they have been activated.

	Perks apply a variety of effects to a character, and are generally either intrinsic to the item
	or provided in activated talent nodes or sockets.
	*/
  export interface DestinyPerkReference {
    /**
		The hash identifier for the perk, which can be used to look up DestinySandboxPerkDefinition if it exists.
		Be warned, perks frequently do not have user-viewable information.  You should examine whether you actually
		found a name/description in the perk's definition before you show it to the user.
		*/
    perkHash: number;

    /**
		The icon for the perk.
		*/
    iconPath: string;

    /**
		Whether this perk is currently active.  (We may return perks that you have not actually activated yet:
		these represent perks that you should show in the item's tooltip, but that the user has not yet
		activated.)
		*/
    isActive: boolean;

    /**
		Some perks provide benefits, but aren't visible in the UI.  This value will let you know if this is
		perk should be shown in your UI.
		*/
    visible: boolean;
  }
}

export namespace Actions {
  export interface DestinyPostmasterTransferRequest {
    itemReferenceHash: number;

    stackSize: number;

    itemId: string;

    characterId: string;

    membershipType: Globals.BungieMembershipType;
  }

  export interface DestinyItemActionRequest {
    itemId: string;

    characterId: string;

    membershipType: Globals.BungieMembershipType;
  }

  export interface DestinyItemSetActionRequest {
    itemIds: string[];

    characterId: string;

    membershipType: Globals.BungieMembershipType;
  }

  export interface DestinyItemStateRequest {
    state: boolean;

    itemId: string;

    characterId: string;

    membershipType: Globals.BungieMembershipType;
  }

  export interface DestinyInsertPlugsActionRequest {
    /**
		Action token provided by the AwaGetActionToken API call.
		*/
    actionToken: string;

    /**
		The instance ID of the item having a plug inserted.  Only instanced items can have sockets.
		*/
    itemInstanceId: string;

    /**
		The plugs being inserted.
		*/
    plug: Actions.DestinyInsertPlugsRequestEntry;

    characterId: string;

    membershipType: Globals.BungieMembershipType;
  }

  /**
	Represents all of the data related to a single plug to be inserted.

	Note that, while you *can* point to a socket that represents infusion, you will receive an error
	if you attempt to do so.  Come on guys, let's play nice.
	*/
  export interface DestinyInsertPlugsRequestEntry {
    /**
		The index into the socket array, which identifies the specific socket being operated on.
		We also need to know the socketArrayType in order to uniquely identify the socket.

		Don't point to or try to insert a plug into an infusion socket.  It won't work.
		*/
    socketIndex: number;

    /**
		This property, combined with the socketIndex, tells us which socket we are referring to (since operations can be
		performed on both Intrinsic and "default" sockets, and they occupy different arrays in the Inventory Item Definition).
		I know, I know.  Don't give me that look.
		*/
    socketArrayType: Globals.DestinySocketArrayType;

    /**
		Plugs are never instanced (except in infusion).  So with the hash alone, we should be able to:
		1) Infer whether the player actually needs to have the item, or if it's a reusable plug
		2) Perform any operation needed to use the Plug, including removing the plug item and running reward sheets.
		*/
    plugItemHash: number;
  }
}

export namespace HistoricalStats {
  export interface DestinyPostGameCarnageReportData {
    /**
		Date and time for the activity.
		*/
    period: string;

    /**
		If this activity has "phases", this is the phase at which the activity was started.
		*/
    startingPhaseIndex?: number;

    /**
		Details about the activity.
		*/
    activityDetails: HistoricalStats.DestinyHistoricalStatsActivity;

    /**
		Collection of players and their data for this activity.
		*/
    entries: HistoricalStats.DestinyPostGameCarnageReportEntry[];

    /**
		Collection of stats for the player in this activity.
		*/
    teams: HistoricalStats.DestinyPostGameCarnageReportTeamEntry[];
  }

  /**
	Summary information about the activity that was played.
	*/
  export interface DestinyHistoricalStatsActivity {
    /**
		The unique hash identifier of the DestinyActivityDefinition that was played.
		If I had this to do over, it'd be named activityHash.  Too late now.
		*/
    referenceId: number;

    /**
		The unique hash identifier of the DestinyActivityDefinition that was played.
		*/
    directorActivityHash: number;

    /**
		The unique identifier for this *specific* match that was played.

		This value can be used to get additional data about this activity such as who else was playing
		via the GetPostGameCarnageReport endpoint.
		*/
    instanceId: string;

    /**
		Indicates the most specific game mode of the activity that we could find.
		*/
    mode: Globals.DestinyActivityModeType;

    /**
		The list of all Activity Modes to which this activity applies, including aggregates.
		This will let you see, for example, whether the activity was both Clash and part of the
		Trials of the Nine event.
		*/
    modes: Globals.DestinyActivityModeType[];

    /**
		Whether or not the match was a private match.  There's no private matches in Destiny 2... yet...
		DUN DUN DUNNNN
		*/
    isPrivate: boolean;
  }

  export interface DestinyPostGameCarnageReportEntry {
    /**
		Standing of the player
		*/
    standing: number;

    /**
		Score of the player if available
		*/
    score: HistoricalStats.DestinyHistoricalStatsValue;

    /**
		Identity details of the player
		*/
    player: HistoricalStats.DestinyPlayer;

    /**
		ID of the player's character used in the activity.
		*/
    characterId: string;

    /**
		Collection of stats for the player in this activity.
		*/
    values: { [key: string]: HistoricalStats.DestinyHistoricalStatsValue };

    /**
		Extended data extracted from the activity blob.
		*/
    extended: HistoricalStats.DestinyPostGameCarnageReportExtendedData;
  }

  export interface DestinyHistoricalStatsValue {
    /**
		Unique ID for this stat
		*/
    statId: string;

    /**
		Basic stat value.
		*/
    basic: HistoricalStats.DestinyHistoricalStatsValuePair;

    /**
		Per game average for the statistic, if applicable
		*/
    pga: HistoricalStats.DestinyHistoricalStatsValuePair;

    /**
		Weighted value of the stat if a weight greater than 1 has been assigned.
		*/
    weighted: HistoricalStats.DestinyHistoricalStatsValuePair;

    /**
		When a stat represents the best, most, longest, fastest or some other personal best, the actual
		activity ID where that personal best was established is available on this property.
		*/
    activityId?: string;
  }

  export interface DestinyHistoricalStatsValuePair {
    /**
		Raw value of the statistic
		*/
    value: number;

    /**
		Localized formated version of the value.
		*/
    displayValue: string;
  }

  export interface DestinyPlayer {
    /**
		Details about the player as they are known in game (platform display name, Destiny emblem)
		*/
    destinyUserInfo: User.UserInfoCard;

    /**
		Class of the character if applicable and available.
		*/
    characterClass: string;

    classHash: number;

    raceHash: number;

    genderHash: number;

    /**
		Level of the character if available. Zero if it is not available.
		*/
    characterLevel: number;

    /**
		Light Level of the character if available. Zero if it is not available.
		*/
    lightLevel: number;

    /**
		Details about the player as they are known on BungieNet.  This will
		be undefined if the player has marked their credential private, or does not have
		a BungieNet account.
		*/
    bungieNetUserInfo: User.UserInfoCard;

    /**
		Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
		*/
    clanName: string;

    /**
		Current clan tag for the player.  This value may be null or an empty string if the user does not have a clan.
		*/
    clanTag: string;

    /**
		If we know the emblem's hash, this can be used to look up the player's emblem at the time of a match when
		receiving PGCR data, or otherwise their currently equipped emblem (if we are able to obtain it).
		*/
    emblemHash: number;
  }

  export interface DestinyPostGameCarnageReportExtendedData {
    /**
		List of weapons and their perspective values.
		*/
    weapons: HistoricalStats.DestinyHistoricalWeaponStats[];

    /**
		Collection of stats for the player in this activity.
		*/
    values: { [key: string]: HistoricalStats.DestinyHistoricalStatsValue };
  }

  export interface DestinyHistoricalWeaponStats {
    /**
		The hash ID of the item definition that describes the weapon.
		*/
    referenceId: number;

    /**
		Collection of stats for the period.
		*/
    values: { [key: string]: HistoricalStats.DestinyHistoricalStatsValue };
  }

  export interface DestinyPostGameCarnageReportTeamEntry {
    /**
		Integer ID for the team.
		*/
    teamId: number;

    /**
		Team's standing relative to other teams.
		*/
    standing: HistoricalStats.DestinyHistoricalStatsValue;

    /**
		Score earned by the team
		*/
    score: HistoricalStats.DestinyHistoricalStatsValue;

    /**
		Alpha or Bravo
		*/
    teamName: string;
  }

  export interface DestinyLeaderboardResults {
    /**
		Indicate the membership ID of the account that is the focal point of
		the provided leaderboards.
		*/
    focusMembershipId?: string;

    /**
		Indicate the character ID of the character that is the focal point of
		the provided leaderboards. May be null, in which case any character
		from the focus membership can appear in the provided leaderboards.
		*/
    focusCharacterId?: string;

    Comparer: any;

    Count: number;

    Keys: any;

    Values: any;

    Item: { [key: string]: HistoricalStats.DestinyLeaderboard };
  }

  export interface DestinyLeaderboard {
    statId: string;

    entries: HistoricalStats.DestinyLeaderboardEntry[];
  }

  export interface DestinyLeaderboardEntry {
    /**
		Where this player ranks on the leaderboard.  A value of 1 is the top rank.
		*/
    rank: number;

    /**
		Identity details of the player
		*/
    player: HistoricalStats.DestinyPlayer;

    /**
		ID of the player's best character for the reported stat.
		*/
    characterId: string;

    /**
		Value of the stat for this player
		*/
    value: HistoricalStats.DestinyHistoricalStatsValue;
  }

  export interface DestinyClanAggregateStat {
    /**
		The id of the mode of stats (allPvp, allPvE, etc)
		*/
    mode: Globals.DestinyActivityModeType;

    /**
		The id of the stat
		*/
    statId: string;

    /**
		Value of the stat for this player
		*/
    value: HistoricalStats.DestinyHistoricalStatsValue;
  }

  export interface DestinyHistoricalStatsResults {
    Comparer: any;

    Count: number;

    Keys: any;

    Values: any;

    Item: HistoricalStats.DestinyHistoricalStatsByPeriod;
  }

  export interface DestinyHistoricalStatsByPeriod {
    allTime: { [key: string]: HistoricalStats.DestinyHistoricalStatsValue };

    allTimeTier1: {
      [key: string]: HistoricalStats.DestinyHistoricalStatsValue;
    };

    allTimeTier2: {
      [key: string]: HistoricalStats.DestinyHistoricalStatsValue;
    };

    allTimeTier3: {
      [key: string]: HistoricalStats.DestinyHistoricalStatsValue;
    };

    daily: HistoricalStats.DestinyHistoricalStatsPeriodGroup[];

    monthly: HistoricalStats.DestinyHistoricalStatsPeriodGroup[];
  }

  export interface DestinyHistoricalStatsPeriodGroup {
    /**
		Period for the group.  If the stat periodType is day, then this will have a specific day. If the type is monthly, then
		this value will be the first day of the applicable month. This value is not set when the periodType is 'all time'.
		*/
    period: string;

    /**
		If the period group is for a specific activity, this property will be set.
		*/
    activityDetails: HistoricalStats.DestinyHistoricalStatsActivity;

    /**
		Collection of stats for the period.
		*/
    values: { [key: string]: HistoricalStats.DestinyHistoricalStatsValue };
  }

  export interface DestinyHistoricalStatsAccountResult {
    mergedDeletedCharacters: HistoricalStats.DestinyHistoricalStatsWithMerged;

    mergedAllCharacters: HistoricalStats.DestinyHistoricalStatsWithMerged;

    characters: HistoricalStats.DestinyHistoricalStatsPerCharacter[];
  }

  export interface DestinyHistoricalStatsWithMerged {
    results: HistoricalStats.DestinyHistoricalStatsResults;

    merged: HistoricalStats.DestinyHistoricalStatsByPeriod;
  }

  export interface DestinyHistoricalStatsPerCharacter {
    characterId: string;

    deleted: boolean;

    results: HistoricalStats.DestinyHistoricalStatsResults;

    merged: HistoricalStats.DestinyHistoricalStatsByPeriod;
  }

  export interface DestinyActivityHistoryResults {
    /**
		List of activities, the most recent activity first.
		*/
    activities: HistoricalStats.DestinyHistoricalStatsPeriodGroup[];
  }

  export interface DestinyHistoricalWeaponStatsData {
    /**
		List of weapons and their perspective values.
		*/
    weapons: HistoricalStats.DestinyHistoricalWeaponStats[];
  }

  export interface DestinyAggregateActivityResults {
    /**
		List of all activities the player has participated in.
		*/
    activities: HistoricalStats.DestinyAggregateActivityStats[];
  }

  export interface DestinyAggregateActivityStats {
    /**
		Hash ID that can be looked up in the DestinyActivityTable.
		*/
    activityHash: number;

    /**
		Collection of stats for the player in this activity.
		*/
    values: { [key: string]: HistoricalStats.DestinyHistoricalStatsValue };
  }
}

export namespace Explorer {
  export interface DestinyExplorerItems {
    itemHashes: number[];

    totalResults: number;

    hasMore: boolean;

    query: Queries.PagedQuery;

    replacementContinuationToken: string;

    useTotalResults: boolean;
  }
}

export namespace Advanced {
  export interface AwaInitializeResponse {
    /**
		ID used to get the token.  Present this ID to the user as it will
		identify this specific request on their device.
		*/
    correlationId: string;

    /**
		True if the PUSH message will only be sent to the device that made this
		request.
		*/
    sentToSelf: boolean;
  }

  export interface AwaPermissionRequested {
    /**
		Type of advanced write action.
		*/
    type: Globals.AwaType;

    /**
		Item instance ID the action shall be applied to. This is optional for all but a new
		AwaType values. Rule of thumb is to provide the item instance ID if one is available.
		*/
    affectedItemId?: string;

    /**
		Destiny membership type of the account to modify.
		*/
    membershipType: Globals.BungieMembershipType;

    /**
		Destiny character ID, if applicable, that will be affected by the action.
		*/
    characterId?: string;
  }

  export interface AwaUserResponse {
    /**
		Indication of the selection the user has made (Approving or rejecting the action)
		*/
    selection: Globals.AwaUserSelection;

    /**
		Correlation ID of the request
		*/
    correlationId: string;

    /**
		Secret nonce received via the PUSH notification.
		*/
    nonce: number[];
  }

  export interface AwaAuthorizationResult {
    /**
		Indication of how the user responded to the request. If the value is "Approved" the actionToken
		will contain the token that can be presented when performing the advanced write action.
		*/
    userSelection: Globals.AwaUserSelection;

    responseReason: Globals.AwaResponseReason;

    /**
		Message to the app developer to help understand the response.
		*/
    developerNote: string;

    /**
		Credential used to prove the user authorized an advanced write action.
		*/
    actionToken: string;

    /**
		This token may be used to perform the requested action this number of times, at a maximum. If this
		value is 0, then there is no limit.
		*/
    maximumNumberOfUses: number;

    /**
		Time, UTC, when token expires.
		*/
    validUntil?: string;

    /**
		Advanced Write Action Type from the permission request.
		*/
    type: Globals.AwaType;

    /**
		MembershipType from the permission request.
		*/
    membershipType: Globals.BungieMembershipType;
  }
}

export namespace Community {
  export interface CommunityLiveStatus {
    dateStatusUpdated: string;

    url: string;

    partnershipIdentifier: string;

    partnershipType: Globals.PartnershipType;

    thumbnail: string;

    thumbnailSmall: string;

    thumbnailLarge: string;

    destinyCharacterId: string;

    userInfo: User.UserInfoCard;

    currentActivityHash: number;

    dateLastPlayed: string;

    dateStreamStarted: string;

    locale: string;

    currentViewers: number;

    followers: number;

    overallViewers: number;

    isFeatured: boolean;

    title: string;

    activityModeHash: number;

    dateFeatured?: string;

    trendingValue: number;

    isSubscribable: boolean;
  }
}

export namespace Admin {
  export interface AdminCommunityLiveStatus {
    dateBanned?: string;

    bannedByMembershipId: string;

    isBanned: boolean;

    featuredByMembershipId: string;

    dateStatusUpdated: string;

    url: string;

    partnershipIdentifier: string;

    partnershipType: Globals.PartnershipType;

    thumbnail: string;

    thumbnailSmall: string;

    thumbnailLarge: string;

    destinyCharacterId: string;

    userInfo: User.UserInfoCard;

    currentActivityHash: number;

    dateLastPlayed: string;

    dateStreamStarted: string;

    locale: string;

    currentViewers: number;

    followers: number;

    overallViewers: number;

    isFeatured: boolean;

    title: string;

    activityModeHash: number;

    dateFeatured?: string;

    trendingValue: number;

    isSubscribable: boolean;
  }
}

export namespace Trending {
  export interface TrendingCategories {
    categories: Trending.TrendingCategory[];
  }

  export interface TrendingCategory {
    categoryName: string;

    entries: Queries.SearchResultTrendingEntry;

    categoryId: string;
  }

  /**
	The list entry view for trending items.  Returns just enough to show the item on the trending page.
	*/
  export interface TrendingEntry {
    /**
		The weighted score of this trending item.
		*/
    weight: number;

    isFeatured: boolean;

    /**
		We don't know whether the identifier will be a string, a uint, or a long... so we're going to cast it all to a string.
		But either way, we need any trending item created to have a single unique identifier for its type.
		*/
    identifier: string;

    /**
		An enum - unfortunately - dictating all of the possible kinds of trending items that you might get in your result set,
		in case you want to do custom rendering or call to get the details of the item.
		*/
    entityType: Globals.TrendingEntryType;

    /**
		The localized "display name/article title/'primary localized identifier'" of the entity.
		*/
    displayName: string;

    /**
		If the entity has a localized tagline/subtitle/motto/whatever, that is found here.
		*/
    tagline: string;

    image: string;

    startDate?: string;

    endDate?: string;

    link: string;

    /**
		If this is populated, the entry has a related WebM video to show.
		I am 100% certain I am going to regret putting this directly on TrendingEntry,
		but it will work so yolo
		*/
    webmVideo: string;

    /**
		If this is populated, the entry has a related MP4 video to show.
		I am 100% certain I am going to regret putting this directly on TrendingEntry,
		but it will work so yolo
		*/
    mp4Video: string;

    /**
		If isFeatured, this image will be populated with whatever the featured image is.
		Note that this will likely be a very large image, so don't use it all the time.
		*/
    featureImage: string;

    /**
		If the item is of entityType TrendingEntryType.Container, it may have items - also Trending Entries - contained within it.
		This is the ordered list of those to display under the Container's header.
		*/
    items: Trending.TrendingEntry[];

    /**
		If the entry has a date at which it was created, this is that date.
		*/
    creationDate?: string;
  }

  export interface TrendingDetail {
    identifier: string;

    entityType: Globals.TrendingEntryType;

    news: Trending.TrendingEntryNews;

    support: Trending.TrendingEntrySupportArticle;

    destinyItem: Trending.TrendingEntryDestinyItem;

    destinyActivity: Trending.TrendingEntryDestinyActivity;

    destinyRitual: Trending.TrendingEntryDestinyRitual;

    creation: Trending.TrendingEntryCommunityCreation;

    stream: Trending.TrendingEntryCommunityStream;
  }

  export interface TrendingEntryNews {
    article: Content.ContentItemPublicContract;
  }

  export interface TrendingEntrySupportArticle {
    article: Content.ContentItemPublicContract;
  }

  export interface TrendingEntryDestinyItem {
    itemHash: number;
  }

  export interface TrendingEntryDestinyActivity {
    activityHash: number;

    status: Activities.DestinyPublicActivityStatus;
  }

  export interface TrendingEntryDestinyRitual {
    image: string;

    icon: string;

    title: string;

    subtitle: string;

    dateStart?: string;

    dateEnd?: string;

    /**
		A destiny event does not necessarily have a related Milestone, but if it does the details
		will be returned here.
		*/
    milestoneDetails: Milestones.DestinyPublicMilestone;

    /**
		A destiny event will not necessarily have milestone "custom content", but if it does
		the details will be here.
		*/
    eventContent: Milestones.DestinyMilestoneContent;
  }

  export interface TrendingEntryCommunityCreation {
    media: string;

    title: string;

    author: string;

    authorMembershipId: string;

    postId: string;

    body: string;

    upvotes: number;
  }

  export interface TrendingEntryCommunityStream {
    image: string;

    title: string;

    partnershipIdentifier: string;

    partnershipType: Globals.PartnershipType;
  }
}

export namespace Fireteam {
  export interface FireteamSummary {
    fireteamId: string;

    groupId: string;

    platform: Globals.FireteamPlatform;

    activityType: Globals.FireteamActivityType;

    isImmediate: boolean;

    scheduledTime?: string;

    ownerMembershipId: string;

    playerSlotCount: number;

    alternateSlotCount?: number;

    availablePlayerSlotCount: number;

    availableAlternateSlotCount: number;

    title: string;

    dateCreated: string;

    dateModified?: string;

    isPublic: boolean;

    locale: string;

    isValid: boolean;

    datePlayerModified: string;
  }

  export interface FireteamResponse {
    Summary: Fireteam.FireteamSummary;

    Members: Fireteam.FireteamMember[];

    Alternates: Fireteam.FireteamMember[];
  }

  export interface FireteamMember {
    destinyUserInfo: User.UserInfoCard;

    bungieNetUserInfo: User.UserInfoCard;

    characterId: string;

    dateJoined: string;

    hasMicrophone: boolean;

    lastPlatformInviteAttemptDate: string;

    lastPlatformInviteAttemptResult: Globals.FireteamPlatformInviteResult;
  }

  export interface FireteamCreationRequest {
    platform: Globals.FireteamPlatform;

    activityType: Globals.FireteamActivityType;

    scheduledTime?: string;

    playerSlotCount: number;

    alternateSlotCount?: number;

    title: string;

    isPublic: boolean;

    ownerCharacterId: string;

    ownerHasMicrophone: boolean;

    locale: string;
  }

  export interface FireteamEditRequest {
    fireteamId: string;

    groupId: string;

    title: string;

    scheduledTime?: string;

    playerSlotCount?: number;

    alternateSlotCount?: number;
  }
}

export namespace Explore {
  /**
	Represents a section with items in Explore Destiny 2.0.

	See TrendingCategory and TrendingEntry for what was used in Explore Destiny 1.0.
	I am taking this opportunity to move away from the obsolete "Trending" naming convention, and
	to break from some of the contract choices that I regretted in Trending (such as every type of trending item
	having different categories of details rather than trying to make more generic structures in which they
	all can fit)
	*/
  export interface ExploreSection {
    /**
		Unique and unchanging identifier for this set of Explore data being returned.
		You can use this if you need special logic that refers to a specific section.
		*/
    identifier: string;

    /**
		An enumeration that indicates to the client how this section should be rendered.
		*/
    renderingHint: Globals.ExploreRenderingHint;

    title: string;

    subtitle: string;

    /**
		Some sections, like the "cards" at the top of Explore, can be permanently dismissed if this is true.
		*/
    areItemsDismissable: boolean;

    /**
		The localized string to use if this section has a link to another part of the system.
		If this is null, there is no link.  The link also requires the client to use the identifier
		to understand where the link is going.
		*/
    linkLabel: string;

    /**
		The items contained under the Explore section.
		*/
    entries: Explore.ExploreEntry[];
  }

  export interface ExploreEntry {
    /**
		Indicates the type of entity that we're referring to with this entry.
		*/
    entityType: Globals.ExploreEntityType;

    /**
		The unique identifier for this entity.  In the case of a Destiny entity for example, this would be castable
		to a uint hash identifier.
		*/
    identifier: string;

    title: string;

    description: string;

    background: string;

    icon: string;

    iconText: string;

    /**
		OPTIONAL - If this item is meant to link to a webpage, this is the link to that page.
		*/
    externalLink: string;

    /**
		OPTIONAL - If we want to show a progress bar, this will be the info to use
		*/
    progression: World.DestinyProgression;

    /**
		OPTIONAL - If the entry is part of a quest that you're on, this is the quests' status including
		any objectives in the current step.
		*/
    questStatus: Quests.DestinyQuestStatus;

    startDate?: string;

    endDate?: string;

    /**
		OPTIONAL - If this exists, then there are "sub-entries" on this particular entry.  For instance, if a single "Card"
		has multiple line items listed that are clickable, each of them will be represented by a single Sub-Entry with its own
		localized text, identifier etc.
		*/
    subEntries: Explore.ExploreEntry[];

    /**
		OPTIONAL - If this exists, then rewards for performing the action should be shown on the card (or however they ultimately
		end up being rendered) represented as items and the optional quantity of that item.
		*/
    rewards: World.DestinyItemQuantity[];

    /**
		OPTIONAL - If this exists, then the entry is one that may mutate over time.  This can be used to determine whether, even
		if the user has dismissed this Entry in the past, they should be shown it again.  (for instance, if the user has new clan
		messages since the last time they dismissed the clan messages card, or Xur has reappeared)
		*/
    checksum?: string;

    /**
		The localized string to use if this section has a link to another part of the system.
		If this is null, don't put a link prompt text on the entry.  The link also requires the client to use the identifier
		to understand where the link is going.
		*/
    linkLabel: string;
  }
}

export namespace Renderable {
  export interface ContentItemRenderable {
    Content: Content.ContentItemPublicContract;

    RenderedPropertyMacros: {
      [key: string]: Renderable.ContentMacroMetadata[];
    };

    DependentContentProperties: {
      [key: string]: Renderable.ContentItemRenderable[];
    };
  }

  export interface ContentMacroMetadata {
    MacroString: string;

    ReferencedContent: Renderable.ContentItemRenderable;

    TemplateType: string;

    Attributes: { [key: string]: string };

    Content: Content.ContentItemPublicContract;
  }
}

export namespace Renderer {
  export interface ServerLogRequest {
    Message: string;

    Stack: string;

    LogLevel: Globals.RendererLogLevel;
  }
}

class JsonpServiceInternal {
  /**
   * Gets the signed-in user.
   * @param callback The callback function name.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCurrentUser(
    callback: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["callback", callback]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/JSONP/GetBungieNetUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("JSONP", "GetCurrentUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class ApplicationServiceInternal {
  /**
   * Trades an authorization code for access and refresh tokens.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAccessTokensFromCode(
    input: Applications.RequestWithCode,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.ApplicationCredentials> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/GetAccessTokensFromCode/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetAccessTokensFromCode", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Trades an authorization refresh token for a fresh access and refresh token.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAccessTokensFromRefreshToken(
    input: Applications.RequestWithRefreshToken,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.ApplicationCredentials> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/GetAccessTokensFromRefreshToken/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetAccessTokensFromRefreshToken", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a new application.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateApplication(
    input: Applications.CreateApplicationAction,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/CreateApplication/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "CreateApplication", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns information about the supplied application.
   * @param applicationId Identity of the application to lookup.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetApplication(
    applicationId: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.Application> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/Application/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetApplication", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edit an existing application.  You must have suitable permissions in the group to perform this operation.  This only edit the fields you pass in - pass null for properties you want to leave unaltered.
   * @param applicationId ID of the application to edit.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditApplication(
    input: Applications.EditApplicationAction,
    applicationId: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/EditApplication/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "EditApplication", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns API keys for the supplied application if the current user has permission to read those keys.
   * @param applicationId Identity of the application to lookup.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetApplicationApiKeys(
    applicationId: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.ApplicationApiKey[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/ApplicationApiKeys/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetApplicationApiKeys", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Enable, Disable, or Delete an API key.
   * @param apiKeyId ID of the API key whose state should change.
   * @param newStatus New status of the API key.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ChangeApiKeyStatus(
    apiKeyId: number,
    newStatus: Globals.ApiKeyStatus,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/ChangeApiKeyState/${encodeURIComponent(
        String(apiKeyId)
      )}/${encodeURIComponent(String(newStatus))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "ChangeApiKeyStatus", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Create a new API for an application.
   * @param applicationId ID of the application for which to create a new key.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateApiKey(
    applicationId: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.ApplicationApiKey> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/CreateApiKey/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "CreateApiKey", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get API usage by application for time frame specified.  You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request.  You must be authenticated with at least the ReadUserData permission to access this endpoint.
   * @param applicationId ID of the application to get usage statistics.
   * @param start Start time for query. Goes to 24 hours ago if not specified.
   * @param end End time for query. Goes to now if not specified.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetApplicationApiUsage(
    applicationId: number,
    start: string,
    end: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.ApiUsage> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["start", start],
      ["end", end]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/App/ApiUsage/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetApplicationApiUsage", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get a paged list of authorizations linked to the supplied Bungie.net membership ID.
   * @param membershipId Membership ID whose authorizations should be fetched.
   * @param currentPage Page number (starting with 0). Each page has a fixed size of 50 items per page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAuthorizations(
    membershipId: string,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultAuthorization> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/App/Authorizations/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetAuthorizations", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a record if the specific user has ever authorized the application ID.
   * @param membershipId Membership ID whose authorizations should be fetched.
   * @param applicationId ID of the application to check.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAuthorizationForUserAndApplication(
    membershipId: string,
    applicationId: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.Authorization> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/Authorization/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetAuthorizationForUserAndApplication", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Revoke a previously authorized application so that the refresh token it was issued will no longer function.
   * @param membershipId Membership ID of the user whose authorizations should be revoked.
   * @param applicationId ID of the application to revoke.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RevokeAuthorization(
    membershipId: string,
    applicationId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/RevokeAuthorization/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "RevokeAuthorization", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get list of applications created by Bungie.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetBungieApplications(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.Application[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/FirstParty/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetBungieApplications", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Search for public applications.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApplicationSearch(
    input: Applications.ApplicationQuery,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultApplication> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/Search/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "ApplicationSearch", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Search for applications owned by particular members, including those marked private.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static PrivateApplicationSearch(
    input: Applications.ApplicationQuery,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultApplication> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/PrivateSearch/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "PrivateApplicationSearch", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Endpoint provides tokens based on OAuth 2.0 specification
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetOAuthTokens(
    input: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.OAuthTokenResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/oauth/token/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetOAuthTokens", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Endpoint provides client_credential grant tokens for the purposes of service accounts.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetOAuthClientCredentialToken(
    input: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Applications.OAuthClientCredentialTokenResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/App/oauth/service/token/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("App", "GetOAuthClientCredentialToken", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class UserServiceInternal {
  /**
   * Returns the current user's auth context state information for this session.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCurrentUserAuthContextState(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.UserAuthContextResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/CurrentAuthContextSessionState/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetCurrentUserAuthContextState", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a new user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateUser(
    input: Contract.CreateBungieProfileRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.UserDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/CreateUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "CreateUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates an email only new user - they can't sign in, but they are signed up for basic emails.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateEmailUser(
    input: Contract.CreateEmailUserRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/CreateEmailUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "CreateEmailUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Updates a user based on the current logged in user info.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateUser(
    input: Contract.UserEditRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/UpdateUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "UpdateUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Requests another validation email be sent if the current user's email is not validated.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RevalidateEmail(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/RevalidateEmail/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "RevalidateEmail", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Updates the user's destiny emblem selection, or clears it if the values are zero'd out.  Returns new avatar relative url.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateDestinyEmblemAvatar(
    input: User.DestinyEmblemSourceRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/UpdateDestinyEmblemAvatar/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "UpdateDestinyEmblemAvatar", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Updates a user based on parameter, requires an admin.
   * @param membershipId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateUserAdmin(
    input: Contract.UserEditRequest,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/UpdateUserAdmin/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "UpdateUserAdmin", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Updates a notification setting for the current user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateNotificationSetting(
    input: Notifications.NotificationUpdateRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/Notification/Update/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "UpdateNotificationSetting", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Updates message flags for the 'success' category of UI messages for a user.
   * @param flags The new flags value for this user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditSuccessMessageFlags(
    flags: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/MessageFlags/Success/Update/${encodeURIComponent(String(flags))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "EditSuccessMessageFlags", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets user details of signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCurrentUser(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.UserDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetBungieNetUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetCurrentUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets relevant counts for the signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCountsForCurrentUser(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.UserCounts> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetCounts/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetCountsForCurrentUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets basic profile information for the signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCurrentBungieNetUser(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetCurrentBungieNetUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetCurrentBungieNetUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Loads a bungienet user by membership id.
   * @param id The requested Bungie.net membership id.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetBungieNetUserById(
    id: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetBungieNetUserById/${encodeURIComponent(String(id))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetBungieNetUserById", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets user information for the signed-in user specifically for the forum.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetForumUser(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.ForumUser> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetForumUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetForumUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of possible users based on the search string
   * @param q The search string.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchUsers(
    q: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser[]> {
    const requiredParameters = ApiIntermediary.getParamString([["q", q]]);

    const url = ApiIntermediary.buildUrl(
      `/User/SearchUsers/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "SearchUsers", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of possible users based on the search string, and the given page.
   * @param searchString The search string.
   * @param currentPage
   * @param itemsPerPage The number of users per page to return (capped at 50) DEPRECATED - we'll give you what we've configured to be a reasonable # of results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchUsersPagedV2(
    searchString: string,
    currentPage: number,
    itemsPerPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultGeneralUser> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/SearchUsersPaged/${encodeURIComponent(
        String(searchString)
      )}/${encodeURIComponent(String(currentPage))}/${encodeURIComponent(
        String(itemsPerPage)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "SearchUsersPagedV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns this users notification settings.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetNotificationSettings(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.NotificationSetting[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetNotificationSettings/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetNotificationSettings", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of credential types attached to the caller's account
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCredentialTypesForAccount(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.GetCredentialTypesForAccountResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetCredentialTypesForAccount/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetCredentialTypesForAccount", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of all available avatars for the signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableAvatars(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<{ [key: number]: string }> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetAvailableAvatars/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetAvailableAvatars", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of all available avatars for a specific user, but includes admin avatars.  Signed in user must have edit all users acl.
   * @param membershipId BungieNet membership ID of the user to lookup.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableAvatarsAdmin(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<{ [key: number]: string }> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetAvailableAvatarsAdmin/${encodeURIComponent(
        String(membershipId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetAvailableAvatarsAdmin", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of all available user themes.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableThemes(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Config.UserTheme[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetAvailableThemes/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetAvailableThemes", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to pair a mobile app to their account.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RegisterMobileAppPair(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/RegisterMobileAppPair/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "RegisterMobileAppPair", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to unregister a mobile app from their account, given the appType and a specific pairId.
   * @param appType The mobile app type the user wishes to deauthorize.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UnregisterMobileAppPair(
    input: string,
    appType: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/UnregisterMobileAppPair/${encodeURIComponent(String(appType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "UnregisterMobileAppPair", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to unregister from every Bungie.Net Mobile Companion App session and push notification pairing, useful for when you've lost your device or if it has been stolen.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CloseAllCompanionSessions(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/Companion/CloseAllSessions/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "CloseAllCompanionSessions", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to pair a mobile app to their account.
   * @param pairwithinput If true, execute the mobile pairing using the MobileAppPairing data, and not cookie information.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateStateInfoForMobileAppPair(
    input: User.MobileAppPairing,
    pairwithinput: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["pairwithinput", pairwithinput]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/User/UpdateStateInfoForMobileAppPair/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "UpdateStateInfoForMobileAppPair", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a user's mobile app pairing states without using the cache.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetMobileAppPairingsUncached(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.MobileAppPairing[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetMobileAppPairingsUncached/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetMobileAppPairingsUncached", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Links a credential to the current user's profile, overriding any existing link.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static LinkOverride(
    input: Contract.LinkOverrideInput,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/LinkOverride/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "LinkOverride", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the signed-in user.
   * @param excludebungienet True indicates only game related IDs should be returned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUserMembershipIds(
    excludebungienet: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<{ [key: string]: Globals.BungieMembershipType }> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["excludebungienet", excludebungienet]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/User/GetMembershipIds/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetUserMembershipIds", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
   * @param membershipId The membership ID of the target user.
   * @param membershipType Type of the supplied membership ID.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetMembershipDataById(
    membershipId: string,
    membershipType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.UserMembershipData> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetMembershipsById/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(membershipType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetMembershipDataById", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetMembershipDataForCurrentUser(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.UserMembershipData> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/GetMembershipsForCurrentUser/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetMembershipDataForCurrentUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Notes an item as acknowledged by the user.
   * @param ackId Acknowledgement Id
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SetAcknowledged(
    ackId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/Acknowledged/${encodeURIComponent(String(ackId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "SetAcknowledged", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a user's linked Partnerships.
   * @param membershipId The ID of the member for whom partnerships should be returned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPartnerships(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Partnerships.PublicPartnershipDetail[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/${encodeURIComponent(String(membershipId))}/Partnerships/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "GetPartnerships", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Removes a partnership of a given type if it exists.
   * @param partnershipType The type of partnership being removed.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RemovePartnership(
    partnershipType: Globals.PartnershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/User/Partnerships/${encodeURIComponent(
        String(partnershipType)
      )}/Remove/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("User", "RemovePartnership", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class MessageServiceInternal {
  /**
   * Returns a conversation sent to the current logged in user.
   * @param conversationId
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationByIdV2(
    conversationId: string,
    format: Globals.TemplateFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.MessageConversationResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationByIdV2/${encodeURIComponent(
        String(conversationId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationByIdV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a conversation sent to the current logged in user and another member.
   * @param membershipId
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationWithMemberIdV2(
    membershipId: string,
    format: Globals.TemplateFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.MessageConversationResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationWithMemberV2/${encodeURIComponent(
        String(membershipId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationWithMemberIdV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the thread between all current users in the conversation.
   * @param conversationId ID of the conversation whose messages are needed.
   * @param page Page of the returned messages. Page 1 has the most recent messages.
   * @param format Unused
   * @param before Only return messages for this conversation whose ID is lower than supplied value. Omit, or use long.MaxValue to get all messages.
   * @param after Only return messages for this conversation whose ID is larger supplied value. Omit, or use 0 to get all messages.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationThreadV3(
    conversationId: string,
    page: number,
    format: Globals.TemplateFormat,
    before: string,
    after: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.MessageSearchResult> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format],
      ["before", before],
      ["after", after]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationThreadV3/${encodeURIComponent(
        String(conversationId)
      )}/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationThreadV3", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a message based on the current logged in user info.  Use SaveMessageV3 for saving a message to a known conversation, and CreateConversation for making a new conversation.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SaveMessageV3(
    input: Requests.SaveMessageForConversationRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/SaveMessageV3/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "SaveMessageV3", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a message based on the current logged in user info.  Use SaveMessageV4 for saving a message to a known conversation, and CreateConversation for making a new conversation.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SaveMessageV4(
    input: Requests.SaveMessageForConversationRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.SaveMessageResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/SaveMessageV4/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "SaveMessageV4", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Indicates the user is typing in an indicated conversation window.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UserIsTyping(
    input: Requests.UserIsTypingRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/UserIsTyping/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "UserIsTyping", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a message based on the current logged in user info, and the people to whom the message should be sent.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateConversation(
    input: Requests.CreateConversationRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/CreateConversation/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "CreateConversation", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a message based on the current logged in user info, and the people to whom the message should be sent. Returns both new message ID and conversation ID.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateConversationV2(
    input: Requests.CreateConversationRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.SaveMessageResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/CreateConversationV2/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "CreateConversationV2", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns conversations sent to the current logged in user.  No longer returns External Conversations.
   * @param page Page 1 is the first page of results
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationsV5(
    page: number,
    format: Globals.TemplateFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.MessageConversationSearchResult> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationsV5/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationsV5", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns group conversations sent to the current logged in user.
   * @param page
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupConversations(
    page: number,
    format: Globals.TemplateFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.MessageConversationSearchResult> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Message/GetGroupConversations/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetGroupConversations", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns group conversations sent to the current logged in user.
   * @param groupType The type of group to access.
   * @param page The one-based page to retrieve
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupConversationsV2(
    groupType: Globals.GroupType,
    page: number,
    format: Globals.TemplateFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.MessageConversationSearchResult> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Message/GetGroupConversationsV2/${encodeURIComponent(
        String(groupType)
      )}/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetGroupConversationsV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the unread count for the current user, including unread external conversations. Basically does what GetUnreadConversationCountV3 did, but with a less confusing name.  I know, don't judge me.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTotalConversationCount(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetTotalConversationCount/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetTotalConversationCount", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the unread count for the current user, excluding unread external conversations.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUnreadConversationCountV4(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetUnreadConversationCountV4/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetUnreadConversationCountV4", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the unread count for the current user's group conversations.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUnreadGroupConversationCount(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetUnreadGroupConversationCount/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetUnreadGroupConversationCount", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the unread count and conversation ids that have unread messages for the current user's group conversations of a particular group type.
   * @param groupType The type of group conversations to access.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CheckGroupConversationReadState(
    groupType: Globals.GroupType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.UnreadConversationCountResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/CheckGroupConversationReadState/${encodeURIComponent(
        String(groupType)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "CheckGroupConversationReadState", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Removes the logged in user from the conversation.
   * @param conversationId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static LeaveConversation(
    conversationId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/LeaveConversation/${encodeURIComponent(
        String(conversationId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "LeaveConversation", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Reviews a list of request invitations, checking whether you have the requisite permission to do so.
   * @param responseState
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReviewInvitations(
    input: Entities.EntityList,
    responseState: Globals.InvitationResponseState,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Entities.EntityActionResult[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/Invitations/ReviewListDirect/${encodeURIComponent(
        String(responseState)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "ReviewInvitations", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Reviews a list of request invitations, checking whether you have the requisite permission to do so.
   * @param invitationType
   * @param responseState
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReviewAllInvitations(
    invitationType: Globals.InvitationType,
    responseState: Globals.InvitationResponseState,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Entities.EntityActionResult[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/Invitations/ReviewAllDirect/${encodeURIComponent(
        String(invitationType)
      )}/${encodeURIComponent(String(responseState))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "ReviewAllInvitations", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Reviews the given Invitation, checking whether you have the requisite permission to do so.
   * @param invitationId
   * @param responseState
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReviewInvitationDirect(
    invitationId: string,
    responseState: Globals.InvitationResponseState,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Invitations.Invitation> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/Invitations/ReviewDirect/${encodeURIComponent(
        String(invitationId)
      )}/${encodeURIComponent(String(responseState))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "ReviewInvitationDirect", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Reviews the given Invitation.
   * @param invitationId
   * @param responseCode
   * @param responseState
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReviewInvitation(
    invitationId: string,
    responseCode: string,
    responseState: Globals.InvitationResponseState,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Invitations.Invitation> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/Invitations/${encodeURIComponent(
        String(invitationId)
      )}/${encodeURIComponent(String(responseCode))}/${encodeURIComponent(
        String(responseState)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "ReviewInvitation", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns pending requests from other groups to join your Group's Alliance.
   * @param groupId
   * @param page
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAllianceJoinInvitations(
    groupId: string,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Models.GroupInvitationSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/AllianceInvitations/RequestsToJoinYourGroup/${encodeURIComponent(
        String(groupId)
      )}/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetAllianceJoinInvitations", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns pending invitations to join another Group's Alliance.
   * @param groupId
   * @param page
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAllianceInvitedToJoinInvitations(
    groupId: string,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Models.GroupInvitationSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/AllianceInvitations/InvitationsToJoinAnotherGroup/${encodeURIComponent(
        String(groupId)
      )}/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Message",
      "GetAllianceInvitedToJoinInvitations",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get your response code for an invitation, if you have one.  If you don't, go away please.  K thanks.
   * @param invitationId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetInvitationDetails(
    invitationId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Invitations.InvitationResponseCodeDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/Invitations/${encodeURIComponent(
        String(invitationId)
      )}/Details/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetInvitationDetails", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Marks all private and group conversations as being seen, reducing their unread counter to zero without marking them as being read.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateConversationLastViewedTimestamp(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/Conversations/UpdateLastViewedTimestamp/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Message",
      "UpdateConversationLastViewedTimestamp",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a group admin to delete a message posted to the group wall.
   * @param groupId The group id of the wall being moderated.
   * @param messageId The id of the message to delete.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ModerateGroupWall(
    groupId: string,
    messageId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/ModerateGroupWall/${encodeURIComponent(
        String(groupId)
      )}/${encodeURIComponent(String(messageId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "ModerateGroupWall", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * For group conversations, sets the notification preference for the user.
   * @param conversationId The conversation id of the group conversation having its notification setting changed.
   * @param enableNotify The new state of the user's notification preference for this conversation.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SetUserNotifyPreferenceForConversation(
    conversationId: string,
    enableNotify: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/SetUserNotifyPreferenceForConversation/${encodeURIComponent(
        String(conversationId)
      )}/${encodeURIComponent(String(enableNotify))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Message",
      "SetUserNotifyPreferenceForConversation",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the unread count for the current user
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUnreadConversationCountV2(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetUnreadPrivateConversationCount/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetUnreadConversationCountV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a conversation sent to the current logged in user.
   * @param conversationId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationById(
    conversationId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Legacy.LegacyConversationV2> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationById/${encodeURIComponent(
        String(conversationId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationById", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a conversation sent to the current logged in user and another member.
   * @param membershipId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationWithMemberId(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Legacy.LegacyConversationV2> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationWithMember/${encodeURIComponent(
        String(membershipId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationWithMemberId", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a message based on the current logged in user info.  More explicit APIs have replaced this one: use those instead. (SaveMessageV3 for saving a message to a known conversation, and CreateConversation for making a new conversation.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SaveMessageV2(
    input: Legacy.LegacySaveMessageRequestV2,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/SaveMessageV2/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "SaveMessageV2", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns conversations sent to the current logged in user.  Use V4 instead for an integrated chat with groups and private conversations.
   * @param page
   * @param pagesize
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationsV2(
    page: number,
    pagesize: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Legacy.LegacyConversationV2[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationsV2/${encodeURIComponent(
        String(page)
      )}/${encodeURIComponent(String(pagesize))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationsV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns conversations sent to the current logged in user.  Includes the count of new messages.  Use V4 for a more compact and useful result object.
   * @param page
   * @param pagesize
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationsV3(
    page: number,
    pagesize: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Legacy.LegacyConversationResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationsV3/${encodeURIComponent(
        String(page)
      )}/${encodeURIComponent(String(pagesize))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationsV3", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the thread between all current users in the conversation.  Rendered obsolete by GetConversationThreadV3, which has a more compact result format.
   * @param conversationId ID of the conversation whose message data you are fetching
   * @param page Page number to fetch.
   * @param pagesize Number of messages per page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetConversationThreadV2(
    conversationId: string,
    page: number,
    pagesize: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Legacy.LegacyConversationMessageV2[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Message/GetConversationThreadV2/${encodeURIComponent(
        String(conversationId)
      )}/${encodeURIComponent(String(page))}/${encodeURIComponent(
        String(pagesize)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Message", "GetConversationThreadV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class NotificationServiceInternal {
  /**
   * Gets the recent notifications for the signed in user.
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRecentNotifications(
    format: Globals.TemplateFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Notifications.NotificationResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Notification/GetRecent/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Notification", "GetRecentNotifications", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the number of new notifications for the signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRecentNotificationCount(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Notification/GetCount/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Notification", "GetRecentNotificationCount", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Resets the notification list for the signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ResetNotification(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Notification/Reset/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Notification", "ResetNotification", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Creates a long held pending GET response.
   * @param ack Value of the last sequence number seen in a response from the server
   * @param tab ID of the tab making the request.
   * @param timeout The amount of time before a timeout.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRealTimeEvents(
    ack: number,
    tab: number,
    timeout: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<RealTimeEventing.EventChannelResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["timeout", timeout]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Notification/Events/${encodeURIComponent(
        String(ack)
      )}/${encodeURIComponent(String(tab))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Notification", "GetRealTimeEvents", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Send a push notification to the current device, or all linked devices.
   * @param allDevices If true, send a push notification to all linked to devices, not just the current device.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SendTestPushNotification(
    allDevices: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["allDevices", allDevices]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Notification/SendTestPushNotification/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Notification", "SendTestPushNotification", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class ContentServiceInternal {
  /**
   * Gets an object describing a particular variant of content.
   * @param type
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetContentType(
    type: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Models.ContentTypeDescription> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/GetContentType/${encodeURIComponent(String(type))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetContentType", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a content item referenced by id
   * @param id
   * @param locale
   * @param head false
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetContentById(
    id: string,
    locale: string,
    head: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Content.ContentItemPublicContract> {
    const requiredParameters = ApiIntermediary.getParamString([["head", head]]);

    const url = ApiIntermediary.buildUrl(
      `/Content/GetContentById/${encodeURIComponent(
        String(id)
      )}/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetContentById", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the newest item that matches a given tag and Content Type.
   * @param tag
   * @param type
   * @param locale
   * @param head Not used.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetContentByTagAndType(
    tag: string,
    type: string,
    locale: string,
    head: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Content.ContentItemPublicContract> {
    const requiredParameters = ApiIntermediary.getParamString([["head", head]]);

    const url = ApiIntermediary.buildUrl(
      `/Content/GetContentByTagAndType/${encodeURIComponent(
        String(tag)
      )}/${encodeURIComponent(String(type))}/${encodeURIComponent(
        String(locale)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetContentByTagAndType", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets content based on querystring information passed in.  Provides additional search capabilities through POSTed JSON data.
   * @param locale
   * @param head Not used.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchContentEx(
    input: Models.ContentQueryPublic,
    locale: string,
    head: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultContentItemPublicContract> {
    const requiredParameters = ApiIntermediary.getParamString([["head", head]]);

    const url = ApiIntermediary.buildUrl(
      `/Content/SearchEx/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "SearchContentEx", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets content based on querystring information passed in.  Provides basic search and text search capabilities.
   * @param locale
   * @param head Not used.
   * @param ctype Content type tag: Help, News, etc. Supply multiple ctypes separated by space.
   * @param tag Tag used on the content to be searched.
   * @param currentpage Page number for the search results, starting with page 1.
   * @param searchtext Word or phrase for the search.
   * @param source For analytics, hint at the part of the app that triggered the search. Optional.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchContentWithText(
    locale: string,
    head: boolean,
    ctype: string,
    tag: string,
    currentpage: number,
    searchtext: string,
    source: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultContentItemPublicContract> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["head", head],
      ["ctype", ctype],
      ["tag", tag],
      ["currentpage", currentpage],
      ["searchtext", searchtext],
      ["source", source]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Content/Search/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "SearchContentWithText", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Searches for Content Items that match the given Tag and Content Type.
   * @param tag
   * @param type
   * @param locale
   * @param head Not used.
   * @param currentpage Page number for the search results starting with page 1.
   * @param itemsperpage Not used.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchContentByTagAndType(
    tag: string,
    type: string,
    locale: string,
    head: boolean,
    currentpage: number,
    itemsperpage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultContentItemPublicContract> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["head", head],
      ["currentpage", currentpage],
      ["itemsperpage", itemsperpage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Content/SearchContentByTagAndType/${encodeURIComponent(
        String(tag)
      )}/${encodeURIComponent(String(type))}/${encodeURIComponent(
        String(locale)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "SearchContentByTagAndType", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets content relevant to the homepage.  Relevant as of 2018-07-10.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetHomepageContentV3(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.FrontPageContentResponseV3> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Homepage/V3/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetHomepageContentV3", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets all Publication data.
   * @param locale
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPublications(
    locale: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultContentItemPublicContract> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Publications/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetPublications", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets all News data.
   * @param newsType
   * @param locale
   * @param itemsperpage 10
   * @param currentpage 1
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetNews(
    newsType: string,
    locale: string,
    itemsperpage: number,
    currentpage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultContentItemPublicContract> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["itemsperpage", itemsperpage],
      ["currentpage", currentpage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/News/${encodeURIComponent(
        String(newsType)
      )}/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetNews", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets content relevant to the Destiny page.
   * @param locale
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyContent(
    locale: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.DestinyContentResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Destiny/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetDestinyContent", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets content relevant to the Destiny page.
   * @param locale
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyContentV2(
    locale: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.DestinyContentResponseV2> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Destiny/V2/${encodeURIComponent(String(locale))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetDestinyContentV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets promotional widget content.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPromoWidget(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Content.ContentItemPublicContract> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Destiny/Promo/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetPromoWidget", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the current featured article on the site.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFeaturedArticle(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Content.ContentItemPublicContract> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Featured/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetFeaturedArticle", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the current pinned articles on the site's frontpage, in the order that they should be rendered.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPinnedArticles(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Content.ContentItemPublicContract[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Site/Pinned/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetPinnedArticles", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a summary of careers currently available.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCareers(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Careers.CareerSetResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Careers/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetCareers", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the specific career referred to by this careerId.
   * @param careerId The ID of the Career.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCareer(
    careerId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Careers.CareerResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Content/Careers/${encodeURIComponent(String(careerId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "GetCareer", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Search for careers.
   * @param searchtext The text to be searched for, URL encoded.  Both the Body and Title of the Job will be searched.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchCareers(
    searchtext: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Careers.CareerSummary[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["searchtext", searchtext]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Content/Careers/Search/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Content", "SearchCareers", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class ExternalSocialServiceInternal {
  /**
   * Loads the latest Bungie feed from a set of social services limited by item number (limit).
   * @param limit
   * @param types
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAggregatedSocialFeed(
    limit: number,
    types: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.ExternalMessage[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["types", types]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/ExternalSocial/GetAggregatedSocialFeed/${encodeURIComponent(
        String(limit)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("ExternalSocial", "GetAggregatedSocialFeed", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class SurveyServiceInternal {}

class ForumServiceInternal {
  /**
   * Checks if the current user is able to post in the proposed location. Returns true if the posting is permitted, otherwise returns an error indicating what the restriction is.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static VerifyCreatePostAvailability(
    input: Contract.PostLocation,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/VerifyCreatePostAvailability/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "VerifyCreatePostAvailability", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to create a new forum post or reply to an existing post.  Returns the post.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreatePost(
    input: Contract.CreatePostRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/CreatePost/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "CreatePost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to create a top level reply comment to content in the Content Management System.  Returns the post created by this action.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateContentComment(
    input: Contract.CreateContentCommentRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/CreateContentComment/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "CreateContentComment", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to edit a forum post.  Returns the updated post.
   * @param postid ID of the post to edit.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditPost(
    input: Contract.EditPostRequest,
    postid: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/EditPost/${encodeURIComponent(String(postid))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "EditPost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows deletion of a topic and its posts by a user of an appropriate security level.
   * @param postId ID of the post to delete.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static DeletePost(
    postId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/DeletePost/${encodeURIComponent(String(postId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "DeletePost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to rate a post from 0 to 100, overwriting any existing rating.  You must pass 0 (dislike) or 100(like).  Returns the updated rating score.
   * @param postId
   * @param rating
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RatePost(
    postId: string,
    rating: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/RatePost/${encodeURIComponent(
        String(postId)
      )}/${encodeURIComponent(String(rating))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "RatePost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Moderate a post.  Only accessible to authorized users.
   * @param postId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ModeratePost(
    input: Contracts.ModerationRequest,
    postId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Post/${encodeURIComponent(String(postId))}/Moderate/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "ModeratePost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Moderate a Tag.  Only accessible to authorized users.
   * @param tagText A forum tag.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ModerateTag(
    input: Contracts.ModerationRequest,
    tagText: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Tags/${encodeURIComponent(String(tagText))}/Moderate/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "ModerateTag", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Moderate a group post.  Only accessible to admins and founders of that group.
   * @param postId The post to moderate
   * @param groupId The id of the group that the post is in.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ModerateGroupPost(
    input: Contracts.ModerationRequest,
    postId: string,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Post/${encodeURIComponent(
        String(postId)
      )}/GroupModerate/${encodeURIComponent(String(groupId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "ModerateGroupPost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get topics from any forum.
   * @param page Zero paged page number
   * @param pageSize Unused
   * @param group The group, if any.
   * @param sort The sort mode.
   * @param quickDate A date filter.
   * @param categoryFilter A category filter
   * @param tagstring The tags to search, if any.
   * @param locales Comma seperated list of locales posts must match to return in the result list. Default 'en'
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTopicsPaged(
    page: number,
    pageSize: number,
    group: string,
    sort: Globals.ForumTopicsSortEnum,
    quickDate: Globals.ForumTopicsQuickDateEnum,
    categoryFilter: Globals.ForumTopicsCategoryFiltersEnum,
    tagstring: string,
    locales: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["tagstring", tagstring],
      ["locales", locales]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetTopicsPaged/${encodeURIComponent(
        String(page)
      )}/${encodeURIComponent(String(pageSize))}/${encodeURIComponent(
        String(group)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(quickDate)
      )}/${encodeURIComponent(String(categoryFilter))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetTopicsPaged", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a listing of all topics marked as part of the core group.
   * @param page Zero base page
   * @param sort The sort mode.
   * @param quickDate The date filter.
   * @param categoryFilter The category filter.
   * @param locales Comma seperated list of locales posts must match to return in the result list. Default 'en'
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCoreTopicsPaged(
    page: number,
    sort: Globals.ForumTopicsSortEnum,
    quickDate: Globals.ForumTopicsQuickDateEnum,
    categoryFilter: Globals.ForumTopicsCategoryFiltersEnum,
    locales: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["locales", locales]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetCoreTopicsPaged/${encodeURIComponent(
        String(page)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(quickDate)
      )}/${encodeURIComponent(String(categoryFilter))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetCoreTopicsPaged", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
   * @param parentPostId
   * @param page
   * @param pageSize
   * @param replySize
   * @param getParentPost
   * @param rootThreadMode
   * @param sortMode
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPostsThreadedPaged(
    parentPostId: string,
    page: number,
    pageSize: number,
    replySize: number,
    getParentPost: boolean,
    rootThreadMode: boolean,
    sortMode: Globals.ForumPostSortEnum,
    showbanned: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["showbanned", showbanned]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetPostsThreadedPaged/${encodeURIComponent(
        String(parentPostId)
      )}/${encodeURIComponent(String(page))}/${encodeURIComponent(
        String(pageSize)
      )}/${encodeURIComponent(String(replySize))}/${encodeURIComponent(
        String(getParentPost)
      )}/${encodeURIComponent(String(rootThreadMode))}/${encodeURIComponent(
        String(sortMode)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetPostsThreadedPaged", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
   * @param childPostId
   * @param page
   * @param pageSize
   * @param replySize
   * @param rootThreadMode
   * @param sortMode
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPostsThreadedPagedFromChild(
    childPostId: string,
    page: number,
    pageSize: number,
    replySize: number,
    rootThreadMode: boolean,
    sortMode: Globals.ForumPostSortEnum,
    showbanned: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["showbanned", showbanned]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetPostsThreadedPagedFromChild/${encodeURIComponent(
        String(childPostId)
      )}/${encodeURIComponent(String(page))}/${encodeURIComponent(
        String(pageSize)
      )}/${encodeURIComponent(String(replySize))}/${encodeURIComponent(
        String(rootThreadMode)
      )}/${encodeURIComponent(String(sortMode))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetPostsThreadedPagedFromChild", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the post specified and its immediate parent.
   * @param childPostId
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPostAndParent(
    childPostId: string,
    showbanned: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["showbanned", showbanned]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetPostAndParent/${encodeURIComponent(String(childPostId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetPostAndParent", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the post specified and its immediate parent of posts that are awaiting approval.
   * @param childPostId
   * @param showbanned If this value is not null or empty, banned posts are requested to be returned
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPostAndParentAwaitingApproval(
    childPostId: string,
    showbanned: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["showbanned", showbanned]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetPostAndParentAwaitingApproval/${encodeURIComponent(
        String(childPostId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetPostAndParentAwaitingApproval", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the popular tags in the forum using our estimated counts.
   * @param quantity
   * @param tagsSinceDate
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPopularTags(
    quantity: number,
    tagsSinceDate: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.TagResponse[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["quantity", quantity],
      ["tagsSinceDate", tagsSinceDate]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetPopularTags/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetPopularTags", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Given a tag, return the current forum usage count estimate.
   * @param tagText A forum tag.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetForumTagCountEstimate(
    tagText: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetForumTagCountEstimate/${encodeURIComponent(String(tagText))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetForumTagCountEstimate", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the post Id for the given content item's comments, if it exists.
   * @param contentId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTopicForContent(
    contentId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetTopicForContent/${encodeURIComponent(String(contentId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetTopicForContent", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
   * @param partialtag The partial tag input to generate suggestions from.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetForumTagSuggestions(
    partialtag: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.TagResponse[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["partialtag", partialtag]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Forum/GetForumTagSuggestions/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetForumTagSuggestions", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Marks a 1st level reply as an answer to a topic marked as a question, clearing any existing posts marked as answers.
   * @param answerPostId The post id of the answer.
   * @param topicPostId The post id of the question/topic.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static MarkReplyAsAnswer(
    answerPostId: string,
    topicPostId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/MarkReplyAsAnswer/${encodeURIComponent(
        String(answerPostId)
      )}/${encodeURIComponent(String(topicPostId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "MarkReplyAsAnswer", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Unmarks a 1st level reply as an answer to a topic marked as a question. The topic reverts to an unanswered question.
   * @param topicPostId The post id of the question/topic.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UnmarkReplyAsAnswer(
    topicPostId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/UnmarkReplyAsAnswer/${encodeURIComponent(String(topicPostId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "UnmarkReplyAsAnswer", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Votes in the specified forum poll, returns the updated vote count for that poll answer.
   * @param topicId The post id of the topic that has the poll.
   * @param answerSlot The zero-based slot number of the poll answer you are voting for.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static PollVote(
    topicId: string,
    answerSlot: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Poll/Vote/${encodeURIComponent(
        String(topicId)
      )}/${encodeURIComponent(String(answerSlot))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "PollVote", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the specified forum poll.
   * @param topicId The post id of the topic that has the poll.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPoll(
    topicId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Poll/${encodeURIComponent(String(topicId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetPoll", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows admins to pin or unpin topics.
   * @param topicId The post id of the topic to change the pin state.
   * @param newPinState The new pin state of the topic, 0 is unpinned, > 0 is pinned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ChangePinState(
    topicId: string,
    newPinState: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/ChangePinState/${encodeURIComponent(
        String(topicId)
      )}/${encodeURIComponent(String(newPinState))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "ChangePinState", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows admins to lock or unlock topics.
   * @param topicId The post id of the topic to change the lock state.
   * @param newLockState The new lock state of the topic, 0 is unlocked, anything else is locked.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ChangeLockState(
    topicId: string,
    newLockState: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/ChangeLockState/${encodeURIComponent(
        String(topicId)
      )}/${encodeURIComponent(String(newLockState))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "ChangeLockState", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to slot themselves into a recruitment thread fireteam slot. Returns the new state of the fireteam.
   * @param topicId The post id of the recruitment topic you wish to join.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static JoinFireteamThread(
    topicId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.ForumRecruitmentDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Recruit/Join/${encodeURIComponent(String(topicId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "JoinFireteamThread", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to remove themselves from a recruitment thread fireteam slot. Returns the new state of the fireteam.
   * @param topicId The post id of the recruitment topic you wish to leave.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static LeaveFireteamThread(
    topicId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.ForumRecruitmentDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Recruit/Leave/${encodeURIComponent(String(topicId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "LeaveFireteamThread", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a recruitment thread owner to kick a join user from the fireteam. Returns the new state of the fireteam.
   * @param topicId The post id of the recruitment topic you wish to join.
   * @param targetMembershipId The id of the user you wish to kick.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static KickBanFireteamApplicant(
    topicId: string,
    targetMembershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.ForumRecruitmentDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Recruit/KickBan/${encodeURIComponent(
        String(topicId)
      )}/${encodeURIComponent(String(targetMembershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "KickBanFireteamApplicant", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows the owner of a fireteam thread to approve all joined members and start a private message conversation with them.
   * @param topicId The post id of the recruitment topic to approve.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApproveFireteamThread(
    topicId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.SaveMessageResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Recruit/Approve/${encodeURIComponent(String(topicId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "ApproveFireteamThread", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows the caller to get a list of to 25 recruitment thread summary information objects.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRecruitmentThreadSummaries(
    input: string[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.ForumRecruitmentDetail[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Forum/Recruit/Summaries/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Forum", "GetRecruitmentThreadSummaries", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class ActivityServiceInternal {
  /**
   * Get the list of entities that you follow, as determined by the passed in entityType.
   * @param entityType The current page (one-based, in line with other paged activity services)
   * @param currentPage The current page (one-based, in line with other paged activity services)
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetEntitiesFollowedByCurrentUserV2(
    entityType: Globals.EntityType,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultLegacyFollowingResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/Following/V2/${encodeURIComponent(
        String(entityType)
      )}/${encodeURIComponent(String(currentPage))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Activity",
      "GetEntitiesFollowedByCurrentUserV2",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of entities that the given user follows.
   * @param membershipId The Bungie.Net membership ID of the user.
   * @param entityType The current page (one-based, in line with other paged activity services)
   * @param currentPage The current page (one-based, in line with other paged activity services)
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetEntitiesFollowedByUserV2(
    membershipId: string,
    entityType: Globals.EntityType,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultLegacyFollowingResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(
        String(membershipId)
      )}/Following/V2/${encodeURIComponent(
        String(entityType)
      )}/${encodeURIComponent(String(currentPage))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetEntitiesFollowedByUserV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of users that you follow, along with their GeneralUser information.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUsersFollowedByCurrentUser(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFollowerResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/Following/Users/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetUsersFollowedByCurrentUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of users that follow the given user.
   * @param id Bungie.net Membership ID of the user.
   * @param itemsperpage Number of followers to return per page.
   * @param currentpage Page number to fetch where page 1 is the first page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFollowersOfUser(
    id: string,
    itemsperpage: number,
    currentpage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFollowerResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["itemsperpage", itemsperpage],
      ["currentpage", currentpage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(String(id))}/Followers/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetFollowersOfUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Follow the user with the given Membership Id.
   * @param id
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static FollowUser(
    id: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(String(id))}/Follow/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "FollowUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Unfollow the user with the given Membership Id.
   * @param id
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UnfollowUser(
    id: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(String(id))}/Unfollow/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "UnfollowUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the recent Like and Share activities for another user.
   * @param id
   * @param itemsperpage
   * @param currentpage
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLikeAndShareActivityForUser(
    id: string,
    itemsperpage: number,
    currentpage: number,
    format: Globals.ActivityOutputFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ActivityMessageSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["itemsperpage", itemsperpage],
      ["currentpage", currentpage],
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(
        String(id)
      )}/Activities/LikesAndShares/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetLikeAndShareActivityForUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the recent Like and Share activities for another user.
   * @param id
   * @param currentpage
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLikeAndShareActivityForUserV2(
    id: string,
    currentpage: number,
    format: Globals.ActivityOutputFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ActivityMessageSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentpage", currentpage],
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(
        String(id)
      )}/Activities/LikesAndSharesV2/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetLikeAndShareActivityForUserV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the recent Forum activities for another user.
   * @param id
   * @param itemsperpage
   * @param currentpage
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetForumActivityForUser(
    id: string,
    itemsperpage: number,
    currentpage: number,
    format: Globals.ActivityOutputFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ActivityMessageSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["itemsperpage", itemsperpage],
      ["currentpage", currentpage],
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(String(id))}/Activities/Forums/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetForumActivityForUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the recent Forum activities for another user.
   * @param id
   * @param currentpage
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetForumActivityForUserV2(
    id: string,
    currentpage: number,
    format: Globals.ActivityOutputFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ActivityMessageSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentpage", currentpage],
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(String(id))}/Activities/ForumsV2/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetForumActivityForUserV2", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the recent Like, Share, and Forum activities for another user.
   * @param id
   * @param currentpage
   * @param format
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLikeShareAndForumActivityForUser(
    id: string,
    currentpage: number,
    format: Globals.ActivityOutputFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ActivityMessageSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentpage", currentpage],
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(
        String(id)
      )}/Activities/LikeShareAndForum/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Activity",
      "GetLikeShareAndForumActivityForUser",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the recent Like, Share, and Forum activities for another user.
   * @param membershipId ID of the user whose activities should be returned.
   * @param applicationId ID of the application whose activities should be returned.
   * @param currentpage Page number of the activity where page 1 is the most recent page of activities.
   * @param format Format of output
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetApplicationActivityForUser(
    membershipId: string,
    applicationId: string,
    currentpage: number,
    format: Globals.ActivityOutputFormat,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ActivityMessageSearchResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentpage", currentpage],
      ["format", format]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(
        String(membershipId)
      )}/Activities/Application/${encodeURIComponent(String(applicationId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetApplicationActivityForUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get activities related to actions on inventory and other items in Destiny
   * @param membershipType The type of the supplied membership ID whose data is to be fetched.
   * @param membershipId The membership ID whose data is to be fetched.
   * @param continuationToken Optional token used to indicate the next page of data. Returned by the previous response.
   * @param applicationId Optional applicationId to filter the response.
   * @param correlationId Optional correlation ID to filter the response.
   * @param daysInPast Optional number of days in the past to start fetching data. Acceptable values are 30, 60, and 90 days. Larger values are rounded down.
   * @param activityType Optional specific activity type to include in the results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyItemActivities(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    continuationToken: string,
    applicationId: number,
    correlationId: string,
    daysInPast: number,
    activityType: Globals.ActivityType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultDestinyItemActivityRecord> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["continuationToken", continuationToken],
      ["applicationId", applicationId],
      ["correlationId", correlationId],
      ["daysInPast", daysInPast],
      ["activityType", activityType]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/User/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/Activities/DestinyItem/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetDestinyItemActivities", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of users that follow the given Tag.
   * @param tag
   * @param itemsperpage
   * @param currentpage
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFollowersOfTag(
    tag: string,
    itemsperpage: number,
    currentpage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFollowerResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["tag", tag],
      ["itemsperpage", itemsperpage],
      ["currentpage", currentpage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/Tag/Followers/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetFollowersOfTag", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Follow the Tag with the given Tag.
   * @param tag
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static FollowTag(
    tag: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.TagResponse> {
    const requiredParameters = ApiIntermediary.getParamString([["tag", tag]]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/Tag/Follow/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "FollowTag", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Unfollow the Tag with the given Tag.
   * @param tag
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UnfollowTag(
    tag: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.TagResponse> {
    const requiredParameters = ApiIntermediary.getParamString([["tag", tag]]);

    const url = ApiIntermediary.buildUrl(
      `/Activity/Tag/Unfollow/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "UnfollowTag", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the first page of your cross-platform friends for any platform you've registered.  This service is likely not what you want to call for friends.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFriends(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.LegacyFriendSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/Friends/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetFriends", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the Bungie.net membership IDs for all Platform Friends whom you can see on Bungie.net.
   * @param credentialType The type of friend platform to use.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFriendsAllNoPresence(
    credentialType: Globals.BungieCredentialType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFriend> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/Friends/AllNoPresence/${encodeURIComponent(
        String(credentialType)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetFriendsAllNoPresence", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get your paged set of Friends and their presence info, per credential for which you have friends.
   * @param credentialType The type of friend platform to use.
   * @param currentPage The zero based page to access
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFriendsPaged(
    credentialType: Globals.BungieCredentialType,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFriend> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Activity/Friends/Paged/${encodeURIComponent(
        String(credentialType)
      )}/${encodeURIComponent(String(currentPage))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Activity", "GetFriendsPaged", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class GroupV2ServiceInternal {
  /**
   * Returns a list of all available group avatars for the signed-in user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableAvatars(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<{ [key: number]: string }> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/GetAvailableAvatars/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetAvailableAvatars", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of all available group themes.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableThemes(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Config.GroupTheme[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/GetAvailableThemes/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetAvailableThemes", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
   * @param mType The Destiny membership type of the account we wish to access settings.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUserClanInviteSetting(
    mType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/GetUserClanInviteSetting/${encodeURIComponent(String(mType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetUserClanInviteSetting", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Sets the state of the user's clan invite preferences - true if they wish to be invited to clans, false otherwise.
   * @param mType The Destiny membership type of linked account we are manipulating.
   * @param allowInvites True to allow invites of this user to clans, false otherwise.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SetUserClanInviteSetting(
    mType: Globals.BungieMembershipType,
    allowInvites: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/SetUserClanInviteSetting/${encodeURIComponent(
        String(mType)
      )}/${encodeURIComponent(String(allowInvites))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "SetUserClanInviteSetting", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets groups recommended for you based on the groups to whom those you follow belong.
   * @param groupType Type of groups requested
   * @param createDateRange Requested range in which to pull recommended groups
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRecommendedGroups(
    groupType: Globals.GroupType,
    createDateRange: Globals.GroupDateRange,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupV2Card[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/Recommended/${encodeURIComponent(
        String(groupType)
      )}/${encodeURIComponent(String(createDateRange))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetRecommendedGroups", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Search for Groups.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GroupSearch(
    input: GroupsV2.GroupQuery,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/Search/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GroupSearch", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get information about a specific group of the given ID.
   * @param groupId Requested group's id.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroup(
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetGroup", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get information about a specific group with the given name and type.
   * @param groupName Exact name of the group to find.
   * @param groupType Type of group to find.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupByName(
    groupName: string,
    groupType: Globals.GroupType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/Name/${encodeURIComponent(
        String(groupName)
      )}/${encodeURIComponent(String(groupType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetGroupByName", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get information about a specific group with the given name and type.  The POST version.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupByNameV2(
    input: GroupsV2.GroupNameSearchRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/NameV2/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetGroupByNameV2", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a list of available optional conversation channels and their settings.
   * @param groupId Requested group's id.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupOptionalConversations(
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupOptionalConversation[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/OptionalConversations/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetGroupOptionalConversations", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Create a new group.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateGroup(
    input: GroupsV2.GroupAction,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupCreationResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/Create/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "CreateGroup", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edit an existing group.  You must have suitable permissions in the group to perform this operation.  This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
   * @param groupId Group ID of the group to edit.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditGroup(
    input: GroupsV2.GroupEditAction,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Edit/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "EditGroup", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edit an existing group's clan banner.  You must have suitable permissions in the group to perform this operation. All fields are required.
   * @param groupId Group ID of the group to edit.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditClanBanner(
    input: GroupsV2.ClanBanner,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/EditClanBanner/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "EditClanBanner", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edit group options only available to a founder.  You must have suitable permissions in the group to perform this operation.
   * @param groupId Group ID of the group to edit.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditFounderOptions(
    input: GroupsV2.GroupOptionsEditAction,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/EditFounderOptions/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "EditFounderOptions", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Add a new optional conversation/chat channel. Requires admin permissions to the group.
   * @param groupId Group ID of the group to edit.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AddOptionalConversation(
    input: GroupsV2.GroupOptionalConversationAddRequest,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/OptionalConversations/Add/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "AddOptionalConversation", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
   * @param groupId Group ID of the group to edit.
   * @param conversationId Conversation Id of the channel being edited.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditOptionalConversation(
    input: GroupsV2.GroupOptionalConversationEditRequest,
    groupId: string,
    conversationId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/OptionalConversations/Edit/${encodeURIComponent(
        String(conversationId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "EditOptionalConversation", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of members in a given group.
   * @param groupId The ID of the group.
   * @param currentPage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param memberType Filter out other member types.  Use None for all members.
   * @param nameSearch The name fragment upon which a search should be executed for members with matching display or unique names.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetMembersOfGroup(
    groupId: string,
    currentPage: number,
    memberType: Globals.RuntimeGroupMemberType,
    nameSearch: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultGroupMember> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage],
      ["memberType", memberType],
      ["nameSearch", nameSearch]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Members/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetMembersOfGroup", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of members in a given group who are of admin level or higher.
   * @param groupId The ID of the group.
   * @param currentPage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAdminsAndFounderOfGroup(
    groupId: string,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultGroupMember> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/AdminsAndFounder/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetAdminsAndFounderOfGroup", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edit the membership type of a given member.  You must have suitable permissions in the group to perform this operation.
   * @param groupId ID of the group to which the member belongs.
   * @param membershipType Membership type of the provide membership ID.
   * @param membershipId Membership ID to modify.
   * @param memberType New membertype for the specified member.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditGroupMembership(
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    memberType: Globals.RuntimeGroupMemberType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(
        String(membershipId)
      )}/SetMembershipType/${encodeURIComponent(String(memberType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "EditGroupMembership", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Kick a member from the given group, forcing them to reapply if they wish to re-join the group.  You must have suitable permissions in the group to perform this operation.
   * @param groupId Group ID to kick the user from.
   * @param membershipType Membership type of the provided membership ID.
   * @param membershipId Membership ID to kick.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static KickMember(
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupMemberLeaveResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/Kick/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "KickMember", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Bans the requested member from the requested group for the specified period of time.
   * @param groupId Group ID that has the member to ban.
   * @param membershipType Membership type of the provided membership ID.
   * @param membershipId Membership ID of the member to ban from the group.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static BanMember(
    input: GroupsV2.GroupBanRequest,
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/Ban/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "BanMember", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Unbans the requested member, allowing them to re-apply for membership.
   * @param groupId
   * @param membershipType Membership type of the provided membership ID.
   * @param membershipId Membership ID of the member to unban from the group
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UnbanMember(
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/Unban/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "UnbanMember", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of banned members in a given group.  Only accessible to group Admins and above. Not applicable to all groups.  Check group features.
   * @param groupId Group ID whose banned members you are fetching
   * @param currentPage Page number (starting with 1). Each page has a fixed size of 50 entries.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetBannedMembersOfGroup(
    groupId: string,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultGroupBan> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Banned/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetBannedMembersOfGroup", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
   * @param groupId The target group id.
   * @param membershipType Membership type of the provided founderIdNew.
   * @param founderIdNew The new founder for this group.  Must already be a group admin.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AbdicateFoundership(
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    founderIdNew: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Admin/AbdicateFoundership/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(founderIdNew))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "AbdicateFoundership", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Request permission to join the given group.
   * @param groupId ID of the group you would like to join.
   * @param membershipType MembershipType of the account to use when joining.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RequestGroupMembership(
    input: GroupsV2.GroupApplicationRequest,
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupApplicationResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/Apply/${encodeURIComponent(String(membershipType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "RequestGroupMembership", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of users who are awaiting a decision on their application to join a given group.  Modified to include application info.
   * @param groupId ID of the group.
   * @param currentPage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPendingMemberships(
    groupId: string,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultGroupMemberApplication> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Members/Pending/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetPendingMemberships", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the list of users who have been invited into the group.
   * @param groupId ID of the group.
   * @param currentPage Page number (starting with 1). Each page has a fixed size of 50 items per page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetInvitedIndividuals(
    groupId: string,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultGroupMemberApplication> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/InvitedIndividuals/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetInvitedIndividuals", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Rescind your application to join the given group or leave the group if you are already a member..
   * @param groupId ID of the group.
   * @param membershipType MembershipType of the account to leave.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RescindGroupMembership(
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupMemberLeaveResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/Rescind/${encodeURIComponent(String(membershipType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "RescindGroupMembership", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Approve all of the pending users for the given group.
   * @param groupId ID of the group.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApproveAllPending(
    input: GroupsV2.GroupApplicationRequest,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Entities.EntityActionResult[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Members/ApproveAll/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "ApproveAllPending", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Deny all of the pending users for the given group.
   * @param groupId ID of the group.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static DenyAllPending(
    input: GroupsV2.GroupApplicationRequest,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Entities.EntityActionResult[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Members/DenyAll/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "DenyAllPending", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Approve all of the pending users for the given group.
   * @param groupId ID of the group.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApprovePendingForList(
    input: GroupsV2.GroupApplicationListRequest,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Entities.EntityActionResult[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Members/ApproveList/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "ApprovePendingForList", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Approve the given membershipId to join the group/clan as long as they have applied.
   * @param groupId ID of the group.
   * @param membershipType Membership type of the supplied membership ID.
   * @param membershipId The membership id being approved.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApprovePending(
    input: GroupsV2.GroupApplicationRequest,
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/Approve/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "ApprovePending", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Deny all of the pending users for the given group that match the passed-in .
   * @param groupId ID of the group.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static DenyPendingForList(
    input: GroupsV2.GroupApplicationListRequest,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Entities.EntityActionResult[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(String(groupId))}/Members/DenyList/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "DenyPendingForList", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get information about the groups that a given member has joined.
   * @param membershipType Membership type of the supplied membership ID.
   * @param membershipId Membership ID to for which to find founded groups.
   * @param filter Filter apply to list of joined groups.
   * @param groupType Type of group the supplied member founded.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupsForMember(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    filter: Globals.GroupsForMemberFilter,
    groupType: Globals.GroupType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupMembershipSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/User/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/${encodeURIComponent(
        String(filter)
      )}/${encodeURIComponent(String(groupType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetGroupsForMember", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a founder to manually recover a group they can see in game but not on bungie.net
   * @param membershipType Membership type of the supplied membership ID.
   * @param membershipId Membership ID to for which to find founded groups.
   * @param groupType Type of group the supplied member founded.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RecoverGroupForFounder(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    groupType: Globals.GroupType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupMembershipSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/Recover/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/${encodeURIComponent(
        String(groupType)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "RecoverGroupForFounder", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get information about the groups that a given member has applied to or been invited to.
   * @param membershipType Membership type of the supplied membership ID.
   * @param membershipId Membership ID to for which to find applied groups.
   * @param filter Filter apply to list of potential joined groups.
   * @param groupType Type of group the supplied member applied.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPotentialGroupsForMember(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    filter: Globals.GroupPotentialMemberStatus,
    groupType: Globals.GroupType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupPotentialMembershipSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/User/Potential/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/${encodeURIComponent(
        String(filter)
      )}/${encodeURIComponent(String(groupType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "GetPotentialGroupsForMember", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Invite a user to join this group.
   * @param groupId ID of the group you would like to join.
   * @param membershipType MembershipType of the account being invited.
   * @param membershipId Membership id of the account being invited.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static IndividualGroupInvite(
    input: GroupsV2.GroupApplicationRequest,
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupApplicationResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/IndividualInvite/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "IndividualGroupInvite", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Cancels a pending invitation to join a group.
   * @param groupId ID of the group you would like to join.
   * @param membershipType MembershipType of the account being cancelled.
   * @param membershipId Membership id of the account being cancelled.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static IndividualGroupInviteCancel(
    groupId: string,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<GroupsV2.GroupApplicationResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GroupV2/${encodeURIComponent(
        String(groupId)
      )}/Members/IndividualInviteCancel/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("GroupV2", "IndividualGroupInviteCancel", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class IgnoreServiceInternal {
  /**
   * Search for Group Ignores.
   * @param postId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetIgnoreStatusForPost(
    postId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Globals.IgnoreStatus> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/MyIgnores/Posts/${encodeURIComponent(String(postId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "GetIgnoreStatusForPost", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Search for Group Ignores.
   * @param membershipId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetIgnoreStatusForUser(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Globals.IgnoreStatus> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/MyIgnores/Users/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "GetIgnoreStatusForUser", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Search for User Ignores.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetIgnoresForUser(
    input: Models.IgnoreQuery,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.IgnoreSearchResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/MyIgnores/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "GetIgnoresForUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Ignore an item.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static IgnoreItem(
    input: Contracts.IgnoreItemRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.IgnoreDetailResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/Ignore/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "IgnoreItem", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Unignore an item.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UnignoreItem(
    input: Contracts.UnignoreItemRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.IgnoreDetailResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/Unignore/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "UnignoreItem", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the last report for the logged in user, if any.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static MyLastReport(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.LastReportedItemResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/MyLastReport/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "MyLastReport", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Flags an item for review by the moderators, used for things that you don't ignore but still want to report, like offensive group names.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static FlagItem(
    input: Contracts.IgnoreItemRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.IgnoreDetailResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/Flag/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "FlagItem", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Given a report id, will return a summary of the content that was reported. Must be the author of that content or a moderator.
   * @param reportId The id of the report to get the context
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetReportContext(
    reportId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Ignores.ReportContextResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Ignore/ReportContext/${encodeURIComponent(String(reportId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Ignore", "GetReportContext", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class GameServiceInternal {
  /**
   * Returns all legacy game data for the supplied membership id.
   * @param membershipId The membershipId of the user to retrieve.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPlayerGamesById(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.LegacyGamePlayer> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Game/GetPlayerGamesById/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Game", "GetPlayerGamesById", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Updates the reach avatar of a user via sneakernet code.
   * @param code
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReachModelSneakerNet(
    code: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Game/ReachModelSneakerNet/${encodeURIComponent(String(code))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Game", "ReachModelSneakerNet", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class AdminServiceInternal {
  /**
   * Get your assigned reports, or have new ones generated if you don't have a full queue.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAssignedReports(
    input: Contracts.ReportAssignmentFilter,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ReportedItemResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Assigned/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetAssignedReports", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Return your assigned reports to the hopper for re-assignment.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReturnAssignedReports(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Assigned/ReturnAll`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "ReturnAssignedReports", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Resolve a report that's been assigned to you.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ResolveReport(
    input: Contracts.ReportResolution,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Assigned/Resolve/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "ResolveReport", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Overturn the results of a report, given sufficient credentials.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static OverturnReport(
    input: Contracts.ReportResolution,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Reports/Overturn/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "OverturnReport", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get a paginated list of all of the the reports that resulted in discipline against a given Member.
   * @param membershipId The membershipId of the target user.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDisciplinedReportsForMember(
    input: Queries.PagedQuery,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultReportedItemResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(String(membershipId))}/Reports/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetDisciplinedReportsForMember", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get a list of all of the the reports that resulted in discipline against a given Member, including reports resulting from flagging.  Not paged.
   * @param membershipId The membershipId of the target user.
   * @param itemsToReturn The maximum number of items to return.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRecentDisciplineAndFlagHistoryForMember(
    membershipId: string,
    itemsToReturn: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultReportedItemResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(
        String(membershipId)
      )}/RecentIncludingFlags/${encodeURIComponent(String(itemsToReturn))}`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Admin",
      "GetRecentDisciplineAndFlagHistoryForMember",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get a paginated set of all reports that have been resolved.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetResolvedReports(
    input: Queries.PagedQuery,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultReportedItemResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Reports/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetResolvedReports", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Globally ignore an item, given sufficient credentials.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GloballyIgnoreItem(
    input: Contracts.IgnoreItemRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Ignores/GloballyIgnore/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GloballyIgnoreItem", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Manually set the date for which a user should be forum banned.
   * @param membershipId The membershipId of the user to forum ban.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static OverrideBanOnUser(
    input: Contract.UserBanRequest,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(String(membershipId))}/SetBan/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "OverrideBanOnUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Manually set the date for which a user should be message banned.
   * @param membershipId The membershipId of the user to message ban.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static OverrideMsgBanOnUser(
    input: Contract.UserBanRequest,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(String(membershipId))}/SetMsgBan/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "OverrideMsgBanOnUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Manually set the date for which a user should be group wall banned.
   * @param membershipId The membershipId of the user to group wall ban.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static OverrideGroupWallBanOnUser(
    input: Contract.UserBanRequest,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(
        String(membershipId)
      )}/SetGroupWallBan/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "OverrideGroupWallBanOnUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Manually set the date for which a user should be fireteam banned for all linked accounts
   * @param membershipId The bnet membershipId of the user to fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static OverrideFireteamBanOnUser(
    input: Contract.UserBanRequest,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(
        String(membershipId)
      )}/SetFireteamBan/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "OverrideFireteamBanOnUser", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Manually set the date for which an item should be globally ignored.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static OverrideGlobalIgnore(
    input: Contracts.IgnoreItemOverrideRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Ignores/OverrideGlobalIgnore/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "OverrideGlobalIgnore", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of possible users based on the search string.  Uncached for purposes of the admin interface, with additional admin-only information.
   * @param q
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AdminUserSearch(
    q: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.GeneralUser[]> {
    const requiredParameters = ApiIntermediary.getParamString([["q", q]]);

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/Search/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "AdminUserSearch", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the ban state of the user, including the specific expiration dates of each component.
   * @param membershipId The target membership id to look up.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUserBanState(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.UserBanState> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(String(membershipId))}/GetBanState/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetUserBanState", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Retrieves recently used client ip history for a particular profile.
   * @param membershipId The target membership id to look up.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUserWebClientIpHistory(
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Core.StringDatePackage[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(
        String(membershipId)
      )}/GetWebClientIpHistory/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetUserWebClientIpHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a paged listing of the user's posts, most recent first.
   * @param membershipId The target membership id.
   * @param page Zero-based page of results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUserPostHistory(
    membershipId: string,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Member/${encodeURIComponent(
        String(membershipId)
      )}/PostHistory/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetUserPostHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the revision history of a post.
   * @param postId The target forum Post ID.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPostRevisionHistory(
    postId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Forums.PostRevisionHistoryResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/Forum/${encodeURIComponent(String(postId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetPostRevisionHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Retrieves a paged & filtered list of all admin actions.
   * @param membershipFlags Filters entries by type of admin.
   * @param page Zero based page of results to get.
   * @param membershipFilter Optional filter to a specific admin's history.
   * @param startdate The start date of events to retrieve. Must be within 60 days of end date.
   * @param enddate The end date of the events to retrieve. Must be within 60 days of the start date.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAdminHistory(
    membershipFlags: Globals.AdminHistoryMembershipFlags,
    page: number,
    membershipFilter: string,
    startdate: string,
    enddate: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.AdminHistoryEntry[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["membershipFilter", membershipFilter],
      ["startdate", startdate],
      ["enddate", enddate]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Admin/GlobalHistory/${encodeURIComponent(
        String(membershipFlags)
      )}/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetAdminHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows an admin user to edit a forum post. Returns count of number of successful updates. Requires either edit any post permissions, plus any perms needed to edit a particular post.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static BulkEditPost(
    input: Contract.BulkEditPostRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Admin/BulkEditPost/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "BulkEditPost", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows support staff to see the current status of a token.
   * @param tokenCode A Token code whose status needs to be checked.
   * @param currentPage The zero-based page of claims to return.  Generally tokens only have one use, so page 0 is a good default.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTokenDetails(
    tokenCode: string,
    currentPage: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.TokenSupportDetails> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["currentPage", currentPage]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Admin/Tokens/${encodeURIComponent(String(tokenCode))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Admin", "GetTokenDetails", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class TokensServiceInternal {
  /**
   * Given a token, claims and applies it to the user.  If the platform selection is unknown, then only just returns info on the offer, but does not claim or error.
   * @param platformSelection The MembershipType of platform to apply the offer attached to the token to, or None if we're not sure yet.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ClaimAndApplyOnToken(
    input: string,
    platformSelection: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.OfferHistoryResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/ClaimAndApplyToken/${encodeURIComponent(
        String(platformSelection)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "ClaimAndApplyOnToken", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the combined list of offers assigned to this bungie Id and their current metadata.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCurrentUserOfferHistory(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.OfferHistoryResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/OfferHistory/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "GetCurrentUserOfferHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * A simple test that returns the user's throttle state, which includes a boolean about their current state, among other things.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCurrentUserThrottleState(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.TokenThrottleStateResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/ThrottleState/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "GetCurrentUserThrottleState", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Applies a charge of the offer that is already on the user's bnet membership to the commericialization system on their linked destiny membership of the given type.
   * @param membershipType The membership type to apply the offer to, must be linked to the user.
   * @param offer The offer name to spend.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApplyOfferToCurrentDestinyMembership(
    membershipType: Globals.BungieMembershipType,
    offer: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.OfferHistoryResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/ApplyOfferToCurrentDestinyMembership/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(offer))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Tokens",
      "ApplyOfferToCurrentDestinyMembership",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Record that the user has verified their age. Return value should be ignored, use the ErrorCode of the response to determine result.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static VerifyAge(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/VerifyAge/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "VerifyAge", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Obsolete
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ClaimToken(
    input: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.ClaimResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/Claim/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "ClaimToken", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Consume an offer the user has purchased to get an offer that returns a platform-specific marketplace code, assuming that offer is for such a thing - most are not.
   * @param deviceType The desired platform for the marketplace code.
   * @param offerRegion The desired region for the marketplace code.
   * @param offerKey The name of the offer.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ConsumeMarketplacePlatformCodeOffer(
    deviceType: Globals.ClientDeviceType,
    offerRegion: Globals.MarketplaceCodeRegion,
    offerKey: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.PlatformMarketplaceCodeResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/ConsumeMarketplacePlatformCodeOffer/${encodeURIComponent(
        String(deviceType)
      )}/${encodeURIComponent(String(offerRegion))}/${encodeURIComponent(
        String(offerKey)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Tokens",
      "ConsumeMarketplacePlatformCodeOffer",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns all marketplace platform codes the logged in user has redeemed.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static MarketplacePlatformCodeOfferHistory(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contracts.PlatformMarketplaceCodeResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/MarketplacePlatformCodeOfferHistory/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Tokens",
      "MarketplacePlatformCodeOfferHistory",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a history of Eververse-related item transactions.
   * @param membershipId One of the linked account ids of the target user.
   * @param platform The Destiny platform to load history for; target user must have a linked platform account of this type to see any results.
   * @param page The zero based page of results to return.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EververseChangePurchaseHistory(
    membershipId: string,
    platform: Globals.BungieMembershipType,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultEververseChangeEvent> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/EververseChangePurchaseHistory/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(platform))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "EververseChangePurchaseHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a history of Eververse-related vendor transactions.
   * @param membershipId One of the linked account ids of the target user.
   * @param platform The Destiny platform to load history for; target user must have a linked platform account of this type to see any results.
   * @param page The zero based page of results to return.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EververseVendorPurchaseHistory(
    membershipId: string,
    platform: Globals.BungieMembershipType,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultEververseVendorPurchaseEvent> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/EververseVendorPurchaseHistory/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(platform))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "EververseVendorPurchaseHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the current Destiny 2 Silver balance, requires logging into the game to ensure value is up to date with latest purchases from platform marketplace. Can return null balance if profile does not have currency information.
   * @param membershipId One of the linked account ids of the target user.
   * @param platform The Destiny platform to load balance for; target user must have a linked platform account of this type to see any result.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EververseSilverBalance(
    membershipId: string,
    platform: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultEververseVendorPurchaseEvent> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/EververseSilverBalance/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(platform))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "EververseSilverBalance", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the current Destiny 2 Silver cashout information for customer service.
   * @param membershipId One of the linked account ids of the target user.
   * @param platform The Destiny platform to load balance for; target user must have a linked platform account of this type to see any result.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EververseCashoutInfo(
    membershipId: string,
    platform: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.EververseCashout> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/EververseCashoutInfo/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(platform))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "EververseCashoutInfo", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Triggers sending an email to the authenticated user that will grant a Bungie Reward if the requirements are satisfied.
   * @param rewardId The GUID identifier of the reward.
   * @param membershipType The target Destiny membership to use to determine if requirements are being met.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EmailBungieReward(
    rewardId: string,
    membershipType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/EmailBungieReward/${encodeURIComponent(
        String(rewardId)
      )}/${encodeURIComponent(String(membershipType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "EmailBungieReward", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Generates a referral code to give to your friends to join you in Destiny 2.
   * @param titleId The RAF enabled product being targeted.
   * @param deviceType The desired platform for the referral code.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RAFGenerateReferralCode(
    titleId: Globals.RAFTitleId,
    deviceType: Globals.ClientDeviceType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/GenerateReferralCode/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(deviceType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "RAFGenerateReferralCode", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Claim an RAF code as a new player.
   * @param titleId The RAF enabled product being targeted.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RAFClaimAsNewPlayer(
    input: string,
    titleId: Globals.RAFTitleId,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Globals.RAFBondState> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/ClaimAsNewPlayer/${encodeURIComponent(String(titleId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "RAFClaimAsNewPlayer", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the current status of all a user's veteran RAF bonds in any state other than removed.
   * @param titleId The RAF enabled product being targeted.
   * @param mType The target Destiny 2 membership type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RAFGetVeteranBondDetails(
    titleId: Globals.RAFTitleId,
    mType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFBondDetailResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/GetVeteranBondDetails/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(mType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "RAFGetVeteranBondDetails", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the current status of all a user's new player RAF bonds for their bungie.net membership as well as their destiny 2 account in any state other than removed.
   * @param titleId The RAF enabled product being targeted.
   * @param mType The target Destiny 2 membership type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static RAFGetNewPlayerBondDetails(
    titleId: Globals.RAFTitleId,
    mType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFBondDetailResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/GetNewPlayerBondDetails/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(mType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "RAFGetNewPlayerBondDetails", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Break an existing bond where you are the veteran.
   * @param titleId The RAF enabled product being targeted.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static BreakBond(
    input: string,
    titleId: Globals.RAFTitleId,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Globals.RAFBondState> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/BreakBond/${encodeURIComponent(String(titleId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "BreakBond", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the RAF eligibility status of the current user for all linked platforms, unless there are no linked platforms, then we return unknown for all.
   * @param titleId The RAF enabled product being targeted.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRAFEligibility(
    titleId: Globals.RAFTitleId,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFEligibilityResponse[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/GetEligibility/${encodeURIComponent(String(titleId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "GetRAFEligibility", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Scans and updates a new player's bond with new state information based on latest player state.  Returns the new bond state. Caller must own the specified bond.
   * @param titleId The RAF enabled product being targeted.
   * @param mType The target Destiny 2 membership type.
   * @param rafId The id of the Refer-A-Friend bond to update.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static UpdateNewPlayerBondState(
    titleId: Globals.RAFTitleId,
    mType: Globals.BungieMembershipType,
    rafId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFBondDetailResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/UpdateNewPlayerBondState/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(mType))}/${encodeURIComponent(
        String(rafId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "UpdateNewPlayerBondState", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the RAF veteran reward status for the current user.
   * @param titleId The RAF enabled product being targeted.
   * @param mType The target Destiny 2 membership type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetVeteranRewardStatus(
    titleId: Globals.RAFTitleId,
    mType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFVeteranRewardStatusResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/GetVeteranRewardStatus/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(mType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "GetVeteranRewardStatus", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the RAF quest progress for the targeted user.
   * @param titleId The RAF enabled product being targeted.
   * @param mType The target Destiny 2 membership type.
   * @param membershipId The target Destiny 2 membership id to get quest progress for.
   * @param isVeteran Set to true if checking as a veteran, false if as a new player (the quests are different).
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetRAFQuestProgress(
    titleId: Globals.RAFTitleId,
    mType: Globals.BungieMembershipType,
    membershipId: string,
    isVeteran: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFQuestProgressResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/GetQuestProgress/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(mType))}/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(isVeteran))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "GetRAFQuestProgress", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * If the current user has any veteran rewards earned but not applied to the game, this will attempt to apply them to the game.
   * @param titleId The RAF enabled product being targeted.
   * @param mType The target Destiny 2 membership type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ApplyVeteranRewards(
    titleId: Globals.RAFTitleId,
    mType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Tokens.RAFVeteranRewardStatusResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Tokens/RAF/ApplyVeteranRewards/${encodeURIComponent(
        String(titleId)
      )}/${encodeURIComponent(String(mType))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Tokens", "ApplyVeteranRewards", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class Destiny2ServiceInternal {
  /**
   * Summer lovin, having a blast.  Summer lovin, happened so fast.  For the love of God, don't build anything permanent hitting this service, it's not long for this world as you hopefully guessed from the name.
   * @param membershipType A valid non-BungieNet membership type.
   * @param membershipId The ID of the membership whose linked Destiny accounts you want returned.  Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTriumphsThrowaway(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Triumphs.DestinyTriumphsResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Triumphs/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetTriumphsThrowaway", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Did you have a summah?  If you did, call this endpoint to get your reward.
   * @param membershipType A valid non-BungieNet membership type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTriumphsDiscountThrowaway(
    membershipType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Triumphs.DestinyTriumphsDiscountReward> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Triumphs/Reward/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetTriumphsDiscountThrowaway", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * 7th Column Copy character function (use at own risk), will not function outside of 7th column.
   * @param membershipType A valid Destiny membership type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CopyCharactersInPreview(
    membershipType: Globals.BungieMembershipType,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/7thColumnPreview/CopyCharacters/${encodeURIComponent(
        String(membershipType)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "CopyCharactersInPreview", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the current version of the manifest as a json object.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyManifest(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Config.DestinyManifest> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Manifest/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetDestinyManifest", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the static definition of an entity of the given Type and hash identifier.  Examine the API Documentation for the Type Names of entities that have their own definitions.  Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found.  Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
   * @param entityType The type of entity for whom you would like results.  These correspond to the entity's definition contract name.  For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
   * @param hashIdentifier The hash identifier for the specific Entity you want returned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyEntityDefinition(
    entityType: string,
    hashIdentifier: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Definitions.DestinyDefinition> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Manifest/${encodeURIComponent(
        String(entityType)
      )}/${encodeURIComponent(String(hashIdentifier))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetDestinyEntityDefinition", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the set of live tile Content Items that are relevant for Destiny.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyLiveTileContentItems(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Content.ContentItemPublicContract[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/LiveTiles/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetDestinyLiveTileContentItems", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a list of Destiny memberships given a full Gamertag or PSN ID.
   * @param membershipType A valid non-BungieNet membership type, or All.
   * @param displayName The full gamertag or PSN id of the player. Spaces and case are ignored.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchDestinyPlayer(
    membershipType: Globals.BungieMembershipType,
    displayName: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<User.UserInfoCard[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/SearchDestinyPlayer/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(String(displayName))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "SearchDestinyPlayer", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information.  The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership.  It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data.  Note that it will only return linked accounts whose linkages you are allowed to view.
   * @param membershipType The type for the membership whose linked Destiny accounts you want returned.
   * @param membershipId The ID of the membership whose linked Destiny accounts you want returned.  Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLinkedProfiles(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyLinkedProfilesResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(String(membershipId))}/LinkedProfiles/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetLinkedProfiles", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns Destiny Profile information for the supplied membership.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId Destiny membership ID.
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetProfile(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyProfileResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(String(destinyMembershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetProfile", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns character information for the supplied character.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId Destiny membership ID.
   * @param characterId ID of the character.
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCharacter(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyCharacterResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(String(characterId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetCharacter", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   * @param groupId A valid group id of clan.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetClanWeeklyRewardState(
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Milestones.DestinyMilestone> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Clan/${encodeURIComponent(
        String(groupId)
      )}/WeeklyRewardState/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetClanWeeklyRewardState", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Retrieve the details of an instanced Destiny Item.  An instanced Destiny item is one with an ItemInstanceId.  Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The membership ID of the destiny profile.
   * @param itemInstanceId The Instance ID of the destiny item.
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetItem(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    itemInstanceId: string,
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyItemResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Item/${encodeURIComponent(String(itemInstanceId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetItem", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get currently available vendors from the list of vendors that can possibly have rotating inventory.  Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories.  Use their definitions as-is for those.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param characterId The Destiny Character ID of the character for whom we're getting vendor info.
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetVendors(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyVendorsResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(String(characterId))}/Vendors/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetVendors", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the details of a specific Vendor.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param characterId The Destiny Character ID of the character for whom we're getting vendor info.
   * @param vendorHash The Hash identifier of the Vendor to be returned.
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetVendor(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    vendorHash: number,
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyVendorResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/Vendors/${encodeURIComponent(String(vendorHash))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetVendor", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get items available from vendors where the vendors have items for sale that are common for everyone.  If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed.  As I am often guilty of saying: 'It's a long story...'
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPublicVendors(
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyPublicVendorsResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Vendors/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetPublicVendors", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param characterId The Destiny Character ID of the character for whom we're getting collectible detail info.
   * @param collectiblePresentationNodeHash The hash identifier of the Presentation Node for whom we should return collectible details.  Details will only be returned for collectibles that are direct descendants of this node.
   * @param components A comma separated list of components to return (as strings or numeric values).  See the DestinyComponentType enum for valid components to request.  You must request at least one component to receive results.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCollectibleNodeDetails(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    collectiblePresentationNodeHash: number,
    components: Globals.DestinyComponentType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyCollectibleNodeDetailResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["components", components]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/Collectibles/${encodeURIComponent(
        String(collectiblePresentationNodeHash)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetCollectibleNodeDetails", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Transfer an item to/from your vault.  You must have a valid Destiny account.  You must also pass BOTH a reference AND an instance ID if it's an instanced item.  itshappening.gif
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static TransferItem(
    input: Requests.DestinyItemTransferRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/TransferItem/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "TransferItem", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Extract an item from the Postmaster, with whatever implications that may entail.  You must have a valid Destiny account.  You must also pass BOTH a reference AND an instance ID if it's an instanced item.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static PullFromPostmaster(
    input: Actions.DestinyPostmasterTransferRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/PullFromPostmaster/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "PullFromPostmaster", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Equip an item.  You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EquipItem(
    input: Actions.DestinyItemActionRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/EquipItem/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "EquipItem", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Equip a list of items by itemInstanceIds.  You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.  Any items not found on your character will be ignored.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EquipItems(
    input: Actions.DestinyItemSetActionRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<World.DestinyEquipItemResults> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/EquipItems/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "EquipItems", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Set the Lock State for an instanced item.  You must have a valid Destiny Account.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SetItemLockState(
    input: Actions.DestinyItemStateRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/SetLockState/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "SetItemLockState", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Set the Tracking State for an instanced item, if that item is a Quest or Bounty.  You must have a valid Destiny Account.  Yeah, it's an item.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SetQuestTrackedState(
    input: Actions.DestinyItemStateRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/SetTrackedState/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "SetQuestTrackedState", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Insert a plug into a socketed item.  I know how it sounds, but I assure you it's much more G-rated than you might be guessing.  We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so.  You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.  Request must include proof of permission for 'InsertPlugs' from the account owner.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static InsertSocketPlug(
    input: Actions.DestinyInsertPlugsActionRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Responses.DestinyItemChangeResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Actions/Items/InsertSocketPlug/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "InsertSocketPlug", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the available post game carnage report for the activity ID.
   * @param activityId The ID of the activity whose PGCR is requested.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPostGameCarnageReport(
    activityId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyPostGameCarnageReportData> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/PostGameCarnageReport/${encodeURIComponent(
        String(activityId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetPostGameCarnageReport", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Report a player that you met in an activity that was engaging in ToS-violating activities.  Both you and the offending player must have played in the activityId passed in.  Please use this judiciously and only when you have strong suspicions of violation, pretty please.
   * @param activityId The ID of the activity where you ran into the brigand that you're reporting.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReportOffensivePostGameCarnageReportPlayer(
    input: Requests.DestinyReportOffensePgcrRequest,
    activityId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/PostGameCarnageReport/${encodeURIComponent(
        String(activityId)
      )}/Report/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Destiny2",
      "ReportOffensivePostGameCarnageReportPlayer",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets historical stats definitions.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetHistoricalStatsDefinition(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<any> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/Definition/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetHistoricalStatsDefinition", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the available blob for the activity ID.
   * @param activityId The ID of the activity whose blob is requested.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetActivityBlob(
    activityId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/ActivityBlob/${encodeURIComponent(String(activityId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetActivityBlob", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is in final form, but there may be bugs that prevent desirable operation.
   * @param groupId Group ID of the clan whose leaderboards you wish to fetch.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param statid ID of stat to return rather than returning all Leaderboard stats.
   * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetClanLeaderboards(
    groupId: string,
    modes: string,
    statid: string,
    maxtop: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyLeaderboardResults> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["modes", modes],
      // ["statid", statid],
      ["maxtop", maxtop]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/Leaderboards/Clans/${encodeURIComponent(
        String(groupId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetClanLeaderboards", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets aggregated stats for a clan using the same categories as the clan leaderboards.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is in final form, but there may be bugs that prevent desirable operation.
   * @param groupId Group ID of the clan whose leaderboards you wish to fetch.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetClanAggregateStats(
    groupId: string,
    modes: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyClanAggregateStat[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["modes", modes]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/AggregateClanStats/${encodeURIComponent(
        String(groupId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetClanAggregateStats", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets leaderboards for a PSN authenticated user.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param code Auth Code provided by PSN.  This is optional if a valid PSN cookie is present.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLeaderboardsForPsn(
    modes: string,
    code: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyLeaderboardResults> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["modes", modes],
      ["code", code]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/Leaderboards/Psn/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetLeaderboardsForPsn", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.  PREVIEW: This endpoint has not yet been implemented.  It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param statid ID of stat to return rather than returning all Leaderboard stats.
   * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLeaderboards(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    modes: string,
    statid: string,
    maxtop: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyLeaderboardResults> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["modes", modes],
      ["statid", statid],
      ["maxtop", maxtop]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Account/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Stats/Leaderboards/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetLeaderboards", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is in final form, but there may be bugs that prevent desirable operation.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param characterId The specific character to build the leaderboard around for the provided Destiny Membership.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param statid ID of stat to return rather than returning all Leaderboard stats.
   * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetLeaderboardsForCharacter(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    modes: string,
    statid: string,
    maxtop: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyLeaderboardResults> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["modes", modes],
      ["statid", statid],
      ["maxtop", maxtop]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Stats/Leaderboards/${encodeURIComponent(
        String(membershipType)
      )}/${encodeURIComponent(
        String(destinyMembershipId)
      )}/${encodeURIComponent(String(characterId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetLeaderboardsForCharacter", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a page list of Destiny items.
   * @param page Page number to return, starting with 0.
   * @param count Number of rows to return. Use 10, 25, 50, 100, or 500.
   * @param name Name of items to return (partial match, no case). Omit for all items.
   * @param order Item property used for sorting. Use Name, ItemType, Rarity, ItemTypeName, ItemStatHash, MinimumRequiredLevel, MaximumRequiredLevel.
   * @param orderstathash This value is used when the order parameter is set to ItemStatHash.  The item stat for the provided hash value will be used in the sort.
   * @param direction Order to sort items: Ascending or Descending
   * @param rarity Rarity of items to return: Currency, Basic, Common, Rare, Superior, Exotic. Omit for all items.
   * @param step Hash ID of the talent node step that an item must have in order to be returned.
   * @param categories Category identifiers.  Only items that are in all of the passed-in categories will be returned.
   * @param weaponPerformance Items must have node steps in one of these categories, omit for all items. RateOfFire, Damage, Accuracy, Range, Zoom, Recoil, Ready, Reload, HairTrigger, AmmoAndMagazine, TrackingAndDetonation, ShotgunSpread, ChargeTime
   * @param impactEffects Items must have node steps in one of these categories, omit for all items. ArmorPiercing, Ricochet, Flinch, CollateralDamage, Disorient, HighlightTarget
   * @param guardianAttributes Items must have node steps in one of these categories, omit for all items. Stats, Shields, Health, Revive, AimUnderFire, Radar, Invisibility, Reputations
   * @param lightAbilities Items must have node steps in one of these categories, omit for all items. Grenades, Melee, MovementModes, Orbs, SuperEnergy, SuperMods
   * @param damageTypes Items must have node steps in one of these categories, omit for all items. Kinetic, Arc, Solar, Void
   * @param matchrandomsteps True if the supplied groups/step hash filters should match random node steps. False indicates the item can always get the step before it is considered a match.
   * @param sourcecat Items must drop from the specified source category, omit for all items. Use Vendor or Activity.
   * @param sourcehash Items must drop from the specified source, omit for all items. Overrides sourcecat.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetArmoryItems(
    page: number,
    count: number,
    name: string,
    order: Globals.DestinyExplorerOrderBy,
    orderstathash: number,
    direction: Globals.DestinyExplorerOrderDirection,
    rarity: Globals.TierType,
    step: number,
    categories: number[],
    weaponPerformance: Globals.DestinyTalentNodeStepWeaponPerformances,
    impactEffects: Globals.DestinyTalentNodeStepImpactEffects,
    guardianAttributes: Globals.DestinyTalentNodeStepGuardianAttributes,
    lightAbilities: Globals.DestinyTalentNodeStepLightAbilities,
    damageTypes: Globals.DestinyTalentNodeStepDamageTypes,
    matchrandomsteps: boolean,
    sourcecat: Globals.DestinyRewardSourceCategory,
    sourcehash: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Explorer.DestinyExplorerItems> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["page", page],
      ["count", count],
      ["name", name],
      ["order", order],
      ["orderstathash", orderstathash],
      ["direction", direction],
      ["rarity", rarity],
      ["step", step],
      ["categories", categories],
      ["weaponPerformance", weaponPerformance],
      ["impactEffects", impactEffects],
      ["guardianAttributes", guardianAttributes],
      ["lightAbilities", lightAbilities],
      ["damageTypes", damageTypes],
      ["matchrandomsteps", matchrandomsteps],
      ["sourcecat", sourcecat],
      ["sourcehash", sourcehash]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Armory/Items/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetArmoryItems", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a page list of Destiny items.
   * @param type The type of entity for whom you would like results.  These correspond to the entity's definition contract name.  For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.
   * @param searchTerm The string to use when searching for Destiny entities.
   * @param page Page number to return, starting with 0.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchDestinyEntities(
    type: string,
    searchTerm: string,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Definitions.DestinyEntitySearchResult> {
    const requiredParameters = ApiIntermediary.getParamString([["page", page]]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Armory/Search/${encodeURIComponent(
        String(type)
      )}/${encodeURIComponent(String(searchTerm))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "SearchDestinyEntities", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets historical stats for indicated character.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param characterId The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
   * @param periodType Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity
   * @param modes Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param groups Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals
   * @param daystart First day to return when daily stats are requested. Use the format YYYY-MM-DD
   * @param dayend Last day to return when daily stats are requested.  Use the format YYYY-MM-DD.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetHistoricalStats(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    periodType: Globals.PeriodType,
    modes: Globals.DestinyActivityModeType[],
    groups: Globals.DestinyStatsGroupType[],
    daystart: string,
    dayend: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyHistoricalStatsResults> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["periodType", periodType],
      ["modes", modes],
      ["groups", groups],
      ["daystart", daystart],
      ["dayend", dayend]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Account/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(String(characterId))}/Stats/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetHistoricalStats", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets aggregate historical stats organized around each character for a given account.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param groups Groups of stats to include, otherwise only general stats are returned.  Comma separated list is allowed. Values: General, Weapons, Medals.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetHistoricalStatsForAccount(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    groups: Globals.DestinyStatsGroupType[],
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyHistoricalStatsAccountResult> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["groups", groups]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Account/${encodeURIComponent(String(destinyMembershipId))}/Stats/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetHistoricalStatsForAccount", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets activity history stats for indicated character.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param characterId The id of the character to retrieve.
   * @param mode A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.
   * @param count Number of rows to return
   * @param page Page number to return, starting with 0.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetActivityHistory(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    mode: Globals.DestinyActivityModeType,
    count: number,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyActivityHistoryResults> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["mode", mode],
      ["count", count],
      ["page", page]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Account/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/Stats/Activities/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetActivityHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets details about unique weapon usage, including all exotic weapons.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param characterId The id of the character to retrieve.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetUniqueWeaponHistory(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyHistoricalWeaponStatsData> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Account/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/Stats/UniqueWeapons/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetUniqueWeaponHistory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets all activities the character has participated in together with aggregate statistics for those activities.
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param characterId The specific character whose activities should be returned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetDestinyAggregateActivityStats(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    characterId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<HistoricalStats.DestinyAggregateActivityResults> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/Account/${encodeURIComponent(
        String(destinyMembershipId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/Stats/AggregateActivityStats/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetDestinyAggregateActivityStats", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets custom localized content for the milestone of the given hash, if it exists.
   * @param milestoneHash The identifier for the milestone to be returned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPublicMilestoneContent(
    milestoneHash: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Milestones.DestinyMilestoneContent> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Milestones/${encodeURIComponent(
        String(milestoneHash)
      )}/Content/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetPublicMilestoneContent", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets public information about currently available Milestones.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPublicMilestones(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<{ [key: number]: Milestones.DestinyPublicMilestone }> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Milestones/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetPublicMilestones", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Initialize a request to perform an advanced write action.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AwaInitializeRequest(
    input: Advanced.AwaPermissionRequested,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Advanced.AwaInitializeResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Awa/Initialize/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "AwaInitializeRequest", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AwaProvideAuthorizationResult(
    input: Advanced.AwaUserResponse,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Awa/AwaProvideAuthorizationResult/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "AwaProvideAuthorizationResult", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the action token if user approves the request.
   * @param correlationId The identifier for the advanced write action request.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AwaGetActionToken(
    correlationId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Advanced.AwaAuthorizationResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/Awa/GetActionToken/${encodeURIComponent(
        String(correlationId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "AwaGetActionToken", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns Destiny Profile information for the supplied membership.  Internal implementation for our own uses.  Please don't try to hit it, thank you please pull through to the next window
   * @param membershipType A valid non-BungieNet membership type.
   * @param destinyMembershipId Destiny membership ID.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetProfileInternal(
    membershipType: Globals.BungieMembershipType,
    destinyMembershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<any> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Destiny2/${encodeURIComponent(
        String(membershipType)
      )}/ProfileInternal/${encodeURIComponent(String(destinyMembershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Destiny2", "GetProfileInternal", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class CommunitycontentServiceInternal {
  /**
   * Returns community content.
   * @param sort The sort mode.
   * @param mediaFilter The type of media to get
   * @param page Zero based page
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCommunityContent(
    sort: Globals.CommunityContentSortMode,
    mediaFilter: Globals.ForumTopicsCategoryFiltersEnum,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Get/${encodeURIComponent(
        String(sort)
      )}/${encodeURIComponent(String(mediaFilter))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CommunityContent", "GetCommunityContent", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns community content approval queue
   * @param sort The sort mode.
   * @param mediaFilter The type of media to get
   * @param page Zero based page
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetApprovalQueue(
    sort: Globals.CommunityContentSortMode,
    mediaFilter: Globals.ForumTopicsCategoryFiltersEnum,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostSearchResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Queue/${encodeURIComponent(
        String(sort)
      )}/${encodeURIComponent(String(mediaFilter))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CommunityContent", "GetApprovalQueue", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Submits a new community content item.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SubmitContent(
    input: Contract.CommunityContentSubmission,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Submit/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CommunityContent", "SubmitContent", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Edits a community content item.
   * @param postId The id of the item to edit
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditContent(
    input: Contract.CommunityContentSubmission,
    postId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Contract.PostResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Edit/${encodeURIComponent(String(postId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CommunityContent", "EditContent", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Approves or rejects an item in the queue
   * @param approve True if these items are to be approved, false if rejected
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AlterApprovalState(
    input: string[],
    approve: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/AlterApprovalState/${encodeURIComponent(
        String(approve)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CommunityContent", "AlterApprovalState", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns info about community members who are live streaming.
   * @param partnershipType The type of partnership for which the status should be returned.
   * @param sort The sort mode.
   * @param page Zero based page.
   * @param modeHash The hash of the Activity Mode for which streams should be retrieved.  Don't pass it in or pass 0 to not filter by mode.
   * @param streamLocale The locale for streams you'd like to see.  Don't pass this to fall back on your BNet locale.  Pass 'ALL' to not filter by locale.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCommunityLiveStatuses(
    partnershipType: Globals.PartnershipType,
    sort: Globals.CommunityStatusSort,
    page: number,
    modeHash: number,
    streamLocale: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultCommunityLiveStatus> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["modeHash", modeHash],
      ["streamLocale", streamLocale]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/All/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CommunityContent", "GetCommunityLiveStatuses", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns info about community members who are live streaming in your clans.
   * @param partnershipType The type of partnership for which the status should be returned.
   * @param sort The sort mode.
   * @param page Zero based page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCommunityLiveStatusesForClanmates(
    partnershipType: Globals.PartnershipType,
    sort: Globals.CommunityStatusSort,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultCommunityLiveStatus> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Clan/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "GetCommunityLiveStatusesForClanmates",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns info about community members who are live streaming among your friends.
   * @param partnershipType The type of partnership for which the status should be returned.
   * @param sort The sort mode.
   * @param page Zero based page.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCommunityLiveStatusesForFriends(
    partnershipType: Globals.PartnershipType,
    sort: Globals.CommunityStatusSort,
    page: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultCommunityLiveStatus> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Friends/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "GetCommunityLiveStatusesForFriends",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns info about community members who are live streaming for Admins.
   * @param partnershipType The type of partnership for which the status should be returned.
   * @param sort The sort mode.
   * @param page Zero based page.
   * @param name A partial search for Partnership identifiers will be performed with this parameter.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAdminCommunityLiveStatuses(
    partnershipType: Globals.PartnershipType,
    sort: Globals.CommunityStatusSort,
    page: number,
    name: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultAdminCommunityLiveStatus> {
    const requiredParameters = ApiIntermediary.getParamString([["name", name]]);

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Admin/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "GetAdminCommunityLiveStatuses",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns info about Featured live streams.
   * @param partnershipType The type of partnership for which the status should be returned.
   * @param sort The sort mode.
   * @param page Zero based page.
   * @param streamLocale The locale for streams you'd like to see.  Don't pass this to fall back on your BNet locale.  Pass 'ALL' to not filter by locale.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFeaturedCommunityLiveStatuses(
    partnershipType: Globals.PartnershipType,
    sort: Globals.CommunityStatusSort,
    page: number,
    streamLocale: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultCommunityLiveStatus> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["streamLocale", streamLocale]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Featured/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "GetFeaturedCommunityLiveStatuses",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets the Live Streaming status of a particular Account and Membership Type.
   * @param partnershipType The type of partnership for which info will be extracted.
   * @param membershipType The type of account for which info will be extracted.
   * @param membershipId The membershipId related to that type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetStreamingStatusForMember(
    partnershipType: Globals.PartnershipType,
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Community.CommunityLiveStatus> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Users/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(String(membershipType))}/${encodeURIComponent(
        String(membershipId)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "GetStreamingStatusForMember",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Bans users who are misbehaving in live streams.  You must have community administration privileges to perform this action.
   * @param partnershipType The type of partnership for which the ban is occurring.
   * @param partnershipIdentifier The identifier of the partnership to ban from live streaming.
   * @param banStatus true if banning the user, false if unbanning them.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AdminSetCommunityLiveMemberBanStatus(
    partnershipType: Globals.PartnershipType,
    partnershipIdentifier: string,
    banStatus: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Partnerships/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(
        String(partnershipIdentifier)
      )}/Ban/${encodeURIComponent(String(banStatus))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "AdminSetCommunityLiveMemberBanStatus",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Features users who are awesome until the next time they stop broadcasting.  You must have community administration privileges to perform this action.
   * @param partnershipType The type of partnership for which the ban is occurring.
   * @param partnershipIdentifier The identifier of the partnership to ban from live streaming.
   * @param featureStatus true if featuring the user, false if un-featuring them.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static AdminSetCommunityLiveMemberFeatureStatus(
    partnershipType: Globals.PartnershipType,
    partnershipIdentifier: string,
    featureStatus: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CommunityContent/Live/Partnerships/${encodeURIComponent(
        String(partnershipType)
      )}/${encodeURIComponent(
        String(partnershipIdentifier)
      )}/Feature/${encodeURIComponent(String(featureStatus))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "CommunityContent",
      "AdminSetCommunityLiveMemberFeatureStatus",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class TrendingServiceInternal {
  /**
   * Returns trending items for Bungie.net, collapsed into the first page of items per category.  For pagination within a category, call GetTrendingCategory.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTrendingCategories(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Trending.TrendingCategories> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Trending/Categories/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Trending", "GetTrendingCategories", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns paginated lists of trending items for a category.
   * @param categoryId The ID of the category for whom you want additional results.
   * @param pageNumber The page # of results to return.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTrendingCategory(
    categoryId: string,
    pageNumber: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultTrendingEntry> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Trending/Categories/${encodeURIComponent(
        String(categoryId)
      )}/${encodeURIComponent(String(pageNumber))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Trending", "GetTrendingCategory", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns the detailed results for a specific trending entry.  Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
   * @param trendingEntryType The type of entity to be returned.
   * @param identifier The identifier for the entity to be returned.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetTrendingEntryDetail(
    trendingEntryType: Globals.TrendingEntryType,
    identifier: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Trending.TrendingDetail> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Trending/Details/${encodeURIComponent(
        String(trendingEntryType)
      )}/${encodeURIComponent(String(identifier))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Trending", "GetTrendingEntryDetail", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class FireteamServiceInternal {
  /**
   * Gets a count of all active non-public fireteams for the specified clan.  Maximum value returned is 25.
   * @param groupId The group id of the clan.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetActivePrivateClanFireteamCount(
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<number> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(String(groupId))}/ActiveCount/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Fireteam",
      "GetActivePrivateClanFireteamCount",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
   * @param groupId The group id of the clan.
   * @param platform The platform filter.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param slotFilter Filters based on available slots
   * @param publicOnly Determines public/private filtering.
   * @param page Zero based page
   * @param langFilter An optional language filter.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableClanFireteams(
    groupId: string,
    platform: Globals.FireteamPlatform,
    activityType: Globals.FireteamActivityType,
    dateRange: Globals.FireteamDateRange,
    slotFilter: Globals.FireteamSlotSearch,
    publicOnly: Globals.FireteamPublicSearchOption,
    page: number,
    langFilter: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFireteamSummary> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["langFilter", langFilter]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Available/${encodeURIComponent(String(platform))}/${encodeURIComponent(
        String(activityType)
      )}/${encodeURIComponent(String(dateRange))}/${encodeURIComponent(
        String(slotFilter)
      )}/${encodeURIComponent(String(publicOnly))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "GetAvailableClanFireteams", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
   * @param platform The platform filter.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param slotFilter Filters based on available slots
   * @param page Zero based page
   * @param langFilter An optional language filter.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static SearchPublicAvailableClanFireteams(
    platform: Globals.FireteamPlatform,
    activityType: Globals.FireteamActivityType,
    dateRange: Globals.FireteamDateRange,
    slotFilter: Globals.FireteamSlotSearch,
    page: number,
    langFilter: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFireteamSummary> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["langFilter", langFilter]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Search/Available/${encodeURIComponent(
        String(platform)
      )}/${encodeURIComponent(String(activityType))}/${encodeURIComponent(
        String(dateRange)
      )}/${encodeURIComponent(String(slotFilter))}/${encodeURIComponent(
        String(page)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Fireteam",
      "SearchPublicAvailableClanFireteams",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a listing of all clan fireteams that caller is an applicant, a member, or an alternate of.
   * @param groupId The group id of the clan.  (This parameter is ignored unless the optional query parameter groupFilter is true).
   * @param platform The platform filter.
   * @param includeClosed If true, return fireteams that have been closed.
   * @param page Deprecated parameter, ignored.
   * @param groupFilter If true, filter by clan.  Otherwise, ignore the clan and show all of the user's fireteams.
   * @param langFilter An optional language filter.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetMyClanFireteams(
    groupId: string,
    platform: Globals.FireteamPlatform,
    includeClosed: boolean,
    page: number,
    groupFilter: boolean,
    langFilter: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Queries.SearchResultFireteamResponse> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["groupFilter", groupFilter],
      ["langFilter", langFilter]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/My/${encodeURIComponent(String(platform))}/${encodeURIComponent(
        String(includeClosed)
      )}/${encodeURIComponent(String(page))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "GetMyClanFireteams", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets a specific clan fireteam.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetClanFireteam(
    groupId: string,
    fireteamId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Fireteam.FireteamResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Summary/${encodeURIComponent(String(fireteamId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "GetClanFireteam", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user to create a new clan fireteam. Note that any scheduled datetimes are considered to be UTC.
   * @param groupId The group id of the clan.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CreateClanFireteam(
    input: Fireteam.FireteamCreationRequest,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Fireteam.FireteamResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(String(groupId))}/Create/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "CreateClanFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a fireteam owner to edit an existing fireteam. Note that any scheduled datetimes are considered to be UTC.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static EditClanFireteam(
    input: Fireteam.FireteamEditRequest,
    groupId: string,
    fireteamId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Fireteam.FireteamResponse> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Edit/${encodeURIComponent(String(fireteamId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "EditClanFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a fireteam owner to close an existing fireteam, cancelling it and closing its conversation.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static CloseFireteam(
    groupId: string,
    fireteamId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Close/${encodeURIComponent(String(fireteamId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "CloseFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a fireteam owner to open an existing fireteam that was previously closed manually or one that timed out.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ReopenFireteam(
    groupId: string,
    fireteamId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Open/${encodeURIComponent(String(fireteamId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "ReopenFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user with an appropriate platform membership join the fireteam.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param characterId The unique id of the preferred character to use for display.
   * @param hasMicrophone Indicates whether or not the user has a microphone.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static JoinClanFireteam(
    groupId: string,
    fireteamId: string,
    characterId: string,
    hasMicrophone: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Join/${encodeURIComponent(
        String(fireteamId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/${encodeURIComponent(String(hasMicrophone))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "JoinClanFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a user with an appropriate platform membership join the fireteam.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param characterId The unique id of the preferred character to use for display.
   * @param hasMicrophone Indicates whether or not the user has a microphone.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static JoinClanFireteamAsAlternate(
    groupId: string,
    fireteamId: string,
    characterId: string,
    hasMicrophone: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/JoinAlternate/${encodeURIComponent(
        String(fireteamId)
      )}/Character/${encodeURIComponent(
        String(characterId)
      )}/${encodeURIComponent(String(hasMicrophone))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "JoinClanFireteamAsAlternate", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows user to leave a fireteam they are part of.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static LeaveClanFireteam(
    groupId: string,
    fireteamId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Leave/${encodeURIComponent(String(fireteamId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "LeaveClanFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a fireteam owner to kick a user from the fireteam, and optionally prevent them from ever rejoining this particular fireteam again.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param membershipId The destiny membership id of the user to be kicked.
   * @param isPermanent If true, the kick is permanent, the player is not permitted to rejoin this fireteam.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static KickFromClanFireteam(
    groupId: string,
    fireteamId: string,
    membershipId: string,
    isPermanent: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Kick/${encodeURIComponent(String(fireteamId))}/${encodeURIComponent(
        String(membershipId)
      )}/${encodeURIComponent(String(isPermanent))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "KickFromClanFireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a fireteam leader to issue game invites to all fireteam invitees if they are in Orbit ready to go and the fireteam is ready.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param alternates If true, invite alternates, if false, only invite non-alternates.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static InviteToDestiny2Fireteam(
    groupId: string,
    fireteamId: string,
    alternates: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<{ [key: string]: Globals.FireteamPlatformInviteResult }> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Invite/${encodeURIComponent(String(fireteamId))}/${encodeURIComponent(
        String(alternates)
      )}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Fireteam", "InviteToDestiny2Fireteam", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Allows a fireteam leader to issue game invites to a specific fireteam member invitees if they are in Orbit ready to go and the fireteam is ready.
   * @param groupId The group id of the clan.
   * @param fireteamId The unique id of the fireteam.
   * @param membershipId The member to issue a platform invite to.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static IndividualInviteToDestiny2Fireteam(
    groupId: string,
    fireteamId: string,
    membershipId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Globals.FireteamPlatformInviteResult> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Invite/${encodeURIComponent(
        String(fireteamId)
      )}/User/${encodeURIComponent(String(membershipId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Fireteam",
      "IndividualInviteToDestiny2Fireteam",
      url
    );

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      null,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class ExploreServiceInternal {
  /**
   * Retrieves the 'calls to action' that constitute the Explore features of our Companion apps.  Probably not really useful for anyone else.
   * @param membershipType A valid non-BungieNet membership type.
   * @param membershipId A valid Destiny 2 membership ID.
   * @param characterId A valid Destiny 2 character ID, owned by the given membership ID.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetExploreSections(
    membershipType: Globals.BungieMembershipType,
    membershipId: string,
    characterId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Explore.ExploreSection[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Explore/${encodeURIComponent(
        String(membershipType)
      )}/Profile/${encodeURIComponent(
        String(membershipId)
      )}/Character/${encodeURIComponent(String(characterId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Explore", "GetExploreSections", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class CompanionpermissionServiceInternal {
  /**
   * Determines if the signed in user has the specified permission.
   * @param cPermission The permission being checked
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetPermission(
    cPermission: Globals.CompanionPermission,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CompanionPermission/${encodeURIComponent(String(cPermission))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CompanionPermission", "GetPermission", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Determines if the signed in user has the specified permission using a group/clan as the object context.
   * @param cPermission The permission being checked
   * @param groupId The group or clan used as the permission context
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGroupPermission(
    cPermission: Globals.CompanionPermission,
    groupId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CompanionPermission/${encodeURIComponent(
        String(cPermission)
      )}/Group/${encodeURIComponent(String(groupId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CompanionPermission", "GetGroupPermission", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Determines if the signed in user has the specified permission using a fireteam as the object context.
   * @param cPermission The permission being checked
   * @param groupId The group id the fireteam is a part of, 0 if it is not part of a fireteam.
   * @param fireteamId The group or clan used as the permission context
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetFireteamPermission(
    cPermission: Globals.CompanionPermission,
    groupId: string,
    fireteamId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/CompanionPermission/${encodeURIComponent(
        String(cPermission)
      )}/Group/${encodeURIComponent(
        String(groupId)
      )}/Fireteam/${encodeURIComponent(String(fireteamId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("CompanionPermission", "GetFireteamPermission", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

class RendererServiceInternal {
  /**
   * Returns a server-rendered content item given an ID
   * @param id The content ID.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ContentItemRenderableById(
    id: number,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Renderable.ContentItemRenderable> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Renderer/ContentItemRenderableById/${encodeURIComponent(String(id))}`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Renderer", "ContentItemRenderableById", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Returns a server-rendered content item given a tag and type
   * @param tag The content tag.
   * @param type The content type.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ContentItemRenderableByTagAndType(
    tag: string,
    type: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Renderable.ContentItemRenderable> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Renderer/ContentItemRenderableByTagAndType/${encodeURIComponent(
        String(tag)
      )}/${encodeURIComponent(String(type))}`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa(
      "Renderer",
      "ContentItemRenderableByTagAndType",
      url
    );

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Logs client messages to the server.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static ServerLog(
    input: Renderer.ServerLogRequest,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<boolean> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Renderer/ServerLog/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("Renderer", "ServerLog", url);

    const request = ApiIntermediary.buildRequest(
      url,
      "POST",
      input,
      clientState
    );

    return ApiIntermediary.makeRequest(request);
  }
}

class CoreServiceInternal {
  /**
   * Smoketest function
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static HelloWorld(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/HelloWorld/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "HelloWorld", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Bungie.net version
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetVersion(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Core.BungieNetVersionInfo> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GetVersion/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetVersion", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * List of available localization cultures
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetAvailableLocales(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<any> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/GetAvailableLocales/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetAvailableLocales", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the common settings used by the Bungie.Net environment.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetCommonSettings(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Models.CoreSettingsConfiguration> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Settings/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetCommonSettings", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Get the minimum common settings used by the Bungie.Net environment.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetEssentialCommonSettings(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Models.CoreSettingsConfiguration> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/EssentialSettings/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetEssentialCommonSettings", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Check Status
   * @param statusId
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetSystemStatus(
    statusId: string,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<string> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/Status/${encodeURIComponent(String(statusId))}/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetSystemStatus", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets any active global alert for display in the forum banners, help pages, etc.  Usually used for DOC alerts.
   * @param includestreaming Determines whether Streaming Alerts are included in results
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetGlobalAlerts(
    includestreaming: boolean,
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Core.GlobalAlert[]> {
    const requiredParameters = ApiIntermediary.getParamString([
      ["includestreaming", includestreaming]
    ]);

    const url = ApiIntermediary.buildUrl(
      `/GlobalAlerts/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetGlobalAlerts", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }

  /**
   * Gets any active scheduled notifications for mobile devices. Will always return an empty list for non-authenticated users.
   * @param optionalQueryAppend Segment to append to query string. May be null.
   * @param clientState Object returned to the provided success and error callbacks.
   */
  public static GetBroadcastNotifications(
    optionalQueryAppend?: string,
    clientState?: any
  ): Promise<Core.ScheduledBroadcastNotification[]> {
    const requiredParameters = "";

    const url = ApiIntermediary.buildUrl(
      `/BroadcastNotifications/`,
      requiredParameters,
      optionalQueryAppend
    );

    ApiIntermediary.pushGa("", "GetBroadcastNotifications", url);

    const request = ApiIntermediary.buildRequest(url, "GET", null, clientState);

    return ApiIntermediary.makeRequest(request);
  }
}

export class Platform {
  public static Globals = Globals;
  public static JsonpService = JsonpServiceInternal;
  public static ApplicationService = ApplicationServiceInternal;
  public static UserService = UserServiceInternal;
  public static MessageService = MessageServiceInternal;
  public static NotificationService = NotificationServiceInternal;
  public static ContentService = ContentServiceInternal;
  public static ExternalSocialService = ExternalSocialServiceInternal;
  public static SurveyService = SurveyServiceInternal;
  public static ForumService = ForumServiceInternal;
  public static ActivityService = ActivityServiceInternal;
  public static GroupV2Service = GroupV2ServiceInternal;
  public static IgnoreService = IgnoreServiceInternal;
  public static GameService = GameServiceInternal;
  public static AdminService = AdminServiceInternal;
  public static TokensService = TokensServiceInternal;
  public static Destiny2Service = Destiny2ServiceInternal;
  public static CommunitycontentService = CommunitycontentServiceInternal;
  public static TrendingService = TrendingServiceInternal;
  public static FireteamService = FireteamServiceInternal;
  public static ExploreService = ExploreServiceInternal;
  public static CompanionpermissionService = CompanionpermissionServiceInternal;
  public static RendererService = RendererServiceInternal;
  public static CoreService = CoreServiceInternal;
  platformSettings: any;
}
