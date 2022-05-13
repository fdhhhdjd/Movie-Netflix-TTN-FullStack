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
  //*Password Encryption

  //*Url navigate Login
  getURIFromTemplate(template, data) {
    const { userID, accessToken } = data;
    return eval("`" + template.replace(/`/g, "\\`") + "`");
  },
};
