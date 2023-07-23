import './MainSection.css';

const MainSection = ()=>{
    return (
        <>
            <div className="section-1">
                <h1>Unlimited movies, TV
                    shows and more.
                </h1>
                <p className='para-one'>Watch anywhere. Cancel anytime.</p>
                <p className='para-two'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='input-field'>
                    <input type="text" placeholder='Email address'/>
                    <button type='button'>Get Started ></button>
                </div>
            </div>
        </>
    )
}

export default MainSection;