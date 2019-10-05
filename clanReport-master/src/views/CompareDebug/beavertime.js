function time(t) {
  const [mins, seconds] = t.split(":");
  return parseInt(mins, 10) * 60 + parseInt(seconds, 10);
}

export default {
  936308438: time("6:50"), //  Garden World: 8:58
  1282886582: time("6:57"), // Exodus Crash: 6:03
  3372160277: time("4:24"), // Lake of Shadows: 4:00
  3280234344: time("9:45"), // Savathun’s Song 7:22
  522318687: time("6:59"), //  Strange Terrain 4:48
  3145298904: time("8:26"), // Arms Dealer 8:04
  4259769141: time("7:40"), // Inverted Spire 7:55
  3289589202: time("10:58"), // Pyramidion 6:41
  3718330161: time("8:27"), // Tree of Probabilities 7:04
  272852450: time("8:02"), //  Will of the Thousands 8:13
  1034003646: time("10:37"), // Insight Terminus 6:58
  3701132453: time("9:08"), // Hollowed Lair 8:00
  3108813009: time("9:40"), // Warden of Nothing 9:21
  3034843176: time("15:46") //  TThe Corrupted 6:43
};

export const fastishTimes = {
  936308438: time("14:22"), //  A Garden World
  1282886582: time("10:43"), // Exodus Crash
  3372160277: time("10:27"), // Lake of Shadows
  3280234344: time("12:57"), // Savathun’s Song
  522318687: time("9:11"), //   Strange Terrain
  3145298904: time("9:05"), //  Arms Dealer
  4259769141: time("10:43"), // Inverted Spire
  3289589202: time("11:46"), // Pyramidion
  3718330161: time("10:55"), // Tree of Probabilities
  272852450: time("10:17"), //  Will of the Thousands
  1034003646: time("12:34"), // Insight Terminus
  3701132453: time("9:42"), //  Hollowed Lair
  3108813009: time("11:57"), // Warden of Nothing
  3034843176: time("15:47") //   The Corrupted
};
