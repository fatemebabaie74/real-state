import styles from "@/app/components/module/RadioList.module.css"
const RadioList = ({profileData , setProfileData}) => {


    const {category} = profileData;


const changeHandler = (e)=>{
    const {name , value} = e.target;
    setProfileData({...profileData , [name] : value})
}


  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
            <label htmlFor="ویلا">ویلا</label>
            <input type="radio" id="villa" name="category" value="villa" checked={category === "villa"} onChange={changeHandler}/>
          
           
        </div>
        <div>
            <label htmlFor="ویلا">آپارتمان</label>
            <input type="radio" id="apartment" name="category" value="apartment" checked={category === "apartment"} onChange={changeHandler}/>
          
           
        </div>
        <div>
            <label htmlFor="ویلا">مغازه</label>
            <input type="radio" id="store" name="category" value="store" checked={category === "store"} onChange={changeHandler}/>
          
           
        </div>
        <div>
            <label htmlFor="ویلا">دفتر</label>
            <input type="radio" id="office" name="category" value="office" checked={category === "office"} onChange={changeHandler}/>
          
           
        </div>
      </div>
    </div>
  )
}

export default RadioList
