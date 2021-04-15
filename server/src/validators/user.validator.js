const email = {
  params: {
    type: "object",
    properties: {
      email: {
        type: "string",
        required: true,
        pattern: "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+",
      },
    },
  },
};

module.exports = { email };
