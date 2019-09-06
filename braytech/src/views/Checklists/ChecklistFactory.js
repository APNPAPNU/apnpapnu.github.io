import React from 'react';
import sortBy from 'lodash/sortBy';
import ReactMarkdown from 'react-markdown';

import Checklist from './Checklist';
import ChecklistItem from './ChecklistItem';
import ChecklistFactoryHelpers from './ChecklistFactoryHelpers';


class ChecklistFactory {
  constructor(t, profile, characterId, hideCompletedItems) {
    this.t = t;
    this.profile = profile;
    this.m = new ChecklistFactoryHelpers(t, profile, characterId, hideCompletedItems);
  }

  adventures() {
    return this.m.checklist({
      name: this.t('Adventures'),
      icon: 'destiny-adventure',
      progressDescription: this.t('Adventures undertaken'),
      items: this.m.checklistItems(4178338182, true),
      characterBound: true,
      sortBy: ['completed', 'place', 'bubble', 'activity'],
      itemTitle: i => i.activity,
      itemSubtitle: i => `${i.bubble}, ${i.place}`
    });
  }

  regionChests() {
    return this.m.checklist({
      name: this.t('Region Chests'),
      icon: 'destiny-region_chests',
      progressDescription: this.t('Region chests opened'),
      items: this.m.checklistItems(1697465175, true),
      sortBy: ['completed', 'place', 'bubble'],
      characterBound: true
    });
  }

  lostSectors() {
    return this.m.checklist({
      name: this.t('Lost Sectors'),
      icon: 'destiny-lost_sectors',
      progressDescription: this.t('Lost Sectors discovered'),
      characterBound: true,
      items: this.m.checklistItems(3142056444, true),
      sortBy: ['completed', 'place', 'bubble']
    });
  }

  ahamkaraBones() {
    return this.m.checklist({
      name: this.t('Ahamkara Bones'),
      icon: 'destiny-ahamkara_bones',
      progressDescription: this.t('Bones found'),
      itemTitle: i => i.lore,
      itemSubtitle: i => i.bubble && `${i.bubble}, ${i.place}`,
      sortBy: ['itemNumber'],
      items: this.m.checklistItems(1297424116)
    });
  }

  corruptedEggs() {
    return this.m.numberedChecklist('Egg', {
      name: this.t('Corrupted Eggs'),
      icon: 'destiny-corrupted_eggs',
      progressDescription: this.t('Eggs destroyed'),
      itemSubtitle: i => i.bubble && `${i.bubble}, ${i.place}`,
      items: this.m.checklistItems(2609997025)
    });
  }

  catStatues() {
    return this.m.numberedChecklist('Feline friend', {
      name: this.t('Cat Statues'),
      icon: 'destiny-cat_statues',
      progressDescription: this.t('Feline friends satisfied'),
      items: this.m.checklistItems(2726513366),
      itemSubtitle: i => i.bubble && `${i.bubble}, ${i.place}`
    });
  }

  sleeperNodes() {
    return this.m.checklist({
      name: this.t('Sleeper Nodes'),
      icon: 'destiny-sleeper_nodes',
      items: this.m.checklistItems(365218222),
      progressDescription: this.t('Sleeper nodes hacked'),
      itemTitle: i => i.inventoryItem.replace('CB.NAV/RUN.()', ''),
      itemSubtitle: i => i.bubble && `${i.bubble}, ${i.place}`,
      sortBy: ['inventoryItem']
    });
  }

  ghostScans() {
    return this.m.numberedChecklist('Scan', {
      name: this.t('Ghost Scans'),
      icon: 'destiny-ghost',
      items: this.m.checklistItems(2360931290),
      progressDescription: this.t('Ghost scans performed'),
      itemSubtitle: i => `${i.bubble}, ${i.place}`
    });
  }

  latentMemories() {
    return this.m.numberedChecklist('Memory', {
      name: this.t('Lost Memory Fragments'),
      icon: 'destiny-lost_memory_fragments',
      items: this.m.checklistItems(2955980198),
      progressDescription: this.t('Memories destroyed'),
      itemSubtitle: i => i.bubble && `${i.bubble}, ${i.place}`
    });
  }

  caydesJournals() {
    const caydesJournalIds = [78905203, 1394016600, 1399126202, 4195138678];

    let items = this.m.checklistItems(2448912219).filter(i => caydesJournalIds.includes(i.hash));
    items = sortBy(items, i => [i.hash]);

    const checklist = (
      <Checklist name={this.t("Cayde's Journals")} characterBound={this.t('Profile bound')} progressDescription={this.t('Journals recovered')} totalItems={items.length} completedItems={items.filter(i => i.completed).length}>
        {items.map(i => (
          <ChecklistItem key={i.hash} completed={i.completed}>
            <ReactMarkdown className='text' source={i.item.displayProperties.description} />
          </ChecklistItem>
        ))}
      </Checklist>
    );

    return {
      name: this.t("Cayde's Journals"),
      icon: 'destiny-ace_of_spades',
      checklist: checklist
    };
  }

  ghostStories() {
    return this.m.recordChecklist({
      name: this.t('Lore: Ghost Stories'),
      image: '/static/images/extracts/ui/checklists/037e-00004869.png',
      items: this.m.presentationItems(1420597821),
      progressDescription: this.t('Stories found')
    });
  }

  awokenOfTheReef() {
    return this.m.recordChecklist({
      name: this.t('Lore: Awoken of the Reef'),
      image: '/static/images/extracts/ui/checklists/037e-00004874.png',
      items: this.m.presentationItems(3305936921),
      progressDescription: this.t('Crystals resolved')
    });
  }

  forsakenPrince() {
    return this.m.recordChecklist({
      name: this.t('Lore: Forsaken Prince'),
      image: '/static/images/extracts/ui/checklists/037e-00004886.png',
      items: this.m.presentationItems(655926402),
      progressDescription: this.t('Data caches decrypted')
    });
  }
}

export default ChecklistFactory;
