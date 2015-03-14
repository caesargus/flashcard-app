Flashcards = new Mongo.Collection("flashcards");

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.question_and_answer.helpers({
    flashcards: function () {
       return Flashcards.find({});
    },
    counter: function () {
      // return Session.get('counter');
    }
  });

  Template.question_and_answer.events({
    'click button': function () {
      alert('hi there');
      $('#answer').css('display', 'block');
      // increment the counter when button is clicked
      // Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // flashcard
  });
}
