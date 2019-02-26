function onOpen() {
    PRE_HIRE_FORM_SHEET.sheet.getRange(PRE_HIRE_FORM_SHEET.exportCheckboxCell).setValue(false);
    POST_HIRE_FORM_SHEET.sheet.getRange(POST_HIRE_FORM_SHEET.exportCheckboxCell).setValue(false);
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Run scripts')
        .addItem('Export ' + PRE_HIRE_FORM_SHEET.name, 'exportPreDeliveryForm')
        .addItem('Export ' + POST_HIRE_FORM_SHEET.name, 'exportPostHireForm')
        .addItem('Authorize scripts to access Google drive from smartphone', 'createInstallableTriggers')
        .addToUi();
}

function createInstallableTriggers(){
    deleteAllTriggers();
    ScriptApp.newTrigger('installableOnEdit')
        .forSpreadsheet(SpreadsheetApp.getActive())
        .onEdit()
        .create();
}

function installableOnEdit(e){
    var range = e.range;
    if(range.getSheet().getName() === PRE_HIRE_FORM_SHEET.sheet.getRange(PRE_HIRE_FORM_SHEET.exportCheckboxCell).getSheet().getName()
        && range.getA1Notation() === PRE_HIRE_FORM_SHEET.sheet.getRange(PRE_HIRE_FORM_SHEET.exportCheckboxCell).getA1Notation()
        && range.getValue() === true){
        range.setValue(false);
        exportPreDeliveryForm();
    }
    else if(range.getSheet().getName() === POST_HIRE_FORM_SHEET.sheet.getRange(POST_HIRE_FORM_SHEET.exportCheckboxCell).getSheet().getName()
        && range.getA1Notation() === POST_HIRE_FORM_SHEET.sheet.getRange(POST_HIRE_FORM_SHEET.exportCheckboxCell).getA1Notation()
        && range.getValue() === true) {
        range.setValue(false);
        exportPostHireForm();
    }
}

function deleteAllTriggers() {
    var allTriggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < allTriggers.length; i++) {
        ScriptApp.deleteTrigger(allTriggers[i]);
    }
}
