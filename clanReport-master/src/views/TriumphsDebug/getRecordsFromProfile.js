const { chain, get } = require("lodash");

const flagEnum = (state, value) => !!(state & value);

const enumerateState = state => ({
  none: flagEnum(state, 0),
  recordRedeemed: flagEnum(state, 1),
  rewardUnavailable: flagEnum(state, 2),
  objectiveNotCompleted: flagEnum(state, 4),
  obscured: flagEnum(state, 8),
  invisible: flagEnum(state, 16),
  entitlementUnowned: flagEnum(state, 32),
  canEquipTitle: flagEnum(state, 64)
});

export default function getRecordsFromProfile(profile) {
  // Create an object of records, keyed by record hash, and values
  // are array of instances of that record across profile and character:
  const allRecords = {};
  function mergeInRecords(records) {
    Object.entries(records).forEach(([hash, record]) => {
      if (!allRecords[hash]) {
        allRecords[hash] = [];
      }

      allRecords[hash].push(record);
    });
  }

  mergeInRecords(get(profile, "profileRecords.data.records", {}));

  Object.entries(get(profile, "characterRecords.data", {})).forEach(
    ([characterId, { records }]) => {
      mergeInRecords(records);
    }
  );

  const completedRecords = chain(allRecords)
    .mapValues((records, hash) => {
      for (var i = records.length - 1; i >= 0; i--) {
        const record = records[i];
        const enumerated = enumerateState(record.state);
        const completed =
          !enumerated.objectiveNotCompleted || enumerated.recordRedeemed;

        return {
          completed,
          state: record.state,
          hash
        };
      }
    })
    // .pickBy(record => record.completed)
    .values()
    .value();

  return completedRecords;
}
