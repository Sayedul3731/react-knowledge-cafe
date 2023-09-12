import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between px-10 my-10 pb-5 border-b-2'>
            <h1 className="text-5xl font-semibold">React Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>

    );
};

export default Header;