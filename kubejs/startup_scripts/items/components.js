
StartupEvents.registry('item', event => {

    const chipBoule = (boule, doped) => {
        if (doped) {
            event.create(`${boule.toLowerCase()}_chip`)
                .texture(`kubejs:item/chips_n_wafers/empty_${boule.toLowerCase()}_chip`);
        } else {
            event.create(`${boule.toLowerCase()}_chip`)
                .texture(`kubejs:item/chips_n_wafers/empty_${boule.toLowerCase()}_chip`);
        };
    };

    chipBoule('Silicon', false);
    chipBoule('Phosphorus', true);
    chipBoule('Naquadah', true);
    chipBoule('Neutronium', true);
    chipBoule('Draco', true);

    event.create('ae2_soc_wafer')
        .texture('kubejs:item/chips_n_wafers/ae2_soc_wafer');

    event.create('ae2_soc')
        .texture('kubejs:item/chips_n_wafers/ae2_soc_chip');

    event.create('3d_nand_chip')
        .texture('kubejs:item/chips_n_wafers/3d_nand');

    event.create('3d_nor_chip')
        .texture('kubejs:item/chips_n_wafers/3d_nor');

    event.create('qram_wafer')
        .texture('kubejs:item/chips_n_wafers/qram_wafer');

    event.create('qram_chip')
        .texture('kubejs:item/chips_n_wafers/qram_chip');

    event.create('uepic_wafer')
        .texture('kubejs:item/chips_n_wafers/uepic_wafer');

    event.create('uepic_chip')
        .texture('kubejs:item/chips_n_wafers/uepic_chip');

    event.create('draco_boule')
        .texture('kubejs:item/chips_n_wafers/draco_boule');

    event.create('draco_wafer')
        .texture('kubejs:item/chips_n_wafers/draco_wafer');

    event.create('draco_advanced_soc_wafer')
        .texture('kubejs:item/chips_n_wafers/draco_advanced_soc_wafer');

    event.create('draco_advanced_soc')
        .texture('kubejs:item/chips_n_wafers/draco_advanced_soc');

    event.create('uipic_wafer')
        .texture('kubejs:item/chips_n_wafers/uipic_wafer');

    event.create('uipic_chip')
        .texture('kubejs:item/chips_n_wafers/uipic_chip');


});