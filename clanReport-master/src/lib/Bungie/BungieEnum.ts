// Auto generated code based on B.net Service Interfaces.  Do not edit manually.

export module Globals {
  export enum IgnoreStatus {
    NotIgnored = 0,
    IgnoredUser = 1,
    IgnoredGroup = 2,
    IgnoredByGroup = 4,
    IgnoredPost = 8,
    IgnoredTag = 16,
    IgnoredGlobal = 32
  }

  export enum IgnoredItemType {
    All = 0,
    Post = 1,
    Group = 2,
    User = 3,
    Tag = 4,
    GroupProfile = 5,
    UserProfile = 6,
    UserPrivateMessage = 7,
    GroupWallPost = 8,
    PrivateMessage = 9,
    Fireteam = 10
  }

  export enum ModeratorRequestedPunishment {
    Unknown = 0,
    Warning = 1,
    SevenDayBan = 2,
    ThirtyDayBan = 3,
    PermanentBan = 255
  }

  export enum IgnoreLength {
    None = 0,
    Week = 1,
    TwoWeeks = 2,
    ThreeWeeks = 3,
    Month = 4,
    ThreeMonths = 5,
    SixMonths = 6,
    Year = 7,
    Forever = 8,
    ThreeMinutes = 9,
    Hour = 10,
    ThirtyDays = 11
  }

  export enum ReportResolutionStatus {
    Unresolved = 0,
    Innocent = 1,
    GuiltyBan = 2,
    GuiltyBlastBan = 3,
    GuiltyWarn = 4,
    GuiltyAlias = 5,
    ResolveNoAction = 6
  }

  export enum ApplicationScopes {
    /**
		Read basic user profile information such as the user's handle, avatar icon, etc.
		*/
    ReadBasicUserProfile = 1,
    /**
		Read Group/Clan Forums, Wall, and Members for groups and clans that the
		user has joined.
		*/
    ReadGroups = 2,
    /**
		Write Group/Clan Forums, Wall, and Members for groups and clans that the
		user has joined.
		*/
    WriteGroups = 4,
    /**
		Administer Group/Clan Forums, Wall, and Members for groups and clans that the
		user is a founder or an administrator.
		*/
    AdminGroups = 8,
    /**
		Create new groups, clans, and forum posts.
		*/
    BnetWrite = 16,
    /**
		Move or equip Destiny items
		*/
    MoveEquipDestinyItems = 32,
    /**
		Read Destiny 1 Inventory and Vault contents.
		For Destiny 2, this scope is needed to read anything regarded as private. This is the only scope a
		Destiny 2 app needs for read operations against Destiny 2 data such as inventory, vault, currency,
		vendors, milestones, progression, etc.
		*/
    ReadDestinyInventoryAndVault = 64,
    /**
		Read user data such as who they are web notifications,
		clan/group memberships, recent activity, muted users.
		*/
    ReadUserData = 128,
    /**
		Edit user data such as preferred language, status, motto, avatar selection and theme.
		*/
    EditUserData = 256,
    /**
		Access vendor and advisor data specific to a user. OBSOLETE. This scope is only used on the Destiny 1 API.
		*/
    ReadDestinyVendorsAndAdvisors = 512,
    /**
		Read offer history and claim and apply tokens for the user.
		*/
    ReadAndApplyTokens = 1024,
    /**
		Can perform actions that will result in a prompt to the user via the Destiny app.
		*/
    AdvancedWriteActions = 2048
  }

  export enum OAuthApplicationType {
    None = 0,
    /**
		Indicates the application is server based and can keep its secrets from end users and other
		potential snoops.
		*/
    Confidential = 1,
    /**
		Indicates the application runs in a public place, and it can't be trusted to keep a secret.
		*/
    Public = 2
  }

  export enum ApplicationStatus {
    /**
		No value assigned
		*/
    None = 0,
    /**
		Application exists and works but will not appear in any public catalog.  New applications
		start in this state, test applications will remain in this state.
		*/
    Private = 1,
    /**
		Active applications that can appear in an catalog.
		*/
    Public = 2,
    /**
		Application disabled by the owner. All authorizations will be treated as terminated
		while in this state.  Owner can move back to private or public state.
		*/
    Disabled = 3,
    /**
		Application has been blocked by Bungie.  It cannot be transitioned out of this state by the owner.
		Authorizations are terminated when an application is in this state.
		*/
    Blocked = 4
  }

  export enum DeveloperRole {
    None = 0,
    Owner = 1,
    TeamMember = 2
  }

  export enum ApiKeyStatus {
    /**
		Not initialized
		*/
    None = 0,
    /**
		Key is active and can be used with public or private applications.
		*/
    Active = 1,
    /**
		Key is disabled.  Related authorizations are disabled while key is disabled.
		*/
    Disabled = 2,
    /**
		Key is no longer accessible.  It will not be returned by the database.
		*/
    Deleted = 3
  }

  export enum AuthorizationStatus {
    /**
		No value assigned
		*/
    None = 0,
    /**
		Authorization is active, assuming it has not expired and the linked key and application are still
		active.
		*/
    Active = 1,
    /**
		Authorization has been revoked.
		*/
    Revoked = 2
  }

  /**
	The types of membership the Accounts system supports.  This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.MembershipType.
	*/
  export enum BungieMembershipType {
    None = 0,
    TigerXbox = 1,
    TigerPsn = 2,
    TigerBlizzard = 4,
    TigerDemon = 10,
    BungieNext = 254,
    /**
		"All" is only valid for searching capabilities: you need to pass the actual matching BungieMembershipType
		for any query where you pass a known membershipId.
		*/
    All = -1
  }

  /**
	The types of device the Accounts system supports.  This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.DeviceType.
	*/
  export enum ClientDeviceType {
    Unknown = 0,
    Xbox360 = 1,
    Playstation3 = 2,
    AndroidPhone = 3,
    AndroidTablet = 4,
    ApplePhone = 5,
    AppleTablet = 6,
    WebBrowser = 7,
    NativeWindows = 8,
    NativeMac = 9,
    WindowsPhone = 10,
    WindowsTablet = 11,
    XboxOne = 12,
    Playstation4 = 13,
    BattleNet = 14,
    Fake = 255
  }

  /**
	The types of credentials the Accounts system supports.  This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.CredentialType.
	*/
  export enum BungieCredentialType {
    None = 0,
    Xuid = 1,
    Psnid = 2,
    Wlid = 3,
    Fake = 4,
    Facebook = 5,
    Google = 8,
    Windows = 9,
    DemonId = 10,
    BattleNetId = 14
  }

  export enum ExternalService {
    None = 0,
    Twitter = 1,
    Facebook = 2,
    TwitterHelp = 4,
    TwitterDE = 5,
    TwitterRU = 6,
    TwitterESMX = 7,
    TwitterFR = 8,
    TwitterPTBR = 9,
    TwitterKO = 10,
    TwitterJA = 11,
    TwitterPL = 12,
    TwitterIT = 13,
    TwitterES = 14
  }

  export enum AdminHistoryMembershipFlags {
    None = 0,
    Bungie = 1,
    PlayerSupport = 2,
    Mentor = 4,
    Ninja = 8,
    GroupAdmin = 16,
    GroupFounder = 32,
    FounderInAllGroups = 64
  }

  /**
	The various things we record in the admin history database table
	*/
  export enum AdminHistoryType {
    None = 0,
    ForumPostBan = 1,
    UserBan = 2,
    UserWarning = 3,
    ForumTopicPost = 4,
    ForumReply = 5,
    MarkAsAnswer = 6,
    UserProfileEdit = 7,
    UnmarkAsAnswer = 8,
    CommunityContentApproved = 9,
    CommunityContentRejected = 10,
    GroupPostBan = 11,
    ForumPostUnban = 12,
    TagAlias = 13,
    TagUnalias = 14,
    GroupProfileBan = 15,
    ForumPostEdit = 16,
    EditedPlayerSupportFlags = 17,
    EditedPlayerSupportText = 18,
    GroupSettingsEdit = 19,
    GroupFounderChange = 20,
    GroupMemberPromotionToAdmin = 21,
    GroupAdminDemotionToMember = 22,
    GroupKickBan = 23,
    GroupKick = 24,
    GroupUnban = 25,
    ForumDeleteTopic = 26,
    UserProfileBan = 27,
    UserMessageBan = 28,
    GroupWallModerate = 29,
    GroupWallBan = 30,
    FireteamBan = 31,
    FireteamWarning = 32
  }

  export enum AdminHistoryItemFlags {
    None = 0
  }

  export enum MarketplaceCodeRegion {
    Global = 0,
    USA = 1,
    Europe = 2,
    Japan = 3
  }

  export enum AclEnum {
    None = 0,
    BNextForumNinja = 1,
    BNextUnlimitedGroups = 2,
    BNextFounderInAllGroups = 3,
    BNextBungieGold = 4,
    BNextNinjaColors = 5,
    BNextMakeOfficialTopics = 6,
    BNextMakeNinjaTopics = 7,
    BNextDeleteForumTopics = 8,
    BNextOverturnReports = 9,
    BNextBrowseReports = 10,
    BNextGlobalIgnore = 11,
    BNextEditAnyPublicPost = 12,
    BNextEditUsers = 13,
    BNextUltraBan = 14,
    BNextForumMentor = 15,
    TigerBan = 16,
    BNextForumCurator = 17,
    BNextBigLikes = 18,
    BNextPlayerSupport = 19,
    BNextPinTopics = 20,
    BNextLockTopics = 21,
    BNextCommunityContentCurator = 22,
    BNextAdminHistory = 23,
    BNextPrivateUserDataReader = 24,
    BNextDiagnosticsDataReader = 25,
    BNextOverrideLinkPrivacy = 26,
    BNextDiscountSupport = 27,
    BNextApplicationSupervision = 28,
    BNextMentorColors = 29,
    Tiger2Ban = 30
  }

  /**
	A flags enum to indicate the privacy settings of a Destiny account.
	These are the raw values stored.
	*/
  export enum BNetAccountPrivacy {
    Default = 0,
    ShowDestinyInventory = 1,
    HideDestinyActivityHistoryFeed = 2,
    HideDestinyProgression = 4,
    /**
		Hide your followers and those you are following.
		*/
    HideFollowers = 8
  }

  export enum NotificationMethods {
    None = 0,
    EMAIL = 1,
    MOBILE_PUSH = 2,
    WEB_ONLY = 4
  }

  export enum NotificationGrouping {
    None = 0,
    USER = 1,
    GROUPS = 2,
    COMMUNITY = 3
  }

