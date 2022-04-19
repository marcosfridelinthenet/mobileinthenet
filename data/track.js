export default (
    [
        {
            code: '12345',
            history: [
                { id: 1, text: 'En depósito', complete: true },
                { id: 2, text: 'Preparando despacho', complete: false },
            ],
            info: {
                to: 'Mauricio Fernandez',
                street: 'Nuñez 3986',
                city: 'Coghlan',
                state: 'Ciudad de Buenos Aires',
                coordenate: '-34.5579937,-58.4813105,15',
                comments: 'No funciona timbre. Golpear bien fuerte.',
                status: 'No salió de depósito'
            }
        },
        {
            code: '56789',
            history: [
                { id: 3, text: 'En depósito', complete: true },
                { id: 4, text: 'Preparando despacho', complete: true },
                { id: 5, text: 'En camino', complete: false },
            ],
            info: {
                to: 'Alberto Macri',
                street: 'Av. Maipú 2100',
                city: 'Olivos',
                state: 'Buenos Aires',
                coordenate: '-34.5149956,-58.4852447',
                comments: 'Entregar en seguridad.',
                status: 'En camino'
            }
        }
    ]
)