/**
 * Created by RSercan on 10.1.2016.
 */
Template.replSetGetStatus.onRendered(function () {
    Template.changeConvertOptionsVisibility(false);
    Template.changeRunOnAdminOptionVisibility(false);
});

Template.replSetGetStatus.executeQuery = function () {
    Template.adminQueries.initExecuteQuery();
    var connection = Connections.findOne({_id: Session.get(Template.strSessionConnection)});

    Meteor.call("replSetGetStatus", connection, function (err, result) {
        Template.renderAfterQueryExecution(err, result, true);
    });
};