  export enum NotificationType {
    None = 0,
    MESSAGE = 1,
    FORUM_REPLY = 2,
    NEW_ACTIVITY_ROLLUP = 3,
    SETTINGS_CHANGE = 4,
    GROUP_ACCEPTANCE = 5,
    GROUP_JOIN_REQUEST = 6,
    FOLLOW_USER_ACTIVITY = 7,
    FRIEND_USER_ACTIVITY = 8,
    FORUM_LIKE = 9,
    FOLLOWED = 10,
    GROUP_BANNED = 11,
    BANNED = 12,
    UNBANNED = 13,
    GROUP_OPEN_JOIN = 14,
    GROUP_ALLIANCE_JOIN_REQUESTED = 15,
    GROUP_ALLIANCE_JOIN_REJECTED = 16,
    GROUP_ALLIANCE_JOIN_APPROVED = 17,
    GROUP_ALLIANCE_BROKEN = 18,
    GROUP_DENIAL = 19,
    WARNED = 20,
    CLAN_DISABLED = 21,
    GROUP_ALLIANCE_INVITE_REQUESTED = 22,
    GROUP_ALLIANCE_INVITE_REJECTED = 23,
    GROUP_ALLIANCE_INVITE_APPROVED = 24,
    GROUP_FOLLOWED_BY_GROUP = 25,
    GRIMOIRE_UNOBSERVED_CARDS = 26,
    COMMUNITY_CONTENT_LIKE = 27,
    COMMUNITY_CONTENT_APPROVED = 28,
    USER_PROFILE_BANNED = 29,
    USER_MESSAGE_BANNED = 30,
    SUPPORT_FORM_RECEIVED = 31,
    RAF_NEWBIE_NEEDS_TO_PLAY_TTK = 32,
    RAF_TTK_QUEST_READY = 33,
    RECRUIT_THREAD_READY = 34,
    RECRUIT_THREAD_KICKED = 35,
    RECRUIT_THREAD_CANCELED = 36,
    GROUP_WALL_BANNED = 37,
    BANNED_PERMANENT = 38,
    USER_PROFILE_BANNED_PERMANENT = 39,
    USER_MESSAGE_BANNED_PERMANENT = 40,
    GROUP_WALL_BANNED_PERMANENT = 41,
    APPLICATION_AUTHORIZED = 42,
    GROUP_INDIVIDUAL_INVITE = 43,
    GROUP_SYSTEM_CHAT_MESSAGE = 44,
    GROUP_CHAT_MESSAGE = 45,
    GROUP_PROFILE_WARNED = 46,
    GROUP_PROFILE_BANNED = 47,
    GROUP_PROFILE_BANNED_PERMANENT = 48,
    CLAN_FIRETEAM_USER_JOINED = 50,
    CLAN_FIRETEAM_USER_LEFT = 51,
    CLAN_FIRETEAM_READY = 52,
    SYSTEM_BROADCAST = 53,
    RAF_NEWPLAYER_NEEDS_TO_PLAY = 54,
    RAF_QUEST_READY = 55,
    CLAN_FIRETEAM_WARNING = 56,
    CLAN_FIRETEAM_BANNED = 57,
    CLAN_FIRETEAM_BANNED_PERMANENT = 58
  }

  export enum RealTimeEventType {
    None = 0,
    ConversationChanged = 1,
    Typing = 2,
    NotificationsChanged = 3,
    MessageCounts = 4,
    FriendCounts = 5,
    Announcements = 6,
    RecruitThreadUpdate = 7,
    ClanFireteamUpdate = 8
  }

  export enum EventConversationType {
    None = 0,
    Private = 1,
    Group = 2,
    Clan = 3
  }

  /**
	Representing external partners to which BNet users can link accounts, but that
	are not Account System credentials: partnerships that BNet uses exclusively for data.
	*/
  export enum PartnershipType {
    None = 0,
    Twitch = 1
  }

  export enum TemplateFormat {
    BNet = 0,
    Plain = 1,
    EMail = 2,
    Push = 3
  }

  export enum ContentPropertyDataTypeEnum {
    None = 0,
    Plaintext = 1,
    Html = 2,
    Dropdown = 3,
    List = 4,
    Json = 5,
    Content = 6,
    Representation = 7,
    Set = 8,
    File = 9,
    FolderSet = 10,
    Date = 11,
    MultilinePlaintext = 12,
    DestinyContent = 13,
    Color = 14
  }

  export enum AffectedItemType {
    User = 0,
    Post = 1,
    Topic = 2,
    Group = 3,
    Tag = 4,
    CommunityContent = 5,
    Destiny = 6,
    Application = 7,
    Fireteam = 8,
    EmailUser = 9,
    RAFBond = 10,
    PlatformType = 11,
    Conversation = 12,
    None = -1
  }

  export enum SuccessMessages {
    Following = 1,
    Unfollowing = 2,
    ManagingGroupMembers = 8,
    UpdatingSettings = 16,
    ManagingGroups = 32
  }

  export enum OptInFlags {
    Newsletter = 1,
    System = 2,
    Marketing = 4,
    UserResearch = 8,
    CustomerService = 16,
    Social = 32
  }

  export enum InvitationResponseState {
    Unreviewed = 0,
    Approved = 1,
    Rejected = 2
  }

  export enum InvitationType {
    None = 0,
    /**
		GroupAllianceJoinFromChild - A request by the Founder of an unallied ("Child") Group to a potential "Parent" group, to have the Child join the Parent in an Alliance.
		Needs to be approved by the Founder of the Parent (Target) Group.
			targetObjectId = The Group ID of the Parent group to which the child wants to join.
			requestingObjectId = The Group ID of the Child group that wants to join the parent.
		*/
    GroupAllianceJoinFromChild = 1,
    /**
		ClanJoinInvite - A request by a Clan for a BNet user to join.  Needs to be approved by the BNet user who was requested to join.
			targetObjectId = The Bungie.Net Membership ID of the member invited to join the Clan.
			requestingObjectId = The Group ID of the Clan to which the member was invited.
		*/
    ClanJoinInvite = 2,
    /**
		GroupAllianceInviteFromOwner - A request by the Founder of an Alliance Group to a potential "Child" group, to have the Child join the alliance.
		Needs to be approved by the Founder of the Child (Target) Group.
			targetObjectId = The Group ID of the Child Group invited to join the Owner Group's Alliance.
			requestingObjectId = The Group ID of the Group who owns the alliance, and invited the Child Group.
		*/
    GroupAllianceInviteFromOwner = 3,
    /**
		GroupMembershipInvite - A request by a Group for a BNet user to join.  Needs to be approved by the BNet user who was requested to join.
			targetObjectId = The Bungie.Net Membership ID of the member invited to join the Group.
			requestingObjectId = The Group ID of the Group to which the member was invited.
		*/
    GroupJoinInvite = 4,
    /**
		ClanJoinRequest - A request by a Destiny user to join a group.  Needs to be approved by an Admin or Founder in the Group.
			targetObjectId = The Group ID of the Clan to which the member wants to join.
			requestingObjectId = The Membership ID of the member who wants to join, not necessarily B.net.
			targetState = Membership Type joining the group
		*/
    ClanJoinRequest = 5,
    /**
		GroupJoinRequest - A request by a BNET user to join a Group.  Needs to be approved by an Admin or Founder in the Group.
			targetObjectId = The Group ID of the Group to which the member wants to join.
			requestingObjectId = The Bungie.Net Membership ID of the member who wants to join.
		*/
    GroupJoinRequest = 6
  }

  export enum GroupType {
    General = 0,
    Clan = 1
  }

  export enum ChatSecuritySetting {
    Group = 0,
    Admins = 1
  }

  export enum GroupHomepage {
    Wall = 0,
    Forum = 1,
    AllianceForum = 2
  }

  export enum MembershipOption {
    Reviewed = 0,
    Open = 1,
    Closed = 2
  }

  export enum GroupPostPublicity {
    Public = 0,
    Alliance = 1,
    Private = 2
  }

  export enum Capabilities {
    None = 0,
    Leaderboards = 1,
    Callsign = 2,
    OptionalConversations = 4,
    ClanBanner = 8,
    D2InvestmentData = 16,
    Tags = 32,
    Alliances = 64
  }

  /**
	Used for setting the guided game permission level override (admins and founders can always host guided games).
	*/
  export enum HostGuidedGamesPermissionLevel {
    None = 0,
    Beginner = 1,
    Member = 2
  }

  /**
	The member levels used by all V2 Groups API.  Individual group types use their own mappings in their
	native storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translated
	to this in the runtime api.  These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.
	*/
  export enum RuntimeGroupMemberType {
    None = 0,
    Beginner = 1,
    Member = 2,
    Admin = 3,
    ActingFounder = 4,
    Founder = 5
  }

  export enum GroupAllianceStatus {
    Unallied = 0,
    Parent = 1,
    Child = 2
  }

  export enum GroupPotentialMemberStatus {
    None = 0,
    Applicant = 1,
    Invitee = 2
  }

  export enum GroupDateRange {
    All = 0,
    PastDay = 1,
    PastWeek = 2,
    PastMonth = 3,
    PastYear = 4
  }

  export enum GroupSortBy {
    Name = 0,
    Date = 1,
    Popularity = 2,
    Id = 3
  }

  export enum GroupMemberCountFilter {
    All = 0,
    OneToTen = 1,
    ElevenToOneHundred = 2,
    GreaterThanOneHundred = 3
  }

  export enum GroupApplicationResolveState {
    Unresolved = 0,
    Accepted = 1,
    Denied = 2,
    Rescinded = 3
  }

  export enum GroupsForMemberFilter {
    All = 0,
    Founded = 1,
    NonFounded = 2
  }

  /**
	These should be restricted to the very highest level of entity type - something referrable by a single long identifier.

	Don't split these up into subsections - for instance, if you need to distinguish between a regular Post and a Topic,
	your system should pass control to the Forum system to determine both that it's a Topic and that special additional
	processing should be done.  This will help us to limit the number of special cases we have to inject when systems
	are coupled together by EntityType, and will help to enforce the the responsibility of business logic
	when such coupling occurs belongs to the EntityType's system, and not to whatever's leveraging it.
	[amola is responsible for this experimental and potentially bad idea - 2014-06-02]
	*/
  export enum EntityType {
    None = 0,
    User = 1,
    Group = 2,
    Post = 3,
    Invitation = 4,
    Report = 5,
    Activity = 6,
    Conversation = 7,
    Tag = 8,
    Application = 9,
    ClanFireteam = 10
  }

