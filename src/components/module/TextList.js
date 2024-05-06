import styles from "@/app/components/module/TextList.module.css"
import {MdOutlineLibraryAdd} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai"


const TextList = ({title , profileData , setProfileData , type}) => {
const changeHandler =(e , index)=>{
  const {value} = e.target;
  const list= [...profileData[type]];
  list[index] = value;
  setProfileData({...profileData , [type]: list})
}
const clickHandler =()=>{
    setProfileData({...profileData, [type]: [...profileData[type], ""] })
}

const deleteHandler =(index)=>{
  const list = [...profileData[type]];
  list.splice(index , 1);
  setProfileData({...profileData , [type]: list})
};



  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map(( i , index) =>(
        <div className={styles.card} key={index}>
        <input type="text" onChange={e=> changeHandler(e , index)} value={i}/>
        <button onClick={() => deleteHandler(index)}>حذف<AiOutlineDelete/></button>
        </div>
      ))}
      <button onClick={clickHandler}>افزودن<MdOutlineLibraryAdd/></button>
    </div>
  )
}

export default TextList
