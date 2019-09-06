import * as responseUtils from './responseUtils';
import * as bungie from './bungie';
import * as ls from './localStorage';

async function getMember(membershipType, membershipId) {
  const auth = ls.get('setting.auth');

  let components = [100,104,200,202,204,205,300,301,302,303,304,305,306,307,800,900];

  let useAuth = false;
  if (auth && auth.destinyMemberships.find(m => m.membershipId === membershipId)) {
    useAuth = true;
    components.push(102,103,201);
  }

  let requests = [
    bungie.GetProfile(membershipType, membershipId, components.join(','), useAuth), 
    bungie.GetGroupsForMember(membershipType, membershipId), 
    bungie.GetPublicMilestones()
  ];

  let [profile, groups, milestones] = await Promise.all(requests);

  try {
    profile = responseUtils.profileScrubber(profile);
    groups = responseUtils.groupScrubber(groups);
  } catch (e) {

  }

  let data = {
    profile,
    groups,
    milestones
  }

  return data;
}

export default getMember;