  export enum PlatformErrorCodes {
    None = 0,
    Success = 1,
    TransportException = 2,
    UnhandledException = 3,
    NotImplemented = 4,
    SystemDisabled = 5,
    FailedToLoadAvailableLocalesConfiguration = 6,
    ParameterParseFailure = 7,
    ParameterInvalidRange = 8,
    BadRequest = 9,
    AuthenticationInvalid = 10,
    DataNotFound = 11,
    InsufficientPrivileges = 12,
    Duplicate = 13,
    /**
		Deprecated, please do not check for this value anywhere.
		*/
    UnknownSqlResult = 14,
    ValidationError = 15,
    ValidationMissingFieldError = 16,
    ValidationInvalidInputError = 17,
    InvalidParameters = 18,
    ParameterNotFound = 19,
    UnhandledHttpException = 20,
    NotFound = 21,
    WebAuthModuleAsyncFailed = 22,
    InvalidReturnValue = 23,
    UserBanned = 24,
    InvalidPostBody = 25,
    MissingPostBody = 26,
    ExternalServiceTimeout = 27,
    ValidationLengthError = 28,
    ValidationRangeError = 29,
    JsonDeserializationError = 30,
    ThrottleLimitExceeded = 31,
    ValidationTagError = 32,
    ValidationProfanityError = 33,
    ValidationUrlFormatError = 34,
    ThrottleLimitExceededMinutes = 35,
    ThrottleLimitExceededMomentarily = 36,
    ThrottleLimitExceededSeconds = 37,
    ExternalServiceUnknown = 38,
    ValidationWordLengthError = 39,
    ValidationInvisibleUnicode = 40,
    ValidationBadNames = 41,
    ExternalServiceFailed = 42,
    ServiceRetired = 43,
    UnknownSqlException = 44,
    UnsupportedLocale = 45,
    InvalidPageNumber = 46,
    MaximumPageSizeExceeded = 47,
    ServiceUnsupported = 48,
    ValidationMaximumUnicodeCombiningCharacters = 49,
    ValidationMaximumSequentialCarriageReturns = 50,
    PerEndpointRequestThrottleExceeded = 51,
    AuthContextCacheAssertion = 52,
    ExPlatformStringValidationError = 53,
    ObsoleteCredentialType = 89,
    UnableToUnPairMobileApp = 90,
    UnableToPairMobileApp = 91,
    CannotUseMobileAuthWithNonMobileProvider = 92,
    MissingDeviceCookie = 93,
    FacebookTokenExpired = 94,
    AuthTicketRequired = 95,
    CookieContextRequired = 96,
    UnknownAuthenticationError = 97,
    BungieNetAccountCreationRequired = 98,
    WebAuthRequired = 99,
    ContentUnknownSqlResult = 100,
    ContentNeedUniquePath = 101,
    ContentSqlException = 102,
    ContentNotFound = 103,
    ContentSuccessWithTagAddFail = 104,
    ContentSearchMissingParameters = 105,
    ContentInvalidId = 106,
    ContentPhysicalFileDeletionError = 107,
    ContentPhysicalFileCreationError = 108,
    ContentPerforceSubmissionError = 109,
    ContentPerforceInitializationError = 110,
    ContentDeploymentPackageNotReadyError = 111,
    ContentUploadFailed = 112,
    ContentTooManyResults = 113,
    ContentInvalidState = 115,
    ContentNavigationParentNotFound = 116,
    ContentNavigationParentUpdateError = 117,
    DeploymentPackageNotEditable = 118,
    ContentValidationError = 119,
    ContentPropertiesValidationError = 120,
    ContentTypeNotFound = 121,
    DeploymentPackageNotFound = 122,
    ContentSearchInvalidParameters = 123,
    ContentItemPropertyAggregationError = 124,
    DeploymentPackageFileNotFound = 125,
    ContentPerforceFileHistoryNotFound = 126,
    ContentAssetZipCreationFailure = 127,
    ContentAssetZipCreationBusy = 128,
    ContentProjectNotFound = 129,
    ContentFolderNotFound = 130,
    ContentPackagesInconsistent = 131,
    ContentPackagesInvalidState = 132,
    ContentPackagesInconsistentType = 133,
    ContentCannotDeletePackage = 134,
    ContentLockedForChanges = 135,
    ContentFileUploadFailed = 136,
    ContentNotReviewed = 137,
    ContentPermissionDenied = 138,
    ContentInvalidExternalUrl = 139,
    ContentExternalFileCannotBeImportedLocally = 140,
    ContentTagSaveFailure = 141,
    ContentPerforceUnmatchedFileError = 142,
    ContentPerforceChangelistResultNotFound = 143,
    ContentPerforceChangelistFileItemsNotFound = 144,
    ContentPerforceInvalidRevisionError = 145,
    ContentUnloadedSaveResult = 146,
    ContentPropertyInvalidNumber = 147,
    ContentPropertyInvalidUrl = 148,
    ContentPropertyInvalidDate = 149,
    ContentPropertyInvalidSet = 150,
    ContentPropertyCannotDeserialize = 151,
    ContentRegexValidationFailOnProperty = 152,
    ContentMaxLengthFailOnProperty = 153,
    ContentPropertyUnexpectedDeserializationError = 154,
    ContentPropertyRequired = 155,
    ContentCannotCreateFile = 156,
    ContentInvalidMigrationFile = 157,
    ContentMigrationAlteringProcessedItem = 158,
    ContentPropertyDefinitionNotFound = 159,
    ContentReviewDataChanged = 160,
    ContentRollbackRevisionNotInPackage = 161,
    ContentItemNotBasedOnLatestRevision = 162,
    ContentUnauthorized = 163,
    ContentCannotCreateDeploymentPackage = 164,
    ContentUserNotFound = 165,
    ContentLocalePermissionDenied = 166,
    ContentInvalidLinkToInternalEnvironment = 167,
    ContentInvalidBlacklistedContent = 168,
    ContentMacroMalformedNoContentId = 169,
    ContentMacroMalformedNoTemplateType = 170,
    ContentIllegalBNetMembershipId = 171,
    ContentLocaleDidNotMatchExpected = 172,
    ContentBabelCallFailed = 173,
    ContentEnglishPostLiveForbidden = 174,
    ContentLocaleEditPermissionDenied = 175,
    UserNonUniqueName = 200,
    UserManualLinkingStepRequired = 201,
    UserCreateUnknownSqlResult = 202,
    UserCreateUnknownSqlException = 203,
    UserMalformedMembershipId = 204,
    UserCannotFindRequestedUser = 205,
    UserCannotLoadAccountCredentialLinkInfo = 206,
    UserInvalidMobileAppType = 207,
    UserMissingMobilePairingInfo = 208,
    UserCannotGenerateMobileKeyWhileUsingMobileCredential = 209,
    UserGenerateMobileKeyExistingSlotCollision = 210,
    UserDisplayNameMissingOrInvalid = 211,
    UserCannotLoadAccountProfileData = 212,
    UserCannotSaveUserProfileData = 213,
    UserEmailMissingOrInvalid = 214,
    UserTermsOfUseRequired = 215,
    UserCannotCreateNewAccountWhileLoggedIn = 216,
    UserCannotResolveCentralAccount = 217,
    UserInvalidAvatar = 218,
    UserMissingCreatedUserResult = 219,
    UserCannotChangeUniqueNameYet = 220,
    UserCannotChangeDisplayNameYet = 221,
    UserCannotChangeEmail = 222,
    UserUniqueNameMustStartWithLetter = 223,
    UserNoLinkedAccountsSupportFriendListings = 224,
    UserAcknowledgmentTableFull = 225,
    UserCreationDestinyMembershipRequired = 226,
    UserFriendsTokenNeedsRefresh = 227,
    UserEmailValidationUnknown = 228,
    UserEmailValidationLimit = 229,
    TransactionEmailSendFailure = 230,
    MailHookPermissionFailure = 231,
    MessagingUnknownError = 300,
    MessagingSelfError = 301,
    MessagingSendThrottle = 302,
    MessagingNoBody = 303,
    MessagingTooManyUsers = 304,
    MessagingCanNotLeaveConversation = 305,
    MessagingUnableToSend = 306,
    MessagingDeletedUserForbidden = 307,
    MessagingCannotDeleteExternalConversation = 308,
    MessagingGroupChatDisabled = 309,
    MessagingMustIncludeSelfInPrivateMessage = 310,
    MessagingSenderIsBanned = 311,
    MessagingGroupOptionalChatExceededMaximum = 312,
    PrivateMessagingRequiresDestinyMembership = 313,
    AddSurveyAnswersUnknownSqlException = 400,
    ForumBodyCannotBeEmpty = 500,
    ForumSubjectCannotBeEmptyOnTopicPost = 501,
    ForumCannotLocateParentPost = 502,
    ForumThreadLockedForReplies = 503,
    ForumUnknownSqlResultDuringCreatePost = 504,
    ForumUnknownTagCreationError = 505,
    ForumUnknownSqlResultDuringTagItem = 506,
    ForumUnknownExceptionCreatePost = 507,
    ForumQuestionMustBeTopicPost = 508,
    ForumExceptionDuringTagSearch = 509,
    ForumExceptionDuringTopicRetrieval = 510,
    ForumAliasedTagError = 511,
    ForumCannotLocateThread = 512,
    ForumUnknownExceptionEditPost = 513,
    ForumCannotLocatePost = 514,
    ForumUnknownExceptionGetOrCreateTags = 515,
    ForumEditPermissionDenied = 516,
    ForumUnknownSqlResultDuringTagIdRetrieval = 517,
    ForumCannotGetRating = 518,
    ForumUnknownExceptionGetRating = 519,
    ForumRatingsAccessError = 520,
    ForumRelatedPostAccessError = 521,
    ForumLatestReplyAccessError = 522,
    ForumUserStatusAccessError = 523,
    ForumAuthorAccessError = 524,
    ForumGroupAccessError = 525,
    ForumUrlExpectedButMissing = 526,
    ForumRepliesCannotBeEmpty = 527,
    ForumRepliesCannotBeInDifferentGroups = 528,
    ForumSubTopicCannotBeCreatedAtThisThreadLevel = 529,
    ForumCannotCreateContentTopic = 530,
    ForumTopicDoesNotExist = 531,
    ForumContentCommentsNotAllowed = 532,
    ForumUnknownSqlResultDuringEditPost = 533,
    ForumUnknownSqlResultDuringGetPost = 534,
    ForumPostValidationBadUrl = 535,
    ForumBodyTooLong = 536,
    ForumSubjectTooLong = 537,
    ForumAnnouncementNotAllowed = 538,
    ForumCannotShareOwnPost = 539,
    ForumEditNoOp = 540,
    ForumUnknownDatabaseErrorDuringGetPost = 541,
    ForumExceeedMaximumRowLimit = 542,
    ForumCannotSharePrivatePost = 543,
    ForumCannotCrossPostBetweenGroups = 544,
    ForumIncompatibleCategories = 555,
    ForumCannotUseTheseCategoriesOnNonTopicPost = 556,
    ForumCanOnlyDeleteTopics = 557,
    ForumDeleteSqlException = 558,
    ForumDeleteSqlUnknownResult = 559,
    ForumTooManyTags = 560,
    ForumCanOnlyRateTopics = 561,
    ForumBannedPostsCannotBeEdited = 562,
    ForumThreadRootIsBanned = 563,
    ForumCannotUseOfficialTagCategoryAsTag = 564,
    ForumAnswerCannotBeMadeOnCreatePost = 565,
    ForumAnswerCannotBeMadeOnEditPost = 566,
    ForumAnswerPostIdIsNotADirectReplyOfQuestion = 567,
    ForumAnswerTopicIdIsNotAQuestion = 568,
    ForumUnknownExceptionDuringMarkAnswer = 569,
    ForumUnknownSqlResultDuringMarkAnswer = 570,
    ForumCannotRateYourOwnPosts = 571,
    ForumPollsMustBeTheFirstPostInTopic = 572,
    ForumInvalidPollInput = 573,
    ForumGroupAdminEditNonMember = 574,
    ForumCannotEditModeratorEditedPost = 575,
    ForumRequiresDestinyMembership = 576,
    ForumUnexpectedError = 577,
    ForumAgeLock = 578,
    ForumMaxPages = 579,
    ForumMaxPagesOldestFirst = 580,
    ForumCannotApplyForumIdWithoutTags = 581,
    ForumCannotApplyForumIdToNonTopics = 582,
    ForumCannotDownvoteCommunityCreations = 583,
    ForumTopicsMustHaveOfficialCategory = 584,
    ForumRecruitmentTopicMalformed = 585,
    ForumRecruitmentTopicNotFound = 586,
    ForumRecruitmentTopicNoSlotsRemaining = 587,
    ForumRecruitmentTopicKickBan = 588,
    ForumRecruitmentTopicRequirementsNotMet = 589,
    ForumRecruitmentTopicNoPlayers = 590,
    ForumRecruitmentApproveFailMessageBan = 591,
    ForumRecruitmentGlobalBan = 592,
    ForumUserBannedFromThisTopic = 593,
    ForumRecruitmentFireteamMembersOnly = 594,
    ForumRequiresDestiny2Progress = 595,
    GroupMembershipApplicationAlreadyResolved = 601,
    GroupMembershipAlreadyApplied = 602,
    GroupMembershipInsufficientPrivileges = 603,
    GroupIdNotReturnedFromCreation = 604,
    GroupSearchInvalidParameters = 605,
    GroupMembershipPendingApplicationNotFound = 606,
    GroupInvalidId = 607,
    GroupInvalidMembershipId = 608,
    GroupInvalidMembershipType = 609,
    GroupMissingTags = 610,
    GroupMembershipNotFound = 611,
    GroupInvalidRating = 612,
    GroupUserFollowingAccessError = 613,
    GroupUserMembershipAccessError = 614,
    GroupCreatorAccessError = 615,
    GroupAdminAccessError = 616,
    GroupPrivatePostNotViewable = 617,
    GroupMembershipNotLoggedIn = 618,
    GroupNotDeleted = 619,
    GroupUnknownErrorUndeletingGroup = 620,
    GroupDeleted = 621,
    GroupNotFound = 622,
    GroupMemberBanned = 623,
    GroupMembershipClosed = 624,
    GroupPrivatePostOverrideError = 625,
    GroupNameTaken = 626,
    GroupDeletionGracePeriodExpired = 627,
    GroupCannotCheckBanStatus = 628,
    GroupMaximumMembershipCountReached = 629,
    NoDestinyAccountForClanPlatform = 630,
    AlreadyRequestingMembershipForClanPlatform = 631,
    AlreadyClanMemberOnPlatform = 632,
    GroupJoinedCannotSetClanName = 633,
    GroupLeftCannotClearClanName = 634,
    GroupRelationshipRequestPending = 635,
    GroupRelationshipRequestBlocked = 636,
    GroupRelationshipRequestNotFound = 637,
    GroupRelationshipBlockNotFound = 638,
    GroupRelationshipNotFound = 639,
    GroupAlreadyAllied = 641,
    GroupAlreadyMember = 642,
    GroupRelationshipAlreadyExists = 643,
    InvalidGroupTypesForRelationshipRequest = 644,
    GroupAtMaximumAlliances = 646,
    GroupCannotSetClanOnlySettings = 647,
    ClanCannotSetTwoDefaultPostTypes = 648,
    GroupMemberInvalidMemberType = 649,
    GroupInvalidPlatformType = 650,
    GroupMemberInvalidSort = 651,
    GroupInvalidResolveState = 652,
    ClanAlreadyEnabledForPlatform = 653,
    ClanNotEnabledForPlatform = 654,
    ClanEnabledButCouldNotJoinNoAccount = 655,
    ClanEnabledButCouldNotJoinAlreadyMember = 656,
    ClanCannotJoinNoCredential = 657,
    NoClanMembershipForPlatform = 658,
    GroupToGroupFollowLimitReached = 659,
    ChildGroupAlreadyInAlliance = 660,
    OwnerGroupAlreadyInAlliance = 661,
    AllianceOwnerCannotJoinAlliance = 662,
    GroupNotInAlliance = 663,
    ChildGroupCannotInviteToAlliance = 664,
    GroupToGroupAlreadyFollowed = 665,
    GroupToGroupNotFollowing = 666,
    ClanMaximumMembershipReached = 667,
    ClanNameNotValid = 668,
    ClanNameNotValidError = 669,
    AllianceOwnerNotDefined = 670,
    AllianceChildNotDefined = 671,
    ClanCultureIllegalCharacters = 672,
    ClanTagIllegalCharacters = 673,
    ClanRequiresInvitation = 674,
    ClanMembershipClosed = 675,
    ClanInviteAlreadyMember = 676,
    GroupInviteAlreadyMember = 677,
    GroupJoinApprovalRequired = 678,
    ClanTagRequired = 679,
    GroupNameCannotStartOrEndWithWhiteSpace = 680,
    ClanCallsignCannotStartOrEndWithWhiteSpace = 681,
    ClanMigrationFailed = 682,
    ClanNotEnabledAlreadyMemberOfAnotherClan = 683,
    GroupModerationNotPermittedOnNonMembers = 684,
    ClanCreationInWorldServerFailed = 685,
    ClanNotFound = 686,
    ClanMembershipLevelDoesNotPermitThatAction = 687,
    ClanMemberNotFound = 688,
    ClanMissingMembershipApprovers = 689,
    ClanInWrongStateForRequestedAction = 690,
    ClanNameAlreadyUsed = 691,
    ClanTooFewMembers = 692,
    ClanInfoCannotBeWhitespace = 693,
    GroupCultureThrottle = 694,
    ClanTargetDisallowsInvites = 695,
    ClanInvalidOperation = 696,
    ClanFounderCannotLeaveWithoutAbdication = 697,
    ClanNameReserved = 698,
    ClanApplicantInClanSoNowInvited = 699,
    ActivitiesUnknownException = 701,
    ActivitiesParameterNull = 702,
    ActivityCountsDiabled = 703,
    ActivitySearchInvalidParameters = 704,
    ActivityPermissionDenied = 705,
    ShareAlreadyShared = 706,
    ActivityLoggingDisabled = 707,
    ClanRequiresExistingDestinyAccount = 750,
    ClanNameRestricted = 751,
    ItemAlreadyFollowed = 801,
    ItemNotFollowed = 802,
    CannotFollowSelf = 803,
    GroupFollowLimitExceeded = 804,
    TagFollowLimitExceeded = 805,
    UserFollowLimitExceeded = 806,
    FollowUnsupportedEntityType = 807,
    NoValidTagsInList = 900,
    BelowMinimumSuggestionLength = 901,
    CannotGetSuggestionsOnMultipleTagsSimultaneously = 902,
    NotAValidPartialTag = 903,
    TagSuggestionsUnknownSqlResult = 904,
    TagsUnableToLoadPopularTagsFromDatabase = 905,
    TagInvalid = 906,
    TagNotFound = 907,
    SingleTagExpected = 908,
    TagsExceededMaximumPerItem = 909,
    IgnoreInvalidParameters = 1000,
    IgnoreSqlException = 1001,
    IgnoreErrorRetrievingGroupPermissions = 1002,
    IgnoreErrorInsufficientPermission = 1003,
    IgnoreErrorRetrievingItem = 1004,
    IgnoreCannotIgnoreSelf = 1005,
    IgnoreIllegalType = 1006,
    IgnoreNotFound = 1007,
    IgnoreUserGloballyIgnored = 1008,
    IgnoreUserIgnored = 1009,
    NotificationSettingInvalid = 1100,
    PsnApiExpiredAccessToken = 1204,
    PSNExForbidden = 1205,
    PSNExSystemDisabled = 1218,
    PsnApiErrorCodeUnknown = 1223,
    PsnApiErrorWebException = 1224,
    PsnApiBadRequest = 1225,
    PsnApiAccessTokenRequired = 1226,
    PsnApiInvalidAccessToken = 1227,
    PsnApiBannedUser = 1229,
    PsnApiAccountUpgradeRequired = 1230,
    PsnApiServiceTemporarilyUnavailable = 1231,
    PsnApiServerBusy = 1232,
    PsnApiUnderMaintenance = 1233,
    PsnApiProfileUserNotFound = 1234,
    PsnApiProfilePrivacyRestriction = 1235,
    PsnApiProfileUnderMaintenance = 1236,
    PsnApiAccountAttributeMissing = 1237,
    PsnApiNoPermission = 1238,
    PsnApiTargetUserBlocked = 1239,
    XblExSystemDisabled = 1300,
    XblExUnknownError = 1301,
    XblApiErrorWebException = 1302,
    XblStsTokenInvalid = 1303,
    XblStsMissingToken = 1304,
    XblStsExpiredToken = 1305,
    XblAccessToTheSandboxDenied = 1306,
    XblMsaResponseMissing = 1307,
    XblMsaAccessTokenExpired = 1308,
    XblMsaInvalidRequest = 1309,
    XblMsaFriendsRequireSignIn = 1310,
    XblUserActionRequired = 1311,
    XblParentalControls = 1312,
    XblDeveloperAccount = 1313,
    XblUserTokenExpired = 1314,
    XblUserTokenInvalid = 1315,
    XblOffline = 1316,
    XblUnknownErrorCode = 1317,
    XblMsaInvalidGrant = 1318,
    ReportNotYetResolved = 1400,
    ReportOverturnDoesNotChangeDecision = 1401,
    ReportNotFound = 1402,
    ReportAlreadyReported = 1403,
    ReportInvalidResolution = 1404,
    ReportNotAssignedToYou = 1405,
    LegacyGameStatsSystemDisabled = 1500,
    LegacyGameStatsUnknownError = 1501,
    LegacyGameStatsMalformedSneakerNetCode = 1502,
    DestinyAccountAcquisitionFailure = 1600,
    DestinyAccountNotFound = 1601,
    DestinyBuildStatsDatabaseError = 1602,
    DestinyCharacterStatsDatabaseError = 1603,
    DestinyPvPStatsDatabaseError = 1604,
    DestinyPvEStatsDatabaseError = 1605,
    DestinyGrimoireStatsDatabaseError = 1606,
    DestinyStatsParameterMembershipTypeParseError = 1607,
    DestinyStatsParameterMembershipIdParseError = 1608,
    DestinyStatsParameterRangeParseError = 1609,
    DestinyStringItemHashNotFound = 1610,
    DestinyStringSetNotFound = 1611,
    DestinyContentLookupNotFoundForKey = 1612,
    DestinyContentItemNotFound = 1613,
    DestinyContentSectionNotFound = 1614,
    DestinyContentPropertyNotFound = 1615,
    DestinyContentConfigNotFound = 1616,
    DestinyContentPropertyBucketValueNotFound = 1617,
    DestinyUnexpectedError = 1618,
    DestinyInvalidAction = 1619,
    DestinyCharacterNotFound = 1620,
    DestinyInvalidFlag = 1621,
    DestinyInvalidRequest = 1622,
    DestinyItemNotFound = 1623,
    DestinyInvalidCustomizationChoices = 1624,
    DestinyVendorItemNotFound = 1625,
    DestinyInternalError = 1626,
    DestinyVendorNotFound = 1627,
    DestinyRecentActivitiesDatabaseError = 1628,
    DestinyItemBucketNotFound = 1629,
    DestinyInvalidMembershipType = 1630,
    DestinyVersionIncompatibility = 1631,
    DestinyItemAlreadyInInventory = 1632,
    DestinyBucketNotFound = 1633,
    /**
		Note: This is one of those holdovers from Destiny 1.  We didn't change the enum because I am lazy,
		but in Destiny 2 this would read "DestinyCharacterNotInSocialSpace"
		*/
    DestinyCharacterNotInTower = 1634,
    DestinyCharacterNotLoggedIn = 1635,
    DestinyDefinitionsNotLoaded = 1636,
    DestinyInventoryFull = 1637,
    DestinyItemFailedLevelCheck = 1638,
    DestinyItemFailedUnlockCheck = 1639,
    DestinyItemUnequippable = 1640,
    DestinyItemUniqueEquipRestricted = 1641,
    DestinyNoRoomInDestination = 1642,
    DestinyServiceFailure = 1643,
    DestinyServiceRetired = 1644,
    DestinyTransferFailed = 1645,
    DestinyTransferNotFoundForSourceBucket = 1646,
    DestinyUnexpectedResultInVendorTransferCheck = 1647,
    DestinyUniquenessViolation = 1648,
    DestinyErrorDeserializationFailure = 1649,
    DestinyValidAccountTicketRequired = 1650,
    DestinyShardRelayClientTimeout = 1651,
    DestinyShardRelayProxyTimeout = 1652,
    DestinyPGCRNotFound = 1653,
    DestinyAccountMustBeOffline = 1654,
    DestinyCanOnlyEquipInGame = 1655,
    DestinyCannotPerformActionOnEquippedItem = 1656,
    DestinyQuestAlreadyCompleted = 1657,
    DestinyQuestAlreadyTracked = 1658,
    DestinyTrackableQuestsFull = 1659,
    DestinyItemNotTransferrable = 1660,
    DestinyVendorPurchaseNotAllowed = 1661,
    DestinyContentVersionMismatch = 1662,
    DestinyItemActionForbidden = 1663,
    DestinyRefundInvalid = 1664,
    DestinyPrivacyRestriction = 1665,
    DestinyActionInsufficientPrivileges = 1666,
    DestinyInvalidClaimException = 1667,
    DestinyLegacyPlatformRestricted = 1668,
    DestinyLegacyPlatformInUse = 1669,
    DestinyLegacyPlatformInaccessible = 1670,
    DestinyCannotPerformActionAtThisLocation = 1671,
    DestinyThrottledByGameServer = 1672,
    DestinyItemNotTransferrableHasSideEffects = 1673,
    DestinyItemLocked = 1674,
    DestinyCannotAffordMaterialRequirements = 1675,
    DestinyFailedPlugInsertionRules = 1676,
    DestinySocketNotFound = 1677,
    DestinySocketActionNotAllowed = 1678,
    DestinySocketAlreadyHasPlug = 1679,
    DestinyPlugItemNotAvailable = 1680,
    DestinyCharacterLoggedInNotAllowed = 1681,
    DestinyPublicAccountNotAccessible = 1682,
    FbInvalidRequest = 1800,
    FbRedirectMismatch = 1801,
    FbAccessDenied = 1802,
    FbUnsupportedResponseType = 1803,
    FbInvalidScope = 1804,
    FbUnsupportedGrantType = 1805,
    FbInvalidGrant = 1806,
    InvitationExpired = 1900,
    InvitationUnknownType = 1901,
    InvitationInvalidResponseStatus = 1902,
    InvitationInvalidType = 1903,
    InvitationAlreadyPending = 1904,
    InvitationInsufficientPermission = 1905,
    InvitationInvalidCode = 1906,
    InvitationInvalidTargetState = 1907,
    InvitationCannotBeReactivated = 1908,
    InvitationNoRecipients = 1910,
    InvitationGroupCannotSendToSelf = 1911,
    InvitationTooManyRecipients = 1912,
    InvitationInvalid = 1913,
    InvitationNotFound = 1914,
    TokenInvalid = 2000,
    TokenBadFormat = 2001,
    TokenAlreadyClaimed = 2002,
    TokenAlreadyClaimedSelf = 2003,
    TokenThrottling = 2004,
    TokenUnknownRedemptionFailure = 2005,
    TokenPurchaseClaimFailedAfterTokenClaimed = 2006,
    TokenUserAlreadyOwnsOffer = 2007,
    TokenInvalidOfferKey = 2008,
    TokenEmailNotValidated = 2009,
    TokenProvisioningBadVendorOrOffer = 2010,
    TokenPurchaseHistoryUnknownError = 2011,
    TokenThrottleStateUnknownError = 2012,
    TokenUserAgeNotVerified = 2013,
    TokenExceededOfferMaximum = 2014,
    TokenNoAvailableUnlocks = 2015,
    TokenMarketplaceInvalidPlatform = 2016,
    TokenNoMarketplaceCodesFound = 2017,
    TokenOfferNotAvailableForRedemption = 2018,
    TokenUnlockPartialFailure = 2019,
    TokenMarketplaceInvalidRegion = 2020,
    TokenOfferExpired = 2021,
    RAFExceededMaximumReferrals = 2022,
    RAFDuplicateBond = 2023,
    RAFNoValidVeteranDestinyMembershipsFound = 2024,
    RAFNotAValidVeteranUser = 2025,
    RAFCodeAlreadyClaimedOrNotFound = 2026,
    RAFMismatchedDestinyMembershipType = 2027,
    RAFUnableToAccessPurchaseHistory = 2028,
    RAFUnableToCreateBond = 2029,
    RAFUnableToFindBond = 2030,
    RAFUnableToRemoveBond = 2031,
    RAFCannotBondToSelf = 2032,
    RAFInvalidPlatform = 2033,
    RAFGenerateThrottled = 2034,
    RAFUnableToCreateBondVersionMismatch = 2035,
    RAFUnableToRemoveBondVersionMismatch = 2036,
    RAFRedeemThrottled = 2037,
    NoAvailableDiscountCode = 2038,
    DiscountAlreadyClaimed = 2039,
    DiscountClaimFailure = 2040,
    DiscountConfigurationFailure = 2041,
    DiscountGenerationFailure = 2042,
    DiscountAlreadyExists = 2043,
    TokenRequiresCredentialXuid = 2044,
    TokenRequiresCredentialPsnid = 2045,
    OfferRequired = 2046,
    UnknownEververseHistoryError = 2047,
    MissingEververseHistoryError = 2048,
    BungieRewardEmailStateInvalid = 2049,
    BungieRewardNotYetClaimable = 2050,
    MissingOfferConfig = 2051,
    RAFQuestEntitlementRequiresBnet = 2052,
    RAFQuestEntitlementTransportFailure = 2053,
    RAFQuestEntitlementUnknownFailure = 2054,
    RAFVeteranRewardUnknownFailure = 2055,
    RAFTooEarlyToCancelBond = 2056,
    ApiExceededMaxKeys = 2100,
    ApiInvalidOrExpiredKey = 2101,
    ApiKeyMissingFromRequest = 2102,
    ApplicationDisabled = 2103,
    ApplicationExceededMax = 2104,
    ApplicationDisallowedByScope = 2105,
    AuthorizationCodeInvalid = 2106,
    OriginHeaderDoesNotMatchKey = 2107,
    AccessNotPermittedByApplicationScope = 2108,
    ApplicationNameIsTaken = 2109,
    RefreshTokenNotYetValid = 2110,
    AccessTokenHasExpired = 2111,
    ApplicationTokenFormatNotValid = 2112,
    ApplicationNotConfiguredForBungieAuth = 2113,
    ApplicationNotConfiguredForOAuth = 2114,
    OAuthAccessTokenExpired = 2115,
    PartnershipInvalidType = 2200,
    PartnershipValidationError = 2201,
    PartnershipValidationTimeout = 2202,
    PartnershipAccessFailure = 2203,
    PartnershipAccountInvalid = 2204,
    PartnershipGetAccountInfoFailure = 2205,
    PartnershipDisabled = 2206,
    PartnershipAlreadyExists = 2207,
    CommunityStreamingUnavailable = 2300,
    TwitchNotLinked = 2500,
    TwitchAccountNotFound = 2501,
    TwitchCouldNotLoadDestinyInfo = 2502,
    TrendingCategoryNotFound = 2600,
    TrendingEntryTypeNotSupported = 2601,
    ReportOffenderNotInPgcr = 2700,
    ReportRequestorNotInPgcr = 2701,
    ReportSubmissionFailed = 2702,
    ReportCannotReportSelf = 2703,
    AwaTypeDisabled = 2800,
    AwaTooManyPendingRequests = 2801,
    AwaTheFeatureRequiresARegisteredDevice = 2802,
    AwaRequestWasUnansweredForTooLong = 2803,
    AwaWriteRequestMissingOrInvalidToken = 2804,
    AwaWriteRequestTokenExpired = 2805,
    AwaWriteRequestTokenUsageLimitReached = 2806,
    ClanFireteamNotFound = 3000,
    ClanFireteamAddNoAlternatesForImmediate = 3001,
    ClanFireteamFull = 3002,
    ClanFireteamAltFull = 3003,
    ClanFireteamBlocked = 3004,
    ClanFireteamPlayerEntryNotFound = 3005,
    ClanFireteamPermissions = 3006,
    ClanFireteamInvalidPlatform = 3007,
    ClanFireteamCannotAdjustSlotCount = 3008,
    ClanFireteamInvalidPlayerPlatform = 3009,
    ClanFireteamNotReadyForInvitesNotEnoughPlayers = 3010,
    ClanFireteamGameInvitesNotSupportForPlatform = 3011,
    ClanFireteamPlatformInvitePreqFailure = 3012,
    ClanFireteamInvalidAuthContext = 3013,
    ClanFireteamInvalidAuthProviderPsn = 3014,
    ClanFireteamPs4SessionFull = 3015,
    ClanFireteamInvalidAuthToken = 3016,
    ClanFireteamScheduledFireteamsDisabled = 3017,
    ClanFireteamNotReadyForInvitesNotScheduledYet = 3018,
    ClanFireteamNotReadyForInvitesClosed = 3019,
    ClanFireteamScheduledFireteamsRequireAdminPermissions = 3020,
    ClanFireteamNonPublicMustHaveClan = 3021,
    ClanFireteamPublicCreationRestriction = 3022,
    ClanFireteamAlreadyJoined = 3023,
    ClanFireteamScheduledFireteamsRange = 3024,
    ClanFireteamPublicCreationRestrictionExtended = 3025,
    ClanFireteamExpired = 3026
  }

