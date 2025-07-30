ItemEvents.armorTierRegistry(event => {
    event.add('nether', tier => {
        tier.durabilityMultiplier = 80 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [6, 10, 14, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 12
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 1.0
    });
    
    event.add('end', tier => {
        tier.durabilityMultiplier = 80
        tier.slotProtections = [6, 10, 14, 6]
        tier.enchantmentValue = 12
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.toughness = 4.0
        tier.knockbackResistance = 1.0
    });
});

StartupEvents.registry('item', event => {

    // Abydos
    event.create('abydos_talisman')
        .rarity('epic')
        .texture('kubejs:item/dimensional/abydos_talisman');

    // Nether
    event.create('nether_helmet', 'helmet')
        .tier('nether')
        .texture('kubejs:item/dimensional/nether_helmet')

    event.create('nether_chestplate', 'chestplate')
        .tier('nether')
        .texture('kubejs:item/dimensional/nether_chestplate')

    event.create('nether_leggings', 'leggings')
        .tier('nether')
        .texture('kubejs:item/dimensional/nether_leggings')

    event.create('nether_boots', 'boots')
        .tier('nether')
        .texture('kubejs:item/dimensional/nether_boots')

    event.create('nether_talisman')
        .rarity('epic')
        .texture('kubejs:item/dimensional/nether_talisman');

    // End
    event.create('end_helmet', 'helmet')
        .tier('end')
        .texture('kubejs:item/dimensional/end_helmet')

    event.create('end_chestplate', 'chestplate')
        .tier('end')
        .texture('kubejs:item/dimensional/end_chestplate')

    event.create('end_leggings', 'leggings')
        .tier('end')
        .texture('kubejs:item/dimensional/end_leggings')

    event.create('end_boots', 'boots')
        .tier('end')
        .texture('kubejs:item/dimensional/end_boots')

    event.create('end_talisman')
        .rarity('epic')
        .texture('kubejs:item/dimensional/end_talisman');

});