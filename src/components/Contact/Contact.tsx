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
        <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
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