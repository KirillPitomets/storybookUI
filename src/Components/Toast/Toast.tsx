import React, { FC, useEffect, useState } from 'react'

import failIcon from '@/stories/assets/fail-icon.svg'
import warnIcon from '@/stories/assets/warning-icon.svg'
import SuccessIcon from '@/stories/assets/success-icon.svg'
import Image from 'next/image'

import "./Toast.css"

interface IToast {
  type: "fail" | "warn" | "success"
  transitionType: "slide" | "fade"
  show: boolean
  duration?: number
  title: string
  text: string
}

const getIconByType = (type: IToast["type"]) => {
  const types = {
    fail: failIcon,
    warn: warnIcon,
    success: SuccessIcon
  }

  return types[type]
}

const getTransitionType = (type: IToast["transitionType"]) => {
  const types = {
    slide: "slide",
    fade: "fade"
  }

  return `toast_${types[type]}`;
}

const Toast: FC<IToast> = ({ type, duration = 3000, show, transitionType, title, text }) => {
  const [isMounted, setIsMounted] = useState(show);
  const [isVisible, setIsVisible] = useState(false);

  const closeToast = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    const mountedDelayId = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    const duretionId = setTimeout(() => {
      setIsVisible(false)
    }, duration + 1000)

    const mountedDeleteId = setTimeout(() => {
      setIsMounted(false)
    }, duration + 2000)

    return (() => {
      clearTimeout(mountedDelayId)
      clearTimeout(duretionId)
      clearTimeout(mountedDeleteId)
    })
  }, [])

  if (!isMounted) return null;

  return (
    <>
      <div>
        <div className={`toast ${getTransitionType(transitionType)} ${isVisible ? "toast-active" : ""}`}>
          <div className="toast__wrapper toast__wrapper_open">
            <div className="toast__title">
              <div className='toast-icon'>
                <Image className='toast-icon__icon' src={getIconByType(type)} alt={type} />
              </div>
              <h3 className='toast__h3'>{title}</h3>
              <span onClick={closeToast} className='toast-close-btn'></span>
            </div>
            <p className="toast__content">{text}</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Toast