  export enum GlobalAcknowledgementItem {
    Triumphs = 0,
    GearManager = 1,
    Nux = 2,
    TwitchLink = 3
  }

  export enum ContentSortBy {
    CreationDate = 0,
    CmsPath = 1,
    ModifiedDate = 2
  }

  export enum ContentDateRange {
    All = 0,
    Today = 1,
    Yesterday = 2,
    ThisMonth = 3,
    ThisYear = 4,
    LastYear = 5,
    EarlierThanLastYear = 6
  }

  export enum ContentDateType {
    Specific = 0,
    MonthOnly = 1,
    Custom = 2
  }

  export enum ForumMediaType {
    None = 0,
    Image = 1,
    Video = 2,
    Youtube = 3
  }

  export enum ForumPostPopularity {
    Empty = 0,
    Default = 1,
    Discussed = 2,
    CoolStory = 3,
    HeatingUp = 4,
    Hot = 5
  }

  export enum ForumRecruitmentIntensityLabel {
    None = 0,
    Casual = 1,
    Professional = 2
  }

  export enum ForumRecruitmentToneLabel {
    None = 0,
    FamilyFriendly = 1,
    Rowdy = 2
  }

  export enum ForumTopicsCategoryFiltersEnum {
    None = 0,
    Links = 1,
    Questions = 2,
    AnsweredQuestions = 4,
    Media = 8,
    TextOnly = 16,
    Announcement = 32,
    BungieOfficial = 64,
    Polls = 128
  }

