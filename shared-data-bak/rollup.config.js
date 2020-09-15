export default {
  input: ["index.js"],
  output: [
      {
            dir: "public",
            format: "umd",
            name: 'shared-data',
            sourcemap: true
          }
    ]
};
