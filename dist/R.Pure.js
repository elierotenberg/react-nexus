"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
module.exports = function (R) {
  var _ = R._;

  function shouldComponentUpdate(props, state) {
    return !(_.isEqual(this.props, props) && _.isEqual(this.state, state));
  }

  var Pure = {
    shouldComponentUpdate: shouldComponentUpdate,

    Mixin: {
      _PureMixin: true,
      shouldComponentUpdate: shouldComponentUpdate } };

  return Pure;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6L1VzZXJzL0VsaWUvZ2l0L3JlYWN0L3JlYWN0LXJhaWxzL3NyYy9SLlB1cmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBUyxDQUFDLEVBQUU7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFZCxXQUFTLHFCQUFxQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDM0MsV0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0dBQ3hFOztBQUVELE1BQU0sSUFBSSxHQUFHO0FBQ1gseUJBQXFCLEVBQXJCLHFCQUFxQjs7QUFFckIsU0FBSyxFQUFFO0FBQ0wsZ0JBQVUsRUFBRSxJQUFJO0FBQ2hCLDJCQUFxQixFQUFyQixxQkFBcUIsRUFDdEIsRUFDRixDQUFDOztBQUVGIiwiZmlsZSI6IlIuUHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJzZ0bzUvcG9seWZpbGwnKTtcbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihSKSB7XG4gIGNvbnN0IF8gPSBSLl87XG5cbiAgZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzLCBzdGF0ZSkge1xuICAgIHJldHVybiAhKF8uaXNFcXVhbCh0aGlzLnByb3BzLCBwcm9wcykgJiYgXy5pc0VxdWFsKHRoaXMuc3RhdGUsIHN0YXRlKSk7XG4gIH1cblxuICBjb25zdCBQdXJlID0ge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSxcblxuICAgIE1peGluOiB7XG4gICAgICBfUHVyZU1peGluOiB0cnVlLFxuICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIFB1cmU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9