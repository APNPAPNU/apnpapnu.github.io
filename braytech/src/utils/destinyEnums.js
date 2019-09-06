export const TITAN = 0;
export const HUNTER = 1;
export const WARLOCK = 2;
export const NO_CLASS = 3;

export const KINETIC_WEAPON = 2;
export const ENERGY_WEAPON = 3;
export const POWER_WEAPON = 4;

export const LEGENDARY = 4008398120;
export const EXOTIC = 2759499571;
export const UNCOMMON = 2395677314;
export const RARE = 2127292149;
export const COMMON = 3340296461;

export const XBOX = 1;
export const PLAYSTATION = 2;
export const PC_STEAM = 3;
export const PC_BLIZZARD = 4;
export const TIGERDEMON = 10;
export const BUNGIENEXT = 254;

export const PLATFORMS = {
  [XBOX]: 'Xbox',
  [PLAYSTATION]: 'PlayStation',
  [PC_BLIZZARD]: 'PC',
  [TIGERDEMON]: 'TigerDemon',
  [BUNGIENEXT]: 'BungieNext'
};

export const CLASSES = {
  [WARLOCK]: 'Warlock',
  [TITAN]: 'Titan',
  [HUNTER]: 'Hunter'
};

const flagEnum = (state, value) => !!(state & value);

export const enumerateRecordState = state => ({
  none: flagEnum(state, 0),
  recordRedeemed: flagEnum(state, 1),
  rewardUnavailable: flagEnum(state, 2),
  objectiveNotCompleted: flagEnum(state, 4),
  obscured: flagEnum(state, 8),
  invisible: flagEnum(state, 16),
  entitlementUnowned: flagEnum(state, 32),
  canEquipTitle: flagEnum(state, 64)
});

export const enumerateCollectibleState = state => ({
  none: flagEnum(state, 0),
  notAcquired: flagEnum(state, 1),
  obscured: flagEnum(state, 2),
  invisible: flagEnum(state, 4),
  cannotAffordMaterialRequirements: flagEnum(state, 8),
  inventorySpaceUnavailable: flagEnum(state, 16),
  uniquenessViolation: flagEnum(state, 32),
  purchaseDisabled: flagEnum(state, 64)
});

export const enumerateItemState = state => ({
  none: flagEnum(state, 0),
  locked: flagEnum(state, 1),
  tracked: flagEnum(state, 2),
  masterworked: flagEnum(state, 4)
});
