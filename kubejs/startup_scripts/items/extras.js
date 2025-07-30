StartupEvents.registry('item', event => {

    event.create('naquadic_netherite_fibers')
        .texture('kubejs:item/naquadic_netherite_fibers')
        .rarity('rare');

    event.create('coin')
        .rarity('epic')
        .texture('kubejs:item/coin');

    event.create('multiblock_upgrade_kit')
        .texture('kubejs:item/kits/upgrade_kit');
        
    event.create('draconic_stem_cells')
        .texture('kubejs:item/draconic/draconic_stem_cells');

    event.create('lactating_draconic_cells')
        .texture('kubejs:item/draconic/lactating_draconic_cells');

    event.create('draconic_brain_matter_cells')
        .texture('kubejs:item/draconic/draconic_brain_matter_cells');

    event.create('draconic_scale_cells')
        .texture('kubejs:item/draconic/draconic_scale_cells');

    // Gravi star continuations
    event.create('helish_star')
        .displayName('Helish Star')
        .texture('kubejs:item/helish_star');

    event.create('dragonic_eye')
        .texture('kubejs:item/dragon_eye');


});