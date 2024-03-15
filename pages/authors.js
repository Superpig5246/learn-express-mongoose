let Author = require('../models/author');

get_author_list = async () => {

  let author_lst = await Author.find({}).exec()
  return author_lst.map(function (author) {
    return author.name + " : " + author.lifespan;
  });
};

exports.show_all_authors = function(res) {
  get_author_list()
    .then((data) => res.send(data))
    .catch((_) => res.send('No authors found'));
}
