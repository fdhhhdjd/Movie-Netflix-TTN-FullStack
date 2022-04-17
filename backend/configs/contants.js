module.exports = {
  /**
   * from String template to URI
   * @author Nguyen Tien Tai
   *
   * @param {string} template
   * @param {object} data
   *
   * @returns {string}
   */
  STORAGE_GRAPH_FACEBOOK:
    "https://graph.facebook.com/v13.0/${userID}/?fields=picture.width(300).height(300),id,name,email&access_token=${accessToken}",
};
