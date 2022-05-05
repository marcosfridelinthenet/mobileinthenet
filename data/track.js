export default (
    [
        {
            id: 1,
            code: '12345',
            history: [
                { id: 1, text: 'En depósito', complete: true },
                { id: 2, text: 'Preparando despacho', complete: false },
            ],
            delivery: {
                to: 'Mauricio Fernandez',
                street: 'Nuñez 3986',
                city: 'Coghlan',
                state: 'Ciudad de Buenos Aires',
                coordenate: '-34.5579937,-58.4813105',
                comments: 'No funciona timbre. Golpear bien fuerte.',
                status: 'No salió de depósito'
            },
            packaging: {
                weight: 1,
                weightUnit: 'kg',
                volume: 0.027,
                volumeUnit: 'm³',
                height: 0.3,
                heightUnit: 'm²',
                lenght: 0.3,
                lenghtUnit: 'm²',
                depth: 0.3,
                depthUnit: 'm²'
            }
        },
        {
            id: 2,
            code: '56789',
            history: [
                { id: 3, text: 'En depósito', complete: true },
                { id: 4, text: 'Preparando despacho', complete: true },
                { id: 5, text: 'En camino', complete: false },
            ],
            delivery: {
                to: 'Alberto Macri',
                street: 'Av. Maipú 2100',
                city: 'Olivos',
                state: 'Buenos Aires',
                coordenate: '-34.5149956,-58.4852447',
                comments: 'Entregar en seguridad.',
                status: 'En camino'
            },
            packaging: {
                weight: 3.5,
                weightUnit: 'kg',
                volume: 0.034,
                volumeUnit: 'm³',
                height: 0.34,
                heightUnit: 'm²',
                lenght: 0.25,
                lenghtUnit: 'm²',
                depth: 0.4,
                depthUnit: 'm²'
            }
        }
    ]
)