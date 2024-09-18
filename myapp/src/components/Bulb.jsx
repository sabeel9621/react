
import { useState } from "react"
const imageoffbulb = "https://media.istockphoto.com/id/183343279/photo/light-bulb.jpg?s=612x612&w=0&k=20&c=O_8-olmVP9nYnziPZtRnC5x-1-jsFrKRUbamEkTXcMs="
const imageonbulb ="https://media.istockphoto.com/id/636301016/photo/low-glowing-electric-bulb-lamp-on-dark-background.jpg?s=612x612&w=0&k=20&c=Fdd3SS2n_fWIq19JrExTSC2QdTv5ZZJn7m7E7vZLM3c="
const Bulb = () => {
    const [isOn, setIsOn] = useState(false)
    const handlebtnClick = () => {
        setIsOn(!isOn);
        console.log(isOn)
    }
    const handlebtnNotClick = () => {
        setIsOn(!isOn)
        console.log(isOn)
  }
  return (
      <div className="container">
          <img src={isOn?imageoffbulb:imageonbulb} alt="imageofbulb" />
          <button className="btnclick" onClick={handlebtnClick}>Turn on the light</button>
          <button className="btnNotclick" onClick={handlebtnNotClick}>Turn off the light</button>

    </div>
  )
}

export default Bulb
