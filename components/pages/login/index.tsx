import Image from 'next/image'
import Card from '../../card'
import Textfield from '../../form/textfield'
import Button from '../../form/button'

function Index() {
    return (
        <main className="h-screen">
            <div className='flex w-full h-full'>
                <div className='w-2/3 h-full flex flex-col justify-center items-center'>
                    <Image src={`/assets/complete-brand.png`} height={250} width={250} alt='brand-image' className='mb-5' />
                    <Image src={`/assets/hero.webp`} height={450} width={450} alt='hero-imag' />
                </div>
                <div className='w-1/3 h-full bg-main px-10 flex flex-col justify-center items-center'>
                    <Card className='py-10 px-10 flex flex-col items-center'>
                        <Image src={`/assets/complete-brand.png`} height={70} width={70} alt='brand-image' className='text-center mb-10' />
                        <div className='w-full' id='form-login'>
                            <Textfield
                                onChange={() => { }}
                                value=''
                                type='text'
                                className='mb-3'
                                placeholder='Username'
                            />
                            <Textfield
                                onChange={() => { }}
                                value=''
                                type='password'
                                className='mb-3'
                                placeholder='Password'
                            />
                            <div className='flex justify-end'>
                                <Button onClick={() => { }}>
                                    <span>Sign In</span>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Index