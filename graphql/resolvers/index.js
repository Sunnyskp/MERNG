const postsResolvers = require('./posts');
const usetsResolvers = require('./users');

module.exports = {
    Query:{
        ...postsResolvers.Query
    }
};