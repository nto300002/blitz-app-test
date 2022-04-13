import { useEffect, useRef } from "react"

type Params = {
  onUpdate: () => void
}
//onUpdate 古い参照　数字更新されない
export const useInterval = ({ onUpdate }: Params) => {
  const onUpdateRef = useRef(() => {})
  useEffect(() => {
    onUpdateRef.current = onUpdate
  }, [onUpdate]) //ココ 毎回再レンダリングされる
  //useRef 最新のonUpdate 呼び出す
  useEffect(() => {
    const timerId = setInterval(() => onUpdateRef.current(), 1000)
    return () => clearInterval(timerId)
  })
}