  export enum ForumTopicsQuickDateEnum {
    All = 0,
    LastYear = 1,
    LastMonth = 2,
    LastWeek = 3,
    LastDay = 4
  }

  export enum ForumTopicsSortEnum {
    Default = 0,
    LastReplied = 1,
    MostReplied = 2,
    Popularity = 3,
    Controversiality = 4,
    Liked = 5,
    HighestRated = 6,
    MostUpvoted = 7
  }

  export enum ForumPostSortEnum {
    Default = 0,
    OldestFirst = 1
  }

  export enum CommunityContentSortMode {
    Trending = 0,
    Latest = 1,
    HighestRated = 2
  }

  export enum ForumTypeEnum {
    Public = 0,
    News = 1,
    Group = 2,
    Alliance = 3,
    RelatedPosts = 4,
    Clan = 5
  }

  export enum ForumPostCategoryEnums {
    None = 0,
    TextOnly = 1,
    Media = 2,
    Link = 4,
    Poll = 8,
    Question = 16,
    Answered = 32,
    Announcement = 64,
    ContentComment = 128,
    BungieOfficial = 256,
    NinjaOfficial = 512,
    Recruitment = 1024
  }

  export enum ForumFlagsEnum {
    None = 0,
    BungieStaffPost = 1,
    ForumNinjaPost = 2,
    ForumMentorPost = 4,
    TopicBungieStaffPosted = 8,
    TopicBungieVolunteerPosted = 16,
    QuestionAnsweredByBungie = 32,
    QuestionAnsweredByNinja = 64,
    CommunityContent = 128
  }

  export enum ActivityOutputFormat {
    BNet = 0,
    Plain = 1
  }

  export enum StatFeedbackState {
    Good = 0,
    TooHigh = 1,
    TooLow = 2,
    WrongName = 4
  }

  export enum ActivityType {
    Create = 0,
    Edit = 1,
    Delete = 2,
    Rate = 3,
    Follow = 4,
    Unfollow = 5,
    Apply = 6,
    Rescind = 7,
    Approve = 8,
    Deny = 9,
    Kick = 10,
    EditMembershipType = 11,
    Like = 12,
    Unlike = 13,
    Share = 14,
    TaggedGroup = 15,
    TaggedTopic = 16,
    AvatarChanged = 17,
    DisplayNameChanged = 18,
    TitleChanged = 19,
    TitleUnlocked = 20,
    GroupTopicCreate = 21,
    GroupReplyCreate = 22,
    Reply = 23,
    ChangeGroupName = 24,
    GroupAllianceRejected = 26,
    GroupAllianceApproved = 27,
    GroupAllianceBroken = 28,
    TransferFromVault = 1000,
    TransferToVault = 1001,
    EquipItem = 1004,
    LockItem = 1008,
    UnlockItem = 1009,
    PullFromPostmaster = 1011,
    InsertPlug = 1012,
    Authorize = 2000,
    Revoke = 2001,
    Join = 2500,
    Leave = 2501,
    KickBlock = 2502,
    Invite = 2503,
    Close = 2504,
    Reopen = 2505,
    EmailRewardSent = 2600,
    EmailRewardAck = 2601,
    RAFCreateCode = 2700,
    RAFClaimCode = 2701,
    RAFLockInBond = 2702,
    RAFCancelBond = 2703,
    RAFQualifiedForVeteranMultiReward = 2704,
    DestinyBuyButton = 2800,
    None = -1
  }

  export enum AwaType {
    None = 0,
    /**
		Insert plugs into sockets.
		*/
    InsertPlugs = 1
  }

  export enum AwaUserSelection {
    None = 0,
    Rejected = 1,
    Approved = 2
  }

  export enum AwaResponseReason {
    None = 0,
    /**
		User provided an answer
		*/
    Answered = 1,
    /**
		The HTTP request timed out, a new request may be made and an answer may
		still be provided.
		*/
    TimedOut = 2,
    /**
		This request was replaced by another request.
		*/
    Replaced = 3
  }

