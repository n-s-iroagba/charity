
import Line from "./Line"

const Title:React.FC<{title:string,dark?:boolean}> = ({title,dark})=>{
  return<>

<div className="d-flex align-items-center">
<Line/>

<h5 className={`${dark?'text-light':''} title-text pt-2`}>{title}</h5>

</div>


  
  </>
}

export default Title;