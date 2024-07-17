import requests
import json

def fetch_roster(api_key, group_id):
    url = f"https://www.bungie.net/Platform/GroupV2/{group_id}/Members/"
    headers = {
        "X-API-Key": api_key
    }

    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        json_data = response.json()
        if json_data['ErrorStatus'] == 'Success':
            return json_data['Response']['results']
        else:
            print(f"ErrorStatus: {json_data['ErrorStatus']}")
            print(f"Message: {json_data['Message']}")
            return []
    else:
        print(f"HTTP Error: {response.status_code}")
        return []

def save_roster_to_file(roster, filename):
    with open(filename, 'w') as f:
        json.dump(roster, f, indent=4)

def main():
    api_key = "47b810e692d64237911c2cbe0d433cfe"
    group_id = "699392"

    roster = fetch_roster(api_key, group_id)
    if roster:
        save_roster_to_file(roster, 'roster.json')
        print(f"Roster saved to 'roster.json'")
    else:
        print("Failed to fetch roster")

if __name__ == "__main__":
    main()
