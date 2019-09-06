import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import manifest from '../../utils/manifest';
import ObservedImage from '../../components/ObservedImage';
import Records from '../../components/Records';
import Collectibles from '../../components/Collectibles';
import Items from '../../components/Items';

import './styles.css';

class ThisWeek extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.rebindTooltips();
  }

  render() {
    const { t, member } = this.props;
    const { characterId } = member;
    const { profile, milestones } = member.data;

    const resetTime = '17:00:00Z';

    const cycleInfo = {
      epoch: {
        // start of cycle in UTC
        ascendant: new Date(`2018-09-04T${resetTime}`).getTime(),
        curse: new Date(`2018-09-11T${resetTime}`).getTime(),
        ep: new Date(`2018-05-08T${resetTime}`).getTime(),
        reckoning: new Date(`2019-05-21T${resetTime}`).getTime(),
        whisper: new Date(`2019-05-28T${resetTime}`).getTime(),
        zerohour: new Date(`2019-05-28T${resetTime}`).getTime(),
        menagerie: new Date(`2019-06-04T${resetTime}`).getTime()
      },
      cycle: {
        // how many week cycle
        ascendant: 6,
        curse: 3,
        ep: 5,
        reckoning: 2,
        whisper: 3,
        zerohour: 3,
        menagerie: 3
      },
      elapsed: {}, // elapsed time since cycle started
      week: {} // current week in cycle
    };

    const time = new Date().getTime();
    const msPerWk = 604800000;

    for (var cycle in cycleInfo.cycle) {
      cycleInfo.elapsed[cycle] = time - cycleInfo.epoch[cycle];
      cycleInfo.week[cycle] = Math.floor((cycleInfo.elapsed[cycle] / msPerWk) % cycleInfo.cycle[cycle]) + 1;
    }

    const consolidatedInfo = {
      curse: {
        1: {
          strength: t('Weak'),
          triumphs: [
            // DestinyRecordDefinition.Hashes
            2144075646, // The Scorn Champion (Heroic Blind Well)
            3675740696, // Hidden Riches (Ascendant Chests)
            2769541312, // Broken Courier (Weekly Mission)
            1768837759 // Bridge Troll (Hidden Boss in Weekly Mission)
          ],
          items: [], // DestinyItemDefinition.Hashes
          collectibles: [] // DestinyCollectableDefinition.Hashes
        },
        2: {
          strength: t('Middling'),
          triumphs: [
            2144075647, // The Hive Champion (Heroic Blind Well)
            3675740699, // Bolder Fortunes (Ascendant Chests)
            2419556790, // The Oracle Engine (Weekly Mission)
            2968758821, // Aggro No (Hidden Boss in Weekly Mission)
            202137963 // Twinsies (Kill ogres in Weekly Mission within 5 secs of each other)
          ],
          items: [],
          collectibles: []
        },
        3: {
          strength: t('Full strength'),
          triumphs: [
            2144075645, // The Taken Champion (Heroic Blind Well)
            3675740698, // War Chests (Ascendant Chests)
            749838902, // Into the Unknown (Visit Mara)
            1842255613, // Fideicide II (Bones in Mara's Throne World)
            2358176597, // Dark Monastery (Weekly Mission)
            1842255615, // Ecstasiate III (Bones in Weekly Mission)
            1236992882 // Odynom-Nom-Nom (Hidden Boss in Weekly Mission)
          ],
          items: [],
          collectibles: []
        }
      },
      shatteredThrone: {
        triumphs: [
          2314271318, // Never Again (Complete Shattered Throne)
          1290451257, // Seriously, Never Again (Complete Shattered Throne, Solo, 0 deaths)
          3309476373, // A Thorny Predicament (1 Phase Vorgeth in the Shattered Throne)
          851701008, // Solo-nely (Complete Shattered Throne, Solo)
          1621950319, // Come at Me (Complete Shattered Throne, wearing full set of unpurified Reverie Dawn)
          2029263931, // Curse This (Complete Shattered Throne, 0 deaths)
          3024450468, // Katabasis (Eggs in Shattered Throne)
          1842255612, // Fideicide I (Bones in Shattered Throne)
          1859033175, // Cosmogyre II (Bones in Shattered Throne)
          1859033168, // Archiloquy (Bones in Shattered Throne)
          1859033171 // Brephos I (Bones in Shattered Throne)
        ]
      },
      ascendant: {
        1: {
          challenge: t('Ouroborea'),
          region: t("Aphelion's Rest"),
          triumphs: [
            3024450470, // Nigh II (Eggs)
            1842255608, // Imponent I (Bones)
            2856474352 // Eating Your Own Tail (Time Trial)
          ],
          items: [],
          collectibles: []
        },
        2: {
          challenge: t('Forfeit Shrine'),
          region: t('Gardens of Esila'),
          triumphs: [
            2974117611, // Imponent II (Eggs)
            1842255611, // Heresiology (Bones)
            3422458392 // Never Forfeit (Time Trial)
          ],
          items: [],
          collectibles: []
        },
        3: {
          challenge: t('Shattered Ruins'),
          region: t('Spine of Keres'),
          triumphs: [
            3024450469, // Imponent V (Eggs)
            1859033176, // Ecstasiate I (Bones)
            2858561750 // Shatter That Record (Time Trial)
          ],
          items: [],
          collectibles: []
        },
        4: {
          challenge: t('Keep of Honed Edges'),
          region: t("Harbinger's Seclude"),
          triumphs: [
            2974117605, // Imponent IV (Eggs)
            1842255614, // Ecstasiate II (Bones)
            3578247132 // Honed for Speed (Time Trial)
          ],
          items: [],
          collectibles: []
        },
        5: {
          challenge: t('Agonarch Abyss'),
          region: t('Bay of Drowned Wishes'),
          triumphs: [
            3024450465, // Palingenesis I (Eggs)
            1859033177, // Cosmogyre IV (Bones)
            990661957 // Argonach Agony (Time Trial)
          ],
          items: [],
          collectibles: []
        },
        6: {
          challenge: t('Cimmerian Garrison'),
          region: t('Chamber of Starlight'),
          triumphs: [
            3024450471, // Nigh I (Eggs)
            1859033173, // Brephos III (Bones)
            147323772 // Run the Gauntlet (Time Trial)
          ],
          items: [],
          collectibles: []
        }
      },
      ep: {
        1: {
          boss: t('Nur Abath, Crest of Xol'),
          items: [
            // https://github.com/Bungie-net/api/issues/732
            3243866699 // Worldline Ideasthesia: Torsion
          ],
          collectibles: [
            1041306082 // IKELOS_SG
          ]
        },
        2: {
          boss: t('Kathok, Roar of Xol'),
          triumphs: [],
          items: [
            3243866698 // Worldline Ideasthesia: Anarkhiia
          ],
          collectibles: [
            2998976141 // IKELOS_SMG
          ]
        },
        3: {
          boss: t('Damkath, The Mask'),
          triumphs: [],
          items: [
            // https://youtu.be/lrPf16ZHevU?t=104
            3243866697 //Worldline Ideasthesia: Cavalry
          ],
          collectibles: [
            1203091693 // IKELOS_SR
          ]
        },
        4: {
          boss: t('Naksud, the Famine'),
          triumphs: [],
          items: [
            3243866696 //  Worldline Ideasthesia: Faktura
          ],
          collectibles: [
            1041306082, // IKELOS_SG
            2998976141, // IKELOS_SMG
            1203091693 // IKELOS_SR
          ]
        },
        5: {
          boss: t('Bok Litur, Hunger of Xol'),
          triumphs: [],
          items: [
            3243866703 // Worldline Ideasthesia: Black Square
          ],
          collectibles: [
            1041306082, // IKELOS_SG
            2998976141, // IKELOS_SMG
            1203091693 // IKELOS_SR
          ]
        }
      },
      reckoning: {
        1: {
          boss: t('Likeness of Oryx'),
          triumphs: [2653311362],
          collectibles: []
        },
        2: {
          boss: t('The Swords'),
          triumphs: [2653311362],
          collectibles: []
        }
      },
      whisper: {
        1: {
          modifiers: [3362074814]
        },
        2: {
          modifiers: [3215384520]
        },
        3: {
          modifiers: [2558957669]
        }
      },
      zerohour: {
        1: {
          modifiers: [3362074814]
        },
        2: {
          modifiers: [3215384520]
        },
        3: {
          modifiers: [2558957669]
        }
      },
      nightfall: {
        3145298904: {
          // The Arms Dealer
          triumphs: [
            3340846443, // The Arms Dealer
            4267516859 // Trash the Thresher
          ],
          items: [],
          collectibles: [
            3036030066, // Tilt Fuse
            3490589921 // The Arms Dealer (Emblem)
          ]
        },
        3108813009: {
          // Warden of Nothing
          triumphs: [
            2836924866, // Warden of Nothing
            1469598452 // Solar Dance
          ],
          items: [],
          collectibles: [
            1279318101, // Warden's Law
            2263264048 // Warden of Nothing (Emblem)
          ]
        },
        3034843176: {
          // The Corrupted
          triumphs: [
            3951275509, // The Corrupted
            3641166665 // Relic Rumble
          ],
          items: [],
          collectibles: [
            1099984904, // Horror's Least
            1410290331 // The Corrupted (Emblem)
          ]
        },
        3280234344: {
          // Savathûn's Song
          triumphs: [
            2099501667, // Savathûn's Song
            1442950315 // The Best Defense
          ],
          items: [],
          collectibles: [
            1333654061, // Duty Bounds
            3490589926 // Savathûn's Song (Emblem)
          ]
        },
        3289589202: {
          // The Pyramidion
          triumphs: [
            1060780635, // The Pyramidion
            1142177491 // Siege Engine
          ],
          items: [],
          collectibles: [
            1152758802, // Silicon Neuroma
            3490589930 // The Pyramidion (Emblem)
          ]
        },
        3718330161: {
          // Tree of Probabilities
          triumphs: [
            2282894388, // Tree of Probabilities
            3636866482 // Laser Dodger
          ],
          items: [],
          collectibles: [
            1279318110, // D.F.A.
            3490589924 // Tree of Probabilities (Emblem)
          ]
        },
        3372160277: {
          // Lake of Shadows
          triumphs: [
            1329556468, // Lake of Shadows
            413743786 // Tether Time
          ],
          items: [],
          collectibles: [
            1602518767, // The Militia's Birthright
            3896331530 // Lake of Shadows (Emblem)
          ]
        },
        //1391780798: { // Broodhold - PS4 exclusive
        //  triumphs: [],
        //  items: [],
        //  collectibles: []
        //},
        3701132453: {
          // The Hollowed Lair
          triumphs: [
            3450793480, // The Hollowed Lair
            3847579126 // Arc Avoidance
          ],
          items: [],
          collectibles: [
            1074861258, // Mindbender's Ambition
            3314387486 // The Hollowed Lair (Emblem)
          ]
        },
        272852450: {
          // Will of the Thousands
          triumphs: [
            1039797865, // Will of the Thousands
            3013611925 // Three and Out
          ],
          items: [],
          collectibles: [
            2466440635, // Worm God Incarnation
            1766893928 // Will of the Thousands (Emblem)
          ]
        },
        4259769141: {
          // The Inverted Spire
          triumphs: [
            3973165904, // The Inverted Spire
            1498229894 //The Floor Is Lava
          ],
          items: [],
          collectibles: [
            1718922261, // Trichromatica
            3490589925 //The Inverted SPire (Emblem)
          ]
        },
        522318687: {
          // Strange Terrain
          triumphs: [
            165166474, // Strange Terrain
            1871570556 // Don't Take Five
          ],
          items: [],
          collectibles: [
            1534387877, // BrayTech Osprey
            1766893929 // Strange Terrain (Emblem)
          ]
        },
        1282886582: {
          // Exodus Crash
          triumphs: [
            1526865549, // Exodus Crash
            2140068897 // Faster than Lightning
          ],
          items: [],
          collectibles: [
            3036030067, // Impact Velocity
            3490589927 // Exodus Crash (Emblem)
          ]
        },
        936308438: {
          // A Garden World
          triumphs: [
            2692332187, // A Garden World
            1398454187 // The Quickening
          ],
          items: [],
          collectibles: [
            2448009818, //Universal Wavefunction
            3490589931 // A Garden World (Emblem)
          ]
        },
        1034003646: {
          // The Insight Terminus
          triumphs: [
            599303591, // Capture Completionist
            3399168111 // The Insight Terminus
          ],
          items: [],
          collectibles: [
            1186314105, // The Long Goodbye
            465974149 // Insight Terminus (Emblem)
          ]
        }
      },
      flashpoint: {
        538154339: {
          // FLASHPOINT: TITAN
          triumphs: [
            2542531058, // Flashpoint
            1632551190 // Heroically Adventurous
          ]
        },
        794779273: {
          //FLASHPOINT: IO
          triumphs: [
            2163667980, // Flashpoint
            3686586344 // Heroically Adventurous
          ]
        },
        905940422: {
          //FLASHPOINT: MERCURY
          triumphs: [
            2548580601, // Flashpoint
            3632308741 // Heroically Adventurous
          ]
        },
        2332272114: {
          //FLASHPOINT: EDZ
          triumphs: [
            855929237, // Flashpoint
            1683000545 // Heroically Adventurous
          ]
        },
        3232202236: {
          //FLASHPOINT: TANGLED SHORE
          triumphs: [
            2070013491 // Flashpoint
            // Has no 'Heroically Adventurous'
          ]
        },
        3588655854: {
          //FLASHPOINT: NESSUS
          triumphs: [
            1652021369, // Flashpoint
            633055621 // Heroically Adventurous
          ]
        },
        3929972810: {
          //FLASHPOINT: MARS
          triumphs: [
            1414820429, // Flashpoint
            1417930213 // Heroically Adventurous
          ]
        }
      },
      menagerie: {
        1: {
          boss: t('Hasapiko, Beloved by Calus'),
          triumphs: [3141945846, 2422246606, 2422246593],
          items: [],
          collectibles: []
        },
        2: {
          boss: t('Arunak, Beloved by Calus'),
          triumphs: [1959753477, 2422246607, 2472579457],
          items: [],
          collectibles: []
        },
        3: {
          boss: t('Pagouri, Beloved by Calus'),
          triumphs: [2351146132, 2422246605, 2422246592],
          items: [],
          collectibles: []
        }
      },
      raids: {
        cos: {
          name: manifest.DestinyMilestoneDefinition[2590427074].displayProperties.name,
          description: manifest.DestinyActivityDefinition[960175301].displayProperties.description,
          challenge: manifest.DestinyVendorDefinition[3347378076].itemList
            .map(item => {
              if (manifest.DestinyVendorDefinition[3347378076].categories.find(c => c.categoryId === 'weekly_raid_bounty_eclipse').vendorItemIndexes.includes(item.vendorItemIndex)) {
                return item.itemHash;
              } else {
                return false;
              }
            })
            .filter(t => manifest.statistics.bounties.hawthorne.includes(t)),
          collectibles: [2329697053],
          triumphs: [],
          challenges: {
            2459033425: {
              name: manifest.DestinyInventoryItemDefinition[2459033425].displayProperties.name,
              description: t("Ritual encounter: no more than two Guardians may have the Witch's Blessing buff at one time during The Hive Ritual."),
              triumphs: [1575460004]
            },
            2459033426: {
              name: manifest.DestinyInventoryItemDefinition[2459033426].displayProperties.name,
              description: t("Deception encounter: break the Deception's shield 5 times during phase in which he is defeated i.e. a single phase."),
              triumphs: [1575460003]
            },
            2459033427: {
              name: manifest.DestinyInventoryItemDefinition[2459033427].displayProperties.name,
              description: t("Gahlran encounter: each Guardian may only shoot one of _the real_ Gahlran's hands once during only one of his hand raises."),
              triumphs: [1575460002]
            }
          }
        },
        sotp: {
          name: manifest.DestinyActivityDefinition[548750096].displayProperties.name,
          description: manifest.DestinyActivityDefinition[548750096].displayProperties.description,
          challenge: manifest.DestinyVendorDefinition[3347378076].itemList
            .map(item => {
              if (manifest.DestinyVendorDefinition[3347378076].categories.find(c => c.categoryId === 'weekly_raid_bounty_sunset').vendorItemIndexes.includes(item.vendorItemIndex)) {
                return item.itemHash;
              } else {
                return false;
              }
            })
            .filter(t => manifest.statistics.bounties.hawthorne.includes(t)),
          collectibles: [2220014607],
          triumphs: [],
          challenges: {
            1381881897: {
              name: manifest.DestinyInventoryItemDefinition[1381881897].displayProperties.name,
              description: t('Insurrection Prime encounter: A Guardian may not shoot and break more than one shield generator per phase.'),
              triumphs: [4162926221]
            },
            1348944144: {
              name: manifest.DestinyInventoryItemDefinition[1348944144].displayProperties.name,
              description: t('Botza District encounter: the map generator must not fall below half charge.'),
              triumphs: [1804999028]
            },
            3415614992: {
              name: manifest.DestinyInventoryItemDefinition[3415614992].displayProperties.name,
              description: t('Vault Access encounter: Each Guardian must grab and deposit each Phase Radiance buff once (boss must be killed in 3 damage phases).'),
              triumphs: [1428463716]
            }
          }
        },
        lw: {
          name: manifest.DestinyPresentationNodeDefinition[1500485992].displayProperties.name,
          description: manifest.DestinyActivityDefinition[1661734046].displayProperties.description,
          challenge: manifest.DestinyVendorDefinition[3347378076].itemList
            .map(item => {
              if (manifest.DestinyVendorDefinition[3347378076].categories.find(c => c.categoryId === 'weekly_raid_bounty').vendorItemIndexes.includes(item.vendorItemIndex)) {
                return item.itemHash;
              } else {
                return false;
              }
            })
            .filter(t => manifest.statistics.bounties.hawthorne.includes(t)),
          collectibles: [199171385],
          triumphs: [],
          challenges: {
            1250327262: {
              name: manifest.DestinyInventoryItemDefinition[1250327262].displayProperties.name,
              description: t("Shuro Chi chase encounter: Guardians must not take damage from Shuro Chi's Arc Blast."),
              triumphs: [2196415799]
            },
            3871581136: {
              name: manifest.DestinyInventoryItemDefinition[3871581136].displayProperties.name,
              description: t("Morgeth encounter: don't kill smol ogres, only kill big boi."),
              triumphs: [1672792871]
            },
            1568895666: {
              name: manifest.DestinyInventoryItemDefinition[1568895666].displayProperties.name,
              description: t('Vault encounter: knights must be killed in the rooms they spawn in.'),
              triumphs: [149192209]
            },
            4007940282: {
              name: manifest.DestinyInventoryItemDefinition[4007940282].displayProperties.name,
              description: t('Riven encounter: Guardians must not shoot the same eye twice.'),
              triumphs: [3899933775]
            },
            2836954349: {
              name: manifest.DestinyInventoryItemDefinition[2836954349].displayProperties.name,
              description: t('Kalli encounter: Cleanse all nine plates, kill all nine Knights, and kill all Ogres before damaging Kalli.'),
              triumphs: [2822000740]
            }
          }
        },
        lev: {
          name: manifest.DestinyActivityDefinition[89727599].displayProperties.name,
          description: manifest.DestinyActivityDefinition[89727599].displayProperties.description,
          challenge: milestones[3660836525] && milestones[3660836525].activities && milestones[3660836525].activities.length && milestones[3660836525].activities[0].modifierHashes,
          phaseOrder: milestones[3660836525] && milestones[3660836525].activities && milestones[3660836525].activities.length && milestones[3660836525].activities[0].phaseHashes,
          phases: {
            3847906370: {
              name: t('The Pleasure Gardens'),
              description: t('Smell the roses, Guardian... Feed my hungry pets'),
              icon: manifest.DestinyActivityModifierDefinition[871205855].displayProperties.icon
            },
            2188993306: {
              name: t('The Royal Pools'),
              description: t('Bathe with my loyalists in their pools'),
              icon: manifest.DestinyActivityModifierDefinition[3296085675].displayProperties.icon
            },
            1431486395: {
              name: t('The Gauntlet'),
              description: t('Demonstrate your tenacity for the game, my champion'),
              icon: manifest.DestinyActivityModifierDefinition[2863316929].displayProperties.icon
            },
            4231923662: {
              name: t('The Throne'),
              description: t('COME– I must congratulate you in person! [maniacal laughter]'),
              icon: manifest.DestinyActivityModifierDefinition[2770077977].displayProperties.icon
            }
          },
          challenges: {
            871205855: {
              name: t('The Pleasure Gardens'),
              description: t('Relic holders may only shoot one plant per phase.'),
              icon: manifest.DestinyActivityModifierDefinition[871205855].displayProperties.icon
            },
            3296085675: {
              name: t('The Royal Pools'),
              description: t('One Guardian must remain in the middle with their feet in the water during the entire encounter.'),
              icon: manifest.DestinyActivityModifierDefinition[3296085675].displayProperties.icon
            },
            2863316929: {
              name: t('The Gauntlet'),
              description: t('Guardians cannot stand on the same plate more than once.'),
              icon: manifest.DestinyActivityModifierDefinition[2863316929].displayProperties.icon
            },
            2770077977: {
              name: t('The Throne'),
              description: t('Burn all 4 plates at the same time for every damage phase. Do not fire before all plates are activated.'),
              icon: manifest.DestinyActivityModifierDefinition[2770077977].displayProperties.icon
            }
          },
          collectibles: [199171389],
          triumphs: []
        }
      }
    };

    // console.log(consolidatedInfo)

    // console.log(Object.values(profile.characterProgressions.data['2305843009260574394'].milestones).map(m => {
    //   m.def = manifest.DestinyMilestoneDefinition[m.milestoneHash];
    //   return m;
    // }));

    const modules = [];

    // flashpoint
    const milestoneFlashpoint = milestones[463010297].availableQuests && milestones[463010297].availableQuests.length && manifest.DestinyMilestoneDefinition[463010297].quests[milestones[463010297].availableQuests[0].questItemHash];
    const definitionFlashpointVendor =
      milestoneFlashpoint &&
      Object.values(manifest.DestinyVendorDefinition).find(v => {
        if (milestoneFlashpoint.destinationHash === 1993421442) {
          return v.locations && v.locations.find(l => l.destinationHash === 3669933163);
        } else {
          return v.locations && v.locations.find(l => l.destinationHash === milestoneFlashpoint.destinationHash);
        }
      });
    const definitionFlashpointFaction = definitionFlashpointVendor && manifest.DestinyFactionDefinition[definitionFlashpointVendor.factionHash];

    // scored nightfall strikes
    let nightfalls = [];

    milestones[2171429505].activities
      .filter(activity => activity.modifierHashes)
      .forEach(activity => {
        let nightfall = manifest.DestinyActivityDefinition[activity.activityHash];

        nightfalls.push(
          <div key={nightfall.hash} className='content'>
            <div className='module-header'>
              <div className='sub-name'>{t('Nightfall')}</div>
              <div className='name'>{nightfall.selectionScreenDisplayProperties.name}</div>
            </div>
            <h4>{t('Collectibles')}</h4>
            <ul className='list collection-items'>
              <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.nightfall[nightfall.hash].collectibles} />
            </ul>
            <h4>{t('Triumphs')}</h4>
            <ul className='list record-items'>
              <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.nightfall[nightfall.hash].triumphs} ordered />
            </ul>
          </div>
        );
      });

    // raids
    let raids = [];

    raids.push(
      <div key='cos' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('Raid')}</div>
          <div className='name'>{consolidatedInfo.raids.cos.name}</div>
        </div>
        <h4>{t('Challenge')}</h4>
        <div className='raid-challenge'>
          <ul className='list inventory-items'>
            <Items
              items={consolidatedInfo.raids.cos.challenge.map(c => {
                return {
                  itemHash: c
                };
              })}
            />
          </ul>
          <div className='text'>
            <div className='name'>{consolidatedInfo.raids.cos.challenges[consolidatedInfo.raids.cos.challenge[0]].name}</div>
            <ReactMarkdown className='description' source={consolidatedInfo.raids.cos.challenges[consolidatedInfo.raids.cos.challenge[0]].description} />
          </div>
        </div>
        <h4>{t('Collectibles')}</h4>
        <ul className='list collection-items'>
          <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.cos.collectibles} />
        </ul>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.cos.challenges[consolidatedInfo.raids.cos.challenge[0]].triumphs.concat(consolidatedInfo.raids.cos.triumphs)} ordered />
        </ul>
      </div>
    );

    raids.push(
      <div key='sotp' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('Raid')}</div>
          <div className='name'>{consolidatedInfo.raids.sotp.name}</div>
        </div>
        <h4>{t('Challenge')}</h4>
        <div className='raid-challenge'>
          <ul className='list inventory-items'>
            <Items
              items={consolidatedInfo.raids.sotp.challenge.map(c => {
                return {
                  itemHash: c
                };
              })}
            />
          </ul>
          <div className='text'>
            <div className='name'>{consolidatedInfo.raids.sotp.challenges[consolidatedInfo.raids.sotp.challenge[0]].name}</div>
            <ReactMarkdown className='description' source={consolidatedInfo.raids.sotp.challenges[consolidatedInfo.raids.sotp.challenge[0]].description} />
          </div>
        </div>
        <h4>{t('Collectibles')}</h4>
        <ul className='list collection-items'>
          <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.sotp.collectibles} />
        </ul>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.sotp.challenges[consolidatedInfo.raids.sotp.challenge[0]].triumphs.concat(consolidatedInfo.raids.sotp.triumphs)} ordered />
        </ul>
      </div>
    );

    raids.push(
      <div key='lw' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('Raid')}</div>
          <div className='name'>{consolidatedInfo.raids.lw.name}</div>
        </div>
        <h4>{t('Challenge')}</h4>
        <div className='raid-challenge'>
          <ul className='list inventory-items'>
            <Items
              items={consolidatedInfo.raids.lw.challenge.map(c => {
                return {
                  itemHash: c
                };
              })}
            />
          </ul>
          <div className='text'>
            <div className='name'>{consolidatedInfo.raids.lw.challenges[consolidatedInfo.raids.lw.challenge[0]].name}</div>
            <ReactMarkdown className='description' source={consolidatedInfo.raids.lw.challenges[consolidatedInfo.raids.lw.challenge[0]].description} />
          </div>
        </div>
        <h4>{t('Collectibles')}</h4>
        <ul className='list collection-items'>
          <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.lw.collectibles} />
        </ul>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.lw.challenges[consolidatedInfo.raids.lw.challenge[0]].triumphs.concat(consolidatedInfo.raids.lw.triumphs)} ordered />
        </ul>
      </div>
    );

    raids.push(
      <div key='lev' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('Raid')}</div>
          <div className='name'>{consolidatedInfo.raids.lev.name}</div>
        </div>
        <h4>{t('Challenge')}</h4>
        <ul className='list modifiers'>
          {consolidatedInfo.raids.lev.challenge.map((p, i) => {
            return (
              <li key={i}>
                <div className='icon'>
                  <ObservedImage className='image' src={`https://www.bungie.net${consolidatedInfo.raids.lev.challenges[p].icon}`} />
                </div>
                <div className='text'>
                  <div className='name'>{consolidatedInfo.raids.lev.challenges[p].name}</div>
                  <div className='description'>
                    <p>{consolidatedInfo.raids.lev.challenges[p].description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <h4>{t('Rotation')}</h4>
        <ul className='list modifiers'>
          {consolidatedInfo.raids.lev.phaseOrder.map((p, i) => {
            return (
              <li key={i}>
                <div className='icon'>
                  <ObservedImage className='image' src={`https://www.bungie.net${consolidatedInfo.raids.lev.phases[p].icon}`} />
                </div>
                <div className='text'>
                  <div className='name'>{consolidatedInfo.raids.lev.phases[p].name}</div>
                  <div className='description'>{consolidatedInfo.raids.lev.phases[p].description}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <h4>{t('Collectibles')}</h4>
        <ul className='list collection-items'>
          <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.raids.lev.collectibles} />
        </ul>
      </div>
    );

    const reckoningModifiers = milestones[601087286].activities[0].modifierHashes;
    const strikesModifiers = milestones[1437935813].activities[0].modifierHashes;

    const availableHeroicMenagerie = profile.characterActivities.data[characterId].availableActivities && profile.characterActivities.data[characterId].availableActivities.find(a => [2509539864, 2509539865, 2509539867].includes(a.activityHash)) && manifest.DestinyActivityDefinition[profile.characterActivities.data[characterId].availableActivities.find(a => [2509539864, 2509539865, 2509539867].includes(a.activityHash)).activityHash];

    const menagerieHeroicCollectibles = {
      0: [1692129580, 2678796997],
      1: [3376099856, 2678796997],
      2: [1572606157, 2678796997]
    };

    const moduleEscalationProtocol = (
      <div key='moduleEscalationProtocol' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('Escalation Protocol')}</div>
          <div className='name'>{consolidatedInfo.ep[cycleInfo.week.ep].boss}</div>
        </div>
        <h4>{t('Collectibles')}</h4>
        <ul className='list collection-items'>
          <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.ep[cycleInfo.week.ep].collectibles} />
        </ul>
        <h4>{t('Catalyst item')}</h4>
        <ul className='list inventory-items as-tab'>
          <Items
            items={consolidatedInfo.ep[cycleInfo.week.ep].items.map(i => {
              return {
                itemHash: i
              };
            })}
            asTab
          />
        </ul>
        <div className='aside'>{t('Braytech can not determine which Worldline Zero catalyst components you have attained, but it can tell you which bosses drop which items in case you happened to be keeping a list.')}</div>
      </div>
    );

    const moduleNightfalls = nightfalls;

    const moduleAscendantChallenge = (
      <div key='moduleAscendantChallenge' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('Ascendant Challenge')}</div>
          <div className='name'>
            {consolidatedInfo.ascendant[cycleInfo.week.ascendant].challenge}, {consolidatedInfo.ascendant[cycleInfo.week.ascendant].region}
          </div>
        </div>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.ascendant[cycleInfo.week.ascendant].triumphs} ordered />
        </ul>
      </div>
    );

    const moduleDreamingCityCycle = (
      <div key='moduleDreamingCityCycle' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t("Savathûn's Curse")}</div>
          <div className='name'>
            {t('Week')} {cycleInfo.week.curse}: {consolidatedInfo.curse[cycleInfo.week.curse].strength}
          </div>
        </div>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.curse[cycleInfo.week.curse].triumphs} ordered />
        </ul>
      </div>
    );

    const moduleShatteredThrone =
      cycleInfo.week.curse === 3 ? (
        <div key='moduleShatteredThrone' className='content'>
          <div className='module-header'>
            <div className='sub-name'>{t("Savathûn's Curse")}</div>
            <div className='name'>{t('The Shattered Throne')}</div>
          </div>
          <h4>{t('Triumphs')}</h4>
          <ul className='list record-items'>
            <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.shatteredThrone.triumphs} ordered />
          </ul>
        </div>
      ) : (
        false
      );

    const moduleMenagerie = (
      <div key='moduleMenagerie' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{t('The Menagerie')}</div>
          <div className='name'>{consolidatedInfo.menagerie[cycleInfo.week.menagerie].boss}</div>
        </div>
        <h4>{t('Heroic Collectibles')}</h4>
        <ul className='list collection-items'>
          <Collectibles selfLinkFrom='/this-week' {...this.props} hashes={menagerieHeroicCollectibles[profile.characters.data.find(c => c.characterId === characterId).classType]} />
        </ul>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.menagerie[cycleInfo.week.menagerie].triumphs} />
        </ul>
      </div>
    );

    const moduleReckoning = (
      <div key='moduleReckoning' className='content'>
        <div className='module-header'>
          <div className='sub-name'>{manifest.DestinyPlaceDefinition[4148998934].displayProperties.name}</div>
          <div className='name'>{consolidatedInfo.reckoning[cycleInfo.week.reckoning].boss}</div>
        </div>
        <h4>{t('Triumphs')}</h4>
        <ul className='list record-items'>
          <Records selfLinkFrom='/this-week' {...this.props} hashes={consolidatedInfo.reckoning[cycleInfo.week.reckoning].triumphs} ordered />
        </ul>
      </div>
    );

    modules.push(
      [
        moduleNightfalls[0]
      ],
      [
        moduleNightfalls[1]
      ],
      [
        moduleNightfalls[2]
      ],
      [
        moduleMenagerie
      ],
      [
        raids[0]
      ],
      [
        raids[1]
      ],
      [
        raids[2]
      ],
      [
        raids[3]
      ],
      [
        moduleAscendantChallenge
      ],
      [
        moduleDreamingCityCycle
      ],
      [
        moduleShatteredThrone
      ],
      [
        moduleEscalationProtocol,
        moduleReckoning
      ]
    );

    return (
      <div className='view' id='this-week'>
        <div className='module head'>
          <div className='content'>
            <div className='page-header'>
              <div className='sub-name'>{t('This Week')}</div>
              <div className='name'>{manifest.DestinyDestinationDefinition[milestoneFlashpoint.destinationHash].displayProperties.name}</div>
            </div>
            {definitionFlashpointFaction && definitionFlashpointFaction.displayProperties ? (
              <div className='text'>
                <p>
                  {t('Contact in the field')}: {definitionFlashpointFaction.displayProperties.description}
                </p>
              </div>
            ) : (
              <div className='text'>
                <p>{t('Beep-boop?')}</p>
              </div>
            )}
          </div>
          <div className='content highlight'>
            <div className='module-header'>
              <div className='sub-name'>{manifest.DestinyPresentationNodeDefinition[1396056784].displayProperties.name}</div>
            </div>
            <h4>{t('Active Modifiers')}</h4>
            <ul className='list modifiers'>
              {strikesModifiers.map((m, i) => {
                let modDef = manifest.DestinyActivityModifierDefinition[m];
                return (
                  <li key={i}>
                    <div className='icon'>
                      <ObservedImage className='image' src={`https://www.bungie.net${modDef.displayProperties.icon}`} />
                    </div>
                    <div className='text'>
                      <div className='name'>{modDef.displayProperties.name}</div>
                      <div className='description'>{modDef.displayProperties.description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='content highlight'>
            <div className='module-header'>
              <div className='sub-name'>{manifest.DestinyPlaceDefinition[4148998934].displayProperties.name}</div>
            </div>
            <h4>{t('Active Modifiers')}</h4>
            <ul className='list modifiers'>
              {reckoningModifiers.map((m, i) => {
                let modDef = manifest.DestinyActivityModifierDefinition[m];
                return (
                  <li key={i}>
                    <div className='icon'>
                      <ObservedImage className='image' src={`https://www.bungie.net${modDef.displayProperties.icon}`} />
                    </div>
                    <div className='text'>
                      <div className='name'>{modDef.displayProperties.name}</div>
                      <div className='description'>{modDef.displayProperties.description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {availableHeroicMenagerie ? (
            <div className='content highlight'>
              <div className='module-header'>
                <div className='sub-name'>{manifest.DestinyPlaceDefinition[2096719558].displayProperties.name}</div>
              </div>
              <h4>{t('Active Heroic Modifiers')}</h4>
              <ul className='list modifiers'>
                {availableHeroicMenagerie.modifiers.map((m, i) => {
                  let modDef = manifest.DestinyActivityModifierDefinition[m.activityModifierHash];
                  return (
                    <li key={i}>
                      <div className='icon'>
                        <ObservedImage className='image' src={`https://www.bungie.net${modDef.displayProperties.icon}`} />
                      </div>
                      <div className='text'>
                        <div className='name'>{modDef.displayProperties.name}</div>
                        <div className='description'>{modDef.displayProperties.description}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
        <div className='padder'>
          {modules
            .filter(m => m.filter(c => c).length)
            .map((m, i) => {
              return (
                <div key={i} className='module'>
                  {m}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    collectibles: state.collectibles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebindTooltips: value => {
      dispatch({ type: 'REBIND_TOOLTIPS', payload: new Date().getTime() });
    }
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(ThisWeek);
