import {useRouter} from 'next/router'

const slug = () => {
    const router = useRouter()
    const {slug} = router.query;
    console.log(router)
  return (
    <div>{slug}</div>
  )
}

export default slug