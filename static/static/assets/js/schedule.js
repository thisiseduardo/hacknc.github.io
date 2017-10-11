$.getJSON("/static/schedule.json", function(data) {
    data.forEach(function(date) {
      var i = 0;
        $("#schedule-container").append(
           $('<h3>')
             .text(date['date'])
        );

        var $table = $('<table>', {'class': 'schedule'});
        var $schBody = $('<tbody>');

        $table.append(
            $('<thead>').append(
                $('<tr>')
                  .append($('<th>', {"style": "width:20%;"}).text('Time'))
                  .append($('<th>', {"style": "width:60%;"}).text('Event'))
                  .append($('<th>', {'style': "width:20%;"}).text('Location'))
            )
        );

        date['schedule'].forEach(function(element) {
            var row = $('<tr>')
            row.append('<td>')
            $schBody.append(
                $('<tr>', {"class" : (i++ % 2 == 0 ? "even" : "odd")})
                  .append($('<td>').text(element['time']))
                  .append($('<td>').text(element['event']))
                  .append($('<td>').text(element['location']))
            )
        });

        console.log($schBody);

        var $alltable = $('<table>', {'class': 'schedule'});

        $table.append($schBody);
        $('#schedule-container').append($table);
    });
});
