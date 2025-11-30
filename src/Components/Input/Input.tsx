import React, { FC, ChangeEvent, InputHTMLAttributes, useState } from "react";
import Image from "next/image";

import "./Input.css"

import eye from "@/stories/assets/eye.svg"
import eyeClose from "@/stories/assets/eye-close.svg"
import crest from '@/stories/assets/crest.svg'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  clearble: boolean
  label?: string
}

const Input: FC<IInput> = ({
  type,
  clearble,
  ...props
}) => {

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>()


  const isPassword = type === "password";
  const finalType = isPassword && isShowPassword ? "text" : type;


  const handleFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value)
  }

  const handleShowPassword = () => {
    setIsShowPassword(prev => !prev)
  }

  const clearField = () => { setFieldValue("") }

  return <div>
    <div className="input">
      <input
        className="input-input"
        type={finalType}
        value={fieldValue}
        onChange={handleFieldValue}
        {...props}
      />

      <div className="input__wrapper">
        {
          isPassword &&
          <button className="input-btn" onClick={handleShowPassword}>
            {
              isShowPassword ?
                <Image className="input-btn__icon" src={eye} alt="Show password" />
                :
                <Image className="input-btn__icon" src={eyeClose} alt="Hide password" />
            }
          </button>
        }

        {
          clearble && <button className="input-btn" onClick={clearField}>
            <Image className="input-btn__icon" src={crest} alt="Clear the field" />
          </button>
        }
      </div>

    </div>
  </div>
};

export default Input;


