import styles from "@/app/components/module/CustomDataPicker.module.css";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"



const CustomDataPicker = ({profileData ,setProfileData}) => {

    const {constructionDate} = profileData;

    const changeHandler=(e)=>{
        
        const date = new Date(e);
        console.log(date)
        setProfileData({...profileData , constructionDate : date})
    };


  return (
    <div className={styles.container}>
      <p>ناریخ ساخت</p>
      <DatePicker  calendar={persian}
      locale={persian_fa}
      value={constructionDate}
      onChange={changeHandler}
      calendarPosition="bottom-right"/>
    </div>
  )
}

export default CustomDataPicker
