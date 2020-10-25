import React from "react";
import "./Contact.scss"
import {useForm} from "react-hook-form";
import {IForm} from "../../shared/interfaces";

export const Contact: React.FC = () => {
  const {register, handleSubmit} = useForm<IForm>()
  const onSubmit = (data: IForm) => {
    console.log(data)
  }

  return (
    <div id="Contact me" className="container experience">
      <div className="col-left">
        <h2 className="box-title">Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aspernatur beatae doloremque facere molestiae!</p>
      </div>
      <form className="contact__right" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact__inputs">
          <input
            name="name"
            ref={register}
            placeholder="Name"/>
          <input
            name="email"
            ref={register}
            placeholder="E-mail"/>
        </div>
        <textarea
          className="contact__textarea"
          ref={register}
          name="message" placeholder="Message" />
        <button className="title btn btn__contact" type="submit" placeholder="send message">Send message</button>
      </form>
    </div>
  )
}