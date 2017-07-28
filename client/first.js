Template.first.onCreated(function() {
  // alert("onCreated runs!")
});

Template.first.onRendered(function() {
  // alert("onRendered runs!")
});

Template.first.helpers({
  ageColor: function() {
    if (this.age > 20) {
      return 'red'
    }
    else {
      return 'yellow'
    }
  },
  array: function() {
    return [
      {
        userName: 'jungwon jin',
        age: 30,
        address: 'Seoul'
      },
      {
        userName: 'jungwon jin',
        age: 30,
        address: 'Seoul'
      },
      {
        userName: 'jungwon jin',
        age: 30,
        address: 'Seoul'
      },
      {
        userName: 'jungwon jin',
        age: 30,
        address: 'Seoul'
      }

    ];
  },
  userColor: function() {
    //DB에서 해당 유저가 어떤놈인지 확인한다.
    return "btn-danger";
  },
  data: function() {
    return {
      userName: 'jungwon jin',
      age: 30,
      address: 'Seoul'
    };
  }
});

Template.first.events({

});