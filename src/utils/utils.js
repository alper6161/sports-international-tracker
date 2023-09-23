import * as XLSX from "xlsx";
import moment from "moment";
import {EXCEL_START_DATE} from "./constants.js";

export const excelReader = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        prepareExcelContent(XLSX.utils.sheet_to_json(sheet))
    };

    reader.readAsBinaryString(file);
};

const convertExcelDate = (excelDate) => new Date(EXCEL_START_DATE.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);

const prepareExcelContent = (data) => {
    return localStorage.setItem('excelData', data.map(excelDate => moment(convertExcelDate(excelDate.DATE)).format('DD.MM.YYYY')));
}