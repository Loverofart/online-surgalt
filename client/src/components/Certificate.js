import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {courseDetailsById} from '../redux/actions/userAction';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const today = new Date();


const PDF = (props) => {
  const dispatch = useDispatch()
  const singleCourse = useSelector(store=>store.courseRoot.singleCourse)
  const store = useSelector(store => store.userRoot)
  const [course, setCourse] = useState({})

  useEffect(() => {
      dispatch(courseDetailsById(props.match.params.courseId))
  }, [props.match.params.courseId])
  
  useEffect(() => {
      if (singleCourse) {
          setCourse(singleCourse)
      }
  },[singleCourse])

  console.log(props);
  return(
    <>
      <div className="certificate" ref={ref}>
        <div style={{width:"800px", height:"600px", padding:"20px", textAlign:"center", border:"10px solid #787878"}}>
            <div style={{width:"750px", height:"530px", padding:"80px 20px 20px 20px", textAlign:"center", border: "5px solid #787878"}}>
              <span style={{fontSize:"50px", fontWeight:"bold"}}>Сертификат</span>
              <br></br>
              <span style={{fontSize:"25px"}}><i>Энэхүү гэрчилгээгээр</i></span>
              <br></br>
              <span style={{fontSize:"30px"}}><b>{store.user.name} нь</b></span><br></br>
              <span style={{fontSize:"30px"}}>{course.title}</span><br></br>
              <span style={{fontSize:"25px"}}><i>сургалтыг амжилттай төгссөнийг батлаж байна.</i></span><br></br>
              
              <span style={{fontSize:"20px"}}>Дүн: <b>90%</b></span><br></br><br></br>
              <span style={{fontSize:"25px"}}><i>Огноо</i></span><br></br>
              
              <span style={{fontSize:"30px"}}>{`${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()} `}</span>
            </div>
          </div>
      </div>
      <Pdf targetRef={ref} filename="certificate.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Татаж авах</button>}
      </Pdf>
    </>
  );
}

export default PDF;