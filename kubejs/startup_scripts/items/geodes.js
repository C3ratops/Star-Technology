
StartupEvents.registry('item', event => {

    [
        'Diamond',
        'Emerald',
        'Ruby',
        'Sapphire',
        'Quartzite',
        'Topaz',
        'Spessartine',
        'Certus_Quartz',
        'Green_Sapphire',
        'Blue_Topaz',
        'Apatite',
        'Monazite',
        'Realgar'
    ].forEach(geode => {
        event.create(`${geode.toLowerCase()}_geode`)
            .texture(`kubejs:item/resource_gen/geodes/cracked_${geode.toLowerCase()}_geode`);
    });
});