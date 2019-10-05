import { Platform } from "./lib/Bungie/BungieAPI";

const CLAN_ID = "1111015";

export default async function testBungieAPI() {
  // const result = await Platform.Destiny2Service.GetClanAggregateStats(
  //   "1111015",
  //   "5"
  // );

  // console.log(result);

  const result = await Platform.Destiny2Service.GetClanLeaderboards(
    CLAN_ID,
    "7",
    "lbMostPrecisionKills",
    100
  );

  console.log(result);
}