  export enum FriendOnlineStatus {
    Offline = 0,
    Online = 1,
    Idle = 2
  }

  export enum GameServiceStatus {
    Error = 0,
    NotFound = 1,
    Success = 2,
    Unknown = 3
  }

  export enum OfferRedeemMode {
    Off = 0,
    Unlock = 1,
    Platform = 2,
    Expired = 3,
    Consumable = 4,
    PlatformUnlock = 5
  }

  export enum EververseChangeEventClassification {
    Unknown = 0,
    PlatformSync = 1,
    TrackedItem = 2
  }

  export enum EververseVendorPurchaseEventClassification {
    Unknown = 0,
    Purchase = 1,
    Refund = 2
  }

  /**
	A mapping of RAF title ids.
	*/
  export enum RAFTitleId {
    Unknown = 0,
    Destiny2Forsaken = 1
  }

  /**
	Records the current state of a particular bond in the refer a friend flow
	*/
  export enum RAFBondState {
    None = 0,
    AwaitingNewPlayerDestinyMembership = 1,
    AwaitingNewPlayerVerification = 2,
    NewPlayerVerified = 3,
    BondLockedIn = 100,
    BondRemoved = -100,
    FailedNewPlayerAlreadyReferred = -3,
    FailedNewPlayerIsVeteranPlayer = -2,
    FailedNewPlayerIsNotNew = -1
  }

  export enum RAFEligibility {
    Unknown = 0,
    PurchaseRequired = 1,
    Eligible = 2,
    NotEligible = -1
  }

  export enum RAFQuestStepsForsaken {
    Unknown = 0,
    StoryMission = 1,
    PublicEvents = 2,
    Crucible = 3,
    Level50 = 4,
    Hawthorne0 = 5,
    Gambit = 6,
    Hawthorne1 = 7,
    Nightfall = 8,
    FinalHawthorne = 9,
    Completed = 10
  }

  /**
	An enumeration representing the potential difficulty levels of an activity.
	Their names are... more qualitative than quantitative.
	*/
  export enum DestinyActivityDifficultyTier {
    Trivial = 0,
    Easy = 1,
    Normal = 2,
    Challenging = 3,
    Hard = 4,
    Brave = 5,
    AlmostImpossible = 6,
    Impossible = 7
  }

  /**
	Represents the possible components that can be returned from Destiny "Get" calls such as GetProfile, GetCharacter,
	GetVendor etc...

	When making one of these requests, you will pass one or more of these components as a comma separated list in
	the "?components=" querystring parameter.  For instance, if you want baseline Profile data, Character Data, and
	character progressions, you would pass "?components=Profiles,Characters,CharacterProgressions"  You may use either
	the numerical or string values.
	*/
  export enum DestinyComponentType {
    None = 0,
    /**
		Profiles is the most basic component, only relevant when calling GetProfile.
		This returns basic information about the profile, which is almost nothing: a list
		of characterIds, some information about the last time you logged in, and that most
		sobering statistic: how long you've played.
		*/
    Profiles = 100,
    /**
		Only applicable for GetProfile, this will return information about receipts for refundable
		vendor items.
		*/
    VendorReceipts = 101,
    /**
		Asking for this will get you the profile-level inventories, such as your Vault buckets
		(yeah, the Vault is really inventory buckets located on your Profile)
		*/
    ProfileInventories = 102,
    /**
		This will get you a summary of items on your Profile that we consider to be "currencies",
		such as Glimmer.  I mean, if there's Glimmer in Destiny 2.  I didn't say there was Glimmer.
		*/
    ProfileCurrencies = 103,
    /**
		This will get you any progression-related information that exists on a Profile-wide level, across
		all characters.
		*/
    ProfileProgression = 104,
    /**
		This will get you summary info about each of the characters in the profile.
		*/
    Characters = 200,
    /**
		This will get you information about any non-equipped items on the character or character(s)
		in question, if you're allowed to see it.  You have to either be authenticated as that user,
		or that user must allow anonymous viewing of their non-equipped items in Bungie.Net settings
		to actually get results.
		*/
    CharacterInventories = 201,
    /**
		This will get you information about the progression (faction, experience, etc... "levels")
		relevant to each character, if you are the currently authenticated user or the user has
		elected to allow anonymous viewing of its progression info.
		*/
    CharacterProgressions = 202,
    /**
		This will get you just enough information to be able to render the character in 3D
		if you have written a 3D rendering library for Destiny Characters, or "borrowed" ours.
		It's okay, I won't tell anyone if you're using it.  I'm no snitch.
		(actually, we don't care if you use it - go to town)
		*/
    CharacterRenderData = 203,
    /**
		This will return info about activities that a user can see and gating on it,
		if you are the currently authenticated user or the user has
		elected to allow anonymous viewing of its progression info.
		Note that the data returned by this can be unfortunately problematic and relatively unreliable in
		some cases.  We'll eventually work on making it more consistently reliable.
		*/
    CharacterActivities = 204,
    /**
		This will return info about the equipped items on the character(s).  Everyone can see this.
		*/
    CharacterEquipment = 205,
    /**
		This will return basic info about instanced items - whether they can be equipped, their
		tracked status, and some info commonly needed in many places (current damage type,
		primary stat value, etc)
		*/
    ItemInstances = 300,
    /**
		Items can have Objectives (DestinyObjectiveDefinition) bound to them.  If they do, this will
		return info for items that have such bound objectives.
		*/
    ItemObjectives = 301,
    /**
		Items can have perks (DestinyPerkDefinition).  If they do, this will return info for
		what perks are active on items.
		*/
    ItemPerks = 302,
    /**
		If you just want to render the weapon, this is just enough info to do that rendering.
		*/
    ItemRenderData = 303,
    /**
		Items can have stats, like rate of fire.  Asking for this component will return
		requested item's stats if they have stats.
		*/
    ItemStats = 304,
    /**
		Items can have sockets, where plugs can be inserted.  Asking for this component will
		return all info relevant to the sockets on items that have them.
		*/
    ItemSockets = 305,
    /**
		Items can have talent grids, though that matters a lot less frequently than it used to.
		Asking for this component will return all relevant info about activated Nodes and Steps
		on this talent grid, like the good ol' days.
		*/
    ItemTalentGrids = 306,
    /**
		Items that *aren't* instanced still have important information you need to know:
		how much of it you have, the itemHash so you can look up their DestinyInventoryItemDefinition,
		whether they're locked, etc... Both instanced and non-instanced items will have these properties.
		You will get this automatically with Inventory components - you only need to pass this
		when calling GetItem on a specific item.
		*/
    ItemCommonData = 307,
    /**
		Items that are "Plugs" can be inserted into sockets.  This returns statuses about those plugs
		and why they can/can't be inserted.  I hear you giggling, there's nothing funny about inserting plugs.
		Get your head out of the gutter and pay attention!
		*/
    ItemPlugStates = 308,
    /**
		When obtaining vendor information, this will return summary information about the Vendor or Vendors being returned.
		*/
    Vendors = 400,
    /**
		When obtaining vendor information, this will return information about the categories of items
		provided by the Vendor.
		*/
    VendorCategories = 401,
    /**
		When obtaining vendor information, this will return the information about items being sold by the Vendor.
		*/
    VendorSales = 402,
    /**
		Asking for this component will return you the account's Kiosk statuses: that is, what items have been filled
		out/acquired.  But only if you are the currently authenticated user or the user has
		elected to allow anonymous viewing of its progression info.
		*/
    Kiosks = 500,
    /**
		A "shortcut" component that will give you all of the item hashes/quantities of items that the requested character
		can use to determine if an action (purchasing, socket insertion) has the required currency.
		(recall that all currencies are just items, and that some vendor purchases require items that you might not
		traditionally consider to be a "currency", like plugs/mods!)
		*/
    CurrencyLookups = 600,
    /**
		Returns summary status information about all "Presentation Nodes".  See DestinyPresentationNodeDefinition
		for more details, but the gist is that these are entities used by the game UI to bucket Collectibles and
		Records into a hierarchy of categories.  You may ask for and use this data if you want to perform similar
		bucketing in your own UI: or you can skip it and roll your own.
		*/
    PresentationNodes = 700,
    /**
		Returns summary status information about all "Collectibles".  These are records of what items you've discovered
		while playing Destiny, and some other basic information.  For detailed information, you will have to call
		a separate endpoint devoted to the purpose.
		*/
    Collectibles = 800,
    /**
		Returns summary status information about all "Records" (also known in the game as "Triumphs".  I know,
		it's confusing because there's also "Moments of Triumph" that will themselves be represented as "Triumphs.")
		*/
    Records = 900
  }

  /**
	The action that happens when the user attempts to refund an item.
	*/
  export enum DestinyVendorItemRefundPolicy {
    NotRefundable = 0,
    DeletesItem = 1,
    RevokesLicense = 2
  }

  export enum ItemBindStatus {
    NotBound = 0,
    BoundToCharacter = 1,
    BoundToAccount = 2,
    BoundToGuild = 3
  }

  export enum ItemLocation {
    Unknown = 0,
    Inventory = 1,
    Vault = 2,
    Vendor = 3,
    Postmaster = 4
  }

  /**
	Whether you can transfer an item, and why not if you can't.
	*/
  export enum TransferStatuses {
    /**
		The item can be transferred.
		*/
    CanTransfer = 0,
    /**
		You can't transfer the item because it is equipped on a character.
		*/
    ItemIsEquipped = 1,
    /**
		The item is defined as not transferrable in its DestinyInventoryItemDefinition.nonTransferrable property.
		*/
    NotTransferrable = 2,
    /**
		You could transfer the item, but the place you're trying to put it has run out of room!  Check
		your remaining Vault and/or character space.
		*/
    NoRoomInDestination = 4
  }

  /**
	A flags enumeration/bitmask where each bit represents a different possible state that the item can be in
	that may effect how the item is displayed to the user and what actions can be performed against it.
	*/
  export enum ItemState {
    None = 0,
    /**
		If this bit is set, the item has been "locked" by the user and cannot be deleted.
		You may want to represent this visually with a "lock" icon.
		*/
    Locked = 1,
    /**
		If this bit is set, the item is a quest that's being tracked by the user.  You may
		want a visual indicator to show that this is a tracked quest.
		*/
    Tracked = 2,
    /**
		If this bit is set, the item has a Masterwork plug inserted.  This usually coincides
		with having a special "glowing" effect applied to the item's icon.
		*/
    Masterwork = 4
  }

  /**
	A flags enumeration/bitmask indicating the versions of the game that a given user has purchased.
	*/
  export enum DestinyGameVersions {
    None = 0,
    Destiny2 = 1,
    DLC1 = 2,
    DLC2 = 4,
    Forsaken = 8,
    YearTwoAnnualPass = 16
  }

  /**
	I know this doesn't look like a Flags Enumeration/bitmask right now, but I assure you it is.  This is the possible
	states that a Presentation Node can be in, and it is almost certain that its potential states will increase
	in the future.  So don't treat it like a straight up enumeration.
	*/
  export enum DestinyPresentationNodeState {
    None = 0,
    /**
		If this is set, the game recommends that you not show this node.  But you know your life, do
		what you've got to do.
		*/
    Invisible = 1,
    /**
		Turns out Presentation Nodes can also be obscured.  If they are, this is set.
		*/
    Obscured = 2
  }

  /**
	A Flags enumeration/bitmask where each bit represents a possible state that a Record/Triumph can be in.
	*/
  export enum DestinyRecordState {
    /**
		If there are no flags set, the record is in a state where it *could* be redeemed, but it has not been yet.
		*/
    None = 0,
    /**
		If this is set, the completed record has been redeemed.
		*/
    RecordRedeemed = 1,
    /**
		If this is set, there's a reward available from this Record but it's unavailable for redemption.
		*/
    RewardUnavailable = 2,
    /**
		If this is set, the objective for this Record has not yet been completed.
		*/
    ObjectiveNotCompleted = 4,
    /**
		If this is set, the game recommends that you replace the display text of this Record with
		DestinyRecordDefinition.stateInfo.obscuredString.
		*/
    Obscured = 8,
    /**
		If this is set, the game recommends that you not show this record.  Do what you will with this recommendation.
		*/
    Invisible = 16,
    /**
		If this is set, you can't complete this record because you lack some permission that's required to
		complete it.
		*/
    EntitlementUnowned = 32,
    /**
		If this is set, the record has a title (check DestinyRecordDefinition for title info) and you can equip it.
		*/
    CanEquipTitle = 64
  }

