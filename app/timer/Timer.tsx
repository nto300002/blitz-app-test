import { useState } from "react"
import { useEffect } from "react"
import { useInterval } from "./useInterval"

export const Timer: React.FC = () => {
  const [time, setTime] = useState(20)
  const [isWait, setIsWait] = useState(false)
  useInterval({
    onUpdate: () => {
      console.log("onUpdate", "time:", time)
      setTime(time - 1)
      if (time === 0) {
        setIsWait(true)
      }
    },
  })

  function handleResetClick() {
    setIsWait(true)
  }

  return (
    <div>
      {isWait ? (
        <button>おわり〜</button>
      ) : (
        <button onClick={() => handleResetClick()}>あと{time}秒！</button>
      )}
    </div>
  )
}

export default Timer
