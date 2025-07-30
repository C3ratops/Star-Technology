
StartupEvents.registry('item', event => {

    [
        'nebular',
        'zenith',
        'hyperion',
        'spectral',
        'astral'
    ].forEach(singularity => {
        event.create(`singularity_${singularity}`)
            .rarity('epic');
    });

    // event.create('singularity_base')
    //     .displayName('Singularity Base')
    //     .texture('kubejs:item/singularities/base');


});