  /**
	A Flags Enumeration/bitmask where each bit represents a different state that the Collectible can be in.  A collectible
	can be in any number of these states, and you can choose to use or ignore any or all of them when making your
	own UI that shows Collectible info.  Our displays are going to honor them, but we're also the kind of people
	who only pretend to inhale before quickly passing it to the left.  So, you know, do what you got to do.

	(All joking aside, please note the caveat I mention around the Invisible flag: there are cases where it is in the best
	interest of your users to honor these flags even if you're a "show all the data" person.  Collector-oriented
	compulsion is a very unfortunate and real thing, and I would hate to instill that compulsion in others through
	showing them items that they cannot earn.  Please consider this when you are making your own apps/sites.)
	*/
  export enum DestinyCollectibleState {
    None = 0,
    /**
		If this flag is set, you have not yet obtained this collectible.
		*/
    NotAcquired = 1,
    /**
		If this flag is set, the item is "obscured" to you: you can/should use the alternate item hash
		found in DestinyCollectibleDefinition.stateInfo.obscuredOverrideItemHash when displaying this
		collectible instead of the default display info.
		*/
    Obscured = 2,
    /**
		If this flag is set, the collectible should not be shown to the user.

		Please do consider honoring this flag.  It is used - for example - to hide items that a person
		didn't get from the Eververse.  I can't prevent these from being returned in definitions, because some people
		may have acquired them and thus they should show up: but I would hate for people to start feeling some variant of a
		Collector's Remorse about these items, and thus increasing their purchasing based on that compulsion.  That would
		be a very unfortunate outcome, and one that I wouldn't like to see happen.  So please, whether or not I'm your mom,
		consider honoring this flag and don't show people invisible collectibles.
		*/
    Invisible = 4,
    /**
		If this flag is set, the collectible requires payment for creating an instance of the item, and you
		are lacking in currency.  Bring the benjamins next time.  Or spinmetal.  Whatever.
		*/
    CannotAffordMaterialRequirements = 8,
    /**
		If this flag is set, you can't pull this item out of your collection because there's no room left
		in your inventory.
		*/
    InventorySpaceUnavailable = 16,
    /**
		If this flag is set, you already have one of these items and can't have a second one.
		*/
    UniquenessViolation = 32,
    /**
		If this flag is set, the ability to pull this item out of your collection has been disabled.
		*/
    PurchaseDisabled = 64
  }

  export enum DestinyRace {
    Human = 0,
    Awoken = 1,
    Exo = 2,
    Unknown = 3
  }

  export enum DestinyClass {
    Titan = 0,
    Hunter = 1,
    Warlock = 2,
    Unknown = 3
  }

  export enum DestinyGender {
    Male = 0,
    Female = 1,
    Unknown = 2
  }

  export enum DamageType {
    None = 0,
    Kinetic = 1,
    Arc = 2,
    Thermal = 3,
    Void = 4,
    Raid = 5
  }

  /**
	The reasons why an item cannot be equipped, if any.  Many flags can be set, or "None" if
	*/
  export enum EquipFailureReason {
    /**
		The item is/was able to be equipped.
		*/
    None = 0,
    /**
		This is not the kind of item that can be equipped.  Did you try equipping Glimmer or something?
		*/
    ItemUnequippable = 1,
    /**
		This item is part of a "unique set", and you can't have more than one item of that same set type equipped at once.
		For instance, if you already have an Exotic Weapon equipped, you can't equip a second one in another weapon slot.
		*/
    ItemUniqueEquipRestricted = 2,
    /**
		This item has state-based gating that prevents it from being equipped in certain circumstances.  For instance, an item
		might be for Warlocks only and you're a Titan, or it might require you to have beaten some special quest that you haven't
		beaten yet.  Use the additional failure data passed on the item itself to get more information about what the specific
		failure case was (See DestinyInventoryItemDefinition and DestinyItemInstanceComponent)
		*/
    ItemFailedUnlockCheck = 4,
    /**
		This item requires you to have reached a specific character level in order to equip it, and you haven't reached that level yet.
		*/
    ItemFailedLevelCheck = 8,
    /**
		This item can't be equipped on the character requested, because it must be in that character's inventory first.
		Transfer the item to the character you want to equip it before you attempt to equip it.
		*/
    ItemNotOnCharacter = 16
  }

  export enum DestinyTalentNodeState {
    Invalid = 0,
    CanUpgrade = 1,
    NoPoints = 2,
    NoPrerequisites = 3,
    NoSteps = 4,
    NoUnlock = 5,
    NoMaterial = 6,
    NoGridLevel = 7,
    SwappingLocked = 8,
    MustSwap = 9,
    Complete = 10,
    Unknown = 11,
    CreationOnly = 12,
    Hidden = 13
  }

  export enum VendorItemStatus {
    Success = 0,
    NoInventorySpace = 1,
    NoFunds = 2,
    NoProgression = 4,
    NoUnlock = 8,
    NoQuantity = 16,
    OutsidePurchaseWindow = 32,
    NotAvailable = 64,
    UniquenessViolation = 128,
    UnknownError = 256,
    AlreadySelling = 512,
    Unsellable = 1024,
    SellingInhibited = 2048,
    AlreadyOwned = 4096,
    DisplayOnly = 8192
  }

  /**
	The possible states of Destiny Profile Records.
	IMPORTANT: Any given item can theoretically have many of these states simultaneously: as a result, this was
	altered to be a flags enumeration/bitmask for v3.2.0.
	*/
  export enum DestinyVendorItemState {
    /**
		There are no augments on the item.
		*/
    None = 0,
    /**
		Deprecated forever (probably).  There was a time when Records were going to be implemented through Vendors, and
		this field was relevant.  Now they're implemented through Presentation Nodes, and this field doesn't matter
		anymore.
		*/
    Incomplete = 1,
    /**
		Deprecated forever (probably).  See the description of the "Incomplete" value for the juicy scoop.
		*/
    RewardAvailable = 2,
    /**
		Deprecated forever (probably).  See the description of the "Incomplete" value for the juicy scoop.
		*/
    Complete = 4,
    /**
		This item is considered to be "newly available", and should have some UI showing how shiny it is.
		*/
    New = 8,
    /**
		This item is being "featured", and should be shiny in a different way from items that are merely new.
		*/
    Featured = 16,
    /**
		This item is only available for a limited time, and that time is approaching.
		*/
    Ending = 32,
    /**
		This item is "on sale".  Get it while it's hot.
		*/
    OnSale = 64,
    /**
		This item is already owned.
		*/
    Owned = 128,
    /**
		This item should be shown with a "wide view" instead of normal icon view.
		*/
    WideView = 256,
    /**
		This indicates that you should show some kind of attention-requesting indicator on the item, in
		a similar manner to items in the nexus that have such notifications.
		*/
    NexusAttention = 512
  }

  export enum TierType {
    Unknown = 0,
    Currency = 1,
    Basic = 2,
    Common = 3,
    Rare = 4,
    Superior = 5,
    Exotic = 6
  }

  /**
	If you're showing an unlock value in the UI, this is the format
	in which it should be shown.  You'll have to build your own algorithms on the client
	side to determine how best to render these options.
	*/
  export enum DestinyUnlockValueUIStyle {
    /**
		Generally, Automatic means "Just show the number"
		*/
    Automatic = 0,
    /**
		Show the number as a fractional value.  For this to make sense, the value being displayed
		should have a comparable upper bound, like the progress to the next level of a Progression.
		*/
    Fraction = 1,
    /**
		Show the number as a checkbox.  0 Will mean unchecked, any other value will mean checked.
		*/
    Checkbox = 2,
    /**
		Show the number as a percentage.  For this to make sense, the value being displayed
		should have a comparable upper bound, like the progress to the next level of a Progression.
		*/
    Percentage = 3,
    /**
		Show the number as a date and time.  The number will be the number of seconds since
		the Unix Epoch (January 1st, 1970 at midnight UTC).  It'll be up to you to convert
		this into a date and time format understandable to the user in their time zone.
		*/
    DateTime = 4,
    /**
		Show the number as a floating point value that represents a fraction, where 0 is min and 1 is max.
		For this to make sense, the value being displayed
		should have a comparable upper bound, like the progress to the next level of a Progression.
		*/
    FractionFloat = 5,
    /**
		Show the number as a straight-up integer.
		*/
    Integer = 6,
    /**
		Show the number as a time duration.  The value will be returned as seconds.
		*/
    TimeDuration = 7,
    /**
		Don't bother showing the value at all, it's not easily human-interpretable, and used
		for some internal purpose.
		*/
    Hidden = 8,
    Multiplier = 9
  }

  export enum DestinyTriumphRecordState {
    NotStarted = 0,
    InProgress = 1,
    CompleteButUnclaimed = 2,
    CompleteAndClaimed = 3
  }

  export enum DestinyTriumphsDiscountState {
    /**
		The player hasn't yet earned the discount.
		*/
    NotEarned = 0,
    /**
		The player is ready to claim the discount.
		*/
    ReadyToClaim = 1,
    /**
		The player has claimed but not yet used the discount.
		*/
    Claimed = 2,
    /**
		The player has used their claimed discount.
		*/
    Used = 3,
    /**
		The player has not claimed the discount, and the opportunity to claim it has expired.
		*/
    NotClaimedGenerationWindowEnded = 4,
    /**
		The opportunity to use a discount code has ended.
		*/
    DiscountWindowEnded = 5
  }

  /**
	A set of flags for reason(s) why the component populated
	in the way that it did.  Inspect the individual flags for the reasons.
	*/
  export enum ComponentPrivacySetting {
    None = 0,
    Public = 1,
    Private = 2
  }

  /**
	For historical reasons, this list will have both D1 and D2-relevant Activity Modes in it.
	Please don't take this to mean that some D1-only feature is coming back!
	*/
  export enum DestinyActivityModeType {
    None = 0,
    Story = 2,
    Strike = 3,
    Raid = 4,
    AllPvP = 5,
    Patrol = 6,
    AllPvE = 7,
    Reserved9 = 9,
    Control = 10,
    Reserved11 = 11,
    /**
		Clash -> Destiny's name for Team Deathmatch.  4v4 combat, the team with the highest kills at the end of time wins.
		*/
    Clash = 12,
    Reserved13 = 13,
    CrimsonDoubles = 15,
    Nightfall = 16,
    HeroicNightfall = 17,
    AllStrikes = 18,
    IronBanner = 19,
    Reserved20 = 20,
    Reserved21 = 21,
    Reserved22 = 22,
    Reserved24 = 24,
    AllMayhem = 25,
    Reserved26 = 26,
    Reserved27 = 27,
    Reserved28 = 28,
    Reserved29 = 29,
    Reserved30 = 30,
    Supremacy = 31,
    PrivateMatchesAll = 32,
    Survival = 37,
    Countdown = 38,
    TrialsOfTheNine = 39,
    Social = 40,
    TrialsCountdown = 41,
    TrialsSurvival = 42,
    IronBannerControl = 43,
    IronBannerClash = 44,
    IronBannerSupremacy = 45,
    ScoredNightfall = 46,
    ScoredHeroicNightfall = 47,
    Rumble = 48,
    AllDoubles = 49,
    Doubles = 50,
    PrivateMatchesClash = 51,
    PrivateMatchesControl = 52,
    PrivateMatchesSupremacy = 53,
    PrivateMatchesCountdown = 54,
    PrivateMatchesSurvival = 55,
    PrivateMatchesMayhem = 56,
    PrivateMatchesRumble = 57,
    HeroicAdventure = 58,
    Showdown = 59,
    Lockdown = 60,
    Scorched = 61,
    ScorchedTeam = 62,
    Gambit = 63,
    AllPvECompetitive = 64,
    Breakthrough = 65,
    BlackArmoryRun = 66,
    Salvage = 67,
    IronBannerSalvage = 68,
    PvPCompetitive = 69,
    PvPQuickplay = 70,
    ClashQuickplay = 71,
    ClashCompetitive = 72,
    ControlQuickplay = 73,
    ControlCompetitive = 74,
    GambitPrime = 75,
    Reckoning = 76
  }

