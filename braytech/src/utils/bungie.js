import * as ls from './localStorage';

// Bungie API access convenience methods

class BungieError extends Error {
  constructor(request) {
    super(request.Message);

    this.errorCode = request.ErrorCode;
    this.errorStatus = request.ErrorStatus;
  }
}

async function apiRequest(path, options = {}) {
  const defaults = {
    headers: {},
    stats: false,
    auth: false
  };

  let tokens = ls.get('setting.auth');

  const stats = options.stats || false;
  options = { ...defaults, ...options };

  options.headers['X-API-Key'] = process.env.REACT_APP_BUNGIE_API_KEY;

  if (typeof options.body === 'string') {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  } else {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(options.body);
  }

  if (options.auth && !options.headers.Authorization) {
    let now = new Date().getTime() + 10000;
    let then = new Date(tokens.access.expires).getTime();

    if (now > then) {
      await GetOAuthAccessToken(`grant_type=refresh_token&refresh_token=${tokens.refresh.value}`);

      tokens = ls.get('setting.auth');

      options.headers.Authorization = `Bearer ${tokens.access.value}`;
    } else {
      options.headers.Authorization = `Bearer ${tokens.access.value}`;
    }
  }

  const request = await fetch(`https://${stats ? 'stats' : 'www'}.bungie.net${path}`, options);
  const response = await request.json();

  if (request.ok && response.ErrorCode && response.ErrorCode !== 1) {
    throw new BungieError(response);
  } else if (request.ok) {
    if (path === '/Platform/App/OAuth/Token/') {
      let now = new Date().getTime();

      let memberships = await GetMembershipDataForCurrentUser(response.access_token);

      const tokens = {
        access: {
          value: response.access_token,
          expires: now + response.expires_in * 1000
        },
        refresh: {
          value: response.refresh_token,
          expires: now + response.refresh_expires_in * 1000
        },
        bnetMembershipId: response.membership_id,
        destinyMemberships: memberships.destinyMemberships
      };
      ls.set('setting.auth', tokens);
      return response;
    } else {
      return response.Response;
    }
  } else {
    console.log('bungie.js 79', request);
    throw new BungieError(response);
  }
}

export const GetOAuthAccessToken = async body =>
  apiRequest('/Platform/App/OAuth/Token/', {
    method: 'post',
    headers: {
      Authorization: `Basic ${window.btoa(`${process.env.REACT_APP_BUNGIE_CLIENT_ID}:${process.env.REACT_APP_BUNGIE_CLIENT_SECRET}`)}`
    },
    body
  });

export const GetMembershipDataForCurrentUser = async (access = false) =>
  apiRequest('/Platform/User/GetMembershipsForCurrentUser/', {
    auth: true,
    headers: {
      Authorization: access && `Bearer ${access}`
    }
  });

export const GetProfile = async (membershipType, membershipId, components, auth = false) =>
  apiRequest(`/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=${components}`, {
    auth
  });

export const EquipItem = async body =>
  apiRequest(`/Platform/Destiny2/Actions/Items/EquipItem/`, {
    auth: true,
    method: 'post',
    body
  });

export const KickMember = async (groupId, membershipType, membershipId) =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Kick/`, {
    auth: true,
    method: 'post'
  });

export const BanMember = async (groupId, membershipType, membershipId) =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Ban/`, {
    auth: true,
    method: 'post'
  });

export const UnbanMember = async (groupId, membershipType, membershipId) =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Unban/`, {
    auth: true,
    method: 'post'
  });

export const GetPendingMemberships = async groupId =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/Pending/`, {
    auth: true
  });
  
export const ApprovePendingForList = async (groupId, body) =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/ApproveList/`, {
    auth: true,
    method: 'post',
    body
  });

export const DenyPendingForList = async (groupId, body) =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/DenyList/`, {
    auth: true,
    method: 'post',
    body
  });

export const EditGroupMembership = async (groupId, membershipType, membershipId, memberType) =>
  apiRequest(`/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/SetMembershipType/${memberType}/`, {
    auth: true,
    method: 'post'
  });

export const manifest = async version => fetch(`https://www.bungie.net${version}`).then(a => a.json());

export const GetDestinyManifest = async () => apiRequest('/Platform/Destiny2/Manifest/');

export const GetCommonSettings = async () => apiRequest(`/Platform/Settings/`);

export const GetPublicMilestones = async () => apiRequest('/Platform/Destiny2/Milestones/');

export const GetGroupsForMember = async (membershipType, membershipId) => apiRequest(`/Platform/GroupV2/User/${membershipType}/${membershipId}/0/1/`);

export const GetGroupByName = async (groupName, groupType = 1) => apiRequest(`/Platform/GroupV2/Name/${encodeURIComponent(groupName)}/${groupType}/`);

export const GetMembersOfGroup = async groupId => apiRequest(`/Platform/GroupV2/${groupId}/Members/`);

export const GetGroup = async groupId => apiRequest(`/Platform/GroupV2/${groupId}/`);

export const GetClanWeeklyRewardState = async groupId => apiRequest(`/Platform/Destiny2/Clan/${groupId}/WeeklyRewardState/`);

export const GetHistoricalStats = async (membershipType, membershipId, characterId = '0', groups, modes, periodType) => apiRequest(`/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/0/Stats/?groups=${groups}&modes=${modes}&periodType=${periodType}`);

export const SearchDestinyPlayer = async (membershipType, displayName) => apiRequest(`/Platform/Destiny2/SearchDestinyPlayer/${membershipType}/${encodeURIComponent(displayName)}/`);

export const GetActivityHistory = async (membershipType, membershipId, characterId, count, mode = false, page) => apiRequest(`/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/${characterId}/Stats/Activities/?page=${page}${mode ? `&mode=${mode}` : ''}&count=${count}`);

export const PGCR = async id => apiRequest(`/Platform/Destiny2/Stats/PostGameCarnageReport/${id}/`, { stats: true });
