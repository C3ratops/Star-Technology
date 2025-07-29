
StartupEvents.registry('block', event => {

    const casing = (material, emmits_light) => {

        event.create(`${material}_casing`)
            .hardness(10)
            .resistance(1)
            .lightLevel((emmits_light) ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing-' + material.replace('_', '-')}`);

    }

    const named_casing = (material, emmits_light) => {

        event.create(`${material}_casing`)
            .hardness(10)
            .resistance(1)
            .lightLevel((emmits_light) ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing-' + material.replace('_', '-')}`);

    }

    casing('soul_infused', false);
    named_casing('signalum', true);
    casing('lumium', true);
    named_casing('enderium', false);
    named_casing('shellite', false);
    named_casing('twinite', false);
    named_casing('dragonsteel', false);
    named_casing('prismalium', true);
    named_casing('melodium', true);
    named_casing('stellarium', true);
    named_casing('ancient_runicalium', true);


});