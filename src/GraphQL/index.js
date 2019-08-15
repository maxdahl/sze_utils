const { mergeDeep } = require("../Object");

module.exports = {
  mergeResolvers(resolverDefs) {
    if (!Array.isArray(resolverDefs)) {
      throw new Error("resolverDefs needs to be an array");
    }

    const resolvers = {};
    resolverDefs.forEach(res => {
      mergeDeep(resolvers, res);
    });

    return resolvers;
  }
};
