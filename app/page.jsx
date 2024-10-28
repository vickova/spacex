import Image from 'next/image'
import { CapsuleLists } from './components/CapsuleLists';


export default function Home() {
  return (
    <div>
      <div className='top__bar'>
        <div className='main__bar__input'>
            <div className='search__input'>
                <Image src='/search-line.svg' width={20} height={20} alt='search__icon'/>
                <span>Search</span>
            </div>
            <input type="text" />
        </div>
        <div className='profile__cover d-flex gap-3 align-items-center'>
            <Image src='/mail-line.svg' width={20} height={20} alt='mail__icon'/>
            <Image src='/notification-3-line.svg' width={20} height={20} alt='profile__icon'/>
            <div className='profile d-flex gap-3 align-items-center'>
                <Image src='/bg-man.webp' width={20} height={20} alt='profile__picture'/>
                <div className='profile__details'>
                    <p>Jane Cooper</p>
                    <p>janecooper123@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
      <div className='capsule__list__cover'>
        <h3>List of capsules</h3>
        <CapsuleLists/>
      </div>
    </div>
  )
}
