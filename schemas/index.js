// docs: https://swagger-autogen.github.io/docs/
const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0'
});

// Skeleton of documations
const docBase = {
  info: {
    version: '',
    title: 'Backend API',
    description: 'Express server OAS'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'devServer'
    },
  ],
  basePath: "/api/v1",
  tags: [
    {
      name: '',
      description: ''
    },
  ],
  components: {}
};
const outputFile = './swagger.json';
const endpointsFiles = [
  '../api-server/routes/index.js',
  '../api-server/routes/api.js',
];

swaggerAutogen(outputFile, endpointsFiles, docBase);
