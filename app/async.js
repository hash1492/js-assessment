exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    var dfd = jQuery.Deferred();

    setTimeout(function () {
      dfd.resolve( value );
    },500);

    return dfd.promise();
  },

  manipulateRemoteData: function(url) {

    var dfd = jQuery.Deferred();
    $.ajax({
      url: url,
      success: function (data) {
        var people = [];

        data.people.forEach(function (person) {
          people.push(person.name);
        })
        people.sort();
        dfd.resolve( people );
      },
      dataType: 'json'
    });

    return dfd.promise();
  }
};
