import '../styles/Tutors.css'

function Tutors(props) {
  return (
    <div>
      
      <div className="tutor-list">
        {
            props.tutorList.map((item,index)=>{

                return(

                    <div className = 'kartu-tutor'key={index}>

                        <img src={item.image}/>
                        <p>{item.name}</p>

                    </div>

                )

            })
        }

                </div>


    </div>
  )
}

export default Tutors
