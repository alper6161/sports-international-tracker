import {prepareExcelContent} from "../utils/utils.js";
import * as XLSX from "xlsx";
import {useDispatch} from "react-redux";
import {setScheduleData} from "../redux/reducers/schedule.js";

export const ExcelUploader = ({onExcelUploaded}) => {
    const dispatch = useDispatch();

    const excelReader = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const finalExcelData = prepareExcelContent(XLSX.utils.sheet_to_json(sheet));
            dispatch(setScheduleData(finalExcelData));
            onExcelUploaded();
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div className="centered">
            <div>
                <h4>
                    Antreman kayıtlarınız görmek için lütfen geçerli bir excel dosyası seçiniz
                </h4>
                <div className="centered">
                    <input type="file" accept=".xlsx" onChange={excelReader}/>
                </div>
            </div>
        </div>
    )
};