  /**
	If the enum value is > 100, it is a "special" group that cannot be queried for directly
	(special cases apply to when they are returned, and are not relevant in general cases)
	*/
  export enum DestinyStatsGroupType {
    None = 0,
    General = 1,
    Weapons = 2,
    Medals = 3,
    /**
		This is purely to serve as the dividing line between filterable and un-filterable groups.
		Below this number is a group you can pass as a filter.  Above it are groups used in very specific
		circumstances and not relevant for filtering.
		*/
    ReservedGroups = 100,
    /**
		Only applicable while generating leaderboards.
		*/
    Leaderboard = 101,
    /**
		These will *only* be consumed by GetAggregateStatsByActivity
		*/
    Activity = 102,
    /**
		These are only consumed and returned by GetUniqueWeaponHistory
		*/
    UniqueWeapon = 103,
    Internal = 104
  }

  export enum PeriodType {
    None = 0,
    Daily = 1,
    AllTime = 2,
    Activity = 3
  }

  export enum DestinyStatsCategoryType {
    None = 0,
    Kills = 1,
    Assists = 2,
    Deaths = 3,
    Criticals = 4,
    KDa = 5,
    KD = 6,
    Score = 7,
    Entered = 8,
    TimePlayed = 9,
    MedalWins = 10,
    MedalGame = 11,
    MedalSpecialKills = 12,
    MedalSprees = 13,
    MedalMultiKills = 14,
    MedalAbilities = 15
  }

  export enum UnitType {
    None = 0,
    /**
		Indicates the statistic is a simple count of something.
		*/
    Count = 1,
    /**
		Indicates the statistic is a per game average.
		*/
    PerGame = 2,
    /**
		Indicates the number of seconds
		*/
    Seconds = 3,
    /**
		Indicates the number of points earned
		*/
    Points = 4,
    /**
		Values represents a team ID
		*/
    Team = 5,
    /**
		Values represents a distance (units to-be-determined)
		*/
    Distance = 6,
    /**
		Ratio represented as a whole value from 0 to 100.
		*/
    Percent = 7,
    /**
		Ratio of something, shown with decimal places
		*/
    Ratio = 8,
    /**
		True or false
		*/
    Boolean = 9,
    /**
		The stat is actually a weapon type.
		*/
    WeaponType = 10,
    /**
		Indicates victory, defeat, or something in between.
		*/
    Standing = 11,
    /**
		Number of milliseconds some event spanned. For example, race time, or lap time.
		*/
    Milliseconds = 12,
    /**
		The value is a enumeration of the Completion Reason type.
		*/
    CompletionReason = 13
  }

  export enum DestinyStatsMergeMethod {
    /**
		When collapsing multiple instances of the stat together, add the values.
		*/
    Add = 0,
    /**
		When collapsing multiple instances of the stat together, take the lower value.
		*/
    Min = 1,
    /**
		When collapsing multiple instances of the stat together, take the higher value.
		*/
    Max = 2
  }

  export enum DestinyTalentNodeStepDamageTypes {
    None = 0,
    Kinetic = 1,
    Arc = 2,
    Solar = 4,
    Void = 8,
    All = 15
  }

  export enum DestinyTalentNodeStepGuardianAttributes {
    None = 0,
    Stats = 1,
    Shields = 2,
    Health = 4,
    Revive = 8,
    AimUnderFire = 16,
    Radar = 32,
    Invisibility = 64,
    Reputations = 128,
    All = 255
  }

  export enum DestinyTalentNodeStepImpactEffects {
    None = 0,
    ArmorPiercing = 1,
    Ricochet = 2,
    Flinch = 4,
    CollateralDamage = 8,
    Disorient = 16,
    HighlightTarget = 32,
    All = 63
  }

  export enum DestinyTalentNodeStepLightAbilities {
    None = 0,
    Grenades = 1,
    Melee = 2,
    MovementModes = 4,
    Orbs = 8,
    SuperEnergy = 16,
    SuperMods = 32,
    All = 63
  }

  /**
	BNet's custom categorization of reward sources.  We took a look at the existing
	ways that items could be spawned, and tried to make high-level categorizations of
	them.  This needs to be re-evaluated for Destiny 2.
	*/
  export enum DestinyRewardSourceCategory {
    /**
		The source doesn't fit well into any of the other types.
		*/
    None = 0,
    /**
		The source is directly related to the rewards gained by playing an activity or
		set of activities.  This currently includes Quests and other action in-game.
		*/
    Activity = 1,
    /**
		This source is directly related to items that Vendors sell.
		*/
    Vendor = 2,
    /**
		This source is a custom aggregation of items that can be earned in many ways, but that
		share some other property in common that is useful to share.  For instance, in Destiny 1
		we would make "Reward Sources" for every game expansion: that way, you could search
		reward sources to see what items became available with any given Expansion.
		*/
    Aggregate = 3
  }

  export enum DestinyTalentNodeStepWeaponPerformances {
    None = 0,
    RateOfFire = 1,
    Damage = 2,
    Accuracy = 4,
    Range = 8,
    Zoom = 16,
    Recoil = 32,
    Ready = 64,
    Reload = 128,
    HairTrigger = 256,
    AmmoAndMagazine = 512,
    TrackingAndDetonation = 1024,
    ShotgunSpread = 2048,
    ChargeTime = 4096,
    All = 8191
  }

  /**
	If you look in the DestinyInventoryItemDefinition's "sockets" property, you'll see that there are two types of sockets: intrinsic, and "socketEntry."

	Unfortunately, because Intrinsic sockets are a whole separate array, it is no longer sufficient to know the index into that array
	to know which socket we're talking about.  You have to know whether it's in the default "socketEntries" or if it's in the "intrinsic" list.
	*/
  export enum DestinySocketArrayType {
    Default = 0,
    Intrinsic = 1
  }

  export enum DestinyExplorerOrderDirection {
    None = 0,
    Ascending = 1,
    Descending = 2
  }

  export enum DestinyExplorerOrderBy {
    None = 0,
    Name = 1,
    ItemType = 2,
    Rarity = 3,
    ItemTypeName = 4,
    ItemStatHash = 5,
    MinimumRequiredLevel = 6,
    MaximumRequiredLevel = 7
  }

  export enum CommunityStatusSort {
    Viewers = 0,
    Trending = 1,
    OverallViewers = 2,
    Followers = 3
  }

  /**
	The known entity types that you can have returned from Trending.
	*/
  export enum TrendingEntryType {
    News = 0,
    DestinyItem = 1,
    DestinyActivity = 2,
    DestinyRitual = 3,
    SupportArticle = 4,
    Creation = 5,
    Stream = 6,
    Update = 7,
    Link = 8,
    ForumTag = 9,
    Container = 10,
    Release = 11
  }

  export enum FireteamActivityType {
    All = 0,
    Raid = 1,
    Crucible = 2,
    Trials = 3,
    Nightfall = 4,
    Anything = 5,
    Gambit = 6,
    BlindWell = 7,
    EscalationProtocol = 8,
    Forge = 9,
    Reckoning = 10
  }

  export enum FireteamDateRange {
    All = 0,
    Now = 1,
    TwentyFourHours = 2,
    FortyEightHours = 3,
    ThisWeek = 4
  }

  export enum FireteamPlatform {
    Unknown = 0,
    Playstation4 = 1,
    XboxOne = 2,
    Blizzard = 3
  }

  export enum FireteamPublicSearchOption {
    PublicAndPrivate = 0,
    PublicOnly = 1,
    PrivateOnly = 2
  }

  export enum FireteamSlotSearch {
    NoSlotRestriction = 0,
    HasOpenPlayerSlots = 1,
    HasOpenPlayerOrAltSlots = 2
  }

  export enum FireteamPlatformInviteResult {
    None = 0,
    Success = 1,
    AlreadyInFireteam = 2,
    Throttled = 3,
    ServiceError = 4
  }

  /**
	A hint provided by the server to tell clients how we'd like this Explore section to be rendered.
	I know, don't look at me like that.  Trying to make the best of bad options and all that.
	*/
  export enum ExploreRenderingHint {
    /**
		Example: "What's going on now", where you page through options that occupy the whole width of the view
		*/
    Paging = 0,
    /**
		Example: Live Events, where you can scroll through options and peek to the next options
		*/
    Scrollable = 1,
    /**
		Example: Clan section, with each entry as a 2 item list in rows on a single card
		*/
    List = 2,
    /**
		Example: Dawning event, where you see the only entry in the Section as a whole-width view without paging
		*/
    Callout = 3
  }

  /**
	The type of entity to which we are referring, and where in the app the user should be redirected when they click on Explore Entry.
	*/
  export enum ExploreEntityType {
    News = 0,
    Vendor = 1,
    LostLoot = 2,
    Milestone = 3,
    Item = 4,
    Link = 5,
    Clan = 6
  }

  export enum CompanionPermission {
    None = 0,
    /**
		Can view data that belongs to a group, clan, etc.
		*/
    GroupDataRead = 1,
    /**
		Can change the properties on a specific group, clan etc.
		*/
    GroupPropertiesWrite = 2,
    /**
		User can perform write operations on a specific group, clan etc, such as post to group forums, or write on the wall.
		*/
    GroupWrite = 3,
    /**
		User can add members to a clan, group. etc.
		*/
    GroupAddMembers = 4,
    /**
		User can remove members to a clan, group. etc
		*/
    GroupRemoveMembers = 5,
    /**
		Users can raise or lower the membership level of another group member (beginner to member and back again, but not to/from admin).
		*/
    GroupChangeMemberLevels = 6,
    /**
		Group admin only areas (like a private chat room for admins, or pending member lists) can use the permission to determine
		if the current user can view that data.
		*/
    GroupElevatedDataRead = 7,
    /**
		Group admin only areas (like a private chat room for admins, or pending member lists) can use the permission to determine
		if the current user can write to that data.
		*/
    GroupElevatedDataWrite = 8,
    /**
		Users can post to forums, create a group or do other things that change the state of the website for
		*/
    BnetWrite = 9,
    /**
		Can Pin Forum Topics
		*/
    CanPinForumTopics = 10,
    /**
		Can Lock Forum Topics
		*/
    CanLockForumTopics = 11,
    /**
		Can view group conversations and threads
		*/
    GroupConversationRead = 12,
    /**
		Can create and contribute to private conversations
		*/
    PrivateConversationWrite = 13,
    /**
		Can create and contribute to group conversations
		*/
    GroupConversationWrite = 14,
    /**
		Users can raise or lower the membership level of another group member to admin.
		*/
    GroupChangeMemberLevelToElevated = 15,
    /**
		For when you need to be the owner of a group to have permission.
		*/
    ObjectGroupOwner = 16,
    /**
		Forum Ninjas.
		*/
    ForumNinja = 17,
    /**
		Different than add member (which approves people asking to join), this allows you to ask another to join.
		*/
    GroupInviteMembers = 18,
    /**
		User has elevated write permissions on a fireteam
		*/
    FireteamElevatedWrite = 19,
    /**
		User has owner permissions on a fireteam
		*/
    FireteamOwner = 20
  }

  export enum RendererLogLevel {
    Disable = 0,
    Critical = 1,
    Error = 2,
    Warning = 3,
    Message = 4,
    Status = 5,
    Verbose = 6
  }

  export enum GlobalAlertLevel {
    Unknown = 0,
    Blue = 1,
    Yellow = 2,
    Red = 3
  }

  export enum GlobalAlertType {
    GlobalAlert = 0,
    StreamingAlert = 1
  }

  export enum SurveyCompletionFlags {
    None = 0,
    UserResearchWebPageOne = 1,
    UserResearchWebPageTwo = 2,
    UserResearchWebVersionTwo = 4
  }
}
