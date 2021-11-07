(function ($) {
  var forms = document.getElementById('dlist');
  url = new URL(window.location);
  var details = [];
  details['weight'] = parseInt(url.searchParams.get('weight'));
  details['height'] = parseInt(url.searchParams.get('height'));
  details['age'] = parseInt(url.searchParams.get('age'));
  details['activity'] = url.searchParams.get('activity');

  /**
   * *******************************************
   * These calculations should be replaced later.
   * ********************************************
   */
  details['weight'] = 58 + (details['weight'] % 10);
  details['height'] = 115 + (details['height'] % 10);
  details['age'] = 82 + (details['age'] % 10);

  /**
   * Assumptions
   *
   * Need to replace these.
   */
  var gram = [];
  gram['fat'] = details['weight'];
  gram['carb'] = details['age'];
  gram['prot'] = details['height'];

  var gramtotal = gram['fat'] + gram['carb'] + gram['prot'];

  /**
   * Percentages
   */
  var perce = [];
  var precision = 2;
  perce['fat'] = ((gram['fat'] / gramtotal) * 100).toFixed(precision);
  perce['carb'] = ((gram['carb'] / gramtotal) * 100).toFixed(precision);
  perce['prot'] = ((gram['prot'] / gramtotal) * 100).toFixed(precision);

  var data = [
    { label: 'Protein', value: perce['prot'], color: '#bda2df' },
    { label: 'Fat', value: perce['fat'], color: '#c4c4c4' },
    { label: 'Carbohydrate', value: perce['carb'], color: '#5820a0' },
  ];

  Morris.Donut({
    element: 'donut-example',
    data: data,
    formatter: function (x) {
      return x + '%';
    },
    resize: false,
  }).on('click', function (i, row) {
    console.log(i, row);
  });
})(jQuery);
