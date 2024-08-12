function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Pomodoro')
    .addItem('Abrir Painel', 'showPomodoroSidebar')
    .addToUi();
}

function showPomodoroSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('pomodoro')
      .setTitle('Método Pomodoro')
      .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}
