import moment from "moment";
import {EXCEL_START_DATE} from "./constants.js";


const convertExcelDate = excelDate => new Date(EXCEL_START_DATE.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);

export const prepareExcelContent = data => data.map(excelDate => moment(convertExcelDate(excelDate.DATE)).format('DD.MM.YYYY'));