function exportSheet(sheet){
    var fileName = sheet.sheet.getRange(sheet.exportFileNameCell).getValue();

    var exportOptions = {
        exportFolderId: getExportFolder(sheet).getId(),
        sheetId: sheet.sheet.getSheetId(),
        exportFileName: fileName,
        range: sheet.exportRange
    };
    var pdfFile = ExportSpreadsheet.export(exportOptions);
    sendEmail(sheet, pdfFile);
}

function exportPreDeliveryForm(){
    return exportSheet(PRE_HIRE_FORM_SHEET);
}

function exportPostHireForm(){
    return exportSheet(POST_HIRE_FORM_SHEET);
}

function getTodayDate() {
    var dateStr = new Date().toJSON().slice(0,10).split('-');
    return dateStr[2] + '/' + dateStr[1] + '/' + dateStr[0];
}

// Just added to automate email when saving as PDF
function sendEmail(sheet, attachment) {
    var emailData = getEmailData(sheet);
    var recipient1 = DATA_VALID_SHEET.sheet.getRange(emailData.recipientAddress1Cell).getValue();
    var recipient2 = DATA_VALID_SHEET.sheet.getRange(emailData.recipientAddress2Cell).getValue();
    var subject = DATA_VALID_SHEET.sheet.getRange(emailData.subjectCell).getValue();
    var message = DATA_VALID_SHEET.sheet.getRange(emailData.messageCell).getValue();
    var emailOptions = {
        attachments: [attachment.getAs(MimeType.PDF)],
        name: 'Automatic hire inspection form mail sender'
    };
    sendEmailAux(recipient1, subject, message, emailOptions);
    sendEmailAux(recipient2, subject, message, emailOptions);
}

// Send an email
function sendEmailAux(recipient, subject, message, emailOptions) {
    try {
        // do stuff, including send email
        MailApp.sendEmail(recipient, subject, message, emailOptions);
    } catch(e) {
        Logger.log("Error with email. Recipient " + recipient + " maybe is not a valid email address", e);
    }
}

function getEmailData(sheet){
    switch (sheet.name) {
        case 'Pre Hire form':
            return DATA_VALID_SHEET.mailData.preDevliveryForm;
        case 'Post hire form':
            return DATA_VALID_SHEET.mailData.postDevliveryForm;
        default:
            return null;
    }
}
