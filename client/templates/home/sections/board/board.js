Template.board.helpers({
  president: function() {
  	return Members.findOne({name: 'Lena Afeyan'});
  },
  vicePresident: function() {
  	return Members.findOne({name: 'Carlo Bocconcelli'});
  },
  members: function() {
  	return Members.find({$and: [
  		{name: {$not: 'Carlo Bocconcelli'}},
  		{name: {$not: 'Lena Afeyan'}}
  	]});
  }
});
