const user = {

    body: {
        type: 'object',
        properties: {
            nombre: {
                type: 'string',
                required: true,
            },
            correo: {
                type: 'string',
                required: true,
            },
            telefono: {
                type: 'number',
                required: true,
            },
        },
    },
};

export default { user };
