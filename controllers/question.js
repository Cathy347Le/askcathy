module.exports = {
  new: function(req, res) {
    res.render("question/new");
  },
  create: function(req, res) {
    res.redirect("/");
  },
  show: function(req, res) {
    res.render("question/show");
  },
  edit: function(req, res) {
    res.render("question/edit");
  },
  update: function(req, res) {
    res.redirect("/");
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
