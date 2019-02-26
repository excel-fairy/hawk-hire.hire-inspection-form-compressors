var PRE_HIRE_FORM_SHEET = {
    name: 'Pre Hire form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pre Hire form'),
    exportRange: {
        r1: 1,
        r2: 126,
        c1: ColumnNames.letterToColumn('A'),
        c2: ColumnNames.letterToColumn('O')
    },
    unitNumberCell: 'L15',
    exportFileNameCell: 'C1',
    exportCheckboxCell: 'Q1'
};

var POST_HIRE_FORM_SHEET = {
    name: 'Post hire form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Post hire form'),
    exportRange: {
        r1: 1,
        r2: 126,
        c1: ColumnNames.letterToColumn('A'),
        c2: ColumnNames.letterToColumn('O')
    },
    unitNumberCell: 'L15',
    exportFileNameCell: 'C1',
    exportCheckboxCell: 'Q1'
};

var DATA_VALID_SHEET = {
    name: 'data valid',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data valid'),
    mailData: {
        preDevliveryForm: {
            recipientAddress1Cell: 'AH4',
            subjectCell: 'AH5',
            messageCell: 'AH6',
            recipientAddress2Cell: 'AH7'
        },
        postDevliveryForm: {
            recipientAddress1Cell: 'AI4',
            subjectCell: 'AI5',
            messageCell: 'AI6',
            recipientAddress2Cell: 'AI7'
        }
    },
    exportFolderIdCell:'AH11'
};