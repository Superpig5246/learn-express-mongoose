let BookInstance = require('../models/bookinstance');
let Author = require("../models/author");
let Book = require("../models/book");


exports.show_all_books_status = async function(res) {
  try {
    let books = await get_books().exec();
    return books.map(function (b) {
      return b.status;
    });
  } catch (err) {
    console.log("Could not get books " + err);
  }
}

function get_books() {
  return BookInstance.find({"status": {$eq: 'Available'}}).populate('book')
}