import Layout from '../components/Layout'
import Image from 'next/image';

export default function Contact() {
    return (<Layout title="Contact">
        <div className="bg-white text-center shadow-xl p-8 w-89 rounded">
            <div className="mt-4">
                <p className='font-bold'>Contact info</p>
            </div>
            <div className='flex justify-center mt-4'>
                <Image
                    className='rounded-full'
                    src="/images.jpg"
                    width={60}
                    height={60}
                    alt="avator" />
            </div>
            <div className="mt-4"
            >
                <p className='font-bold'>Address</p>
                <p className='text-xs mt-2 text-gray-600'
                >city A</p>
                <p className='fontbold mt-3"'
                >Email</p>
                <p className='text-xs mt-2 text-gray-600'
                >abc@gmail.com</p>
                <p className='font-bold mt-3'
                >Phone</p>
                <p className='text-xs mt-2 text-gray-600'>
                    0000-0000-0000
                </p>


            </div>
        </div>
    </Layout>
    )
}