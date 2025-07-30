
StartupEvents.registry('item', event => {

    [
        "ULV","LV","MV","HV","EV","IV","LuV","ZPM","UV","UHV","UEV","UIV" /*, "UXV", "OpV", "MAX" */
    ].forEach(circuit=>{
        event.create(`${circuit.toLowerCase()}_universal_circuit`)
            .texture(`kubejs:item/universal_circuits/${circuit.tier.toLowerCase()}_universal_circuit`);
    });

});