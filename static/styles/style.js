$('.ui.sidebar')
  .sidebar('toggle')
;
$('.context.example .ui.sidebar')
  .sidebar({
    context: $('.context.example .bottom.segment')
  })
  .sidebar('attach events', '.context.example .menu .item')
;
$('.url.example .ui.embed').embed();