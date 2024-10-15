import Image from 'next/image';
import logo from './assets/logo.jpg'


export default function Home() {
  return (
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <Image src={logo} alt='Hospit logo'/>
        <h1 className='text-4xl md:text-6xl font-bold text-center text-gray-800 tracking-tight leading-tight md:leading-none mt-10'>Welcome to Hospit</h1>
        <h1 className='text-1xl md:text-2xl font-bold text-center text-gray-800 tracking-tight leading-tight md:leading-none mt-10'>You can continoue with your taks, Have a great journey!</h1>
    </div>
  );
}
