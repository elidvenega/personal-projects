import PropsData from "./PropsData"



function PropsPractice() {
  return (
    <div>
     <PropsData 
     name="Jack"
     language="Spanish"
     country="US"
     age={"32"}
     /> 
      <PropsData 
     name="David"
     language="French"
     country="US"
     age={"21"}
     />
      <PropsData 
     name="Matt"
     language="English"
     country="US"
     age={"12"}
     />
    </div>
  )
}

export default PropsPractice