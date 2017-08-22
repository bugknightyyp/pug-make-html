$('.team-list li img')
  .hover(function () {
    let src = $(this).attr('src')
    $(this).attr('src', src.replace('team-normal', 'team-hover'))
  },
  function () {
    let src = $(this).attr('src')
    $(this).attr('src', src.replace('team-hover', 'team-normal'))
  })
