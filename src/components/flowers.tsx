import Flor from '@/assets/flor.png'
import Image from 'next/image'

export default function Flowers() {
  return (
    <>
      <Image
        src={Flor}
        alt="Flor"
        width={500}
        height={500}
        className="-rotate-[45deg] -right-10 -z-10 fixed top-0 w-24 object-cover"
      />
      <Image
        src={Flor}
        alt="Flor"
        width={500}
        height={500}
        className="-rotate-[45deg] -left-24 -top-24 -scale-y-100 -z-10 fixed w-32 object-cover"
      />

      <Image
        src={Flor}
        alt="Flor"
        width={500}
        height={500}
        className='-rotate-[145deg] -right-10 -z-10 -bottom-10 fixed w-36 object-cover'
      />
      <Image
        src={Flor}
        alt="Flor"
        width={500}
        height={500}
        className="-rotate-[145deg] -left-24 -bottom-24 -scale-y-100 -z-10 fixed w-32 object-cover"
      />
    </>
  )
}
